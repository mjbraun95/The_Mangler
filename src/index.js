import Mangler from "/src/mangler";
import InputHandler from "/src/input";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);

// ctx.fillStyle = "#0f0";
// ctx.fillRect(200, 200, 50, 50);
// ctx.fillStyle = "#00f";
// ctx.fillRect(340, 200, 50, 50);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(200, 200, 100, 100);

let mangler = new mangler(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(mangler);

mangler.draw(ctx);

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  mangler.update(deltaTime);
  mangler.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();
