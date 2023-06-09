function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(0);
  scale(-1, 1);
  image(capture, -width, 0, windowWidth, windowHeight);
  filter(GRAY);
  tint(255, 80);  
}