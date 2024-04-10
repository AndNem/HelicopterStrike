function collision(item1, item2) {
  return (
    item1.position.y <= item2.position.y + item2.height &&
    item1.position.y + item1.height >= item2.position.y &&
    item1.position.x <= item2.position.x + item2.width &&
    item1.position.x + item1.width >= item2.position.x
  );
}

//  создаем облако и пушим его в массив облаков
function createCloud() {
  clouds.push(new Cloud({}));
}

//  создаем врага и пушим его в массив врагов
function createEnemy() {
  enemys.push(new Enemy({}));
}

//  создаем пули босса и пушим их в массив
function createBulletBoss() {
  bulletsBoss.push(
    new BulletBossOne({}),
    new BulletBossTwo({}),
    new BulletBossThree({}),
    new BulletBossFour({}),
    new BulletBossFive({})
  );
}

// спавн врагов, облаков, пуль босса
function spawnItems() {
  timer++;

  // спавн облаков
  if (timer % Math.ceil(Math.random() * 2000) === 0) createCloud();

  // спавн врагов
  if (!boss.bossStart) {
    if (timer % 60 === 0) createEnemy();
  }

  // спавн пуль босса
  if (boss.bossStart && !boss.dead) {
    if (timer % 80 === 0) createBulletBoss();
  }
}

// отрисовка  облаков, врага, пуль игрока, взрыва врага, пуль босса
function drawItem() {
  // отрисовка  облаков
  clouds.forEach((cloud) => {
    cloud.init();
  });

  // отрисовка врага
  enemys.forEach((enemy) => {
    enemy.init();
  });

  // отрисовка пуль игрока
  bulletsPlayer.forEach((bulletPlayer) => {
    bulletPlayer.update();
  });

  // отрисовка пуль босса
  bulletsBoss.forEach((bulletBoss) => {
    bulletBoss.init();
  });

  // отрисовка взрыва врага и удаление взрыва из масива
  bangs.forEach((bang, i) => {
    bang.init();

    if (bang.delete) {
      bangs.splice(i, 1);
    }
  });
}

// коллизия пули игрока и врага
function bulletPlayerOfEnemy() {
  bulletsPlayer.forEach((bulletPlayer, i) => {
    enemys.forEach((enemy, j) => {
      if (collision(bulletPlayer, enemy)) {
        // пушим взрыв в массив взрывов
        bangs.push(
          new Bang({
            position: {
              x: enemys[j].position.x,
              y: enemys[j].position.y - 25,
            },
          })
        );

        // удаление врага
        point++;
        enemys.splice(j, 1);
        bulletsPlayer[i].delete = true;
      }
    });

    // удаление пули
    if (bulletsPlayer[i].delete) {
      bulletsPlayer.splice(i, 1);
    }
  });
}

// коллизия игрока и врага
function playerOfEnemy() {
  enemys.forEach((enemy) => {
    if (collision(enemy.hitBox, player.hitBox)) {
      // пушим взрыв в массив взрывов
      if (!player.dead) {
        bangs.push(
          new Bang({
            position: {
              x: player.position.x,
              y: player.position.y - 25,
            },
          })
        );
      }

      player.dead = true;
    }
  });
}

// коллизия пуль игрока и босса
function buletPlayerOfBoss() {
  bulletsPlayer.forEach((bulletPlayer, i) => {
    if (collision(bulletPlayer, boss.hitBox)) {
      bulletsPlayer[i].delete = true;

      // пушим взрыв в массив взрывов
      bangs.push(
        new Bang({
          position: {
            x: bulletPlayer.position.x,
            y: bulletPlayer.position.y,
          },
          imageSrc: "images/bangBullet.png",
        })
      );

      // уменьшаем здоровье босса
      boss.life--;
    }
  });
}

// коллизия игрока и босса
function playerOfBoss() {
  if (collision(player.hitBox, boss.hitBox)) {
    // пушим взрыв в массив взрывов
    if (!player.dead) {
      bangs.push(
        new Bang({
          position: {
            x: player.position.x,
            y: player.position.y - 25,
          },
        })
      );
    }

    player.dead = true;
  }
}

// коллизия игрока и пуль босса
function playerOfBulletBoss() {
  bulletsBoss.forEach((bulletBoss) => {
    if (collision(bulletBoss, player.hitBox)) {
      // пушим взрыв в масив взрывов
      if (!player.dead) {
        bangs.push(
          new Bang({
            position: {
              x: player.position.x,
              y: player.position.y - 25,
            },
          })
        );
      }

      player.dead = true;
    }
  });
}

// удаление врага, облака, пули игрока за пределами канвас
function delleteItems() {
  // удаление облака
  clouds.forEach((cloud, i) => {
    if (cloud.position.x + cloud.width < 0) {
      clouds.splice(i, 1);
    }
  });

  // удаление врага
  enemys.forEach((enemy, i) => {
    if (enemy.position.x + enemy.width < 0) {
      enemys.splice(i, 1);
    }
  });

  // удаление пули игрока
  bulletsPlayer.forEach((bulletPlayer, i) => {
    if (bulletPlayer.position.x > canvas.width) {
      bulletsPlayer.splice(i, 1);
    }
  });
}
