const cells = document.getElementsByClassName('cell');
const cellElements = document.querySelectorAll('.cell')
const cellBtn = document.getElementById('cellBtn');
const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');
const showStatus = document.getElementById('showStatus') 
const currentPlayerHighlighter = document.getElementById('currentPlayerHighlighter'); 
const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')

let scoreX = 0;
let scoreO = 0;

let hasAnyoneWon = false;

let currentPlayer = 'X';

for (let i = 0; i < cells.length; i++) { // we go over the class and attaching a event lisner to all of them
    cells[i].addEventListener('click', changeDiv);
}

function changeDiv(event){
    const currentPlayerHighlighter = document.getElementById('currentPlayerHighlighter');

    if (event.target.textContent == ""){
        if (currentPlayer == 'X'){
            if(hasAnyoneWon){
                return
            }
            event.target.textContent = currentPlayer;
            event.target.style.color = 'red';

            checkWin()

            currentPlayer = 'O';
            currentPlayerHighlighter.textContent = currentPlayer;
            currentPlayerHighlighter.style.color = 'blue' 
        }
        else{
            if(hasAnyoneWon){
                return
            }
            event.target.textContent = currentPlayer;
            event.target.style.color = 'blue';
            checkWin()

            currentPlayer = 'X';
            currentPlayerHighlighter.textContent = currentPlayer;
            currentPlayerHighlighter.style.color = 'red';
        } 
    }
}
function resetBtn(){
    hasAnyoneWon = false;
    for(let i = 0; i < cells.length; i++){
        cells[i].textContent = '';
    }
    if(currentPlayer == 'X'){
    showStatus.innerHTML = `Turn for <span style="color: red;" id="currentPlayerHighlighter">${currentPlayer}</span> to move!`;
    }else{
    showStatus.innerHTML = `Turn for <span style="color: blue;" id="currentPlayerHighlighter">${currentPlayer}</span> to move!`;
    }
    currentPlayerHighlighter.textContent = currentPlayer;

}
function checkWin(){
    const winComb = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Center column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal
        [2, 4, 6]];  // Diagonal
        for(const [a,b,c] of winComb){
            const textA = cells[a].textContent;
            const textB = cells[b].textContent;
            const textC = cells[c].textContent;
            if(textA && textA == textB && textA == textC){
                if(textA == "X"){
                    currentPlayer = "X"
                    scoreX += 1;
                    showStatus.innerHTML = `<span id='currentPlayerHighlighter' style="color: red;" >${currentPlayer}</span> has Won!`;
                    xScore.textContent = `X : ${scoreX}`;
                    hasAnyoneWon = true;
                    
                }else{
                    currentPlayer = "O"
                    scoreO += 1;
                    showStatus.innerHTML = `<span id='currentPlayerHighlighter' style="color: blue;" >${currentPlayer}</span> has Won!`;
                    oScore.textContent = `O : ${scoreO}`;
                    hasAnyoneWon = true;


                }
            }
        }
}