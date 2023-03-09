const select= prompt("Rock,Paper,Scisors","choose");

console.log(select);

let choice = (select) => {
    select = select.toLowerCase();
   return select;

}

console.log(choice(select));

const playerSelection= choice(select);

console.log(playerSelection);