class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(1, -1);
    }

    update() {
        this.pos.add(this.vel);
        // this.pos.x = this.pos.x + random(-1, 1);
        // this.pos.y = this.pos.y + random(-1, 1);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 50);
        ellipse(this.pos.x, this.pos.y, 32);
        // point(this.pos.x, this.pos.y);
    }
}