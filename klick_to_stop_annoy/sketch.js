let squareSize = 100;
let noiseScale = 2000;
let t = 12;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }
  function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

function draw() {
  background(252,236,173);

  let xOff = noise(t) * width / 2;
  let yOff = noise(t + 0.5) * height / 2;

  let xOffsetFromCursor = mouseX - width /2;
  let yOffsetFromCursor = mouseY - height /2;

  let x = width / 2 - xOffsetFromCursor + xOff - squareSize / 2;
  let y = height / 2 - yOffsetFromCursor + yOff - squareSize / 2;

  circle(x, y, squareSize, squareSize);

  t += 0.02;
}
