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

- **Destination**: City or place to search hotels for (e.g., *Paris*).  
- **Check-in / Check-out Dates**: The dates of stay.  
- **Adults**: Number of adult guests.  
- **Rooms**: Total rooms required.  
- **Children**: Number of children (optional).  
- **Child Ages**: Ages of children, if applicable.  

---

## How to Use

1. **Step 1**: Click `Try it!`
2. **Step 2**: Enter the required information:
   - **Destination**: Enter your destination city (e.g., *New York*).
   - **Check-in / Check-out Dates**: Provide the dates.
   - **Guests & Rooms**: Specify the number of adults, children, and rooms.
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
