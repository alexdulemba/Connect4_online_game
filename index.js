var bodyBackgroundColor = document.body.style.backgroundColor;
var redText = document.getElementById("red-text");
var blackText = document.getElementById("black-text");
var counter = 1;
var circleColors = ["red", "black"]; // will start with black

function changeCircleColor(element) {
   let currentColor = element.style.backgroundColor;
   if (counter % 2 == 0) {
      if (!circleColors.includes(currentColor)) {
         element.style.backgroundColor = circleColors[0];
         redText.style.visibility = "hidden";
         blackText.style.visibility = "visible";
         counter++;
      }
   } else {
      if (!circleColors.includes(currentColor)) {
         element.style.backgroundColor = circleColors[1];
         redText.style.visibility = "visible";
         blackText.style.visibility = "hidden";
         counter++;
      }
   }
}

function resetGame() {
   let circles = document.getElementsByClassName("circle");
   Array.from(circles).forEach((element) => {
      element.style.backgroundColor = bodyBackgroundColor;
   });
   redText.style.visibility = "hidden";
   blackText.style.visibility = "hidden";
}

// function clickAndRelease(element) {
//    let currentColor = getComputedStyle(element).getPropertyValue("background-color");
//    let parts = currentColor.match(/[\d.]+/g);
//    parts[3] = 0.5;
//    element.style.backgroundColor = `rgba(${parts.join(',')})`;
// }
