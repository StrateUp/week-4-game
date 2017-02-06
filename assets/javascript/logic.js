//first have the computer generate a random value from 19-120//
//generate the array//

var value = $(this).val();
var lowEnd = Number(value.split('-')[0]);
var highEnd = Number(value.split('-')[1]);



var computerNumber  = {
	lowEnd: 19,
	highEnd: 120,
	arr: [],
	
	while (lowEnd < = highEnd) {
    this.arr.push(lowEnd++);
	}

	getRandomCharacter: function() {
				
		var randomIndex = Math.random()* computerNumber.length;
		randomIndex = Math.floor(randomIndex);
		return computerNumber[randomIndex];
	}
}

//create the crystal buttons for the players choice//
function Crystal(){
	this.name = crystalType,
	this.value = crystalValue,

//create a click event 
	this.onkeyup = function(event)
	this.result = function(){
		console.log("you clicked" + this.name "crystal, that's valued at" + this.value "!");
	}
}
   	var red = new Crystal("ruby", "8");
   	red.result();

   	var blue = new Crystal("sapphine", "2");
   	blue.result();
   	//definig
   	var crystalValues = [8,]
   	//creating dynamic buttons//

   	  // 1. Create a for-loop to iterate through the letters array.
      for (var i = 0; i < letters.length; i++) {

        // Inside the loop...

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var crystalBtn = $("<button>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        crystalBtn.addClass("size value ");

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn.attr("data-value", letters[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn.text(letters[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(letterBtn);

      }
       $(".crystal-button").on("click", function() {

var targetNumber = [19-120];

var crystalValue = [1-12]; 

