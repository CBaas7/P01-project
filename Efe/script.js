
//vragen van mijn quiz
const vragen = [
    {
        vraag: "Welke proeft het zoetst?",
        opties: ["Baklava", "Köfte", "Kokorec", "Döner"],
        correct: 0,
        hint: "Het is geen Köfte en geen Kokorec."
    },
    {
        vraag: "Wat is een typisch Italiaans gerecht?",
        opties: ["Pizza", "Sushi", "Curry", "Taco"],
        correct: 0,
        hint: "Het is geen Sushi en geen Curry."
    },
    {
        vraag: "Wat is de hoofdingrediënt van guacamole?",
        opties: ["Tomaat", "Avocado", "Ui", "Limoen"],
        correct: 1,
        hint: "Het is geen Tomaat en geen Limoen."
    },
    {
        vraag: "Welke kaas is bekend om zijn gaten?",
        opties: ["Cheddar", "Parmezaan", "Emmentaler", "Brie"],
        correct: 2,
        hint: "Het is geen Brie en geen Cheddar."
    },
    {
        vraag: "Wat eet je traditioneel met chopsticks?",
        opties: ["Pasta", "Rijst", "Hamburger", "Soep"],
        correct: 1,
        hint: "Het is geen Hamburger en geen Soep."
    },
    {
        vraag: "Welke vis wordt vaak gebruikt in sushi?",
        opties: ["Zalm", "Kabeljauw", "Makreel", "Tonijn"],
        correct: 3,
        hint: "Het is geen Kabeljauw en geen Makreel."
    },
    {
        vraag: "Wat is de hoofdingrediënt van hummus?",
        opties: ["Linzen", "Kikkererwten", "Aardappels", "Mais"],
        correct: 1,
        hint: "Het is geen mais en geen Aardappels."
    },
    {
        vraag: "Wat is een typisch Nederlands gerecht?",
        opties: ["Stamppot", "Paella", "Tzatziki", "Pad Thai"],
        correct: 0,
        hint: "Het is geen Tzatziki en geen Pad Thai."
    },
    {
        vraag: "Wat is tofu gemaakt van?",
        opties: ["Rijst", "Bonen", "Sojabonen", "Maïs"],
        correct: 2,
        hint: "Het is geen Maïs en geen Rijst."
    },
    {
        vraag: "Welke vrucht heeft een stekelige buitenkant en zoet vruchtvlees?",
        opties: ["Mango", "Ananas", "Lychee", "Druif"],
        correct: 1,
        hint: "Het is geen Mango en geen Druif."
    },
    {
        vraag: "Wat drink je meestal bij Engelse 'tea time'?",
        opties: ["Koffie", "Cola", "Thee", "Water"],
        correct: 2,
        hint: "Het is geen Cola en geen Water."
    },
    {
        vraag: "Welke groente is goed voor je ogen?",
        opties: ["Komkommer", "Paprika", "Wortel", "Spinazie"],
        correct: 2,
        hint: "Het is geen Komkommer en geen Spinazie."
    },
    {
        vraag: "Wat is een populaire zoete snack in Frankrijk?",
        opties: ["Donut", "Baguette", "Macaron", "Taco"],
        correct: 2,
        hint: "Het is geen Donut en geen Taco."
    },
    {
        vraag: "Wat is het belangrijkste ingrediënt van brood?",
        opties: ["Melk", "Zout", "Meel", "Olie"],
        correct: 2,
        hint: "Het is geen Zout en geen Melk."
    },
    {
        vraag: "Wat is 'paella' vooral bekend om?",
        opties: ["Rundvlees", "Pasta", "Rijst", "Aardappelen"],
        correct: 2,
        hint: "Het is geen Aardappelen en geen Rundvlees."
    },
    {
        vraag: "Wat is een vegetarisch alternatief voor vlees?",
        opties: ["Tofu", "Kip", "Zalm", "Ham"],
        correct: 0,
        hint: "Het is geen Ham en geen Zalm."
    }
];

let huidigeVraag = 0;
let score = 0;
const sizzle = document.getElementById('sizzle');
const burn = document.getElementById('burn');

function laadVraag() {
    const vraagObj = vragen[huidigeVraag];
    document.getElementById('vraagNummer').innerText = huidigeVraag + 1;
    document.getElementById('vraagTekst').innerText = vraagObj.vraag;

    const antwoordenDiv = document.getElementById('antwoorden');
    antwoordenDiv.innerHTML = ""; // Maakt het antwoord selectie leeg

    vraagObj.opties.forEach((optie, index) => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="answer" value="${index}">
            ${optie}
        `;
        antwoordenDiv.appendChild(label);
        antwoordenDiv.appendChild(document.createElement("br"));
    });

    document.getElementById('result').innerText = "";
    document.getElementById('score').innerText = `Score: ${score} / ${vragen.length}`;
}

function checkAnswer() {
    const geselecteerd = document.querySelector('input[name="answer"]:checked');
    if (!geselecteerd) {
        alert("Kies een antwoord!");
        return;
    }

    const gekozenIndex = parseInt(geselecteerd.value);
    const correcteIndex = vragen[huidigeVraag].correct;

    const resultDiv = document.getElementById('result');
    if (gekozenIndex === correcteIndex) {
        score++;
        resultDiv.innerText = "Goed gedaan!";
        resultDiv.style.color = "green"
        sizzle.play()
    } else {
        resultDiv.innerText = `Helaas, het juiste antwoord is: ${vragen[huidigeVraag].opties[correcteIndex]}`;
        resultDiv.style.color = "red";
        burn.play()
    }

    // sluit radio buttons
    const radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach(radio => radio.disabled = true);

    // Volgende vraag
    setTimeout(() => {
        huidigeVraag++;
        if (huidigeVraag < vragen.length) {
            laadVraag();
        } else {
            document.querySelector('.quiz-container').innerHTML = `<h2>Quiz voltooid!</h2><p>Je score is ${score} van de ${vragen.length}.</p><button onclick="resetQuiz()">Reset quiz</button>`;
        }
    }, 2000);
}

//toont resultaat, score en het volgende opdracht
function resetQuiz() {
    huidigeVraag = 0;
    score = 0;
    const container = document.querySelector('.quiz-container');
    container.innerHTML = `
        <h2 class="vraag">Vraag <span id="vraagNummer">1</span>:</h2>
        <p id="vraagTekst"></p>

        <form id="quiz-form">
            <div id="antwoorden"></div><br>
            <button type="button" onclick="checkAnswer()">Controleer antwoord</button>
        </form>

        <div id="result" class="result"></div>
        <div id="score" class="score"></div>
        <button onclick="resetQuiz()">Reset quiz</button>
        <button type="hintButton" class="hint-button" onclick="showHint()">Hint</button>
        <a href="/index.html">
        <div>
            <button type="returnButton" class="return-button" onclick="returnToHome()" >Return</button>
    </div>
    </a>
    `;
    laadVraag();
}

//start het quiz
window.onload = () => {
    resetQuiz();
};

let totaalHintCount = 0;
const hintLimiet = 5;

function showHint() {
    const vraagObj = vragen[huidigeVraag];

    if (totaalHintCount < hintLimiet) {
        totaalHintCount++;
        alert(`Hint: ${vraagObj.hint}\n( ${totaalHintCount} van de ${hintLimiet} hints gebruikt.)`);
    } else {
        alert("Je hebt het maximum aantal hints bereikt voor deze quiz.");
    }
}
