let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0 
};

updateScoreElement();

// if(!score){
//     score={
//         wins:0,
//         losses:0,
//         ties:0
//     };
// }


function playGame(playerMove){
const computerMove = pickComputerMove();

let result = '';


if(playerMove === 'scissors'){


if(computerMove==='rock'){
result='You loose';
}
else if(computerMove==='paper'){
    result='You win';
}
else if(computerMove==='scissors'){
    result='Tie';

}

// alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);

}


else if (playerMove==='Paper'){
    

if(computerMove==='rock'){
 result= 'You win';
}
else if(computerMove==='paper'){
  result='Tie';
}
else if(computerMove==='scissors'){
  result='You loose';

}

//   alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
}

else if (playerMove==='rock'){
    
if(computerMove==='rock'){
       result= 'Tie';
    }
else if(computerMove==='paper'){
        result='You loose';
    }
else if(computerMove==='scissors'){
        result='You win';
    
    }
}



    if (result==='You win') {
        score.wins+=1;
    }
    else if(result==='You loose'){
        score.losses+=1;
    }
    else if(result==='Tie'){
        score.ties+=1;
    }
    
   localStorage.setItem('score', JSON.stringify(score));
  
   updateScoreElement();

   document.querySelector('.js-result').
   innerHTML=result;

   document.querySelector('.js-moves').
   innerHTML=`You
    <img src="/icons/${playerMove}-emoji.png" class="move-icon">
    <img src="/icons/${computerMove}-emoji.png" class="move-icon">
    computer`;

 

}

function updateScoreElement(){
document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}` ;
}








//    fUNCTION FOR COMPUTERMOVE


function pickComputerMove() {
const randomNumber =Math.random();

let computerMove = '';


if(randomNumber>=0&&randomNumber<1/3){
    computerMove='rock';
}
else if(randomNumber>=1/3&&randomNumber<2/3){
    computerMove='paper';
}
else{
    computerMove='scissors';
} 

return computerMove;
        } 