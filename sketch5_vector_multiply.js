
let positionRatio = random(2, 5);
let multX = random(10, 50);
let multY = random(50, 70);

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    translate(width / 2, height / 2);

    let v = p5.Vector.random2D();
    v.mult(random(random(40, 50), random(50, 100)));

    strokeWeight(4);
    stroke(random(0, 255), random(0, 255), random(0, 255), 50);
    line(0, 0, v.x, v.y);
}
