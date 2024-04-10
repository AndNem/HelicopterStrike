class Bang extends Sprite {
  constructor(config) {
    super(config);

    this.image.src = config.imageSrc || "images/bang.png";
    this.frameMax = 10;
    this.delete = false;
  }

  init() {
    super.update();

    // воспроизведение звука взрыва
    bangMp3.currentTime = 0;
    bangMp3.play();

    if (this.frameCurrent === 9) {
      this.delete = true;
    }
  }
}
