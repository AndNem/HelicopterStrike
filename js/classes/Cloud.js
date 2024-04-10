class Cloud extends Sprite {
  constructor(config) {
    super(config);

    this.position = {
      x: canvas.width,
      y: Math.random() * 400,
    };

    this.image.src = "images/cloud.png";
  }

  init() {
    super.update();

    this.position.x -= 1;
  }
}
