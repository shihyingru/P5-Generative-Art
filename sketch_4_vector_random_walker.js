
let walker;

function setup() {
    createCanvas(400, 400);
    walker = new Walker(width / 2, height / 2);
    background(0);
}

function draw() {
    background(0);
    walker.update();
    walker.show();
}