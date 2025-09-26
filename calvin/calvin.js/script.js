console.log("test")

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
});

document.getElementById("next-btn").style.display = "inline";
document.getElementById("retake-btn").style.display= "none";

}


window.onload = displayQuestion;
