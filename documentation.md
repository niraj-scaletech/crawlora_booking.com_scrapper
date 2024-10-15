# Booking.com Hotel Scraper

## Overview

The **Booking.com Hotel Scraper** is an automated tool for extracting hotel data directly from [Booking.com](https://www.booking.com). It gathers comprehensive hotel information, including titles, locations, prices, reviews, and more. This tool is ideal for travel planning, building comparison tools, or collecting data for analysis and research.

---

## Extracted Data

| **Field**             | **Description**                                |
|-----------------------|------------------------------------------------|
| **Title**             | Name of the hotel                              |
| **Location**          | Address or area of the hotel                   |
| **Link**              | Direct link to the hotel’s page                |
| **Distance**          | Distance from key location (e.g., city center) |
| **Price**             | Price per night or stay                        |
| **Image**             | URL of the main hotel image                    |
| **Stars**             | Hotel's star rating                            |
| **ReviewScore**       | Numeric review score (e.g., 8.5)               |
| **ReviewDescription** | Summary of reviews (e.g., "Very Good")         |
| **NumberOfReviews**   | Total number of user reviews                   |
| **ResultNumber**      | Hotel's index in the result list               |

---
## Input Parameters

- **Listing Page URLs**:  
  A textarea input for entering one or more listing page URLs from Booking.com. This field is required.  
  *Example*:  
  `https://www.booking.com/searchresults.en-gb.html?ss=Somnath%2C+Gujarat%2C+India&ssne=Goa&ssne_untouched=Goa&label=gen173bo-1DEg1mbGlnaHRzX2luZGV4KIICQgVpbmRleEgJWANobIgBAZgBCbgBGcgBDNgBA-gBAfgBBogCAZgCAqgCA7gC9YS4uAbAAgHSAiRkZmJlNDkyNS0wZDg1LTQ0YzQtYmM5ZS1iMjhkMDc5YTM5MTfYAgTgAgE&sid=e115526b6211f0a1523cfe2f127cb52d&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=-2111788&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=ab30290141720192&ac_meta=GhBhYjMwMjkwMTQxNzIwMTkyIAEoATICZW46A3NvbUAASgBQAA%3D%3D&checkin=2024-10-16&checkout=2024-10-19&group_adults=2&no_rooms=1&group_children=0`

---

## How to Use

1. **Step 1**: Click `Try it!`
2. **Step 2**: Enter the required information:
   - **Listing Page URLs**: Enter one or more listing page URLs from Booking.com . 
   Each URL should be on a new line
3. **Step 3**: Click the `Submit` button to run the task and extract hotel data.

## Sample Data Preview


| **Title**        | **Location**       | **Price** | **Stars** | **ReviewScore**  | **ReviewDescription**  | **Distance**      | **NumberOfReviews**  | **Link**  | **Image** | **ResultNumber** |
|------------------|--------------------|-----------|-----------|------------------|------------------------|-------------------|----------------------|-----------|-----------|------------------|
| Martins Comfort  | Betalbatim         | ₹ 15,272  | 4         | 8.6              | Fabulous               | No Distance       | 1,024                | [View](#) | [View](#) | 1                |
| Skyline Inn      | Antarim Resort     | ₹ 14,400  | 3         | 7.8              | Good                   | 200 m from center | 850                  | [View](#) | [View](#) | 2                |
| Sol De Goa       | Nerul              | ₹ 14,400  | 5         | 9.2              | Excellent              | No Distance       | 3,200                | [View](#) | [View](#) | 3                |

## Notes

Please contact our support team if you have any questions about this template or if you would like to have a customized version.

## Is Scraping Booking.com site Legal?

Web scraping is generally legal if you scrape publicly available non-personal data. However, the legality of what you do with the data is another question. Documentation, help articles, or blogs are typically protected by copyright, so you cannot republish the content without the owner's permission. Learn more about the legality of web scraping in this [article](#). If you're not sure, please seek professional legal advice.
