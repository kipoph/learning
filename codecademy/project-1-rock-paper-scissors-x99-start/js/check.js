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
   
                
                if (typeof moveOneValue === 'number'&& typeof moveTwoValue ==='number' && typeof moveThreeValue==='number' && valSum<=99 && moveOneValue>=1 && moveTwoValue>=1 && moveThreeValue>=1){       
                    if (player.toLowerCase() ==='player one'){
                        
                        if(moveOneType ==='rock'|| moveOneType==='paper'||moveOneType==='scissors') playerOneMoveOneType=moveOneType;
                        playerOneMoveOneValue=moveOneValue;
                        if(moveTwoType ==='rock'|| moveTwoType==='paper'||moveTwoType==='scissors') playerOneMoveTwoType=moveTwoType;
                        playerOneMoveTwoValue=moveTwoValue;
                        if(moveThreeType ==='rock'|| moveThreeType==='paper'||moveThreeType==='scissors')playerOneMoveThreeType=moveThreeType;     
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
setPlayerMoves('player one','scissors',32,'rock',2,'scissors',33);
setPlayerMoves('player two','paper',33,'scissors',33,'rock',13);
console.log(getRoundWinner('3'));

