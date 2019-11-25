var p1 = document.getElementById("p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");

p1.addEventListener("click", function(){
    if (!gameOver) {
        p1score++;
        if (p1score === winningScore) {
            p1display.classList.add("winner");
            gameOver = true;
        }
        p1display.textContent = p1score;
    }
});

p2.addEventListener("click", function(){
    if (!gameOver) {
        p2score++;
        if (p2score === winningScore) {
            p2display.classList.add("winner");
            gameOver = true;
        }
        p2display.textContent = p2score;
    }
});

var resetFunc = function() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score; 
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");    
    gameOver = false;
}

reset.addEventListener("click", function(){
    resetFunc();
});

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    resetFunc();
})