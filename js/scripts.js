var timesFunction = function() {

  var regularPrice = [];

  for (j = 10; j < 23; j++) {
    regularPrice.push(j);
  }
  return regularPrice;
};






$(document).ready(function(){

 $("form#date").submit(function(event){
   event.preventDefault();

   var age = $("#age").val();
   console.log(age);

   $(".earlyPrice").empty();
   $(".regularPrice").empty();

   var date = $("select").val();

   var timePrices = timesFunction();

   console.log(timePrices);

   for (j = 0; j < timePrices.length; j++) {
     if(timePrices[j] <= 13) {
       $(".earlyPrice").append("<label class='radio-inline'><input type='radio' name='inlineRadioOptions' id='inlineRadio1' value='" + timePrices[j]+ "'>" + timePrices[j] + ":45</label>");
     }
     if(timePrices[j] > 13) {
       $(".regularPrice").append("<label class='radio-inline'><input type='radio' name='inlineRadioOptions' id='inlineRadio1' value='" + timePrices[j]+ "'>" + timePrices[j] + ":45</label>");
     }
   }

   $("#times").show();

  });
  $("form#time").submit(function(event){
    event.preventDefault();
    var chosenTime = $("input:radio[name=inlineRadioOptions]:checked").val();
    console.log(chosenTime);
  });
});
