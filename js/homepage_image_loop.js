const photos = [
  '../images/xmas_2022_1',
  '../images/xmas_2021_1',
  '../images/CDT_cover.jfif'
];

const photoContainer = document.getElementById('photo-container');
const currentPhoto = document.getElementById('current-photo');

let currentIndex = 0;

function displayNextPhoto() {
  currentPhoto.src = photos[currentIndex];
  currentIndex = (currentIndex + 1) % photos.length;
}

displayNextPhoto(); // Display the first photo immediately

setInterval(displayNextPhoto, 2000); // Change photo every 2 seconds (2000 milliseconds)
