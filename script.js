const imageContainer = document.getElementById('image-container')
const laoder = document.getElementById('loader')


let ready = false
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = []
let initialLoad = true
let query = ''


// Unsplash API
let count = 5
const apiKey = 'EJ4DZFLjD80SOwuN12lS-AVB2V6pOB_TMOGWfvYwGM0'
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Check if all images were laoded
function imageLoaded() {
  imagesLoaded++
  console.log(imagesLoaded)
  if (imagesLoaded === totalImages) {
    ready = true
    laoder.hidden = true
    initialLoad = false
    count = 5
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
  }
}


// Create Elements For Links & Photos
function displayPhotos() {
  imagesLoaded = 0
  totalImages = photosArray.length
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      taget: '_blank',
    });
    // Create image for photo
    const img = document.createElement('img')
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Event Listener, check when each is finished loading
    img.addEventListener('load', imageLoaded)
    // Put image inside anchor, then put both inside imageContainer Element
    item.appendChild(img)
    imageContainer.appendChild(item)
  })
}


// Get photos from Unsplash Api
async function getPhotos() {
  try {
    loader.hidden = false;
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos()
  } catch (error) {
    console.log('Error getting photos:', error)
  }
}

// Search Photos
async function searchPhotos() {
  try {
    loader.hidden = false;
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}`
    );
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log('Error getting photos:', error);
  }
}

function performSearch (searchQuery) {
  query = searchQuery.trim()
  imageContainer.innerHTML = ''
  searchPhotos()
}

const searchButton = document.getElementById("search-button")
searchButton.addEventListener('click', (event) => {
  event.preventDefault()
  const searchInput = document.getElementById("search-input")
  const query = searchInput.value.trim()
  if(query !== '') {
    performSearch(query)
  } else {
    query = ''
    getPhotos()
  }
})

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100 &&
    ready
  ) {
    ready = false;
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    searchPhotos();
  }
});

// On Load
getPhotos()

