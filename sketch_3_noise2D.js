
function setup() {
  createCanvas(400, 400);
  stroke(255);
  noFill();
  perlinNoise();
}

function perlinNoise() {
  //Tell p5 we will work with pixels
  loadPixels();
  let xoff = 0.0;

  //Updating pixels with perlin noise
  for (let x = 0; x < width; x++) {
    let yoff = 0.0;

    for (let y = 0; y < height; y++) {
      //Calculating brightness value for noise
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      set(x, y, floor(bright));
      yoff += 0.01; //Incrementing y-offset perlins noise
    }
    xoff += 0.01; // Incrementing x-offset perlins noise
  }

  updatePixels();
}

// let noiseVal;
// let noiseScale = 0.02;
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(0);
//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width / 2; x++) {
//       noiseDetail(2, 0.2);
//       noiseVal = noise((mouseX + x) * noiseScale, (mouseY + y) * noiseScale);
//       stroke(noiseVal * 255);
//       point(x, y);
//       noiseDetail(8, 0.65);
//       noiseVal = noise(
//         (mouseX + x + width / 2) * noiseScale,
//         (mouseY + y) * noiseScale
//       );
//       stroke(noiseVal * 255);
//       point(x + width / 2, y);
//     }
//   }
//   describe(`2 vertical grey smokey patterns affected by
//      mouse x-position and noise.`);
// }