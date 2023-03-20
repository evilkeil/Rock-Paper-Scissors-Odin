

let playerVariable;
let computerVariable;

const choices = document.querySelector('#choices ul');

choices.addEventListener('click',function(e){
    if(e.target.className === "rock"){ //asign rock paper or scissors to the img
        playerVariable = 0 ;
    }else if(e.target.className === "paper"){
        playerVariable = 1;
    }else if(e.target.className === "scissors"){
        playerVariable = 2;
    }else{}

    computerVariable = computerSelectionRand(); //fining the slection of PC

    let finalResult = RPC(playerVariable,computerVariable);
    
   console.log(finalResult);
    let victory = "win";
    let defeat = "lose";
    let draw = "draw";

    const winReaction = document.querySelector('.resultImage.win');
    const loseReaction = document.querySelector('.resultImage.lose');
    const drawReaction =document.querySelector('.resultImage.draw');

    // console.log(winReaction);
    // console.log(loseReaction);
    // console.log(drawReaction);

    if(finalResult.includes(victory)){
       winReaction.classList.add('active');
       loseReaction.classList.remove('active');
       drawReaction.classList.remove('active');
    }else if(finalResult.includes(defeat)){
        loseReaction.classList.add('active');
        winReaction.classList.remove('active');
        drawReaction.classList.remove('active');
    }else if(finalResult.includes(draw)){
        drawReaction.classList.add('active');
        winReaction.classList.remove('active');
        loseReaction.classList.remove('active');
    }
    

   resultLogger(finalResult);

   
   

    

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
    let resultfinal;
    switch (true){
        case (player === comp):
            result = `you both picked ${player} so its a draw`;
            resultfinal = "draw";
            break;
        case (player === 0 && comp === 1):
            result ="your opponent chose papers.You lose because `paper covers rock`. ";
            resultfinal ="lose";
            break;
        case (player === 0 && comp === 2):
            result="your opponent chose scissors.You win because `rock beats scissors`.";
            resultfinal ="win";
            break;
        case (player === 1 && comp ===0):
            result="your opponent chose rock.You win because `paper covers rock`.";
            resultfinal ="win";
            break;
        case (player === 1 && comp ===2):
            result="your opponent chose scissors.You lose because `scissors cuts paper `.";
            resultfinal ="lose";
            break;
        case (player === 2 && comp ===0):
            result="your opponent chose rock,You lose because `rock beats scissors`";
            resultfinal ="lose";
            break;
        case (player === 2 && comp ===1):
            result="your opponent chose paper,You win because `scissors cuts paper`";
            resultfinal ="win";
            break;
        default:
            result="please choose a correct choice";
            
        
    }
    return result;
}

function resultLogger(result){
    let li = document.createElement('li');
    let ul = document.querySelector('.resultList');
    if (result.includes("win")){
        li.style.color='#002B5B';
    }else if(result.includes("lose")){
        li.style.color='#EA5455';
    }else if(result.includes("draw")){
        li.style.color='#AD7BE9';
    }{}

    li.textContent=result;
    ul.appendChild(li);

}