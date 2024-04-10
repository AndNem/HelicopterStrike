class Sprite {
  constructor(config) {
    this.position = config.position || { x: 0, y: 0 };
    this.image = new Image();
    this.image.src = config.imageSrc;

    this.image.onload = () => {
      this.width = this.image.width / this.frameMax;
      this.height = this.image.height;
    };

    this.frameMax = config.frameMax || 1;
    this.frameCurrent = 0;
  }

  draw() {
    context.drawImage(
      this.image,
      this.frameCurrent * this.width,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();

    if (this.frameCurrent < this.frameMax - 1) {
      this.frameCurrent++;
    } else this.frameCurrent = 0;
  }
}
