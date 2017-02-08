// generate random number.
    	this.computerRanNum(19, 120);
    	// generate random button value
    	this.buttonRanNum(1,12);
    	consol.log(this.buttonRanNum());
    	// Start accepting user input.
    	this.waitingForGuess = true;
  		
  	},
  // Randomly assign a random number to a button
 	buttonRanNum: function(max,min) {
 		min = Math.ceil(min);
		max = Math.floor(max);
    	this.userAmount = (Math.floor(Math.random() * (max - min + 1)) + min) +;
  		console.log(buttonRanNum);
  },

 

  // Check if User Guess is where the ball is.
  // Set Win/Lose Count appropriately.
  setWinLose: function(guess) {
    if (guess === this.ball) {
      this.winCount++;
      return true;
    } else {
      this.loseCount++;
      return false;
    }
  },

// Cup Clicked Event Listener.
  $(".cup").on("click", function() {
    // console.log($(this).index());
    // Make sure we are waiting for user input.
    if (true === game.waitingForGuess) {
      // Notify the Game that the user has guessed, and the index of the cup guessed.
      var victory = game.setUserGuess($(this).index());
      // Update the Win/Lose display.
      $("#win-count").text(game.winCount);
      $("#lose-count").text(game.loseCount);
      // Alert the Player.
      if (victory) {
        alert("You Won!");
      } else {
        alert("FAIL. Try again...");
      }
      // Show the Ball.
      $("#ball").removeClass("hide");
      // Highlight instruction step1.
      $("#instr-2").removeClass("active");
      $("#instr-1").addClass("active");
    }
  });

  
  // Shuffle the Cups.
  function shuffleCups() {
    // @TODO: Do something fancy like move them around and blink or something.
  }


});



if(selectedValue === setup.correct) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }