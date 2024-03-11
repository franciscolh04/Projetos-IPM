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
      "u": color(0, 128, 0),
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
  draw()
  {
    
    // Draw target
    if (this.incorrect) {
      fill(color(255, 140, 0));
    } else if (!this.visited) {
      fill(this.color);
    } else {
      fill(color(0, 128, 0));
    }
    
    rect(this.x - (this.width/2), this.y -(this.height/2) , this.width,  this.height);
    
    // Draw label
    textFont("Arial", 15);
    textStyle(BOLD);
    fill(this.textColor);
    textAlign(CENTER);
    text(this.label[0].toUpperCase() + this.label[1] + this.label[2], this.x, this.y - 12);
    textFont("Arial", 20);
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