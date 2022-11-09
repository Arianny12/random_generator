
var title = document.getElementById("title");
var theInput = document.getElementById("theInput");
var outputImage = document.getElementById("outputText");
var executeButton = document.getElementById("executeButton");

var resultImageElement = document.getElementById("resultImage");
var outputTextElement = document.getElementById("outputText");

var objectArray = [];
objectArray[0] = "baby_human.jpg"
objectArray[1] = "bunny.jpg"
objectArray[2] = "cat.jpeg"
objectArray[3] = "turtle.jpeg"
objectArray[4] = "dog.jpeg"
objectArray[5] = "ducks.jpeg"
objectArray[6] = "elephant.jpeg"
objectArray[7] = "fox.png"
objectArray[8] = "giraffe.jpeg"
objectArray[9] = "bunny2.jpeg"
objectArray[10] = "lion.jpeg"
objectArray[11] = "panda.jpeg"
objectArray[12] = "pig.jpeg"
objectArray[13] = "dog2.avif"
objectArray[14] = "polar_bear.jpeg"
objectArray[15] = "catfrog.jpeg"

executeButton.addEventListener("click", function() {
  var currentInputValue = theInput.value;
  inputNum(currentInputValue);
});

executeButton.addEventListener("click", function() {
  clickFunction(title);
});

function clickFunction(){
  var numRed = Math.random() * 255;
  var numGreen = Math.random() * 255;
  var numBlue = Math.random() * 255;
  var randomColor = "rgb(" + numRed + "," + numGreen + "," + numBlue + ")";

  document.body.style.backgroundColor = randomColor;
  title.style.color = randomColor;
  title.style.textShadow = "0px 0px 10px #fff";
  title.style.transform = "rotate(360deg)"
}

function inputNum(theInput){

  var currentInputAsNumber = parseFloat(theInput);

  console.log("Entered: " + theInput);
  console.log(objectArray[theInput]);


  if (theInput == 0){
    outputTextElement.innerText = "⚠️ SURPRISE ⚠️ You Found The Human";
    resultImageElement.src = objectArray[theInput];
  }
  else if (theInput > 15){
    outputTextElement.innerText = "I said 0-15! TRY AGAIN";
  }
  else if (isNaN(theInput)){
    outputTextElement.innerText = "Please enter a number";
  }
  else if (0 < theInput < 16) {
    outputTextElement.innerText = "You found a cute animal...";
    resultImageElement.src = objectArray[theInput];
  }
  else{
    outputTextElement.innerText = "You were tricked";
  }

}
