let currentImageIndex = 0;
const totalImages = 3; 


const showImage = (index) => {
  
  document.querySelectorAll('.slider-image').forEach(image => {
    image.style.display = 'none';
  });
}
