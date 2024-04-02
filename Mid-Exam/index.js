
let currentImageIndex = 0;
const totalImages = 3; 


const showImage = (index) => {
  
  document.querySelectorAll('.slider-image').forEach(image => {
    image.style.display = 'none';
  });

  
  const images = document.querySelectorAll('.slider-image');
  images[index].style.display = 'block';

  
  document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.classList.remove('active');
  });
  document.querySelector(`#thumbnail-${index}`).classList.add('active');
};


document.getElementById('next-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
});


document.getElementById('prev-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
});


showImage(currentImageIndex);