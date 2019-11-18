const barWidth = 20;
let lastBar = -1;

function preload() {
  img = loadImage('/images/logo_white.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, height, height, height);
  noStroke();
  background(height);
  imageMode(CENTER)
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
  image(img, width/2, height/2, img.width/2, img.height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
