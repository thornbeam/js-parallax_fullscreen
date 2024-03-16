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
      this.imageContainer.style.top = "unset";
      this.imageContainer.style.bottom = -window.innerHeight * 0.1 + "px";

      window.addEventListener("scroll", () => {
        const elemTop = this.backgroundField.getBoundingClientRect().top;
        const elemBottom = this.backgroundField.getBoundingClientRect().bottom;
        const parallaxMargin = window.innerHeight * 0.1;

        this.imageContainer.style.top = "unset";
        this.imageContainer.style.bottom = -parallaxMargin + "px";

        if (
          elemTop < window.innerHeight + parallaxMargin &&
          elemBottom + window.innerHeight > window.innerHeight - parallaxMargin
        ) {
          this.imageContainer.style.zIndex = "-10";
          this.imageContainer.style.visibility = "visible";

          const visibleHeight = window.innerHeight + parallaxMargin - elemTop;
          this.imageContainer.style.transform =
            "translateY(-" + visibleHeight * 0.1 + "px)";
          this.imageContainer.style.height =
            "calc(" +
            (window.innerHeight - elemTop + parallaxMargin * 2) +
            "px)";
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
