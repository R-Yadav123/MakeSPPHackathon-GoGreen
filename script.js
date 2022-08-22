/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

console.log("hi");
var questionCount = 0;
var superecoScore = 0;
var ecoScore = 0;
var notecoScore = 0;
var poorlyecoScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q1a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", eco);
q1a2.addEventListener("click", noteco);
q1a3.addEventListener("click", poorlyeco);

q2a1.addEventListener("click", poorlyeco);
q2a2.addEventListener("click", supereco);
q2a3.addEventListener("click", noteco);

q3a1.addEventListener("click", supereco);
q3a2.addEventListener("click", eco);
q3a3.addEventListener("click", noteco);

q4a1.addEventListener("click", supereco);
q4a2.addEventListener("click", noteco);
q4a3.addEventListener("click", poorlyeco);

q5a1.addEventListener("click", poorlyeco);
q5a2.addEventListener("click", supereco);
q5a3.addEventListener("click", eco);

q6a1.addEventListener("click", poorlyeco);
q6a2.addEventListener("click", eco);
q6a3.addEventListener("click", supereco);

q7a1.addEventListener("click", poorlyeco);
q7a2.addEventListener("click", supereco);
q7a3.addEventListener("click", noteco);

var result = document.getElementById("result");

//#TODO: Define quiz functions here
function supereco() {
  superecoScore += 1;
  questionCount += 1;
  //alert("One point to horse!");
  if (questionCount >= 4) {
    updateResult();
  }
}
function eco() {
  ecoScore += 1;
  questionCount += 1;
  //alert("One point to dolphin!");
  if (questionCount >= 4) {
    updateResult();
  }
}
function noteco() {
  notecoScore += 1;
  questionCount += 1;
  //alert("One point to cat!");
  if (questionCount >= 4) {
    updateResult();
  }
}
function poorlyeco() {
  poorlyecoScore += 1;
  questionCount += 1;
  //alert("One point to dog!");
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult() {
  if (superecoScore >= 3) {
    result.innerHTML =
      "You are Super Eco Friendly! You love helping the enviornment and do the best you can!";
  } else if (ecoScore >= 3) {
    result.innerHTML =
      "You are Eco Friendly! You sometimes like to help out towards your environment and community!";
  } else if (notecoScore >= 3) {
    result.innerHTML =
      "You are Not Eco Friendly! You should try harder towards the environment. ";
  } else if (poorlyecoScore >= 3) {
    result.innerHTML =
      "You are Poorly Eco Friendly! You should try much harder to preserve the environment around you! ";
  } else {
    result.innerHTML =
      "Hmm. The Super Eco Family can't decide. Please try again later.";
  }
}
