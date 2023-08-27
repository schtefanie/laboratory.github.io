let hand;
function preload() {
  hand = loadImage('assets/images/hand.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
  background(252,236,173);
  
  let rows = 5;
  let cols = 5;
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let posX = x * cellWidth + cellWidth / 2;
      let posY = y * cellHeight + cellHeight / 2;

      let angle = atan2(mouseY - posY, mouseX - posX);

      push(); // Save the current drawing state
      translate(posX, posY);
      rotate(angle-27); // Rotate the image towards the cursor
      scale(0.6,0.6)
      // Draw the custom image instead of arrow shapes
      image(hand, 0, 0);
      
      pop(); // Restore the previous drawing state
    }
  }
}