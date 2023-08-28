let blendActive = false;
let button;

let figur;
function preload() {
    figur = loadImage('assets/images/figur.svg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    blendMode(DIFFERENCE);
    background(1, 42, 54);
    noCursor();

    button = createButton('color Change');
    button.position(0, 0);
    button.mousePressed(changeBG);
}

function changeBG() {
    let val = random(255);
    background(val);
}

function draw() {

    // blendMode(DIFFERENCE);
    // push();
    // scale(0.3);
    // image(figur, windowWidth/2, windowHeight/2);
    // pop();


    if (blendActive) {
        blendMode(BLEND);
        fill(250, 150, 123);
        ellipse(mouseX, mouseY, 50, 50);
        blendMode(DIFFERENCE);
    } else {
        ;
    }

    //rect(100,100,200);
    // rect(500,500,200);
    // rect(800,200,200);
}

function mousePressed() {
    blendActive = true;
}

function mouseReleased() {
    blendActive = false;
}