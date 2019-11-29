// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// ];

var numSq = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSqs();
  reset();

}

function setUpModeButtons(){
  for (var i = 0; i < modeButtons.length;i++) {
      modeButtons[i].addEventListener("click", function () {
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
          this.classList.add("selected");
          this.textContent === "Easy" ? numSq = 3 : numSq = 6;
          reset();
      });
    }
}

function setUpSqs() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function() {
          var clickedColor = this.style.backgroundColor;
          if (pickedColor === clickedColor) {
              messageDisplay.textContent = "Correct!";
              resetButton.textContent = "Play again?"
              changeColors(pickedColor);
              h1.style.backgroundColor = pickedColor
          } else {
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try again!";
  
          }
      });
    }
}


function reset() {
    colors = generateRandomColors(numSq);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"
}


// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSq = 3
//     colors = generateRandomColors(numSq);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSq = 6
//     colors = generateRandomColors(numSq);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSq);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
})

function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
};