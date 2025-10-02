

const questions = [
    {
        question: "What is 1 + 1",
        options: ["2", "3", "4", "5"],
        answer: 0
    },
    {
        question: "2+4",
        options: ["2", "6", "4", "5"],
        answer: 1
    },
    {
        question: "4+3",
        options: ["2", "3", "7", "5"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("Question");
    const optionsButtons = document.querySelectorAll(".option");
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    optionsButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.disabled = false;
        button.classList.remove("current", "wrong");
        button.classList.remove("current", "correct");
    });

    document.getElementById("next-btn").style.display = "inline";
    document.getElementById("retake-btn").style.display = "none";
}



function selectAwnser(selectedOptionIndex) {
    const question = questions[currentQuestionIndex];
    const optionsButtons = document.querySelectorAll('.option');

    if (selectedOptionIndex === question.answer) {
        score++;
        optionsButtons[selectedOptionIndex].classList.add("correct");
    } else {
        optionsButtons[selectedOptionIndex].classList.add("wrong");
        optionsButtons[question.answer].classList.add("correct");
    }

    document.getElementById("score").textContent = `Score: ${score}`;
    optionsButtons.forEach(button => button.disabled = true);
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question").textContent = "Quiz Complate!";
    document.querySelector(".option").style.disabled= "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").textContent = `Final Score: ${score}/${questions.length}`;
    document.getElementById
}

window.onload = displayQuestion;
