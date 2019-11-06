

/* make first page show and everything else hide */
function startPage(){
    $('.somebackground').hide();
    $('.container').html(
        <div class="js-start-page">
                <div>
                    <h1>Welcome to the GMO Quiz App!</h1>
                    <div class="inner">
                        <h2>Press start to test your knowledge</h2>
                        <button type="button" id="start">Start</button>
                    </div>
                </div>
        </div>
    );

    $('.js-start-page').on('click', '#start', function (event) {
        console.log("Now you're moving into the actual quiz page...")
        $('.somebackground').show();
        $('.js-start-page').hide(); 
    }
}

/* Displays question number and score obtained */
function displayScore() {

}

  /* Displays the options for the current question */
function displayQuestionOptions() {

}  
      

  /*displays the question*/
function displayQuestion() {

}
  

  /* displays results and restart quiz button */
function displayResultsAndResetQuiz() {

}

  /* checks whether it reached the end of questions list */
function checkIfEndOfQuestions() {

}

  /*checks whether the chosen option is right or wrong and displays respective message*/ 
function checkRightOrWrongAnswer() {

}
 