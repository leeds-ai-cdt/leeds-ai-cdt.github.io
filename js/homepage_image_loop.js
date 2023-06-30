const photos = [
  '../images/xmas_2022_1.png',
  '../images/xmas_2021_1.png',
  '../images/CDT_cover.jfif',
  '../images/Cohort3Walk.jpg',
  '../images/Hiking.jpg',
  '../images/Kayaking1.jpg'
];

const photoContainer = document.getElementById('photo-container');
const currentPhoto = document.getElementById('current-photo');

let currentIndex = 0;

function displayNextPhoto() {
  currentPhoto.src = photos[currentIndex];
  currentIndex = (currentIndex + 1) % photos.length;
}

displayNextPhoto(); // Display the first photo immediately

setInterval(displayNextPhoto, 3000); // Change photo every 2 seconds (2000 milliseconds)
