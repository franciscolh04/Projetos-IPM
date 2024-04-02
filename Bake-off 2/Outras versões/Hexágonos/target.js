// Function that draws a hexagon (or any other regular polygon)
// centerX and centerY determine where the polygon is positioned
// the radius parameter determines the size of the enclosing circle
// (distance to vertices) numSides specifies the number of the polygon's sides
function drawHexagon(centerX, centerY, radius, numSides){

  beginShape()

  // Make equiangular steps around the circle depending on the number of sides
  for(let a = 0; a < TAU; a+=TAU/numSides){

    // calculate the cartesian coordinates for a given angle and radius
    // and centered at the centerX and centerY coordinates
    var x = centerX + radius * cos(a)
    var y = centerY + radius * sin(a)

    // creating the vertex
    vertex(x, y)
  }

  // telling p5 that we are done positioning our vertices
  // and can now draw it to the canvas
  endShape(CLOSE)
}

// Target class (position and width)
class Target
{
  
  constructor(x, y, w, h, l, id)
  {
    const colorMap = {
      "a": color(255, 131, 96),
      //"b": color(0, 128, 0),
      //"c": color(139, 0, 0),
      //"d": color(255, 140, 0),
      "é": color(125, 206, 230), 
      "e": color(125, 206, 230), 
      //"f": color(139, 0, 139),
      //"g": color(139, 139, 0),
      "h": color(232, 226, 136),
      "i": color(60, 219, 211),
      //"j": color(0, 255, 255),
      //"k": color(255, 255, 0),
      "l": color(255, 255, 255),
      //"m": color(128, 128, 128),
      "n": color(128, 0, 0),
      "o": color(128, 128, 0),
      //"p": color(0, 128, 0),
      //"q": color(128, 0, 128),
      "r": color(0, 128, 128),
     // "s": color(0, 0, 128),
      //"t": color(128, 0, 0),
      "u": color(0, 128, 60),
      //"v": color(0, 0, 128),
      //"w": color(128, 128, 0),
      //"x": color(0, 128, 128),
      "y": color(128, 0, 128),
      //"z": color(128, 128, 128)
    };
    


    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.height = h;
    this.label  = l;
    this.id     = id;
    this.visited = false;
    this.incorrect = false;
    this.color = colorMap[this.label[1]];
    this.textColor = (red(this.color) * 0.299 + green(this.color) * 0.587 + blue(this.color) * 0.144) > 127 ? color(0) : color(255);
  }
  
  
  // Checks if a mouse click took place
  // within the target

  
  clicked(mouse_x, mouse_y) {
    const hexagonRadius = this.width / 2;
    const numSides = 6;
    const debug = true

    // Calculate the coordinates of the hexagon's vertices
    const vertices = [];
    for (let i = 0; i < numSides; i++) {
      const angle = i * (Math.PI / 3);
      const vertexX = this.x + hexagonRadius * Math.cos(angle);
      const vertexY = this.y + hexagonRadius * Math.sin(angle);
      vertices.push({ x: vertexX, y: vertexY });
    }

    // Check if the mouse click is inside the hexagon
    let isInsideHexagon = false;
    for (let i = 0, j = numSides - 1; i < numSides; j = i++) {
      const vertexI = vertices[i];
      const vertexJ = vertices[j];
      if (
        (vertexI.y > mouse_y) !== (vertexJ.y > mouse_y) &&
        mouse_x < ((vertexJ.x - vertexI.x) * (mouse_y - vertexI.y)) / (vertexJ.y - vertexI.y) + vertexI.x
      ) {
        isInsideHexagon = !isInsideHexagon;
      }
    }

    return isInsideHexagon;
  }
  
// Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    let tempcolor = this.color;
    // Draw target
    if (this.incorrect) {
      tempcolor = color(255, 140, 0);
      fill(color(255, 140, 0));
    } else if (!this.visited) {
      fill(this.color);
    } else {  
      tempcolor = color(0, 128, 0); 
      fill(color(0, 128, 0));
    }

    this.textColor = (red(tempcolor) * 0.299 + green(tempcolor) * 0.587 + blue(tempcolor) * 0.144) > 127 ? color(0) : color(255);

    //rect(this.x - (this.width/2), this.y -(this.height/2) , this.width,  this.height);
    drawHexagon(this.x, this.y , this.width/2,  6)
    // Draw label
    textAlign(CENTER);
    textStyle(BOLD);
    textFont("Arial", 100);
    fill(color(red(0), green(0), blue(0), 50));
    text(this.label[1].toUpperCase(), this.x, this.y + 35);

    textFont("Arial", 24);
    textStyle(BOLD);
    fill(this.textColor);
    textStyle(BOLD);
    text(this.label[1].toUpperCase() + this.label[2].toUpperCase(), this.x, this.y - 12);

    textFont("Arial", 18);
    textStyle(BOLD);
    fill(this.textColor);
    textAlign(CENTER);
    text(this.label, this.x, this.y + 12);
  }
  
  visitTarget() {
    this.visited = true;
  }
  
  incorrectTarget() {
    this.incorrect = true;
  }
  
  resetTarget() {
    this.visited = false;
    this.incorrect = false;
  }
  
}