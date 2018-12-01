
    //User picks an option
    var userChoice;
    var rpc = ["Paper", "Rock", "Scissors"];
    var computerResult;
    var result;
    
    var rock = document.body.querySelector(".rock");
    rock.addEventListener("click", function(){
        userChoice = "Rock";
        computerChoice();
    });

    var paper = document.body.querySelector(".paper");
    paper.addEventListener("click", function(){
        userChoice = "Paper";
        computerChoice();
    });
    
    var scissors = document.body.querySelector(".scissors");
    scissors.addEventListener("click", function(){
        userChoice = "Scissors";
        computerChoice();
    });

    //Computer picks an option
    function computerChoice(){
    computerResult = rpc[Math.floor(Math.random()*rpc.length)];
    console.log(computerResult, userChoice);
    compare();
    };

    //Add User & Computer options together and compare

    function compare(){
    if(computerResult===userChoice){
        return "It's a tie!";
    }
    if(computerResult==="rock"){
        if(userChoice==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(computerResult==="paper"){
        if(userChoice==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(computerResult==="scissors"){
        if(userChoice==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
    displayResult()
    };

//Display user & computer options to winner 
function displayResult(){
    var resultContainer = document.body.querySelector("#result");
    resultContainer.innerHTML = result;
    };