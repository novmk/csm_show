function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(16);
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
  let xr1 = round(x1 + random(-80, 80));
  let yr1 = round(y1 + random(-80, 80));
  let x2 = random(width);
  let y2 = random(height);
  let xr2 = round(x2 + random(-100, 100));
  let yr2 = round(y2 + random(-100, 100));


  set(xr1, yr1, get(x1, y1, 100, 100)); // x,y,obj
  set(xr1, yr2, get(x2, y2, 200, 200)); // x,y,obj

  updatePixels();
}