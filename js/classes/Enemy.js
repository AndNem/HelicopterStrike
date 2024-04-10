class Enemy extends Sprite {
  constructor(config) {
    super(config);

    this.position = {
      x: canvas.width,
      y: Math.random() * (CANVAS_HEIGHT - 48),
    };
    this.image.src = "images/enemy.png";
    this.frameMax = 8;

    this.isHitbox();
  }

  init() {
    super.update();
    this.isHitbox();

    this.position.x -= 3;
  }

  isHitbox() {
    this.hitBox = {
      position: { x: this.position.x + 26, y: this.position.y + 5 },
      width: 90,
      height: 42,
    };

    // context.fillStyle = "rgba(0,255,0,0.5)";
    // context.fillRect(
    //   this.hitBox.position.x,
    //   this.hitBox.position.y,
    //   this.hitBox.width,
    //   this.hitBox.height
    // );
  }
}
