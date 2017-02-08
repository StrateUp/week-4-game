//I cannot get this to function in my game object!!!
//so help me god!!
var computerGuess = getRandomIntInclusive(19, 120);
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(computerGuess);
//object work
var Game = {
	winsCount: 0,
	loseCount: 0,
	playerTotal: 0,

	

	buttonValue: function (min,max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;		
		},

	initialize: function() {
		
		buttons.gentoo = this.buttonValue(1,12);
				console.log("btn1: " + buttons.gentoo);
		buttons.adelie = this.buttonValue(1,12);
				console.log("btn2:" + buttons.adelie);
		buttons.humboldt = this.buttonValue(1,12);
				console.log("btn3:" + buttons.humboldt);
		buttons.emperor = this.buttonValue(1,12);	
				console.log("btn4: " + buttons.emperor);
		playerTotal = 0;

	},
};
//
var buttons = {
	gentoo: "",
	adelie: "",
	humboldt: "",
	emperor: "", 
};


$(document).ready(function() {

	//launch
	Game.initialize();



//event handlers//
//generate computer guess
$("#ranNum").html(" " +computerGuess);

//assign random values to buttons
 $("#gentoo").attr("value1", buttons.gentoo);
 console.log(gentoo);
  $("#adelie").attr("value2", buttons.adelie);
  $("#humboldt").attr("value3", buttons.humboldt);
  $("#emperor").attr("value4", buttons.emperor);

  
  $(".btn").on("click", function(){
  	$("#userTotal").html("gentoo","adelie");

  });

  playerTotal += parseInt($(this).data(gentoo, adelie, humboldt, emperor));
		console.log("User Score after 1st click is: " + playerTotal);


// Check if the user score is >= Match-Target
		if (playerTotal === computerGuess) {
			console.log("winsCount before ++: " + game.winsCount);
			game.winCount++;
			console.log("winsCount after ++: " + game.winsCount);
					
			$("#win-display").text(game.winCount);
			
			game.initialize();
		
		} else if (playerTotal > computerGuess) {
			console.log("winCount before ++: " + game.loseCount);	
			game.loseCount++;
			console.log("winCount before ++: " + game.loseCount);	
			
			$("#loss-display").html(game.loseCount);
			
			game.initialize();
		}
});