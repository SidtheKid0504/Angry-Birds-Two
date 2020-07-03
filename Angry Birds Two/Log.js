// Extends from BaseClass
class Log extends BaseClass {
    //Specify Height and angle for log
    constructor(x, y, height, angle) {
      super(x, y, 20, height, angle);
      this.image = loadImage("sprites/wood2.png");
      // Sets the Body's angle to itself and angle
      Matter.Body.setAngle(this.body, angle);
    }
    
  };
  