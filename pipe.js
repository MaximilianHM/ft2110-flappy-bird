class Pipe {
  constructor(srcImage, yPos) {
    this.image = new Image();
    this.image.src = srcImage;
    this.width = 80;
    this.height = 250;
    this.x = canvas.width;
    this.y = yPos;
  }

  // methods

  drawPipe = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  pipeMove = () => {
    this.x -= 5;
  };
}
