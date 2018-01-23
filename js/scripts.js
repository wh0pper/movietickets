//BUSINNESS LOGIC
var seniorPrice = 8;
var seniorMatineePrice = 5;
var regularPrice = 12;
var studentPrice = 10;
var matineePrice = 7;

function newDesire(film, time, age, price) {
  this.film = film;
  this.time = time;
  this.age = age;
  this.price = price;
}

newDesire.prototype.pricer = function() {
  if (this.age > 62) {
    if (this.time === "matinee") {
      this.price = seniorMatineePrice;
    } else {
      this.price = seniorPrice;
    }
  } else if (this.age < 18) {
      if (this.time === "matinee") {
        this.price = matineePrice;
      } else {
        this.price = studentPrice;
      }
  } else {
    if (this.time === "matinee") {
      this.price = matineePrice;
    }
    else {
      this.price = regularPrice;
    }
  }
}

var desire = {};


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var film = $("select#films").val();
    var time = $("input:radio[name=time]:checked").val();
    var age = $("input#age").val();

    desire = new newDesire(film, time, age);
    desire.pricer();

    // $("#modalCenter").on("shown.bs.modal", function() {
    //   $(".modal-body p").trigger('focus')
    // })
    $(".modal-body").text(desire.price);
    $('#modalCenter').modal('show');
  });
});
