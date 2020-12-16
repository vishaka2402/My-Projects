const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "Mihai Andrei",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");//get all the elements of the class "answers"
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer =  undefined;
    //const answersEls = document.querySelectorAll("answers");//get all the elements of the class "answers"
    answerEls.forEach((answerEl) => {//Performs the specified action for each node in an list
       if(answerEl.checked){//checks or returns the checked state of the checkbox
           answer =  answerEl.id;//Returns the value of element's id content attribute. Can be set to change it.
       }
    });
    return answer;
}
function deselectAnswers() {//to deselect the option  when it goes to the next question 
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;//uncheck
    });
}
submitBtn.addEventListener("click", () => { //attaches event handler without overwritting existing event.to go to the next question when u press submit
    // check to see the answer
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
       if(currentQuiz<quizData.length) {
           loadQuiz();
       }
       else {//$ is ajQuery syntaxfor selecting html elements and performing some action on them, $(selector),action(),a (selector) to find html elements
        quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
        
        <button onclick="location.reload()">Reload</button>
    `;
    }
    }
})