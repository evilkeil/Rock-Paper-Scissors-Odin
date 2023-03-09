const select= prompt("Rock,Paper,Scissors","choose");   //Makes the user choose Rock,Paper or Scissors

console.log(select);

let choice = (select) => { 
 //take the players choice and convert it to lowercase so that itll be case insensitive
    select = select.toLowerCase();
   return select;

}

console.log(choice(select));


const playerSelection= choice(select);  //use the choice which is converted to lowercase and assign to playerSelection which is the first parameter.

console.log(playerSelection);


 function computerSelectionRand(){

    //create a function that generates 3 numbers : 0,1 and 2.
    return Math.floor(Math.random() * 3);

 }

 
 const PCChoice = computerSelectionRand(); // store the computer`s randomized choice in a constant.
 console.log(PCChoice);

function computerChoice(PCChoice){ //function to assign the choice of rock paper scissors to the random number
    let x // variable to assign choice
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


console.log(computerSelection);
 
 
