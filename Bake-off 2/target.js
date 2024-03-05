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
    if (!this.visited) {
      fill(color(139, 0, 0));
    } else {
      fill(color(0, 128, 0));
    }
    circle(this.x, this.y, this.width);
    
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
  
  unvisitTarget() {
    this.visited = false;
  }
}