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