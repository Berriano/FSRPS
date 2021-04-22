
 let myTl =0;
 let pcTl =0;

 pcSc = 0;

 mySc = 0;

 tie=0;


 


            //rock player choice assignment

            

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function(){

    if (computerPlay() === "paper"){ 
        
        ++pcSc;


        choices.textContent =  "The computer chose paper - You lose!!";
        scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    
    }
    else if (computerPlay() === "rock"){
        ++tie;
        
        choices.textContent  = "The computer chose rock - Its a tie!!";
        scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;

}
    else {++mySc; 
        
        
        choices.textContent  = "The computer chose scissors - You win!!";
        scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
}


finalScore();
endGame();

    
});

 //paper player choice assignment


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function() {

        if(computerPlay() === "scissors"){
            
            ++pcSc;


            choices.textContent =  "The computer chose scissors - You lose!!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
        }
        else if (computerPlay()=== "paper"){

            ++tie;
            
            choices.textContent = "The computer chose paper - Its a tie!!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;

    }
        else {++mySc; 
            
            
            choices.textContent = "The computer chose rock - You win!!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    }
    finalScore();
    endGame();
});


 //scissors player choice assignment

const scissorBtn = document.querySelector('#scissors');
scissorBtn.addEventListener('click', function(){


        if (computerPlay() === "rock"){

            ++pcSc;
            
            
            
            choices.textContent = "The computer chose rock - You lose!!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
   
        }
        else if (computerPlay()=== "scissors"){

            ++tie;
            
            
            choices.textContent = "The computer chose scissors - Its a tie!!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    }
        else {++mySc;
            
            choices.textContent = "The computer chose paper - You win!!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    }

    finalScore();
    endGame();

});




// random pc choice


function computerPlay () {

        let compChoice = Math.floor(Math.random() * 3);

        if (compChoice == 0){return "rock";
}

        else if (compChoice == 1){return "paper";
}

        else if (compChoice ==2){return "scissors" ;
}
}
//score div 
function finalScore(){


    if (mySc == 3 && (pcSc >=1 || tie >= 1)){choices.textContent="You are the winner....Congrats";
}
    else if (pcSc == 3 && (mySc >= 1 || tie >= 1)){choices.textContent="PC is the winner....You SUCK!!!";
}

    else if (pcSc + mySc + tie <=5) {;
}
  
    else {choices.textContent="The Game is a tie... You are neither AMAZING or USELESS!!!";}

    
}

function endGame(){

    if (mySc + pcSc + tie >=5){scoreDiv.textContent = `The Game is over. The final score is - You : ${mySc}  PC: ${pcSc}.Press F5!`
  
   
} 
    else {};
}




 const scoreContainer = document.querySelector('#container');
 const scoreDiv = document.createElement('div');
 scoreDiv.classList.add('scoreDiv');
 scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
 scoreContainer.appendChild(scoreDiv);
 scoreDiv.style.cssText = 'padding:100px; background-color:yellow; font-family:arial;font-size:50px;text-align:center;';
 scoreContainer.style.cssText ='background-color:goldenrod;'
const choices = document.createElement('div');
choices.classList.add('choices');
scoreContainer.insertBefore(choices,scoreDiv);
choices.style.cssText = 'padding:100px; background-color:yellow; font-family:arial;font-size:50px;text-align:center;';

//button styling

 scissorBtn.style.cssText ='padding:50px;margin-left:300px;';
paperBtn.style.cssText ='padding:50px;margin-left:300px;';
rockBtn.style.cssText ='padding:50px;margin-left:300px;';


//header

const header =document.querySelector('header');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent='Welcome to Rock, Paper ,Scissors';
title.style.cssText ='text-align:center;font-family:arial;font-size:85px;';
header.appendChild(title);





//end of game funtion

     
     

    




