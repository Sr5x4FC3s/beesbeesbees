var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  // this.food = 'jelly';
  // Grub.prototype.eat.call(this);
  // this.eat = Grub.prototype.eat;
  this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
// Bee.prototype.job = 'keep on growing';
// var bee = new Bee();