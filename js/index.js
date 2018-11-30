//Computer picks an option
var rpc = ["Paper", "Rock", "Scissors"]

var computerChoice = rpc[Math.floor(Math.random()*rpc.length)];

//User picks an option
var userChoice;

var rock = document.body.querySelector(".rock");
rock.addEventListener("click", function() {
    userChoice = "Rock";
    alert('rock')
})

var paper = document.body.querySelector(".paper");
paper.addEventListener("click", function() {
    userChoice = "Paper";
})

var scissors = document.body.querySelector(".scissors");
scissors.addEventListener("click", function() {
    userChoice = "Scissors"
})


//Add User & Computer options together and compare

switch (userChoice) {
    case (computerChoice):
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
}
//Display user & computer options with winner 