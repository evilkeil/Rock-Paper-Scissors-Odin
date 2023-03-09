const select= prompt("Rock,Paper,Scissors","choose");   //Makes the user choose Rock,Paper or Scissors.



let choice = (select) => { 
 //take the players choice and convert it to lowercase so that itll be case insensitive.
    select = select.toLowerCase();
   return select;

}




const playerSelection= choice(select);  //use the choice which is converted to lowercase and assign to playerSelection which is the first parameter.




 function computerSelectionRand(){

    //create a function that generates 3 numbers : 0,1 and 2.
    return Math.floor(Math.random() * 3);

 }

 
 const PCChoice = computerSelectionRand(); // store the computer`s randomized choice in a constant.
 

function computerChoice(PCChoice){ //function to assign the choice of rock paper scissors to the random number.
    let x // variable to assign choice.
    if (PCChoice === 0){ 
        x = "rock";
        return x;
    }else if (PCChoice === 1){
        x = "paper";
        return x;
    }else {
        x = "scissors";
        return x;
    }
}

const computerSelection = computerChoice(PCChoice); //assign to computerSelection which is the first parameter.




function RPC(playerSelection,computerSelection){
    // The function for rock paper scissors.

    let player = playerSelection; //assign temp variables to make the code easier to read.
    let comp = computerSelection;
    let result;
    switch (true){
        case (player === comp):
            result = `you both picked ${player} so its a draw`;
            break;
        case (player === "rock" && comp === "scissors"):
            result ="your opponent chose scissors.You win because `rock beats scissors`. ";
            break;
        case (player === "rock" && comp === "paper"):
            result="your opponent chose paper.You lose because `paper covers rock`.";
            break;
        case (player === "paper" && comp ==="scissors"):
            result="your opponent chose scissors.You lose because `scissors cuts paper`.";
            break;
        case (player === "paper" && comp ==="rock"):
            result="your opponent chose rock.You win because `paper covers rock`.";
            break;
        case (player === "scissors" && comp ==="paper"):
            result="your opponent chose paper,You win because `scissors cuts paper`";
            break;
        case (player === "scissors" && comp ==="rock"):
            result="your opponent chose rock,You lose because `rock beats scissors`";
            break;
        default:
            result="please choose a correct choice";
            
        
    }
    return result;
}


console.log(RPC(playerSelection,computerSelection));
 
 
