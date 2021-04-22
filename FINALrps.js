 pcSc = 0;

 mySc = 0;

 tie=0;
 
 gameCount=0;

 


            //rock player choice assignment

            

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function(){

    if (computerPlay() === "paper"){ 
        
        ++pcSc;
        ++gameCount;

        divchange.innerHTML= choices.textContent =  "The computer chose paper!";
        scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    
    }
    else if (computerPlay() === "rock"){
        ++tie;
        ++gameCount;

        divchange.innerHTML= choices.textContent  = "The computer chose rock!";
        scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;

}
    else {++mySc; 
        ++gameCount;

        
        divchange.innerHTML= choices.textContent  = "The computer chose scissors!";
        scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
}



endGame();

    
});

 //paper player choice assignment


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function() {

        if(computerPlay() === "scissors"){
            
            ++pcSc;
            ++gameCount;


            divchange.innerHTML= choices.textContent =  "The computer chose scissors!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
        }
        else if (computerPlay()=== "paper"){

            ++tie;
            ++gameCount;

            divchange.innerHTML= choices.textContent = "The computer chose paper!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;

    }
        else {++mySc; 
            
            ++gameCount;

            divchange.innerHTML= choices.textContent = "The computer chose rock!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    }
    
    endGame();
});


 //scissors player choice assignment

const scissorBtn = document.querySelector('#scissors');
scissorBtn.addEventListener('click', function(){


        if (computerPlay() === "rock"){

            ++pcSc;
            
            ++gameCount;

            divchange.innerHTML=  choices.textContent = "The computer chose rock!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
   
        }
        else if (computerPlay()=== "scissors"){

            ++tie;
            ++gameCount;

            
            divchange.innerHTML= choices.textContent = "The computer chose scissors!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    }
        else {++mySc;
            ++gameCount;

            divchange.innerHTML= choices.textContent = "The computer chose paper!";
            scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
    }

  
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


// use swith for all different scores//// use swith for all different scores//// use swith for all different scores//// use swith for all different scores//



function endGame(){

    if (gameCount == 5 && mySc > pcSc){scoreDiv.textContent = `Congratulations, you win ${mySc} : ${pcSc}.  Start Again?`; pcSc =0; mySc =0;gameCount =0;
}
else if (gameCount == 5 && pcSc > mySc){scoreDiv.textContent = `Unlucky, you lose ${mySc} : ${pcSc}.  Start Again?`; pcSc =0; mySc =0; gameCount =0;

}
else if (gameCount ==5 && pcSc == mySc) {scoreDiv.textContent = `The game is a tie. ${mySc} each.  Start Again?`;  pcSc =0; mySc =0; gameCount =0;
}
else {;}
}





 const scoreContainer = document.querySelector('.container');
 const scoreDiv = document.createElement('div');
 scoreDiv.classList.add('scoreDiv');
 scoreDiv.textContent = "my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc;
 scoreContainer.appendChild(scoreDiv);


const choices = document.createElement('div');
choices.classList.add('choices');





//header

const header =document.querySelector('header');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent='Welcome to Rock, Paper ,Scissors';
header.appendChild(title);





//end of game funtion

     
  //play area
  
var divchange = document.getElementById("div8");


    




