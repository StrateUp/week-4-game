//Lets organize our javascript code//

//Do I need this document ready???//
$( document ).ready(function() {
	console.log( "document loaded" );
});

$( window ).on( "load", function() {
	console.log( "window loaded" );
});


//1.First Create a number generating object
//var computerGuess = getRandomIntInclusive(19, 120);
//function getRandomIntInclusive(min, max) {
	//min = Math.ceil(min);
	//max = Math.floor(max);
	//return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//console.log(computerGuess);
//create in html a div to style and effect
//create an object named computerGuess----
	//create a function that will
		//-generate a random number within a range(done but not an object)
		//-print that number to the page
  //$("#randomNumber").html(computerGuess); //BROKEN??after i added css&html?

//2.Second Create the player option buttons
//in html create divs for 4 choice buttons/ 
	//-these are to be made buttons
	//-link images as these buttons

		//does this affect my buttons since i bootstrap stole them? 
		//$("#Gentoo").button({icons: {primary: null},text: false}).addClass("gentoo");	

	// each button will be an object in JS & will contain:
		//-random values generated and assigned to the button
			//create one object w/ 4 buttons inside or 4 objects with overarching "rules"??
			//var Buttons ={
	//valueOptions: ["1","2","3","4","5","6","7","8","9","10","11","12"], //rand(1, 12),// 
	//item: this.valueOptions[Math.floor(Math.random()*this.valueOptions.length)],
	//rand: function(min, max) {
  		//var offset = min;
  		//var range = (max - min) + 1;
 		//var randoNum = Math.floor( Math.random() * range) + offset;
  		//return randoNum;
  	//}
  	//console.log("button value:" + item);


	 //$(".valueOptions").on("click", function() {}






		//-.on"click" event will print value to screen
			//create on click event, attach to each button
			// attribute the random generated values to button each 'round'
			// when clicked add(append) the value to the htmlpage div sum  .innerHTML
				//-make this a counter



//3. create an if/else game object
		//contains wins: & losses: attributes
			//if player clicks generate a value that equals computerGuess then wins +1
					//-print text "You Win!!"
			//if player clicks generate a value > computerGuess then losses +1
					//-print text "You Lose!!"

			// if point value awarded, reset game



//4. Create game reset form
		//On reset: Game/computer must
			//generate new value computerGuess
			//-reassign new values to the player option buttons 

var game = {
	goalAmount: 0,
	playerAmount: 0,
	//setRandomGoalAmount: getRandomIntInclusive(),
	getRandomIntInclusive: function(min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},



updatePlayerAmount: function(value) {
 		//log the 



            // We don't yet have an operator, so we are updating the first number.
            //if(this.firstNumber += newNumber);
            //console.log(this.firstNumber);
        //} else {
            // Update second number because we have an operator.
            //this.secondNumber += newNumber;
        },


        checkGameStatus: function(){
        	if(playerAmount === goalAmount){
        		wins++;
			ReplaceElementContent("player-wins", wins);//need to reference in html & w/ generated values
		};
		if (playerAmount > goalAmount){
			losses++;
			ReplaceElementContent("player-loses", losses);//see psychic game code?? random number generator values 1-12 function
		};
		if (playerAmount <  goalAmount) {
			return this.buttonAmt += sum
		};
	},


	reset: function() {}
};


var buttons = [
	{
		value: 0,
		name:"gentoo",
	},
	{
		value: 0,
		name:"adelie"
	},
	{
		value: 0,
		name:"humboldt"
	},
	{
		value: 0,
		name:"emperor"
	}

];
[0,1,2,3]
[{ name: ''}, {}, {}]
//buttons.value.getRandomIntInclusive(1,12);
//console.log(buttons.getRandomIntInclusive);

for (var i = 0; i < buttons.length; i++) {
	var randomValue = game.getRandomIntInclusive(1, 12);

	$("#" + buttons[i].name).attr("value", randomValue); 

	buttons[i].value = randomValue;
}

//event listeners//
$("#ranNum").html(game.getRandomIntInclusive(19,120));
console.log(Number(game.getRandomIntInclusive));


$(":button").on("click", function(){
	$("#gentoo").attr(game.getRandomIntInclusive(1,12));
	console.log()
	$("#adelie").attr(game.getRandomIntInclusive(1,12));
	$("#humboldt").attr(game.getRandomIntInclusive(1,12));
	$("#emperor").attr(game.getRandomIntInclusive(1,12));

});



