// <!-- Add this script tag at the end of your HTML body -->
{/* <script> */}
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');

  // Buttons to navigate the carousel
  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Previous';
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';

  // Append buttons to the carousel container
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(prevBtn);
  carouselContainer.appendChild(nextBtn);

  // Counter to track the current image index
  let counter = 0;
  const slideWidth = carouselImages[0].clientWidth;

  // Set initial position of the slide
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

  // Handle next button click
  nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  });

  // Handle previous button click
  prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  });

  // Loop back to the first image when reaching the last one
  carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - 2;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
    if (carouselImages[counter].id === 'firstClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
  });
// </script>
