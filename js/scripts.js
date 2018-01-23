//BUSINNESS LOGIC
function desires(film, time, age) {
  this.film = film;
  this.time = time;
  this.age = age;
}

var seniorPrice = 8;
var seniorMatineePrice = 5;
var regularPrice = 12;
var studentPrice = 10;
var matineePrice = 7;

desires.prototype.price = function() {
  if (age > 62) {
    if (time === "matinee") {
      return seniorMatineePrice;
    } else {
      return seniorPrice;
    }
  } else if (age < 18) {
      if (time === "matinee") {
        return matineePrice;
      } else {
        return studentPrice;
      }
  } else {
    if (time === "matinee") {
      return matineePrice;
    } return regularPrice;
  }
}
