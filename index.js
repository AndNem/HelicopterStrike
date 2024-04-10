const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const player = new Player({});
const boss = new Boss({});

function gameLoop() {
  requestAnimationFrame(gameLoop);

  context.fillStyle = "cadetblue";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // спавн врагов и облаков
  spawnItems();

  // отрисовка  облаков, врага, пуль игрока, взрыва врага
  drawItem();

  // коллизия пули игрока и врага
  bulletPlayerOfEnemy();

  // коллизия игрока и врага
  playerOfEnemy();

  boss.init();

  player.init();

  // коллизия пуль игрока и босса
  if (!boss.dead) buletPlayerOfBoss();

  // коллизия игрока и босса
  playerOfBoss();

  // коллизия игрока и пуль босса
  playerOfBulletBoss();

  // удаление врага, облака, пули игрока за пределами канвас
  delleteItems();
}

gameLoop();
