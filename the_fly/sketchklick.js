let xOff = 0.0;
let yOff = 10;
let amp = 300;
let fliege;
let body;
let fenster;
let viereck;

function preload() {
    fliege = loadImage('assets/images/fliege.svg');
    fenster = loadImage('assets/images/fenster.svg');
    viereck = loadImage('assets/images/viereck.svg');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(10, 140, 140);
    angleMode(DEGREES);
    noCursor();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}




function draw() {
    background(250, 150, 123);

    push();
    scale(2.2);
    image(viereck, 160, 60);
    pop();


    push();
    scale(0.55);
    image(fenster, 300, 50);
    pop();


    xOff = xOff + 0.04;
    yOff = yOff + 0.04;
    let newX = map(noise(xOff), 0, 1, -amp, amp);
    let newY = map(noise(yOff), 0, 1, -amp, amp);
    let x = mouseX + newX;
    let y = mouseY + newY;


    translate(x, y);
    rotate(map(noise(xOff)));
    scale(0.1, 0.1);
    image(fliege, 0, 0);


}