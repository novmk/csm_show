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
  tint(255, 50);  
  let x1 = random(width);
  let y1 = random(height);
  let x2 = round(x1 + random(-80, 80));
  let y2 = round(y1 + random(-80, 80));

  set(x2, y2, get(x1, y1, 100, 100)); // x,y,obj
  set(x1, y1, get(x2, y2, 200, 200)); // x,y,obj

  updatePixels();
}