
var title = document.getElementById("title");
// var theInput = document.getElementById("theInput");
var outputImage = document.getElementById("outputText");
var executeButton = document.getElementById("executeButton");

var resultImageElement = document.getElementById("resultImage");
var outputTextElement = document.getElementById("outputText");

// var babyHuman = document.getElementByClass("baby_human");
// var bunny = document.getElementByClass("bunny");
// var bunny2 = document.getElementByClass("bunny2");
// var cat = document.getElementByClass("cat");
// var catfrog = document.getElementByClass("catfrog");
// var dog = document.getElementByClass("dog");
// var dog2 = document.getElementByClass("dog2");
// var ducks = document.getElementByClass("ducks");
// var elephant = document.getElementByClass("elephant");
// var fox = document.getElementByClass("fox");
// var giraffe = document.getElementByClass("giraffe");
// var lion = document.getElementByClass("lion");
// var panda = document.getElementByClass("panda");
// var pig = document.getElementByClass("pig");
// var polarBear = document.getElementByClass("polar_bear");
// var turtle = document.getElementByClass("turtle");

// var objectArray = [babyHuman,bunny,bunny2,cat,catfrog,dog,dog2,ducks,elephant,fox,giraffe,lion,panda,pig,polarBear,turtle];

var objectArray = [];
objectArray[0] = "baby_human.jpg"
objectArray[1] = "bunny.jpg"
objectArray[2] = "bunny2.jpeg"
objectArray[3] = "cat.jpeg"
objectArray[4] = "catfrog.jpeg"
objectArray[5] = "dog.jpeg"
objectArray[6] = "dog2.avif"
objectArray[7] = "ducks.jpeg"
objectArray[8] = "elephant.jpeg"
objectArray[9] = "fox.png"
objectArray[10] = "giraffe.jpeg"
objectArray[11] = "lion.jpeg"
objectArray[12] = "panda.jpeg"
objectArray[13] = "pig.jpeg"
objectArray[14] = "polar_bear.jpeg"
objectArray[15] = "turtle.jpeg"

var input = prompt("Enter a number from 0-15");

// theInput.addEventListener("text", inputNum(theInput,outputImage);{
executeButton.addEventListener("click", function() {
  // var currentInputValue = input;
  inputNum(input);
});

executeButton.addEventListener("click", function() {
  // var currentInputValue = input;
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
  // title.classList.toggle("specialTitle");
}

function inputNum(theInput){

  // var currentInputText = theInput.value;
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
  else if (0 < theInput < 16) {
    outputTextElement.innerText = "You found a cute animal🥹...";
    resultImageElement.src = objectArray[theInput];
  }
  else{
    outputTextElement.innerText = "You were tricked";
  }

}



// <button onclick = "functionname()">click me here lol<button/>
//
// element.addEventListener("click" anyfunction(){
//   // code i want to run; });
//
// var inputContent = document.getElementById("My Input").value;
// alert("Your input "+inputContents +"!")
