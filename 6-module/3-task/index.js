import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.curNumberOfImage = 1;
    this.slides = slides;
    this.elem = this.render();
    this.elem.addEventListener("click", this.onClick.bind(this));
  }

  render() {
    let html = 
    `<div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left" style="display: none;">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">`;

    for( let slide of this.slides){
      html += 
        `<div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${(slide.price).toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`
    }
    html += `</div></div>`;
    return createElement(html);
  }

  addToCart(target){
    console.log("id= " + target.closest('.carousel__slide').dataset.id);
    target.dispatchEvent (
      new CustomEvent("product-add", 
      { // имя события должно быть именно "product-add"
        detail: target.closest('.carousel__slide').dataset.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true, // это событие всплывает - это понадобится в дальнейшем
      }));
  }

  next() {
    let shift = document.querySelector(".carousel").offsetWidth;
    let elemArrowRight = document.querySelector(".carousel__arrow_right");
    let elemArrowLeft = document.querySelector(".carousel__arrow_left");
    let elemCarouselInner = document.querySelector(".carousel__inner");

    if ( this.curNumberOfImage < this.slides.length ) {
      elemCarouselInner.style.transform = 'translateX(-'+ (shift * this.curNumberOfImage) +'px)';
      console.log('translateX(-'+ shift * this.curNumberOfImage +'px)');
      this.curNumberOfImage++;
      if ( this.curNumberOfImage === 4 ) {
        elemArrowRight.style.display = 'none';
      }
    }
    if ( this.curNumberOfImage > 1 ) {
      elemArrowLeft.style.display = '';
    }
  }

  prev() {
    let shift = document.querySelector(".carousel").offsetWidth;
    let elemArrowRight = document.querySelector(".carousel__arrow_right");
    let elemArrowLeft = document.querySelector(".carousel__arrow_left");
    let elemCarouselInner = document.querySelector(".carousel__inner");

    if ( this.curNumberOfImage > 1 ) {
      this.curNumberOfImage--;
      elemCarouselInner.style.transform = 'translateX(-'+ (shift * (this.curNumberOfImage-1)) +'px)';
      //console.log('translateX(-'+ shift * (this.curNumberOfImage-1) +'px)');
      if ( this.curNumberOfImage === 1 ) {
        elemArrowLeft.style.display = 'none';
      }
    }
    if ( this.curNumberOfImage < this.slides.length ) {
      elemArrowRight.style.display = '';
    }
  }

  onClick({target}) {
    if (target.closest('.carousel__arrow_right')) {
      this.next();
    }

    if (target.closest('.carousel__arrow_left')) {
      this.prev();
    }

    if (target.closest('.carousel__button')) {
      this.addToCart(target);
    }
  };
}
