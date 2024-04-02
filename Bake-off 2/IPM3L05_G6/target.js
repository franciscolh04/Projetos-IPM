// Target class (position and width)
class Target
{
  
  constructor(x, y, w, h, l, id, len = 3)
  {
    const colorMap = {
      "a": color(255, 171, 1),
      //"b": color(0, 128, 0),
      //"c": color(139, 0, 0),
      //"d": color(255, 140, 0),
      "é": color(0, 161, 216), 
      "e": color(0, 161, 216), 
      //"f": color(139, 0, 139),
      //"g": color(139, 139, 0),
      "h": color(255, 64, 21),
      "i": color(118, 187, 64),
      //"j": color(0, 255, 255),
      //"k": color(255, 255, 0),
      "l": color(123,70, 193),
      //"m": color(128, 128, 128),
      "n": color(152, 42, 188),
      "o": color(77, 34, 178),
      //"p": color(0, 128, 0),
      //"q": color(128, 0, 128),
      "r": color(255, 106, 0),
     // "s": color(0, 0, 128),
      //"t": color(128, 0, 0),
      "u": color(230, 59,122),
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
    this.textColor = color(250);
    this.hintLen = len
    //this.StrokeColor = (red(this.color) * 0.299 + green(this.color) * 0.587 + blue(this.color) * 0.144) > 127 ? color(200,200,200) : color(255,255,255);
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
      fill(this.color);
      stroke(181,26,0); // Adiciona borda branca quando visitado
      strokeWeight(4); // Ajuste conforme necessário
    } else if (!this.visited) {
      fill(this.color);
      //noStroke(); // Sem borda quando não visitado
    } else {
      fill(this.color); 
      stroke(10,250,10); // Adiciona borda branca quando visitado
      strokeWeight(4); // Ajuste conforme necessário
    }

    rect(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);
    noStroke();
    // Draw label
    textFont("Arial", 28);
    textStyle(BOLD);
    fill(this.textColor);
    textAlign(CENTER);

    // Draw text with border
    stroke(0); 
    strokeWeight(2); 
    text(this.label[0].toUpperCase() + this.label.substring(1,this.hintLen), this.x, this.y -12);
    textFont("Arial", 20);
    textStyle(BOLD);
    fill(this.textColor);
    textAlign(CENTER);
    text(this.label, this.x, this.y + 21);
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