const barWidth = 20;
let lastBar = -1;

function preload() {
  img = loadImage('images/logo_white.png');
  montserrat = loadFont('fonts/Montserrat-Regular.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(height);
  imageMode(CENTER)
}

function draw() {
  colorMode(HSB, height, height, height);

  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
  image(img, width/2, height/2, img.width/2, img.height/2);

  colorMode(RGB);
  fill(255);
  textSize(22);
  textAlign(CENTER);
  textFont(montserrat);
  text('click to enter', width/2, (height/2)+(img.height/3));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
    window.open('home.html', '_self');
}