const imageContainer = document.getElementById('image-container')
const laoder = document.getElementById('loader')


let ready = false
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = []
let initialLoad = true


// Unsplash API
const count = 5
const apiKey = 'EJ4DZFLjD80SOwuN12lS-AVB2V6pOB_TMOGWfvYwGM0'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

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
    count = 30
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
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos()
  } catch (error) {
    // Catch Error Here
  }
}

// Search Photos
async function searchPhotos() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}')
    photosArray = await response.json()
    imageContainer.innerHTML = '' // clears previous images
    displayPhotos()
  }
  catch(error) {
    console.log('Error getting photos')
  }
}

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready ) {
    ready = false
    getPhotos()
  }
})

// On Load
getPhotos()


