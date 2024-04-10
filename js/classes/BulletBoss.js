class BulletBoss {
  constructor(config) {
    this.position = {
      x: boss.position.x + 40,
      y: boss.position.y + 75,
    };
    this.width = 10;
    this.height = 10;
  }

  draw() {
    context.fillStyle = "brown";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class BulletBossOne extends BulletBoss {
  constructor(config) {
    super(config);
  }

  init() {
    super.draw();

    this.position.x -= 5;
  }
}

class BulletBossTwo extends BulletBoss {
  constructor(config) {
    super(config);
  }

  init() {
    super.draw();

    this.position.x -= 5 * 0.7;
    this.position.y += 5 * 0.7;
  }
}

class BulletBossThree extends BulletBoss {
  constructor(config) {
    super(config);
  }

  init() {
    super.draw();

    this.position.x -= 5 * 0.7;
    this.position.y -= 5 * 0.7;
  }
}

class BulletBossFour extends BulletBoss {
  constructor(config) {
    super(config);
  }

  init() {
    super.draw();

    this.position.x -= 5 * 0.9;
    this.position.y -= 2;
  }
}
class BulletBossFive extends BulletBoss {
  constructor(config) {
    super(config);
  }

  init() {
    super.draw();

    this.position.x -= 5 * 0.9;
    this.position.y += 2;
  }
}
