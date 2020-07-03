// Bird Class is a subclass to BaseClass
class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    // Loads Bird Image
    this.image = loadImage("sprites/bird.png");
  }
  // Since we made a display function in our BirdClass, super.display() is needed
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}