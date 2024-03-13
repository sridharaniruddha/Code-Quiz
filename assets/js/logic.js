// creating variables
var timer = document.querySelector(".timer");
var questionsElement = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choice = document.querySelector("#choices");
var starterScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var submitButton = document.querySelector("#submit");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score")
var initials = document.querySelector("#initials")


// to start quiz upon clicking start button
startButton.addEventListener("click", startQuiz);

function startQuiz() {


    // startTimer();
    // displayQuestion();

}
document.g



// function for timer after start button is clicked
var timeLeft = 60;

function startTimer() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "Time over!";
            gameOver(timeInterval);
        }
    }, 1000);
}

function unhideQuestions() {
    starterScreen.classList.add("hide");
    questionsElement.classList.remove("hide");
}

startButton.addEventListener("click", unhideQuestions);
startButton.addEventListener("click", startTimer);

var score = 0;
var currentQuestion = 0;


function showQuestions() {
    questionTitle.textContent = questions[currentQuestion].question;
  
    var choose = questions[currentQuestion].choices;
    for (let i = 0; i < choose.length; i++) {
      var optionButton = document.createElement("button");
      optionButton.textContent = choose[i];
      choice.appendChild(optionButton);
      optionButton.addEventListener("click", correctAnswer);
    }
  }




  function correctAnswer(event) {
    if (questions[currentQuestion].correctAnswer === event.target.textContent) {
      score += 5;
      choice.textContent = "Correct!";
    } else {
      timeLeft -= 10;
      choice.textContent = "Incorrect!";
    }
    currentQuestion++;
    if (currentQuestion < 5) {
      showQuestions();
    } else {
      gameOver();
    }
  }
  showQuestions();




  function gameOver() {
    questionsElement.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = score
  }

  submitButton.addEventListener("click", submit)

  function submit(event) {
    event.preventDefault()
    endScreen.classList.add("hide")
     location.assign("./highscores.html")
    var userData = []
   var storage = JSON.parse(localStorage.getItem("scores"))
   if (storage ){
    userData = storage
   }
    userData.push({initials: initials.value, finalScore: score})
    localStorage.setItem("scores", JSON.stringify(userData))
}