let blendActive = false;

let figur;
function preload() {
    figur = loadImage('assets/images/figur.svg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    blendMode(DIFFERENCE);
    background(250, 150, 123);
}

function draw() {

    // blendMode(DIFFERENCE);
    // push();
    // scale(0.3);
    // image(figur, windowWidth/2, windowHeight/2);
    // pop();



    // rect(100,100,200);
    // rect(500,500,200);
    // rect(800,200,200);


    if (blendActive) {
        blendMode(DIFFERENCE);
        fill(255, 123, 123);
        ellipse(mouseX, mouseY, 50, 50);
        blendMode(DIFFERENCE);
    } else {
        ;
    }


}

function mousePressed() {
    blendActive = true;
}

function mouseReleased() {
    blendActive = false;
}


