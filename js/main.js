/*-------------------------------- Pseudocode --------------------------------*/
//1) Define the required variables used to track the state of the game.
// board - state of the squares on the board.
// turn - whose turn it is (1 / -1)
// winner - represents  the winner of the game (1 /-1)
// tie - represents a tie aka no winner aka no nulls

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/

const playerX = 1;
const playerO = -1;
const winCombos= [];

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareELs = document.querySelectorAll('.sqr')
console.log(squareELs);
const messageEl = document.querySelector('.h2')
console.log(messageEl);


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
