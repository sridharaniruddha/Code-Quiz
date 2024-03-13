//calculate and display score
//add resulting score to the local storage 
//clear score from loacal storage??


//variables
var highScores = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")


//clear scores from local storage
clearButton.addEventListener("click", clearScores)

function clearScores (){
    localStorage.clear("scores")
    highScores.innerHTML = ""
    
    }

//old highscores displayed from local storage 
function loadHighscores() {
    var scores = JSON.parse(localStorage.getItem("scores"))

    if (!scores) {
        return;
    }



    for (var i = 0; i < scores.length; i++) {
        var data = scores[i]

        //create a list to display highscores
        var li = document.createElement("li")
        li.textContent = data.initials + " - " + data.finalScore
        highScores.appendChild(li)
    }

} 

loadHighscores()