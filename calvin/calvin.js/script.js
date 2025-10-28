

const questions = [

  // HTML (1-7)
  {
    question: "Wat is het doel van de <!DOCTYPE html> declaratie?",
    options: [
      "Het laadt externe stylesheets",
      "Het specificeert de HTML-versie",
      "Het maakt de website responsief",
      "Het linkt JavaScript-bestanden"
    ],
    answer: 1
  },
  {
    question: "Wat is het verschil tussen <section> en <div>?",
    options: [
      "<section> is semantisch, <div> niet",
      "<div> is alleen voor navigatie",
      "<section> kan geen tekst bevatten",
      "Er is geen verschil"
    ],
    answer: 2
  },
  {
    question: "Welke HTML-tag gebruik je om een lijst met opsommingstekens te maken?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ],
    answer: 0
  },
  {
    question: "Wat doet de 'placeholder' attribuut in een input veld?",
    options: [
      "Voegt standaardwaarde toe die niet gewijzigd kan worden",
      "Geeft een hint of voorbeeldtekst in het veld",
      "Verplicht het invullen van het veld",
      "Verbergt het veld"
    ],
    answer: 1
  },
  {
    question: "Wat is een correcte manier om een afbeelding in HTML weer te geven?",
    options: [
      "<image src='foto.jpg'>",
      "<img href='foto.jpg'>",
      "<img src='foto.jpg' alt='Beschrijving'>",
      "<src img='foto.jpg'>"
    ],
    answer: 2
  },
  {
    question: "Welke HTML-tag gebruik je voor een hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    answer: 1
  },
  {
    question: "Welke van de volgende is een semantisch HTML-element?",
    options: [
      "<span>",
      "<div>",
      "<header>",
      "<br>"
    ],
    answer: 2
  },

  // CSS (8-14)
  {
    question: "Wat doet de 'z-index' eigenschap in CSS?",
    options: [
      "Bepaalt de zoomfactor",
      "Bepaalt de volgorde van lagen",
      "Verandert de tekstgrootte",
      "Positioneert een element links"
    ],
    answer: 1
  },
  {
    question: "Wat is het verschil tussen 'em' en 'rem' in CSS?",
    options: [
      "'em' baseert zich op het ouder-element, 'rem' op root",
      "'rem' is alleen voor media queries",
      "'em' werkt alleen in fonts",
      "Er is geen verschil"
    ],
    answer: 0
  },
  {
    question: "Wat doet 'position: absolute;'?",
    options: [
      "Positioneert relatief ten opzichte van het browservenster",
      "Positioneert t.o.v. het dichtstbijzijnde gepositioneerde ouder-element",
      "Vergrendelt het element",
      "Centreert het element automatisch"
    ],
    answer: 1
  },
  {
    question: "Welke CSS-eigenschap gebruik je om tekst vet te maken?",
    options: [
      "font-weight",
      "text-style",
      "font-thickness",
      "bold"
    ],
    answer: 0
  },
  {
    question: "Wat is een 'media query' in CSS?",
    options: [
      "Een vraag aan de gebruiker",
      "Een methode om HTML te filteren",
      "Een manier om CSS toe te passen op basis van schermgrootte",
      "Een manier om fonts te laden"
    ],
    answer: 2
  },
  {
    question: "Wat is het nut van 'display: flex;'?",
    options: [
      "Om elementen op te maken als tabel",
      "Om elementen verticaal of horizontaal te positioneren",
      "Om kleurverloop toe te passen",
      "Om een element te verbergen"
    ],
    answer: 2
  },
  {
    question: "Wat doet 'overflow: hidden;'?",
    options: [
      "Verbergt inhoud buiten de container",
      "Maakt een element transparant",
      "Verwijdert alle inhoud",
      "Maakt scrollbars zichtbaar"
    ],
    answer: 0
  },

  // JavaScript (15–20)
  {
    question: "Wat is het verschil tussen 'let' en 'var' in JavaScript?",
    options: [
      "'var' is block-scoped, 'let' niet",
      "'let' is block-scoped, 'var' is function-scoped",
      "'let' is ouderwets",
      "Er is geen verschil"
    ],
    answer: 1
  },
  {
    question: "Wat doet 'document.querySelector()'?",
    options: [
      "Zoekt een HTML-element op basis van een CSS-selector",
      "Maakt een nieuw element aan",
      "Verwijdert een element",
      "Selecteert meerdere elementen tegelijk"
    ],
    answer: 0
  },
  {
    question: "Wat is een 'callback' functie?",
    options: [
      "Een functie die pas wordt uitgevoerd nadat een andere functie klaar is",
      "Een functie die altijd als eerste wordt uitgevoerd",
      "Een fout in JavaScript",
      "Een functie die automatisch herhaalt"
    ],
    answer: 0
  },
  {
    question: "Wat is een 'array' in JavaScript?",
    options: [
      "Een type loop",
      "Een verzameling van meerdere waarden in één variabele",
      "Een soort functie",
      "Een voorwaardelijke structuur"
    ],
    answer: 1
  },
  {
    question: "Wat is een 'promise' in JavaScript?",
    options: [
      "Een methode om gegevens op te slaan",
      "Een object dat de uiteindelijke voltooiing (of mislukking) van een asynchrone operatie vertegenwoordigt",
      "Een manier om CSS toe te passen",
      "Een soort array"
    ],
    answer: 1
  },
  {
    question: "Wat is het resultaat van: '2' + 2 in JavaScript?",
    options: [
      "4",
      "NaN",
      "'22'",
      "undefined"
    ],
    answer: 2
  }

];

let currentQuestionIndex = 0;
let score = 0;
let superpowerUsed = false;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsButtons = document.querySelectorAll(".option");
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    optionsButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.disabled = false;
        button.style.display = 'inline-block';
        button.classList.remove("current", "wrong");
        button.classList.remove("current", "correct");
    });

    document.getElementById("next-btn").style.display = "inline";
    document.getElementById("retake-btn").style.display = "none";

    superpowerUsed = false;
    if (superpowerBtn) {
        superpowerBtn.disabled = false;
    }
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
  const questionElement = document.getElementById("question");
    const optionsButtons = document.querySelectorAll(".option");

    // Verberg alle antwoordknoppen
    optionsButtons.forEach(btn => btn.style.display = "none");

    // Verberg de "volgende" knop
    document.getElementById("next-btn").style.display = "none";

    // Toon eindscore en feedback
    const feedbackMessage = score > 10 
        ? "Gefeliciteerd, je hebt het behaald!" 
        : "Jammer, volgende keer beter.";
        
    questionElement.innerHTML = `
    <h2>Quiz voltooid!</h2>
        <p>Je hebt ${score} van de ${questions.length} vragen goed beantwoord.</p>
        <p><strong>${feedbackMessage}</strong></p>
    `;

    // Toon opnieuw spelen knop
    document.getElementById("retake-btn").style.display = "inline";
} 

function retakeQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    

    document.getElementById("score").textContent = `Score: ${score}`;
    
    // Toon opnieuw de knoppen
    document.querySelectorAll(".option").forEach(btn => {
      btn.style.display = "inline-block";
    });
    
    displayQuestion();
  }
  
const superpowerBtn = document.getElementById("superpower-btn");
if (superpowerBtn) {
    superpowerBtn.addEventListener("click", superpower);
}

function superpower() {
    if (superpowerUsed) {
        return;
    }

    const question = questions[currentQuestionIndex];
    const optionButtons = Array.from(document.querySelectorAll(".option"));
    const incorrectButtons = optionButtons.filter((_, index) => index !== question.answer);

    const buttonsToHide = incorrectButtons
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(2, incorrectButtons.length));

    buttonsToHide.forEach(button => {
        button.style.display = "none";
    });

    superpowerUsed = true;
    superpowerBtn.disabled = true;
}



window.onload = displayQuestion;
