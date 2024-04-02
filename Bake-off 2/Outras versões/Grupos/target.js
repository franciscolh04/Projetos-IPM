// Target class (position and width)
class Target
{
  
  constructor(x, y, w, h, l, id)
  {
    const colorMap = {
      "a": color(255, 171, 1),
      //"b": color(0, 128, 0),
      //"c": color(139, 0, 0),
      //"d": color(255, 140, 0),
      "é": color(255, 106, 0), 
      "e": color(255, 106, 0), 
      //"f": color(139, 0, 139),
      //"g": color(139, 139, 0),
      "h": color(255, 64, 21),
      "i": color(181,26,0),
      //"j": color(0, 255, 255),
      //"k": color(255, 255, 0),
      "l": color(185, 45, 93),
      //"m": color(128, 128, 128),
      "n": color(152, 42, 188),
      "o": color(77, 34, 178),
      //"p": color(0, 128, 0),
      //"q": color(128, 0, 128),
      "r": color(0, 161, 216),
     // "s": color(0, 0, 128),
      //"t": color(128, 0, 0),
      "u": color(118, 187, 64),
      //"v": color(0, 0, 128),
      //"w": color(128, 128, 0),
      //"x": color(0, 128, 128),
      "y": color(195, 209, 23),
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
    this.textColor = color(0, 0, 0);
    this.StrokeColor = (red(this.color) * 0.299 + green(this.color) * 0.587 + blue(this.color) * 0.144) > 127 ? color(200) : color(255);
  }
  
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y) {
    // Verifica se o clique do mouse está dentro do retângulo
    return (
      mouse_x >= this.x - this.width / 2 &&
      mouse_x <= this.x + this.width / 2 &&
      mouse_y >= this.y - this.height / 2 &&
      mouse_y <= this.y + this.height / 2
    );
  }
  
// Draws the target (i.e., a circle)
  // and its label
  // Draws the target (i.e., a circle)
// and its label
  draw() {
    // Draw target
    if (this.incorrect) {
      fill(color(211,211,211));
    } else if (!this.visited) {
      fill(this.color);
    } else {
      fill(color(200, 200, 200));
    }

    // Draw target rectangle
    rect(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);

    // Draw label
    textFont("Arial", 24);
    textStyle(BOLD);
    fill(this.textColor);
    textAlign(CENTER);
    
    // Set white border
    stroke(this.StrokeColor);
    strokeWeight(2); // Adjust the weight as needed

    // Draw text with border
    text(this.label[0].toUpperCase() + this.label[1] + this.label[2], this.x, this.y - 10);
    textFont("Arial", 20);
    textStyle(BOLD);
    fill(this.textColor);
    textAlign(CENTER);
    text(this.label, this.x, this.y + 14);

    // Reset stroke
    noStroke();
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