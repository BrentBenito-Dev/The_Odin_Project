/* CREATE func getComputerChoice
    CALL Math.random() EQUAL to choiceDeterminer;
    IF choiceDeterminer >= 0.50 THEN rock
    ELSE IF choiceDeterminer > 0 THEN paper
    ELSE scissors
*/ 

/* CREATE func getHumanChoice
    PROMPT Ask user choice THEN uppercase it
    IF userChoice === "ROCK" THEN rock
    ELSE IF userChoice === "PAPER" THEN paper
    ELSE IF userChoice === "SCISSORS" THEN paper
    ElSE return invalid input you lose
   END

   CALL getHumanChoice
*/

/* CREATE func playRound(humanChoice, computerChoice)
    IF (humanChoice === computerChoice) THEN draw
    ELSE IF (humanChoice === "Rock" and computerChoice === "Scissors") 
         OR (humanChoice === "Paper" and computerChoice === "Rock") 
         OR (humanChoice === "Scissors" and computerChoice === "Paper") 
        THEN Human win
        INCREMENT humanScore
    ELSE Computer Win INCREMENT computerScore
*/

/* CREATE func playGame()
    FOR round is 1, while lessthan to 6 INCREMENT 1
        CALL playround
        PRINT human score
        PRINT computer score
        PRINT how many draws occured!

    IF humanScore is greater than computerScore THEN Human Win
    ELSE IF computerScore is greater than humanScore THEN Computer win
    ELSE Draw!

*/

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice(){
    let choiceDeterminer = Math.random();
    // console.log(choiceDeterminer); 
    if (choiceDeterminer >= 0.66){
        return "Rock";
    }else if (choiceDeterminer >= 0.33){
        return "Paper";
    }else{
        return "Scissors";
    }
    /* Logic was changed to represent each thirds of the math random range
       Math random doesn't return 0 as often leading to Scissors 
       to be almost non existent
    */
}

function getHumanChoice(){
    let userChoice = prompt("Fight the AI choose between rock, paper, or scissors!").toUpperCase();
    if (userChoice === "ROCK"){
        return "Rock";
    }else if (userChoice === "PAPER"){
        return "Paper";
    }else if (userChoice === "SCISSORS"){
        return "Scissors";
    }else{
        return "Invalid input you lose!";
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        drawScore++;
    }else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        humanScore++;
    }else{
        computerScore++;
    }
    console.log("Computer: "+ computerChoice);
    console.log("Human: "+ humanChoice);
}

function playGame(){
    for (round = 1; round < 6; round++ ){
        console.log("\nRound " + round + "\n");
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);  
        console.log("Human: "+ humanScore); 
        console.log("Computer: "+ computerScore);    
        console.log("Draw: "+ drawScore);
    }

 
    if(humanScore > computerScore){
        console.log("\nHuman Wins!");
    }else if (computerScore > humanScore){
        console.log("\nComputer Wins!");
    }else {
        console.log("\nThe Game is Draw!");
    }
}

playGame();