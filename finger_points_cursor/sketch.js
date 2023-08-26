function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(123);
  
    let rows = 10;
    let cols = 10;
    let cellWidth = width / cols;
    let cellHeight = height / rows;
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let posX = x * cellWidth + cellWidth / 2;
        let posY = y * cellHeight + cellHeight / 2;
  
        let angle = atan2(mouseY - posY, mouseX - posX);
        
        push(); // Save the current drawing state
        translate(posX, posY);
        rotate(angle); // Rotate the arrow towards the cursor
        
        // Draw arrow shape
        line(0, 0, cellWidth * 0.4, 0);
        line(cellWidth * 0.4, 0, cellWidth * 0.3, -cellHeight * 0.1);
        line(cellWidth * 0.4, 0, cellWidth * 0.3, cellHeight * 0.1);
        
        pop(); // Restore the previous drawing state
      }
    }
  }
  
  