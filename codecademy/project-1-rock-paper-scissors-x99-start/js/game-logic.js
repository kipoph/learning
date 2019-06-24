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
//had annoying bug becuase I set the moves with correct type and value before checking all . if one eror is found should set no moves
const setPlayerMoves = (player,moveOneType,moveOneValue,moveTwoType,moveTwoValue,moveThreeType,moveThreeValue) => {
    let valSum =moveOneValue+moveTwoValue+moveThreeValue;
    
    
    if (typeof moveOneValue === 'number'&& typeof moveTwoValue ==='number' && typeof moveThreeValue==='number' && valSum<=99 && moveOneValue>=1 && moveTwoValue>=1 && moveThreeValue>=1){       
        if (player.toLowerCase() ==='player one'){
            
            if(typeof moveOneType==='string' && moveOneType ==='rock'|| moveOneType==='paper'||moveOneType==='scissors') {
                if(typeof moveTwoType==='string' && moveTwoType ==='rock'|| moveTwoType==='paper'||moveTwoType==='scissors'){
                    if(typeof moveThreeType==='string' && moveThreeType ==='rock'|| moveThreeType==='paper'||moveThreeType==='scissors'){
                        playerOneMoveOneType=moveOneType;
                        playerOneMoveOneValue=moveOneValue;
                        playerOneMoveTwoType=moveTwoType;
                        playerOneMoveTwoValue=moveTwoValue;
                        playerOneMoveThreeType=moveThreeType; 
                        playerOneMoveThreeValue=moveThreeValue;
                    }
                }
            }
            
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
    if (roundNumber===1){
        if (playerOneMoveOneType&&playerOneMoveOneValue&&playerTwoMoveOneType&&playerTwoMoveOneValue){
            if (playerOneMoveOneType===playerTwoMoveOneType){
                if(playerOneMoveOneValue===playerTwoMoveOneValue){
                    return 'Tie';
                } else if (playerOneMoveOneValue>playerTwoMoveOneValue){
                    return 'Player One';
                }else {
                    return 'Player Two';
                }
            }else if (playerOneMoveOneType==='rock'){
                if (playerTwoMoveOneType==='paper'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }else if (playerOneMoveOneType==='paper'){
                if (playerTwoMoveOneType==='scissors'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }else if (playerOneMoveOneType==='scissors'){
                if (playerTwoMoveOneType==='rock'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }
        }else {
            return null;
        }      
    }else if(roundNumber===2){
        if(playerOneMoveTwoType&&playerOneMoveTwoValue&&playerTwoMoveTwoType&&playerTwoMoveTwoValue){
            if (playerOneMoveTwoType===playerTwoMoveTwoType){
                if(playerOneMoveTwoValue===playerTwoMoveTwoValue){
                    return 'Tie';
                } else if (playerOneMoveTwoValue>playerTwoMoveTwoValue){
                    return 'Player One';
                }else {
                    return 'Player Two';
                }
            }else if (playerOneMoveTwoType==='rock'){
                if (playerTwoMoveTwoType==='paper'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }else if (playerOneMoveTwoType==='paper'){
                if (playerTwoMoveTwoType==='scissors'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }else if (playerOneMoveTwoType==='scissors'){
                if (playerTwoMoveTwoType==='rock'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }          
        }else {
            return null;
        }
    } else if (roundNumber===3){
        if(playerOneMoveThreeType&&playerOneMoveThreeValue&&playerTwoMoveThreeType&&playerTwoMoveThreeValue){
            if (playerOneMoveThreeType===playerTwoMoveThreeType){
                if(playerOneMoveThreeValue===playerTwoMoveThreeValue){
                    return 'Tie';
                } else if (playerOneMoveThreeValue>playerTwoMoveThreeValue){
                    return 'Player One';
                }else {
                    return 'Player Two';
                }
            }else if (playerOneMoveThreeType==='rock'){
                if (playerTwoMoveThreeType==='paper'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }else if (playerOneMoveThreeType==='paper'){
                if (playerTwoMoveThreeType==='scissors'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }else if (playerOneMoveThreeType==='scissors'){
                if (playerTwoMoveThreeType==='rock'){
                    return 'Player Two';
                } else{
                    return 'Player One';
                }
            }
        }else {
            return null;
        }
    } 
    else{
        return null;
    }    
}
const getGameWinner = () => {
    let playerOneScore=0;
    let playerTwoScore=0;
    for (let i=0;i<3;i++){
        let roundWinner=getRoundWinner(i+1)
        if(roundWinner===null) {
            return null;
        } else if (roundWinner==='Player One'){
            playerOneScore++;
        } else if (roundWinner==='Player Two'){
            playerTwoScore++;
        } else {}
    }
    if (playerOneScore===playerTwoScore){
        return 'Tie'
    }else if (playerOneScore>playerTwoScore){
        return 'Player One';
    }else if (playerOneScore<playerTwoScore) {
        return 'Player Two';
    }

}
const setMoveType=()=>{
    let moveNum=Math.floor(Math.random()*3);
    if(moveNum===0) {
        return 'rock';
    }else if(moveNum===1){
        return 'paper';
    }else{
        return 'scissors';
    }
}
const setComputerMoves=()=>{
    playerTwoMoveOneType=setMoveType();
    playerTwoMoveTwoType=setMoveType();
    playerTwoMoveThreeType=setMoveType();
    playerTwoMoveOneValue = (Math.floor(Math.random()*97))+1;
    playerTwoMoveTwoValue = (Math.floor(Math.random()*(98-playerTwoMoveOneValue)))+1;
    playerTwoMoveThreeValue = 99-playerTwoMoveTwoValue-playerTwoMoveOneValue;
}

