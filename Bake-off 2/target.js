// Target class (position and width)
class Target
{
  constructor(x, y, w, h, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.height = h;
    this.label  = l;
    this.id     = id;
    this.visited = false;
    this.incorrect = false;
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
      fill(color(139, 0, 0));
    } else {
      fill(color(0, 128, 0));
    }
    
    rect(this.x - (this.width/2), this.y -(this.height/2) , this.width,  this.height);
    
    // Draw label
    textFont("Arial", 15);
    textStyle(BOLD);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label[1].toUpperCase() + this.label[2] + this.label[3], this.x, this.y - 12);
    textFont("Arial", 20);
    textStyle(BOLD);
    fill(color(255,255,255));
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