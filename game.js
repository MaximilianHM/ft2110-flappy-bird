/*

class Game {
  // properties
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.bird = new Bird();
    this.pipeArr = [new Pipe("./images/obstacle_top.png", 0)];
    this.gapBetweenPipes = 100;
    this.pipeAppearingDistance = 400;
  }

  // methods

  spawnPipes = () => {
    // console.log("pipe spawn");
    //how do we add new pipe to
    // setIntervals will work

    //if the last element of the array is in position 400 than add the new pipe
    let lastIndex = this.pipeArr.length - 1;
    let lastPipe = this.pipeArr[lastIndex];
    if (lastPipe.x === this.pipeAppearingDistance) {
      //how we add a new pipe

      let randomPosYTop = (Math.random() * -canvas.height) / 2;
      let pipeTop = this.pipeArr.push(
        new Pipe("./images/obstacle_top.png", randomPosYTop)
      );
      this.pipeArr.push(pipeTop);

      // add the bottom pipe

      let randomPosYBottom =
        randomPosYTop + pipeTop.height + this.gapBetweenPipes;
      let pipeBottom = new Pipe(
        "./images/obstacle_bottom.png",
        randomPosYBottom
      );
      this.pipeArr.push(pipeBottom);
    }
  };

  gameLoop = () => {
    // console.log("game runing");

    // * 1.CLEAR THE CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // * 2.MOVEMENT AND CHANGES ON ELEMENTS
    this.bird.birdGravity();

    // this.pipeArr.pipeMoved();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMove();
    });

    this.spawnPipes();

    // * 3.DRAWING THE ELEMENTS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.bird.drawBird();
    // this.pipeArr.drawPipe();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    // * 4.ANIMATION FRAMA AND GAME LOGIC CHANGES
    requestAnimationFrame(this.gameLoop);
  };
}


*/

class Game {
  // properties
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.bird = new Bird();
    this.pipeArr = [new Pipe("./images/obstacle_top.png", -100)];
    this.gapBetweenPipes = 100;
    this.pipeAppearingDistance = 400;
    this.isGameover = false;
  }

  // methods
  restart = () => {};

  gameover = () => {
    // stop the game
    this.isGameover = true;
    //hide canvas
    canvas.style.display = "none";
    // show restart startGame
    gameoverScreen.style.display = "flex";
  };

  spawnPipes = () => {
    // console.log("adding a pipe")
    // when do we add a new pipe
    // setIntervals will work but there is a better implementation.

    // if the last element of the array is in position 400 then...
    let lastIndex = this.pipeArr.length - 1;
    let lastPipe = this.pipeArr[lastIndex];
    if (lastPipe.x === this.pipeAppearingDistance) {
      // how to we add a new pipe

      // get a random random number to assign to yPos
      let randomPosYTop = (Math.random() * -canvas.height) / 3; // 0 - 1
      // Math.random * range

      let pipeTop = new Pipe("./images/obstacle_top.png", randomPosYTop);
      this.pipeArr.push(pipeTop);

      // add the bottom pipe
      let randomPosYBottom =
        randomPosYTop + pipeTop.height + this.gapBetweenPipes;
      let PipeBottom = new Pipe(
        "./images/obstacle_bottom.png",
        randomPosYBottom
      );
      this.pipeArr.push(PipeBottom);
    }
  };

  gameLoop = () => {
    // console.log("Yay! game running!")

    // * 1. CLEAR THE CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // * 2. MOVEMENT AND CHANGES ON ELEMENTS
    this.bird.birdGravity();
    // this.pipeArr.pipeMove();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMove();
    });
    this.spawnPipes();
    this.pipeArr.forEach((eachPipe) => {
      this.bird.birdPipeCollision(eachPipe);
      // true or false
      if (this.bird.birdPipeCollision(eachPipe)) {
        this.gameover();
      }
      //   this.isGameover = this.bird.birdPipeCollision(eachPipe);
    });

    // * 3. DRAWING THE ELEMENTS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.bird.drawBird();
    // this.pipeArr.drawPipe();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    // * 4. ANIMATION FRAME AND GAME LOGIC CHANGES
    if (!this.isGameover) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
