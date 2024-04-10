class Boss extends Sprite {
  constructor(config) {
    super(config);

    this.position = { x: CANVAS_WIDTH, y: 200 };
    this.image.src = "images/boss.png";
    this.frameMax = 8;

    this.checkPointX = 700;
    this.checkPointY = 600;

    this.life = 10;
    this.dead = false;
    this.bossStart = false;
    this.bossBang = true;

    this.direction = { x: -1, y: 1 };

    this.isHitBox();
  }

  init() {
    if (this.life === 0) {
      this.dead = true;
    }

    this.bang();

    if (point >= 10 && !this.dead) {
      super.update();

      if (this.bossStart) {
        this.isHitBox();
      }

      this.move();
    }
  }

  bang() {
    if (this.dead && this.bossBang) {
      bangs.push(
        new Bang({
          imageSrc: "images/bangBoss.png",
          position: { x: boss.position.x, y: boss.position.y },
        })
      );

      this.bossBang = false;
    }
  }

  move() {
    if (this.position.x <= this.checkPointX) {
      this.direction.x = -this.direction.x;
      this.bossStart = true;
    }

    if (this.bossStart && this.position.x + this.width >= 1366) {
      this.direction.x = -this.direction.x;
    }

    if (
      this.position.y <= 0 ||
      this.position.y + this.height >= this.checkPointY
    ) {
      this.direction.y = -this.direction.y;
    }

    if (this.bossStart) {
      this.position.y += 2 * this.direction.y;
    }

    this.position.x += 2 * this.direction.x;
  }

  isHitBox() {
    this.hitBox = {
      position: { x: this.position.x + 52, y: this.position.y + 10 },
      width: 190,
      height: 87,
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
