function startQuiz() {
    $('#start').on('click', function(event){
      renderAQuestion();
    }
    );
  }

/* Displays question number and score obtained */
function updateQuestionAndScore() {
    const html = $(`<ul>
        <li id="js-answered">Questions Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
        <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
      </ul>`);
    $(".question-and-score").html(html);
  }

