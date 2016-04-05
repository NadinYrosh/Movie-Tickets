var timesFunction = function() {

  var regularPrice = [];

  for (j = 10; j < 23; j++) {
    regularPrice.push(j);
  }
  return regularPrice;
};

function TicketPrice(age, date, time){
  this.userAge = age;
  this.inputDate = date;
  this.chosenTime = time;
}






$(document).ready(function(){

  var timePrices = timesFunction();

  for (j = 0; j < timePrices.length; j++) {
      $(".regularPrice").append("<label class='radio-inline'><input type='radio' name='inlineRadioOptions' id='inlineRadio1' value='" + timePrices[j]+ "'>" + timePrices[j] + ":45</label>");
  }

 $("form#date").submit(function(event){
   event.preventDefault();

  //  $(".earlyPrice").empty();
  //  $(".regularPrice").empty();

   var date = $("#dateVal").val();
   var chosenTime = $("input:radio[name=inlineRadioOptions]:checked").val();
   var age = $("#age").val();

   var newTicket = new TicketPrice(age, date, chosenTime);
   console.log(date);


  });



});
