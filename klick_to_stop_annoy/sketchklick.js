let xOff = 0.0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(252, 236, 173);

let a = 10;
    xOff = xOff + 0.03;
    let x = mouseX + noise(xOff) * width * sin(a);
    let y = mouseY + noise(xOff) * height * sin(a);



    circle(x, y, 250);

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