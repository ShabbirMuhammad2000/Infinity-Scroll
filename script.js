
// Unsplash API
const count = 10
const apiKey = 'EJ4DZFLjD80SOwuN12lS-AVB2V6pOB_TMOGWfvYwGM0'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from Unsplash Api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos()