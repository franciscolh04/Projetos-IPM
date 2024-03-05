// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.visited = false;
    this.incorrect = false;
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
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
    
    rect(this.x - (this.width/2), this.y -(this.width/2) , this.width,  this.width);
    
    // Draw label
    textFont("Arial", 20);
    textStyle(BOLD);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
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