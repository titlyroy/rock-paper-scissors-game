let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let userScoreboard=document.querySelector("#user-score");
let compScoreboard=document.querySelector("#comp-score");

//generate omputer choice , store all options in an array and using Math class for enerating random numbers and for getting whole numbers multiplying by more than one digit of the last index number. here last index= 2 so multiply with 3.
const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const  randonIndex=Math.floor(Math.random()*3);
    return options[randonIndex];
};
//draw game
const drawGame=() =>{
    msg.innerText="Game is draw! Play again.";
    msg.style.backgroundColor="#012a4a";
    
};

//print user win
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){

        userScore++;
        userScoreboard.innerText = userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
   
    }else{
        compScore++;
        compScoreboard.innerText = compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
       
        
    }
};



//we are using modular functions=> means individual function will do a work.
const playGame = (userChoice)=>{
    // console.log("your choice =",userChoice);
    //comp choice=>
   const compChoice= genCompChoice();
//    console.log("computer choice =",compChoice);
   //logic for in and lose-->
   
   if(userChoice === compChoice){
    drawGame();
   }
   else{
    let userWin=true;
    //paper , scissors
    if(userChoice === "rock"){
        userWin=compChoice==="paper"? false : true;
    }
    //rock,scissors
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"? false : true;
    }
    //rock,paper
    else{
        userWin=compChoice==="scissors"? false : true;

    }
    showWinner(userWin,userChoice,compChoice);
   }
   

   
   
};
// for click on every choices=>
choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
const userChoice=choice.getAttribute("id");
playGame(userChoice);
 });

});
