const imageArray = [
    "image/img.1.jpg",
    "image/img.2.jpg",
    "image/img.3.jpg",
    "image/img.4.jpg",
    "image/img.5.jpg",
    "image/img.6.jpg",
    "image/img.7.jpg",
    "image/img.8.jpg"
]
let imageIndex = 0
const imageSlide = document.getElementById('image-elements')
setInterval(() => {
    if (imageIndex >= imageArray.length) {
        imageIndex = 0
    }
    const imageUrl = imageArray[imageIndex]
    imageSlide.setAttribute('src', imageUrl)
    imageIndex++
}, 2000)