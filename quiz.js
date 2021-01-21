var quizData = [
    {question : 'HTML stands for:',
    a : 'hypertext markup language',
    b : 'Hypertropic Markup Language',
    c : 'Hierarchy Text Markup Language',
    d : 'Hierarchy Text Manual Language',
    correct : 'a'
},{
    question : 'What does DIV technically stand for?',
    a : 'section',
    b : 'box',
    c : 'container',
    d : 'division',
    correct : 'c'
},{
    question : 'The "br" element is used for...',
    a : 'Breaking the Web Page',
    b : 'Creating Line Breaks in text',
    c : 'Creating Breaks in reading text',
    d : 'Adding a Paragraph to text',
    correct : 'b'
},{
    question :' CSS stand for',
    a : 'creativr Style Sheets',
    b : 'colorful Style Sheets',
    c : 'Computer Style Sheets',
    d : 'Cascading Style Sheets',
    correct : 'd'

},
{
    question : 'Who is making the Web standards?',
    a : 'mozilla firefox' ,
    b : 'microsoft',
    c : 'the world wibe web' ,
    d : 'google',
    correct :'b'
}
];
// console.log(quizData);
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");
var currentQuiz = 0;
var score = 0;
loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

