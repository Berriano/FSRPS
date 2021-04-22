
 let myTl =0;
 let pcTl =0;

 pcSc = 0;

 mySc = 0;






function computerPlay () {

        let compChoice = Math.floor(Math.random() * 3);

        if (compChoice == 0){return "rock";
}

        else if (compChoice == 1){return "paper";
}

        else if (compChoice ==2){return "scissors" ;
}
}


var game = function aGo(){







    

         let myGo = prompt(" Choose Rock, Paper, or Scissors").toLowerCase();

         //
         let pcGo = computerPlay(); // being called from before
         //

         
         if (myGo === "rock" && pcGo === "paper"){
             ++pcSc;
             console.log("you lose");}
         
         
         else if (myGo === "paper" && pcGo === "scissors"){
             ++pcSc;
             console.log("you lose");}
         

         else if (myGo === "scissors" && pcGo === "rock"){
             ++pcSc;
             console.log("you lose");}

         else if (myGo === "rock" && pcGo === "scissors"){
             ++mySc;
             console.log("you win");}
             
         else if(myGo === "paper" && pcGo === "rock"){
             ++mySc;
             console.log("you win");}
             
         else if  (myGo === "scissors" && pcGo === "paper"){
             ++mySc;
             console.log("you win");}
         
         else { console.log("its a draw");
         }

         function score(){

          
           
           //new
            
           console.log("my Total is : " + mySc + " " + "|" + " " + "PC total is : " + " " + pcSc);
            
         } //new 
        
        
       

         score();   


//end of game funtion

     }
     

     for (let i=0; i<5;i++){

     game();
    

     }





