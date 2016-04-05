var timesFunction = function() {

  var regularPrice = [];

  for (j = 10; j < 23; j++) {
    regularPrice.push(j);
  }
  return regularPrice;
};






$(document).ready(function(){

 $("form").submit(function(event){
   event.preventDefault();

   $(".earlyPrice").empty();
   $(".regularPrice").empty();

   var date = $("select").val();

   var timePrices = timesFunction();

   console.log(timePrices);

   for (j = 0; j < timePrices.length; j++) {
     if(timePrices[j] <= 13) {
       $(".earlyPrice").append("<label class='radio-inline'><input type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option1'>" + timePrices[j] + ":45</label>");
     }
     if(timePrices[j] > 13) {
       $(".regularPrice").append("<label class='radio-inline'><input type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option1'>" + timePrices[j] + ":45</label>");
     }
   }

   $("#times").show();

  });

});
