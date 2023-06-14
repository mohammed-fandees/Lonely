class Events {
  constructor() {
    this.bars = document.querySelectorAll(".progress-bar");
    this.section = document.querySelector(".skills");
    this.up = document.querySelector(".up");
    this.init();
  }

  init() {
    onscroll = (_) => {
      if (this.section.offsetTop - 320 <= scrollY) {
        this.bars.forEach((bar) => {
          bar.style.cssText = `width: ${bar.getAttribute(
            "aria-valuenow"
          )}% !important`;
        });
      }

      if (scrollY >= 300) this.up.style.cssText = "opacity: 1; visibility: visible;";
      else this.up.style.cssText = "opacity: 0; visibility: hidden;";
    };
  }
}

new Events();