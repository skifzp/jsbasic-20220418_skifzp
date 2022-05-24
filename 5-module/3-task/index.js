function initCarousel() {
  class Menu {
    shift = 0;
    constructor(elem) {
      this._elem = elem;
      this.curNumberOfImage = 1;
      this.elemArrowRight = elem.querySelector(".carousel__arrow_right");
      this.elemArrowLeft = elem.querySelector(".carousel__arrow_left");
      this.elemArrowLeft.style.display = 'none';
      this.elemCarouselInner = elem.querySelector(".carousel__inner");
      elem.onclick = this.onClick.bind(this);
    };

    right() {
      if ( this.curNumberOfImage < 4 ) {
        this.elemCarouselInner.style.transform = 'translateX(-'+ this.shift * this.curNumberOfImage +'px)';
        console.log('translateX(-'+ this.shift * this.curNumberOfImage +'px)');
        this.curNumberOfImage++;
        if ( this.curNumberOfImage === 4 ) {
          this.elemArrowRight.style.display = 'none';
        }
      }
      if ( this.curNumberOfImage > 1 ) {
        this.elemArrowLeft.style.display = '';
      }
    };

    left() {
      if ( this.curNumberOfImage > 1 ) {
        this.curNumberOfImage--;
        this.elemCarouselInner.style.transform = 'translateX(-'+ this.shift * (this.curNumberOfImage-1) +'px)';
        console.log('translateX(-'+ this.shift * (this.curNumberOfImage-1) +'px)');
        if ( this.curNumberOfImage === 1 ) {
          this.elemArrowLeft.style.display = 'none';
        }
      }
      if ( this.curNumberOfImage < 4 ) {
        this.elemArrowRight.style.display = '';
      }
    };

    onClick(event) {
      let elemClassName = event.target.parentElement.className;
      this.shift = this.elemCarouselInner.offsetWidth;
      if (elemClassName.includes("carousel__arrow_right")) {
        this["right"]();
      } else if (elemClassName.includes("carousel__arrow_left")) {
        this["left"]();
      }
    };
  }

  new Menu(document.querySelector(".carousel"));
}
