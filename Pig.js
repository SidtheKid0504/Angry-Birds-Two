// Extends from BaseClass
class Pig extends BaseClass{
    constructor(x, y) {
      // Given Generic Value of 50 instead of width and height(uneeded)
      super(x, y, 50, 50);
      this.image = loadImage("sprites/enemy.png");
    }
};
  