

let playerVariable;
let computerVariable;

const choices = document.querySelector('#choices ul');

choices.addEventListener('click',function(e){
    if(e.target.className === "rock"){
        playerVariable = 0 ;
    }else if(e.target.className === "paper"){
        playerVariable = 1;
    }else if(e.target.className === "scissors"){
        playerVariable = 2;
    }else{}

    computerVariable = computerSelectionRand();

    let finalResult = RPC(playerVariable,computerVariable);
    
   console.log(finalResult);
   console.log(playerVariable);
   console.log(computerVariable);

    

})


function computerSelectionRand(){

    //create a function that generates 3 numbers : 0,1 and 2.
    return Math.floor(Math.random() * 3);

 }

 function RPC(playerSelection,computerSelection){
    // The function for rock paper scissors.

    let player = playerSelection; //assign temp variables to make the code easier to read.
    let comp = computerSelection;
    let result;
    switch (true){
        case (player === comp):
            result = `you both picked ${player} so its a draw`;
            break;
        case (player === 0 && comp === 1):
            result ="your opponent chose papers.You lose because `paper covers rock`. ";
            break;
        case (player === 0 && comp === 2):
            result="your opponent chose scissors.You win because `rock beats scissors`.";
            break;
        case (player === 1 && comp ===0):
            result="your opponent chose rock.You win because `paper covers rock`.";
            break;
        case (player === 1 && comp ===2):
            result="your opponent chose scissors.You lose because `scissors cuts paper `.";
            break;
        case (player === 2 && comp ===0):
            result="your opponent chose rock,You lose because `rock beats scissors`";
            break;
        case (player === 2 && comp ===1):
            result="your opponent chose paper,You win because `scissors cuts paper`";
            break;
        default:
            result="please choose a correct choice";
            
        
    }
    return result;
}

