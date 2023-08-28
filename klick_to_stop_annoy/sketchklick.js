let xOff = 0.0;
let yOff = 10;
let amp = 300;
let fliege;
function preload() {
  fliege = loadImage('assets/images/fliege.svg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(252, 236, 173);

//let a = 10;
    xOff = xOff + 0.02;
    yOff = yOff + 0.02;
    let newX=map(noise(xOff), 0, 1, -amp, amp);
    let newY=map(noise(yOff), 0, 1, -amp, amp);
    let x = mouseX + newX;
    let y = mouseY + newY;




   // circle(x, y, 250);
   translate(x, y);
   rotate(map(noise(xOff)));
   scale(0.09,0.09);
image(fliege, 0, 0);



}



// let xOffsetFromCursor = mouseX - width / 2;
// let yOffsetFromCursor = mouseY - height / 2;

// let x = width / 2 - xOffsetFromCursor + xOff - squareSize / 2;
// let y = height / 2 - yOffsetFromCursor + yOff - squareSize / 2;



// let inc = TWO_PI / 25.0;
//for (let i = 0; i < 25; i++) {
//    circle(i * 5, mouseY, i * 3, 50 + sin(a) * 10);
//    a = a + inc;
// }