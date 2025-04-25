
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
// setting up the board... all nine squares.

function init() {
  // The nine elements in the board array will correspond to a square on the board.
  // board[0] is the top left square and each index position moves from left to right
  // starting at board[0] and ending at board[9] at the 3rd row last square.
  board = [null, null, null, null, null, null, null, null,  null];
  // turn indicates the turn of player 1 or player 2 see constants above for details.
  turn = 1;
  // winner indicates either player 1 (1) or player 2 (-1)
  winner = null;
  // setting tie to false
  tie = false;
  //logging 
  // console.log(init);
  render();
}

// The purpose of the render() function is to 
// "transfer" visualize ALL state to/in the DOM
function render() {
  updateBoard();
  updateMessage();
  renderControls();
}

function updateBoard() {
  //for loop to iterate through each square
  board.forEach(function updateSquare(squareValue, idx) {
    // symbol is a variable to hold an empty string, or a 1 or -1 depending upon player
    let symbol ='';
    // if the squareValue is a 1 paint an X.
    if (squareValue === 1) symbol = players['1'];
    //if the squarevalue is -1 paint an O
    else if (squareValue === -1) symbol = players['-1'];
    squareEls[idx].textContent = symbol;
  });
}

function updateBoard() {
  board. forEach( (value, idx) = {
  if (value === 1) €
  squareEls [idx]. textContent = 'X';
  } else if (value == -1) {
  squareEls [idx]. textContent = '0';
   } else {}
  squareEls [idx]. textContent = '';
}) :
  
function updaterMessage() {
  if (winner === null) {
    msgEl.innerHTML = `'s Turn`;
  } else if (winner === 'Tie') {
    msgEl.innerHTML = "It's a Tie!";
  } else {
    // There's a winner!
    msgEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
  }
}

// function renderControls() {

// }


