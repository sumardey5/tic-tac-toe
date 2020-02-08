/*------Constants------*/
/*------Variables (state)------*/
let board; 
let turn; 
let winner = false; 
let turnCount = 1;

/*------Cached Element References------*/
let squares = document.querySelectorAll('div');
let start = document.querySelector('h2');
let restart = document.querySelector('h3');

/*------Event Listeners------*/
document.querySelector('.board').addEventListener('click', handleClick);
document.querySelector('#play').addEventListener('click', initialize);
document.querySelector('#reset').addEventListener('click', initialize);

/*------Functions------*/
initialize();
function handleClick(event) 
{
    if (winner === false) 
    {
    let id = event.target.id;
    let idx = parseInt(event.target.id.replace('sq', ''));
    console.log(idx);
    console.log(turn);
    board[idx]= turn;
    id = id[2];
    let eventTarg = document.getElementById (event.target.id);

        if(turn === 1)
        {
            eventTarg.innerHTML = 'x';  
            start.textContent = "It's player 2's turn";
        } 
        else 
        {    
            eventTarg.innerHTML = 'o';
            start.textContent = "It's player 1's turn";
        }

    turn *= -1;
    turnCount += 1;

    console.log(eventTarg);
    win();
    }
}

function render()
{
    if (winner === false) 
    {
    for (var i = 0; i < squares.length; i++)
        {   
            squares[i].innerHTML = '';
            console.log(squares[i]);
        }
    }
}

function initialize()
{
    start.textContent = "Let's Play"
    turnCount = 0;
    winner = false; 
    turn = 1;
    board = ['null','null','null','null','null','null','null','null','null'];
    render();
}

function win()
{
    if(turnCount === 9 && (winner === false))
        {
            start.textContent = "It's a tie, hit reset to play again";
            winner = true;
        }

    if(board[0] + board[1] + board[2] === 3 ||
        board[3] + board[4] + board[5] === 3 ||
        board[6] + board[7] + board[8] === 3 ||
        board[0] + board[3] + board[6] === 3 ||
        board[1] + board[4] + board[7] === 3 ||
        board[2] + board[5] + board[8] === 3 ||
        board[0] + board[4] + board[8] === 3 ||
        board[2] + board[4] + board[6] === 3)
        {
            winner = true;
            start.textContent = "Player X Wins!"
        }

    if(board[0] + board[1] + board[2] === -3 ||
        board[3] + board[4] + board[5] === -3 ||
        board[6] + board[7] + board[8] === -3 ||
        board[0] + board[3] + board[6] === -3 ||
        board[1] + board[4] + board[7] === -3 ||
        board[2] + board[5] + board[8] === -3 ||
        board[0] + board[4] + board[8] === -3 ||
        board[2] + board[4] + board[6] === -3)
        {
          winner = true;
          start.textContent = "Player O Wins!"
        }  


}