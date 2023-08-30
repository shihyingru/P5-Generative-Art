
let degreeArray = [];
let eclipseColors = ["#272829", "#61677A", "#D8D9DA", "#FFF6E0", "#27374D", "#526D82", "#9DB2BF", "#DDE6ED"];
let moonLightColors = ["#334257", "#476072", "#548CA8", "#EEEEEE"];

let t = 0;

let moonCanvas;

function setup() {
    createCanvas(400, 400);
    background(0);
    moonCanvas = createGraphics(400, 400);

    degreeArray[0] = HALF_PI;
    degreeArray[1] = QUARTER_PI;
}

function draw() {
    let noiseColorSeed = random(moonLightColors);
    let rColorSeed = unhex(noiseColorSeed.substring(1, 3));
    let gColorSeed = unhex(noiseColorSeed.substring(3, 5));
    let bColorSeed = unhex(noiseColorSeed.substring(5, 7));
    stroke(rColorSeed, gColorSeed, bColorSeed, 18);
    noFill();

    var x1 = width * noise(t + 15);
    var x2 = width * noise(t + 25);
    var x3 = width * noise(t + 35);
    var x4 = width * noise(t + 45);
    var y1 = height * noise(t + 55);
    var y2 = height * noise(t + 65);
    var y3 = height * noise(t + 75);
    var y4 = height * noise(t + 85);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    t += 0.005;

    //clear the background every 500 frames using mod(%) operator
    // if (frameCount % 500 == 0) {
    //     background(0);
    // }

    eclipseMoon();
    image(moonCanvas, 0, 0);
}

let eclipseCount = 0;
function eclipseMoon() {
    if (eclipseCount < 1) {
        moonCanvas.translate(100, 100);

        moonCanvas.noFill();
        moonCanvas.strokeWeight(1);

        //HALF_PI:90 / PI:180 / QUARTER_PI:45 / TWO_PI:360
        let startDegree = 0;
        let endDegree = random(degreeArray);
        let diameter = 0;

        for (let i = 0; i < 20; i++) {
            moonCanvas.stroke(random(eclipseColors));
            moonCanvas.strokeWeight(random(2));
            diameter = 200 - (i * 10);
            moonCanvas.arc(100, 100, diameter, diameter, startDegree, endDegree); //arc(x, y, w, h, start, stop, [mode], [detail])
            startDegree += 0.2;
            endDegree += 0.4;
        }

        startDegree = 180;
        for (let i = 0; i < 20; i++) {
            moonCanvas.stroke(random(eclipseColors));
            moonCanvas.strokeWeight(random(2));
            diameter = 220 - (i * 10);
            moonCanvas.arc(100, 100, diameter, diameter, startDegree, endDegree); 
            startDegree += 0.3;
            endDegree += 0.6;
        }
        eclipseCount++;
    }
}