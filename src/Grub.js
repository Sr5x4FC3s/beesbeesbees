//things that grub need: age set to 0, color set to pink, food set to
//jelly, eat method; 

var Grub = function() {
  //grub = {};
  this.age;
  this.color;
  this.food;
  this.eat;
};

// Grub.prototype.age = function(age) {
//   // this.grub.age = 0;
//   // return this.grub.age = 0;
//   return this.age = 0;
// };

Grub.prototype.age = 0;

// Grub.prototype.color = function() {
//   return this.color = 'pink';
// };

Grub.prototype.color = 'pink';

// Grub.prototype.food = function() {
//   this.food = 'jelly';
// };

Grub.prototype.food = 'jelly';

Grub.prototype.eat = function() {
  return this.eat;
};

var grub = new Grub();