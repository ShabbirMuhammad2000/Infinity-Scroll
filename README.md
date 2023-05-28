## Infinity-Scroll
This is a web application that displays an infinite scroll of random images fetched from the Unsplash API. Users can also search for specific images based on their queries.

## Features

- Infinite scroll: As the user scrolls down the page, new images are dynamically loaded and appended to the existing image grid.
- Random images: The application fetches random images from the Unsplash API to provide a diverse selection of photos.
- Search functionality: Users can enter search queries to find specific images based on keywords.
- Responsive design: The website is designed to work seamlessly across different devices and screen sizes.

## Installation

#### 1. Clone the repository:

  git clone https://github.com/your-username/infinite-image-scroll.git

#### 2.Navigate to the project directory:

  cd Infinity-Scroll
  
 #### 3. Open index.html in your preferred web browser.

## Usage
Upon opening the website, a set of random images will be displayed.
Scroll down to trigger the infinite scroll functionality and load more images.
To search for specific images, enter a query in the search input field and press Enter or click the search button.
The images matching the search query will be displayed, and you can scroll to load more images related to the search.

## Configuration
To use your own Unsplash API credentials, follow these steps:

Sign up for an Unsplash developer account and create a new application to obtain an API key.

Open script.js and replace the apiKey variable with your own API key:

const apiKey = 'YOUR_API_KEY';

Save the changes and reload the website for the new API key to take effect.

## Acknowledgements
#### Unsplash - The API used to fetch random images.
