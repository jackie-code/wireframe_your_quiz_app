
//variables to store the quiz score and question number information

let score = 0;
let questionNumber = 0;



function updateScore() {
  score++;
  $('.score').text(score);
}


function updateQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber);
}
    

  /*displays the question*/

function displayQuestion() {
let question = STORE.questions[questionNumber].question;
console.log(STORE.questions[questionNumber].question);
const displayHTML = $(`<span>${question}</span>`);
$('.question').html(displayHTML);

// $('.question').html(`${STORE.questions[questionNumber].question}`);

}

function checkIfCorrect(){
  // this was so tricky for me to have to console.log everything to figure out
  // where the current question number was currently at and realizing I had to
  // subtract it by one so that it would align with the correct value
  let correctAnswer = STORE.questions[questionNumber - 1].answer;
 
  let radioAnswer = $("input[name='answer']:checked").val();
  
  console.log("correctAnswer: " + correctAnswer);
  console.log("radioAnswer: " + radioAnswer);

  if(correctAnswer === radioAnswer) {
    console.log("correct");
    $('.explanation').text("correct");
    $('.score').text(updateScore());
  }else {
    console.log('incorrect');
    $('.explanation').text("incorrect, the correct answer is: ").append(correctAnswer);
  }

}

function submitAnswer(event) {
  $('.submit').on('click', function (event) {
event.preventDefault();
$('.explanation').show();
updateQuestionNumber();
checkIfCorrect();

$('.inner').hide();
$('.question').hide();
$('.next').show();
clickNext();

displayQuestion();
checkIfEndOfQuestions();
fadeIt ();
  });
}

function clickNext(event) {
$('.next').on('click', function(event){
  $('.explanation').hide();
  $('.inner').show();
  $('.question').show();
  $('.next').hide(); 
  fadeIt ();
});
}

  /* checks whether it reached the end of questions list */
  function checkIfEndOfQuestions() {
  if(questionNumber >= 10){
    
    console.log("should be at number 10 now...")
    $('.inner').hide();
    $('.next').hide();


      if(score > 7){
          $('.finished').show();
      }else {
        $('.finishedBad').show();
      }
  restartQuiz()
  }
  }



 /* make first page show and everything else hide */
$('document').ready(function startPage(){  
  $('.somebackground').hide();
  $('.finished').hide();
  $('.finishedBad').hide();
    $('.js-start-page').on('click', '#start', function (event) {
      event.preventDefault();
      $('.explanation').hide();
      $('.next').hide();
      $('.questionNumber').text();
      $('.js-start-page').hide(); 
      console.log("Now you're moving into the actual quiz page...")
      $('.somebackground').show();
      $(createQuestion()).show();
    });
    submitAnswer(event)
    displayQuestion()
})



function resetStats() {
  score = 0;
  questionNumber = 0;
  $('.score').text(0);
  $('.questionNumber').text(0);
}
 
//  restarts quiz
function restartQuiz() {
$('.retake').on('click', function(event){
event.preventDefault();
console.log('!!!pressed retake button!!!');
resetStats();
fadeIt ();
displayQuestion();
$('.inner').show();
$('.finished').hide();
$('.finishedBad').hide();
$('.question').show();
$('.explanation').hide();
})
}





function fadeIt () {
  var div = $(".fade");
  var btn = $(".fadeButton");
  btn.on("click", function(){
    div.classList.add("elementToFadeInAndOut");
    // Wait until the animation is over and then remove the class, so that
    // the next click can re-add it.
    setTimeout(function(){div.classList.remove("elementToFadeInAndOut");}, 4000);
  });
}