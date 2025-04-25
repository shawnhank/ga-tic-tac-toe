
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
const players = {
  '1': 'X',
  '-1': 'O',
};
console.log(players);
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/
//squareEls stores the state of all nine boxes by css class '.sqr'
const squareEls = document.querySelectorAll('.sqr');
console.log(squareEls);
//messageEl stores the state of the players turn. only h2 tag in html
const messageEl = document.querySelector('h2');
console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/
init();
// setting up the board... all nine squares
function init() {
  // The nine elements in the board array will correspond to a square on the board.
  // board[0] is the top left square and each index position moves from left to right
  // starting at board[0] and ending at board[9] at the 3rd row last square.
  board = [null, null, null, null, null, null, null, null,  null];
  // winner indicates either player 1 (1) or player 2 (-1)
  winner = null;
  // turn indicates the turn of player 1 or player 2
  turn = 1;
  //logging 
  console.log(init);
  render();
}

// The purpose of the render() function is to 
// "transfer" visualize ALL state to/in the DOM
function render() {
  renderBoard();
  renderMessage();
  renderControls();
}

function renderBoard() {

}

function renderMessage() {

}

function renderControls() {

}


