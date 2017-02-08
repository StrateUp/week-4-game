// Create our Game Object.
var game = {
  // Define our Properties of this Object.
  goalAmount:0,
  playerAmount: 0,
  winCount: 0,
  loseCount: 0,
  waitingForGuess: false,
  //computerRanNum: getRandomIntInclusive(),
  //buttonRanNum: getRandomIntInclusive(),

//random number generator 
getRandomIntInclusive: function(min, max){
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
			console.log(this.computerRanNum);
		},

  // Game Start/Restart.
  
  	reset: function() {
  		this.winCount ="";
  		//return this.winCount++;
  		this.losecount = "";
  		//return this.losecount++;
  		this.waitingForGuess = true;
  		//this.computerRanNum = "";
  		this.playerAmount ="";

  	},
  		//generate computers random number
  		

    	 // Do stuff when the user clicks on a button.
  		setUserGuess: function() {
    		this.waitingForGuess = false;
    		// Update Win/Loss count and return true if the guess was correct.
    		return this.buttonRanNum();
    	},
  //found code
    	buttonValues: function(){
  			var randomValues = [];
  			var currentValue;
  
  			while(randomValues.length < 4) {
    			currentValue = Math.floor(Math.random() * 9) + 1;
    		}
    		// Avoid duplicates
    		if(randomValues.indexOf(currentValue) < 0) {
      		randomValues.push(currentValue);
    		}

 		 },
 //adding the values associated with the buttons
    addClicks: function(){
        var playerAmount = this.currentValue + currentValue;
      },

  //assigning values to the win/lose counters
  	updateUserGuess: function(){
  		if(this.playerAmount === this.goalAmount){    
      		this.winCount++;
      		return true;
          this.reset();
		  };
		  if (this.playerAmount > this.goalAmount){
			   this.loseCount++;
      	 return true;
          this.reset();
		  };
		  if (this.playerAmount <  this.goalAmount) {
			   return this.buttonAmt += sum
		  };
	   },
    //adding the values associated with the buttons
    addClicks: function(){
        return number(playerAmount =this.currentValue + currentValue);
      },
};

//call functions
game.getRandomIntInclusive(19,120);
//console.log(game.computerRanNum);
game.getRandomIntInclusive(1,12);
//console.log(game.buttonRanNum);
game.updateUserGuess();
console.log(game.updateUserGuess);
game.buttonValues();
game.setUserGuess();

var buttons ={

 }



 //assignment events//
$("#ranNum").html(game.getRandomIntInclusive(19,120));
console.log(Number(game.getRandomIntInclusive));
 // Playing the game...
$(document).ready(function() {
//computer is gen random number
 

  //assigning the random values to the buttons

  $("#gentoo").attr(game.getRandomIntInclusive(1,12));{
  console.log(game.getRandomIntInclusive);
  }
  $("#adelie").attr(game.getRandomIntInclusive(1,12));
  $("#humboldt").attr(game.getRandomIntInclusive(1,12));
  $("#emperor").attr(game.getRandomIntInclusive(1,12));{
    console.log(game.getRandomIntInclusive);
  }

//button ASSIGNMENT?
$(function() {
  var setup = game.buttonValues();

  $("#gentoo").val(setup.options[0]);
  console.log(game.setup.options[0]);

  $("#adelie").val(setup.options[1]);

  $("#humboldt").val(setup.options[2]);

  $("#emperor").val(setup.options[3]);
})
  // found code ex//
  $(":button.finish").on("click", function() {
    var selectedValue = parseInt($(this).val(), 12);
    console.log(selectedValue);
  });
}); 

  // Button Clicked Event Listener.
  $(":button").on("click", function() {
  		alert("this button is working");
      $("#userTotal").text(game.updateUserGuess);
    
      reset();
     
  });


  