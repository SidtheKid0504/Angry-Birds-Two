// Base Class for other Classes (D.R.Y)
// Inheritance
class BaseClass {
  // Construcotr Function for Properties
  constructor(x, y, width, height, angle) {
    var options  = {
      'restitution': 0.7,
      'density': 1,
      'friction': 2
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png");

    World.add(world, this.body);
  }

  //Display Function to Display Objects
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}