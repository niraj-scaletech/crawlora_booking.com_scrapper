import { apikey, sequence_id, showBrowser } from "./config";
import { browser } from "@crawlora/browser";

export default async function ({
  destination,
  checkin,
  checkout,
  adults,
  rooms,
  children,
  childAges
}: {
  destination: string,
  checkin: string,
  checkout: string,
  adults: number,
  rooms: number,
  children?: number,
  childAges?: string[]
}) {
  await browser(async ({ page, wait, output, debug }) => {
    try {
      const url = buildBookingUrl({ destination, checkin, checkout, adults, rooms, children, childAges });

      debug(`Navigating to: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle2' });

      // handle popup
      try {
        await page.waitForSelector('.c0528ecc22', { timeout: 5000 });
        await page.keyboard.press('Escape');
      } catch (error) {
        debug('Popup did not appear, continuing without pressing Escape.');
      }

      debug("Loading all search results...");
      await loadAllResults(page, wait, debug);
      debug("Data loaded. Extracting hotel data...");

      // Extract hotel data
      const hotelData = await page.evaluate(extractHotelData);

      await submitHotelData(hotelData, output, debug);

      debug("Data submitted successfully.");
      await wait(5)
    } catch (error) {
      debug(`Error encountered: ${(error as Error).message}`);
      throw error;
    }
  }, { showBrowser, apikey })

}


export function buildBookingUrl({ destination, checkin, checkout, adults, rooms, children, childAges }: { destination: string, checkin: string, checkout: string, adults: number, rooms: number, children?: number, childAges?: string[] }): string {
  const childAgesQuery = childAges?.map(age => `&age=${age}`).join('');

  return `https://www.booking.com/searchresults.en-gb.html?ss=${encodeURIComponent(destination)}&checkin=${checkin}&checkout=${checkout}&group_adults=${adults}&group_children=${children}${childAgesQuery}&no_rooms=${rooms}&lang=en-gb&src=index`;
}

// Function to load all results by handling both scrolling and "Load More" button
async function loadAllResults(page: any, wait: any, debug: debug.Debugger) {
  let previousHeight = 0;

  while (true) {
    const loadMoreButton = await page.$('button.a83ed08757.c21c56c305.bf0537ecb5.f671049264.af7297d90d.c0e0affd09');

    if (loadMoreButton) {
      debug('Clicking "Load more results" button...');
      await loadMoreButton.click();
      await wait(3);
    } else {
      debug('Scrolling to load more data...');
      previousHeight = await page.evaluate(() => document.body.scrollHeight);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await wait(3);

      const newHeight = await page.evaluate(() => document.body.scrollHeight);
      if (newHeight === previousHeight) {
        debug('No more content to load.');
        break;
      }
    }
  }
}

export function extractHotelData() {
  const hotels = Array.from(document.querySelectorAll('div[data-testid="property-card"]'));

  return hotels.map((hotel) => {
    const title = hotel.querySelector('div[data-testid="title"]')?.textContent?.trim() || 'No Title';
    const location = hotel.querySelector('span[data-testid="address"]')?.textContent?.trim() || 'No Location';
    const link = hotel.querySelectorAll('a')[2]?.href.trim() || 'No Link';
    const distance = hotel.querySelector('span[data-testid="distance"]')?.textContent?.trim() || 'No Distance';
    const price = hotel.querySelector('span[data-testid="price-and-discounted-price"]')?.textContent?.trim() || 'No Price';
    const image = (hotel.querySelector('img[data-testid="image"]') as HTMLImageElement)?.src?.trim() || 'No Image'
    const stars = hotel.querySelector('div[data-testid="rating-stars"]')?.querySelectorAll('svg').length || 'No Stars';

    // Extract review score details
    const reviewScoreElement = hotel.querySelector('div[data-testid="review-score"]');
    const reviewScore = reviewScoreElement?.querySelector('.a3b8729ab1')?.childNodes[1].textContent?.trim() || 'No Score';
    const reviewDescription = reviewScoreElement?.querySelector('.e6208ee469')?.textContent?.trim() || 'No Review Description';
    const numberOfReviews = reviewScoreElement?.querySelector('.f45d8e4c32')?.textContent?.trim() || 'No Reviews';

    return {
      title, location, link, distance, price, image, stars, reviewScore, reviewDescription, numberOfReviews,
    }
  })
}

// Submit extracted hotel data to the output
async function submitHotelData(hotelData: Record<string, string | number>[], output: any, debug: debug.Debugger) {
  await Promise.all(
    hotelData.map(async (data, index) => {
      await output.create({
        sequence_id,
        sequence_output: {
          Title: data.title,
          NumberOfReviews: data.numberOfReviews,
          Location: data.location,
          Link: data.link,
          Distance: data.distance,
          Price: data.price,
          Image: data.image,
          Stars: data.stars,
          ReviewScore: data.reviewScore,
          ReviewDescription: data.reviewDescription,
          ResultNumber: index + 1,
        },
      });
    })
  );
  debug("Hotel data submitted.");
}
