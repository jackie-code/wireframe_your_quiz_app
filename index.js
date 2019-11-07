

/* make first page show and everything else hide */
function startPage(){
    $('.somebackground').hide();
    $('.container').html(`
        <div class="js-start-page">
        //variables to store the quiz score and question number information
        let score = 0;
        let questionNumber = 0;
        
        
        
        
        
        
        
        /* make first page show and everything else hide */
        $(document).ready(function startPage(){  
          $('.somebackground').hide();
            $('.js-start-page').on('click', '#start', function (event) {
              event.preventDefault();
              $('.questionNumber').text(1);
              $('.js-start-page').hide(); 
              console.log("Now you're moving into the actual quiz page...")
              $('.somebackground').show();
              $(createQuestion()).show();
            });
        })
        
        
        
        function updateScore() {
          score++;
          $('.score').text(score);
          
        }
        
        
        function updateQuestionNumber() {
          questionNumber++;
          $('.questionNumber').text(questionNumber + 1);
        }
        
        
          /* Displays the options for the current question */
        function displayQuestionOptions() {
          
          
        }  
              
        
          /*displays the question*/
        
        function displayQuestion() {
          
        $('.question').append(`${STORE.questions[0].question}`);
        
          // for(let i=0; i<STORE.length; i++) {
          //   let qqq = $(`${STORE.questions[i].question}`);
          //     return qqq;
          // }
          // $('.question').append(qqq);
        
        }
          
        
          /* displays results and restart quiz button */
        // function displayResultsAndResetQuiz() {
        //   $(".submit").click(function(event){ 
        //   for(let i=0; i<STORE.length; i++) {
            $(".submit").click(function(event){ 
              event.preventDefault();
              $('.js-start-page').hide();
              updateQuestionNumber();
              
             
            });
        // }
        
          /* checks whether it reached the end of questions list */
        function checkIfEndOfQuestions() {
        
        }
        
          /*checks whether the chosen option is right or wrong and displays respective message*/ 
        function checkRightOrWrongAnswer() {
        
        }
         
                <div>
                    <h1>Welcome to the GMO Quiz App!</h1>
                    <div class="inner">
                        <h2>Press start to test your knowledge</h2>
                        <button type="button" id="start">Start</button>
                    </div>
                </div>
        </div>
    `);

    $('.js-start-page').on('click', '#start', function (event) {
        event.preventDefault();
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
 