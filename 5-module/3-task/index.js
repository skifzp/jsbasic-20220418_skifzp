function initCarousel() {
    let curNumberOfImage = 1;
    let slidesAmount = 4;
    let elem = document.querySelector('[data-carousel-holder]');
    let shift = 0;
  
    let carouselInnerElem = elem.querySelector('.carousel__inner');
    let carouselArrowRight = elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = elem.querySelector('.carousel__arrow_left');
    carouselArrowLeft.style.display = 'none';
  
    let next = function(){
      shift = carouselInnerElem.offsetWidth;
      if ( curNumberOfImage < slidesAmount ) {
        carouselInnerElem.style.transform = 'translateX(-'+ (shift * curNumberOfImage) +'px)';
        //console.log('translateX(-'+ ( shift * curNumberOfImage )+'px)');
        curNumberOfImage++;
        if ( curNumberOfImage === 4 ) {
          carouselArrowRight.style.display = 'none';
        }
      }
      if ( curNumberOfImage > 1 ) {
        carouselArrowLeft.style.display = '';
      }
    }

    let prev = function(){
      shift = carouselInnerElem.offsetWidth;
      if ( curNumberOfImage > 1 ) {
        curNumberOfImage--;
        carouselInnerElem.style.transform = 'translateX(-'+ shift * (curNumberOfImage-1) +'px)';
        //console.log('translateX(-'+ shift * (curNumberOfImage-1) +'px)');
        if ( curNumberOfImage === 1 ) {
          carouselArrowLeft.style.display = 'none';
        }
      }
      if ( curNumberOfImage < 4 ) {
        carouselArrowRight.style.display = '';
      }
    };

    elem.onclick = ({target}) => {
      if (target.closest('.carousel__arrow_right')) {
        next();
      }
  
      if (target.closest('.carousel__arrow_left')) {
        prev();
      }
    };
  }