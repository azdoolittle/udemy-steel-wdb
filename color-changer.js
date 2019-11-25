var colorButton = document.getElementById("color-button");
var isPurple = false;

var changeColor = function (){
//  if (isPurple) {
// document.body.style.background = "white";
//  } else {
//      document.body.style.background = "purple";
//  };
//  isPurple = !isPurple

// white to purple vs purple class to no class

document.body.classList.toggle("purple")
}

colorButton.addEventListener("click", changeColor);