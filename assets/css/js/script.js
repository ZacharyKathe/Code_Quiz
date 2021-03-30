var questionArray = [
   {
    question1: "What is an albatross in golf?",
    answer1: "Made 3 under par for the hole",
    answer2: "2 under par for the hole",
    answer3: "Hole-in-one",
    answer4: "Went out of bounds then made par",
    correctAnswer: "Made 3 under par for the hole",
},
{
    question2: "What does a red line or stake mean in golf?",
    answer1: "Out of bounds",
    answer2: "Free drop",
    answer3: "Hazard area",
    answer4: "There are none",
    correctAnswer: "Hazard area",

},
{
    question3: "What does a white line or stake mean in golf?",
    answer1: "Free ball drop",
    answer2: "Water area",
    answer3: "Hazard section",
    answer4: "Signals out of bounds",
    correctAnswer: "Signals out of bounds",

},
{
    question4: "What does 'fore' mean in golf?",
    answer1: "A great score",
    answer2: "Made a putt from distance",
    answer3: "Watch out my ball is heading your way",
    answer4: "How you signal the cart girl",
    correctAnswer: "Watch out my ball is heading your way",

},
{
    question5: "What does a yellow line or steak mean in golf?",
    answer1: "Out of play",
    answer2: "Free club drop",
    answer3: "Hazard drop area",
    answer4: "Water zone",
    correctAnswer: "Water zone",

}


]

var score = 0;
var incorrect = 0;

var countdown = document.getElementById('gameClock')

var nextButton = document.getElementById("next")
console.log(nextButton)
var btnToPlay = document.getElementById("do_play")
console.log(btnToPlay)
var currentQuestion = document.getElementById("current_question")
var slot_1 = document.getElementById("answer_1")
console.log(slot_1)
var slot_2 = document.getElementById("answer_2")
console.log(slot_2)
var slot_3 = document.getElementById("answer_3")
var slot_4 = document.getElementById("answer_4")





///starting the game

btnToPlay.addEventListener("click", function(event){
    currentQuestion.innerHTML = questionArray[0].question1;
    slot_1.innerHTML = questionArray[0].answer1;
    slot_2.innerHTML = questionArray[0].answer2;
    slot_3.innerHTML = questionArray[0].answer3;
    slot_4.innerHTML = questionArray[0].answer4;
    var timeRemaining = 20;
var timer = setInterval(function(){
  if (timeRemaining <=0){
    clearInterval(timer);
    countdown.innerHTML = "All out of Time";
  }else {
    countdown.innerHTML = timeRemaining + " seconds left"
  }
  timeRemaining -= 1;
}, 1000)
    event.stopPropagation();
})
 //testing question 2
 slot_1.addEventListener("click", function(event){
    if(slot_1.innerHTML === "Made 3 under par for the hole"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      score++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[1].question2;
      slot_1.innerHTML = questionArray[1].answer1;
      slot_2.innerHTML = questionArray[1].answer2;
      slot_3.innerHTML = questionArray[1].answer3;
      slot_4.innerHTML = questionArray[1].answer4;
    }else if(slot_1.innerHTML === "Out of bounds"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[2].question3;
      slot_1.innerHTML = questionArray[2].answer1;
      slot_2.innerHTML = questionArray[2].answer2;
      slot_3.innerHTML = questionArray[2].answer3;
      slot_4.innerHTML = questionArray[2].answer4;
    }else if(slot_1.innerHTML === "Free ball drop"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[3].question4;
      slot_1.innerHTML = questionArray[3].answer1;
      slot_2.innerHTML = questionArray[3].answer2;
      slot_3.innerHTML = questionArray[3].answer3;
      slot_4.innerHTML = questionArray[3].answer4;
    }else if(slot_1.innerHTML === "A great score"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[4].question5;
      slot_1.innerHTML = questionArray[4].answer1;
      slot_2.innerHTML = questionArray[4].answer2;
      slot_3.innerHTML = questionArray[4].answer3;
      slot_4.innerHTML = questionArray[4].answer4;
    }else if(slot_1.innerHTML === "Out of play"){
        slot_1.innerHTML = "";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
        currentQuestion.innerHTML = "";
        currentQuestion.innerHTML = "you got:" + score + "right!";
        slot_1.innerHTML = "you got:" + incorrect + "wrong";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
      event.stopPropagation();}
})

slot_2.addEventListener("click", function(event){
    if(slot_2.innerHTML === "2 under par for the hole"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[1].question2;
      console.log(currentQuestion)
      slot_1.innerHTML = questionArray[1].answer1;
      slot_2.innerHTML = questionArray[1].answer2;
      slot_3.innerHTML = questionArray[1].answer3;
      slot_4.innerHTML = questionArray[1].answer4;
    }else if(slot_2.innerHTML === "Free drop"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[2].question3;
      slot_1.innerHTML = questionArray[2].answer1;
      slot_2.innerHTML = questionArray[2].answer2;
      slot_3.innerHTML = questionArray[2].answer3;
      slot_4.innerHTML = questionArray[2].answer4;
    }else if(slot_2.innerHTML === "Water area"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[3].question4;
      console.log(currentQuestion)
      slot_1.innerHTML = questionArray[3].answer1;
      slot_2.innerHTML = questionArray[3].answer2;
      slot_3.innerHTML = questionArray[3].answer3;
      slot_4.innerHTML = questionArray[3].answer4;
    }else if(slot_2.innerHTML === "Made a putt from distance"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[4].question5;
      slot_1.innerHTML = questionArray[4].answer1;
      slot_2.innerHTML = questionArray[4].answer2;
      slot_3.innerHTML = questionArray[4].answer3;
      slot_4.innerHTML = questionArray[4].answer4;
    }else if(slot_2.innerHTML === "Free club drop"){
        slot_1.innerHTML = "";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
        currentQuestion.innerHTML = "";
        currentQuestion.innerHTML = "you got:" + score + "right!";
        slot_1.innerHTML = "you got:" + incorrect + "wrong";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
    event.stopPropagation();}
})

slot_3.addEventListener("click", function(event){
    if(slot_3.innerHTML === "Hole-in-one"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[1].question2;
      slot_1.innerHTML = questionArray[1].answer1;
      slot_2.innerHTML = questionArray[1].answer2;
      slot_3.innerHTML = questionArray[1].answer3;
      slot_4.innerHTML = questionArray[1].answer4;
    }else if(slot_3.innerHTML === "Hazard area"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      score++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[2].question3;
      slot_1.innerHTML = questionArray[2].answer1;
      slot_2.innerHTML = questionArray[2].answer2;
      slot_3.innerHTML = questionArray[2].answer3;
      slot_4.innerHTML = questionArray[2].answer4;
    }else if(slot_3.innerHTML === "Hazard section"){
        slot_1.innerHTML = "";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
        incorrect++;
        currentQuestion.innerHTML = "";
        currentQuestion.innerHTML = questionArray[3].question4;
        slot_1.innerHTML = questionArray[3].answer1;
        slot_2.innerHTML = questionArray[3].answer2;
        slot_3.innerHTML = questionArray[3].answer3;
        slot_4.innerHTML = questionArray[3].answer4;
    }else if(slot_3.innerHTML === "Watch out my ball is heading your way"){
        slot_1.innerHTML = "";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
        score++;
        currentQuestion.innerHTML = "";
        currentQuestion.innerHTML = questionArray[4].question5;
        slot_1.innerHTML = questionArray[4].answer1;
        slot_2.innerHTML = questionArray[4].answer2;
        slot_3.innerHTML = questionArray[4].answer3;
        slot_4.innerHTML = questionArray[4].answer4;
    }else if(slot_3.innerHTML === "Hazard drop area"){
        slot_1.innerHTML = "";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
        currentQuestion.innerHTML = "";
        currentQuestion.innerHTML = "you got:" + score + "right!";
        slot_1.innerHTML = "you got:" + incorrect + "wrong";
        slot_2.innerHTML = "";
        slot_3.innerHTML = "";
        slot_4.innerHTML = "";
    
      
    event.stopPropagation();}
})

slot_4.addEventListener("click", function(event){
    if(slot_4.innerHTML === "Went out of bounds then made par"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[1].question2;
      slot_1.innerHTML = questionArray[1].answer1;
      slot_2.innerHTML = questionArray[1].answer2;
      slot_3.innerHTML = questionArray[1].answer3;
      slot_4.innerHTML = questionArray[1].answer4;
    }else if(slot_4.innerHTML === "There are none"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[2].question3;
      slot_1.innerHTML = questionArray[2].answer1;
      slot_2.innerHTML = questionArray[2].answer2;
      slot_3.innerHTML = questionArray[2].answer3;
      slot_4.innerHTML = questionArray[2].answer4;
    }else if(slot_4.innerHTML === "Signals out of bounds"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      score++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[3].question4;
      slot_1.innerHTML = questionArray[3].answer1;
      slot_2.innerHTML = questionArray[3].answer2;
      slot_3.innerHTML = questionArray[3].answer3;
      slot_4.innerHTML = questionArray[3].answer4;
    }else if(slot_4.innerHTML === "How you signal the cart girl"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      incorrect++;
      currentQuestion.innerHTML = "";
      currentQuestion.innerHTML = questionArray[4].question5;
      slot_1.innerHTML = questionArray[4].answer1;
      slot_2.innerHTML = questionArray[4].answer2;
      slot_3.innerHTML = questionArray[4].answer3;
      slot_4.innerHTML = questionArray[4].answer4;
    }else if(slot_4.innerHTML === "Water zone"){
      slot_1.innerHTML = "";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
      currentQuestion.innerHTML = "";
      score++;
      currentQuestion.innerHTML = "you got: " + score + "  right!";
      slot_1.innerHTML = "you got:" + incorrect + "wrong";
      slot_2.innerHTML = "";
      slot_3.innerHTML = "";
      slot_4.innerHTML = "";
    
    event.stopPropagation();}
})


// question array 1






