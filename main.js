// * GLOBAL VARIABLES

// * CANVAS SETUP

let canvas = document.querySelector("#my-canvas");
ctx = canvas.getContext("2d");

// * DOM

let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");

// * game object

let game;

// * FUNCTIONS
const startGame = () => {
  //hide flash screen
  splashScreen.style.display = "none";

  // show canvas gameoverScreen

  canvas.style.display = "flex";
  // start the game

  // we will have a class for the game that when i click
  game = new Game();

  game.gameLoop();
};

const restartGame = () => {
  gameoverScreen.style.display = "none";
  canvas.style.display = "flex";
  // you need to create a new instance of the game
  game = new Game();
  // you might need to restart csome default variables
  game.gameLoop();
};

//* ADD EVENDT LISTENERS

restartBtn.addEventListener("click", restartGame);

startBtn.addEventListener("click", startGame);

canvas.addEventListener("click", () => {
  // here i wanna make the bird jump

  game.bird.birdJump();
});
