// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveOneValue; 
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player,moveOneType,moveOneValue,moveTwoType,moveTwoValue,moveThreeType,moveThreeValue) => {
    let valSum =moveOneValue+moveTwoValue+moveThreeValue;
    if (typeof moveOneType==='string'&& typeof moveTwoType==='string'&& typeof moveThreeType==='string' && typeof moveOneValue === 'number'&& typeof moveTwoValue ==='number' && typeof moveThreeValue==='number' && valSum<=99 && moveOneValue>=1 && moveTwoValue>=1 && moveThreeValue>=1){       
        if (player.toLowerCase() ==='player one'){
            
            playerOneMoveOneType=moveOneType;
            playerOneMoveOneValue=moveOneValue;
            playerOneMoveTwoType=moveTwoType;
            playerOneMoveTwoValue=moveTwoValue;
            playerOneMoveThreeType=moveThreeType;       
            playerOneMoveThreeValue=moveThreeValue;
        } else if(player.toLowerCase()==='player two') {
            playerTwoMoveOneType=moveOneType;
            playerTwoMoveOneValue=moveOneValue;
            playerTwoMoveTwoType=moveTwoType;
            playerTwoMoveTwoValue=moveTwoValue;
            playerTwoMoveThreeType=moveThreeType;
            playerTwoMoveThreeValue=moveThreeValue;
        }
    }
}
const getRoundWinner = (roundNumber) => {
    
}
