class main {
  backgroundField: HTMLElement;
  imageContainer: HTMLElement;

  constructor(section: HTMLElement) {
    this.backgroundField = section.querySelector(
      ".background-field"
    ) as HTMLElement;
    this.imageContainer = section.querySelector(
      ".image-container"
    ) as HTMLElement;
  }

  fullscreen() {
    if (this.backgroundField && this.imageContainer) {
      const imageMargin = window.innerHeight + 0.1;

      this.imageContainer.style.top = "unset";
      this.imageContainer.style.bottom =
        -imageMargin - imageMargin * 0.1 + "px";

      window.addEventListener("scroll", () => {
        const elemTop = this.backgroundField.getBoundingClientRect().top;
        const elemBottom = this.backgroundField.getBoundingClientRect().bottom;

        // for resize, reload
        this.imageContainer.style.top = "unset";
        this.imageContainer.style.bottom =
          -imageMargin - imageMargin * 0.1 + "px";

        if (
          elemTop < window.innerHeight + imageMargin &&
          elemBottom + window.innerHeight > window.innerHeight - imageMargin
        ) {
          this.imageContainer.style.zIndex = "-10";
          this.imageContainer.style.visibility = "visible";

          const visibleHeight = window.innerHeight + imageMargin - elemTop;
          this.imageContainer.style.height =
            "calc(" + (visibleHeight + imageMargin) + "px)";
          this.imageContainer.style.transform =
            "translateY(-" + visibleHeight * 0.1 + "px)";
        } else {
          this.imageContainer.style.zIndex = "-15";
          this.imageContainer.style.visibility = "hidden";
        }
      });
    }
  }

  mobile() {
    if (this.imageContainer) {
      this.setStyle();
    }

    window.addEventListener("scroll", () => {
      this.setStyle();
    });
  }

  setStyle() {
    this.imageContainer.style.bottom = "unset";
    this.imageContainer.style.top = "0";
    this.imageContainer.style.height = "auto";
    this.imageContainer.style.zIndex = "-10";
    this.imageContainer.style.transform = "none";
  }
}
