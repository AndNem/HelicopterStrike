class BulletPlayer {
  constructor(config) {
    this.position = {
      x: player.position.x + 120,
      y: player.position.y + 35,
    };
    this.width = 5;
    this.height = 5;
  }

  draw() {
    context.fillStyle = "brown";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();

    this.position.x += 15;
  }
}
