const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]'); // Assuming there's a single overlay element

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target;
    let targetEl = document.querySelector(`#${currentId}`);

    const closeData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };

    triggerOpen[i].addEventListener('click', function() {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', closeData);
    overlay.addEventListener('click', closeData);
}

const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active'): null);
    if (this.closest('.has-child').classList != 'active') {
         this.closest('.has-child').classList.toggle('active')
    }
}))



const sorter = document.querySelector('.sort-list');
if (sorter) {
  const sortLis = sorter.querySelectorAll('li'); // Changed to querySelectorAll to get all li elements
  sorter.querySelector('.opt-trigger').addEventListener('click', function() {
    sorter.querySelector('ul').classList.toggle('show');
  });
  
  sortLis.forEach((item) => item.addEventListener('click', function() {
    sortLis.forEach((li) => li !== this ? li.classList.remove('active') : null);

    this.classList.add('active');
    sorter.querySelector('.opt-trigger span.value').textContent = this.textContent; // Updates the opt-trigger with the selected option
    sorter.querySelector('ul').classList.toggle('show')
  }));
}

const triggers = document.querySelectorAll('.tabbed-trigger'),
    content = document.querySelectorAll('.tabbed > div');

triggers.forEach((btn) => {
  btn.addEventListener('click', function() {
    let dataTarget = this.dataset.id,
        body = document.querySelector(`#${dataTarget}`);

    // Remove 'active' class from all triggers and contents
    triggers.forEach((b) => b.parentNode.classList.remove('active'));
    content.forEach((s) => s.classList.remove('active'));

    // Add 'active' class to the clicked trigger and the corresponding content
    this.parentNode.classList.add('active');
    body.classList.add('active');
  });
});








const swiper = new Swiper('.sliderbox', {

    loop: true,
    effect: 'fade',
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });


  const carousel = new Swiper('.carouselbox', {

    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
  
    // If we need pagination
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      481: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        centeredSlides: false,
      },
      640: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        centeredSlides: false,
      }
    }
  
  });

  const thumbImage = new Swiper('.thumbnail-image', {

    //loop: true,
    direction: 'vertical',
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  
  });
  const mainImage = new Swiper('.main-image', {
    loop: true,
    autoHeight: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    thumbs: {
      swiper: thumbImage,
    },
  });
  