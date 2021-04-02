//assign global variables
const player1Score = document.getElementById('player1score')
const player2Score = document.getElementById('player2score')
const drawsScore = document.getElementById('drawsScore')
const player1Hand = document.getElementById('player1hand')
const player2Hand = document.getElementById('player2hand')
const playButton = document.getElementById('play-button')
const playAgainButton = document.getElementById('play-again-button')
const quitButton = document.getElementById('quit-button')

//assign changeable variables/temporyary placeholders
let p1Score = 0, compScore = 0; draws = 0;

//assign array to hold different plays
const plays = ["rock", "paper", "scissors"];

//array to hold emojis to use as a visual during play
const emojis = ["👊", "🖐️", "✌️"];

//switch case function to determine the winner of the game.
const determineWinner = (playerChoice, computerChoice) => {
  switch (playerChoice) {
    //if player 1 choice is rock then check against possible computer choices
    case "rock":
      setPlayer1Hand(0)//function to set the player2hand index of 0 which is the rock emoji
      switch (computerChoice) {
        //if computer choice is rock
        case "rock":
          setPlayer2Hand(0) //function to set the player2hand index of 0 which is the rock emoji
          alert("It's a draw!");
          draws += 1; //if its a draw add 1 to the draws counter
          break;
          //if computer choice is paper
        case "paper":
          setPlayer2Hand(1);//function to set the player2hand index of 1 which is the paper hand emoji
          compScore += 1; //add 1 to the computer score placeholder
          break;
          //if computer choice is scissors
        case "scissors":
          setPlayer2Hand(2);//function to set the player2hand index of 1 which is the scissors fingers emoji
          p1Score += 1; //add 1 to player 1 score
          break;
      }
      break;

    //if player 1 choice is paper then check against possible computer choices
    case "paper":
      setPlayer1Hand(1)
      switch (computerChoice) {
        case "rock":
          setPlayer2Hand(0);
          p1Score += 1;
          break;
        case "paper":
          setPlayer2Hand(1);
            alert("It's a draw!");
            draws += 1;
          break;
        case "scissors":
          setPlayer2Hand(2);
          compScore += 1;
          break;
      }
      break;

    //if player 1 choice is scissors then check against possible computer choices
    case "scissors":
      setPlayer1Hand(2);
      switch (computerChoice) {
        case "rock":
          setPlayer2Hand(0);
          compScore += 1;
          break;
        case "paper":
          setPlayer2Hand(1);
          p1Score += 1;
          break;
        case "scissors":
          setPlayer2Hand(2);
          alert("It's a draw!");
          draws += 1;
          break;
      }
      break;
    default:
      null;
  }
};

//function that returns a random number between 1 and 3.
const selectRandom = (max = 3, min = 0) => {
  return Math.floor(Math.random() * (max - min));
};

//function that sets the inner HTML of player1hand section to the correct emoji to be displayed when that hand is played passing the index to it.
const setPlayer1Hand = (index) => {
  player1Hand.innerHTML= `
    <span class="emoji-spinner">${emojis[index]}</span>
  `;
};
//same function as above but for player 2.
const setPlayer2Hand = (index) => {
  player2Hand.innerHTML= `
    <span class="emoji-spinner">${emojis[index]}</span>
  `;
};

//playButtonHandler, function that handles when the play button is clicked. Inside of this function triggers several other operations.
const playButtonHandler = () => {
  //prompt the user for their play choice.
  const playerChoice = prompt("rock, paper, or scissors?", "rock");
  //set the computer choice using a selectRandom() custom function.
  const computerChoice = plays[selectRandom()];
  //validate the users choice
  if (
    playerChoice.toLowerCase() === "rock" || //if choose rock
    playerChoice.toLowerCase() === "paper" ||//if choose paper
    playerChoice.toLowerCase() === "scissors"//if choose scissors
    ) { 
      //if answer was valid run the determineWinner() function passing in the playersChoice and the computerChoice.
      determineWinner(playerChoice, computerChoice) 
    }  
  else { 
    //if the user entered an invalid input
    alert("Incorrect play choice. Please select, rock, paper, or scissors."); 
  }

  //ternary operations to set score dynamically
  //if there is a score set the score the respective innerHTML if there is no score then set it to 0. Respectively.
  player1Score.innerHTML = p1Score ? p1Score : 0;
  player2Score.innerHTML = compScore ? compScore : 0;
  drawsScore.textContent = draws ? draws : 0;
};

//function the handles when the quit button is clicked
const quitButtonHandler = () => {
  //alert the player, thanks for playing!
  alert("Thanks for playing!");

  //clear the scores
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  draws = 0;
  window.location.reload();
};

//event listeners
playButton.addEventListener("click", playButtonHandler)
quitButton.addEventListener("click", quitButtonHandler)