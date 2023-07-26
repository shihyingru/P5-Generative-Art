let xoff = 0;
let xincrement = 0.01;


function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
}

function draw() {
  // Black transparent background
  fill(0, 10);
  rect(0, 0, width, height);

  //Try random to compare with noise
  //Get a noise value based on xoff and scale it according to the window's width
  let r = random(xoff);
  let n = noise(xoff);
  //map : 將某個區間的數值對照到另一個數值區間中
  //n : 目前的區間數值為0~1, 對照成畫布寬度範圍 0~width(400)
  let x = map(r, 0, 1, 0, width);
  let y = map(n, 0, 1, 0, width);

  //With each cycle, increment xoff
  xoff += xincrement;

  //Draw the ellipse at the value produced by random
  fill(200);
  ellipse(x, height / 1.5, 64, 64);

  //Draw the ellipse at the value produced by perlin noise
  fill(255)
  ellipse(y, height / 3, 64, 64);
}