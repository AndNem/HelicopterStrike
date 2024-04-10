class Player extends Sprite {
  constructor(config) {
    super(config);

    this.image.src = "images/player.png";
    this.frameMax = 8;

    this.gravity = 0.05;
    this.velocity = { x: 0, y: 0 };
    this.attack = true;
    this.dead = false;

    this.keys = {
      a: false,
      d: false,
      w: false,
      s: false,
      space: false,
    };

    this.controll();
    this.isHitBox();
  }

  init() {
    if (!this.dead) {
      super.update();
      this.isHitBox();
      this.move();
      this.isAttack();
    }
  }

  isAttack() {
    if (this.keys.space && this.attack) {
      bulletsPlayer.push(new BulletPlayer());

      shotMp3.currentTime = 0;
      shotMp3.play();

      this.attack = false;
    }
  }

  move() {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;

    // границы канвас
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y = 0;
    }
    if (this.position.y + this.height > canvas.height) {
      this.position.y = canvas.height - this.height;
      this.velocity.y = 0;
    }
    if (this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x = 0;
    }
    if (this.position.x + this.width > canvas.width) {
      this.position.x = canvas.width - this.width;
      this.velocity.x = 0;
    }

    // управление вертолетом
    if (this.keys.d) {
      this.position.x += 5;
    }
    if (this.keys.a) {
      this.position.x -= 5;
    }
    if (this.keys.w) {
      this.velocity.y -= 0.15;
    }
    if (this.keys.s) {
      this.velocity.y += 0.1;
    }
  }

  isHitBox() {
    this.hitBox = {
      position: { x: this.position.x + 28, y: this.position.y + 5 },
      width: 90,
      height: 42,
    };

    // context.fillStyle = "rgba(255,0,0,0.5)";
    // context.fillRect(
    //   this.hitBox.position.x,
    //   this.hitBox.position.y,
    //   this.hitBox.width,
    //   this.hitBox.height
    // );
  }

  controll() {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        //   влево
        case 65:
          this.keys.a = true;
          break;
        //   вправо
        case 68:
          this.keys.d = true;
          break;
        //   вверх
        case 87:
          this.keys.w = true;
          break;
        //   вниз
        case 83:
          this.keys.s = true;
          break;
        // атака
        case 32:
          this.keys.space = true;
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        //   влево
        case 65:
          this.keys.a = false;
          break;
        //   вправо
        case 68:
          this.keys.d = false;
          break;
        //   вверх
        case 87:
          this.keys.w = false;
          break;
        //   вниз
        case 83:
          this.keys.s = false;
          break;
        // атака
        case 32:
          this.keys.space = false;
          this.attack = true;
          break;
      }
    });
  }
}
