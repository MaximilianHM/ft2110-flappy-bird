class Bird {
  // properties
  constructor() {
    this.birdImage = new Image();
    this.birdImage.src = "./images/flappy.png";
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 6;
    this.y = canvas.height / 2;
    this.birdSpeed = 20;
  }

  // methods
  drawBird = () => {
    ctx.drawImage(this.birdImage, this.x, this.y, this.width, this.height);
  };

  birdGravity = () => {
    // posY ?
    this.y++;
  };

  birdJump = () => {
    this.y -= this.birdSpeed;
  };

  birdPipeCollision = (singlePipe) => {
    // singlePipe.x
    // singlePipe.y

    // check if bird collides with one pipe

    if (
      this.x < singlePipe.x + singlePipe.width &&
      this.x + this.width > singlePipe.x &&
      this.y < singlePipe.y + singlePipe.height &&
      this.height + this.y > singlePipe.y
    ) {
      //   console.log("collision happening!");
      // cause the game to end
      return true;

      // create boolean for the game to end, and trigger. Also check on requestAnimationFrame
    } else {
      return false;
    }
  };
}
