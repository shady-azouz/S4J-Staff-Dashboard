let imageIndex = 0;
const images = [];
const imageElement = document.getElementById('carousel-image');
let intervalId;

function loadImages(folder) {
    for (let i = 1; i <= 10; i++) { // Assuming you have 10 images (adjust as needed)
        images.push(`${folder}${i}.png`);
    }
    showImage(imageIndex);
    startInterval(); // Add this line to start the interval
}

function showImage(index) {
    imageElement.src = images[index];
}

function prevImage() {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    showImage(imageIndex);
    resetInterval();
}

function nextImage() {
    imageIndex = (imageIndex + 1) % images.length;
    showImage(imageIndex);
    resetInterval();
}

function startInterval() {
    intervalId = setInterval(nextImage, 5000); // Move to the next image every 5 seconds
}

function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}

loadImages('assets/2023/');