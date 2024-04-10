const CANVAS_WIDTH = 1366;
const CANVAS_HEIGHT = 768;

const bulletsPlayer = []; // массив пуль игрока
const bulletsBoss = []; // массив пуль босса
const clouds = []; // массив облаков
const bangs = []; // массив взрывов
const enemys = []; // массив врагов

let timer = 0; // счетчик для спавна
let point = 0; // счетчик убитых врагов
