// Quizvragen

const vragen = [
    {
        vraag: "Welke proeft het zoetst?",
        opties: ["Baklava", "Köfte", "Kokorec", "Döner"],
        correct: 0
    },
    {
        vraag: "Wat is een typisch Italiaans gerecht?",
        opties: ["Pizza", "Sushi", "Curry", "Taco"],
        correct: 0
    },
    {
        vraag: "Wat is de hoofdingrediënt van guacamole?",
        opties: ["Tomaat", "Avocado", "Ui", "Limoen"],
        correct: 1
    },
    {
        vraag: "Welke kaas is bekend om zijn gaten?",
        opties: ["Cheddar", "Parmezaan", "Emmentaler", "Brie"],
        correct: 2
    },
    {
        vraag: "Wat eet je traditioneel met chopsticks?",
        opties: ["Pasta", "Rijst", "Hamburger", "Soep"],
        correct: 1
    },
    {
        vraag: "Welke vis wordt vaak gebruikt in sushi?",
        opties: ["Zalm", "Kabeljauw", "Makreel", "Tonijn"],
        correct: 3
    },
    {
        vraag: "Wat is de hoofdingrediënt van hummus?",
        opties: ["Linzen", "Kikkererwten", "Aardappels", "Mais"],
        correct: 1
    },
    {
        vraag: "Wat is een typisch Nederlands gerecht?",
        opties: ["Stamppot", "Paella", "Tzatziki", "Pad Thai"],
        correct: 0
    },
    {
        vraag: "Wat is tofu gemaakt van?",
        opties: ["Rijst", "Bonen", "Sojabonen", "Maïs"],
        correct: 2
    },
    {
        vraag: "Welke vrucht heeft een stekelige buitenkant en zoet vruchtvlees?",
        opties: ["Mango", "Ananas", "Lychee", "Druif"],
        correct: 1
    },
    {
        vraag: "Wat drink je meestal bij Engelse 'tea time'?",
        opties: ["Koffie", "Cola", "Thee", "Water"],
        correct: 2
    },
    {
        vraag: "Welke groente is oranje en goed voor je ogen?",
        opties: ["Komkommer", "Paprika", "Wortel", "Spinazie"],
        correct: 2
    },
    {
        vraag: "Wat is een populaire zoete snack in Frankrijk?",
        opties: ["Donut", "Baguette", "Macaron", "Taco"],
        correct: 2
    },
    {
        vraag: "Wat is het belangrijkste ingrediënt van brood?",
        opties: ["Melk", "Zout", "Meel", "Olie"],
        correct: 2
    },
    {
        vraag: "Wat is 'paella' vooral bekend om?",
        opties: ["Rundvlees", "Pasta", "Rijst", "Aardappelen"],
        correct: 2
    },
    {
        vraag: "Wat is een vegetarisch alternatief voor vlees?",
        opties: ["Tofu", "Kip", "Zalm", "Ham"],
        correct: 0
    }
];
//score teller
let huidigeVraag = 0;
let score = 0;
let selectedAnswerIndex = null;

//maximum hints
const maxHints = 3;
let hintsLeft = maxHints;
let usedHints = new Array(vragen.length).fill(false);

//alle hints
const hints = [
    "Zoet dessert uit het Midden-Oosten.",
    "Denk aan Napels en mozzarella.",
    "Groene vrucht, romig van binnen.",
    "Zwitserse kaas met gaten.",
    "Gebruik stokjes om dit te eten.",
    "Populaire sushi-vis (roze/oranje).",
    "Gemaakt van een peulvrucht: begint met 'k'.",
    "Hollandse stamppot met aardappel en groente.",
    "Gemaakt van sojabonen.",
    "Tropische vrucht met ruwe schil.",
    "Warm drankje van blaadjes.",
    "Knol die oranje van binnen is.",
    "Klein kleurrijk koekje vaak in Parijs.",
    "Basisvoorraad voor brood.",
    "Spaans gerecht met rijst en saffraan.",
    "Witte blokken gemaakt van sojabonen."
];

//function voor volgende vraag
function laadVraag() {
    const vraagObj = vragen[huidigeVraag];
    const nummerEl = document.getElementById('vraagNummer');
    const tekstEl = document.getElementById('vraagTekst');
    if (nummerEl) nummerEl.innerText = huidigeVraag + 1;
    if (tekstEl) tekstEl.innerText = vraagObj.vraag;
//uitleg over knopjes
    const uitlegEl = document.getElementById('uitleg');
    if (uitlegEl) uitlegEl.innerText = "Klik op een antwoord.";

    // controle functie
    const antwoordenDiv = document.getElementById('antwoorden');
    if (!antwoordenDiv) return;
    antwoordenDiv.innerHTML = "";
    selectedAnswerIndex = null;

    //function voor buttons
    vraagObj.opties.forEach((optie, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'answer-btn';
        btn.dataset.index = index;
        btn.innerText = optie;
        btn.addEventListener('click', () => {
            const anyDisabled = Array.from(document.querySelectorAll('.answer-btn')).some(b => b.disabled);
            if (anyDisabled) return;
            selectedAnswerIndex = index;
            document.querySelectorAll('.answer-btn').forEach(b => {
                b.classList.toggle('selected', parseInt(b.dataset.index, 10) === index);
            });
        });
        antwoordenDiv.appendChild(btn);
    });

    //resultaat en score function
    const resultEl = document.getElementById('result');
    if (resultEl) resultEl.innerText = "";
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.innerText = `Score: ${score} / ${vragen.length}`;

    //hint elements en functions
    const hintTextEl = document.getElementById('hintText');
    const hideHintBtn = document.getElementById('hideHintBtn');
    const hintBtn = document.getElementById('hintBtn');
    const hintsLeftEl = document.getElementById('hintsLeft');
    if (hintTextEl) hintTextEl.style.display = 'none';
    if (hideHintBtn) hideHintBtn.style.display = 'none';
    if (hintBtn) hintBtn.disabled = (hintsLeft <= 0) || usedHints[huidigeVraag];
    if (hintsLeftEl) hintsLeftEl.innerText = hintsLeft;
}
//alert voor "jies een antwoord voordat je doorgaat"
function checkAnswer() {
    if (selectedAnswerIndex === null) {
        alert("Kies een antwoord!");
        return;
    }

    //controlleert of je een punt krijgt
    const gekozenIndex = parseInt(selectedAnswerIndex, 10);
    const correcteIndex = vragen[huidigeVraag].correct;
    const resultDiv = document.getElementById('result');

    // haal audio elementen veilig op
    const sizzle = document.getElementById('sizzle');
    const burn = document.getElementById('burn');

    //function voor sound
    if (gekozenIndex === correcteIndex) {
        score++;
        if (resultDiv) {
            resultDiv.innerText = "Goed gedaan!";
            resultDiv.style.color = "green";
        }
        if (sizzle && typeof sizzle.play === 'function') {
            // play() kan een Promise teruggeven; log fouten
            try {
                sizzle.currentTime = 0;
                const p = sizzle.play();
                if (p && typeof p.catch === 'function') p.catch(err => console.warn('sizzle play failed:', err));
            } catch (err) {
                console.warn('sizzle play exception:', err);
            }
        }
    } else {
        if (resultDiv) {
            resultDiv.innerText = `Helaas, het juiste antwoord is: ${vragen[huidigeVraag].opties[correcteIndex]}`;
            resultDiv.style.color = "red";
        }
        if (burn && typeof burn.play === 'function') {
            try {
                burn.currentTime = 0;
                const p = burn.play();
                if (p && typeof p.catch === 'function') p.catch(err => console.warn('burn play failed:', err));
            } catch (err) {
                console.warn('burn play exception:', err);
            }
        }
    }

    // disable alle antwoordknoppen
    document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);

    // Volgende vraag na korte pauze
    setTimeout(() => {
        huidigeVraag++;
        if (huidigeVraag < vragen.length) {
            laadVraag();
        } else {
            const container = document.querySelector('.quiz-container');
            if (container) {
                container.innerHTML = `<h2>Quiz voltooid!</h2><p>Je score is ${score} van de ${vragen.length}.</p><button onclick="resetQuiz()">Reset quiz</button>`;
            }
        }
    }, 2000);
}
//ingewikkelde instellingen om het hint te verbergen
function showHint() {
    if (hintsLeft <= 0) { alert("Geen hints meer over."); return; }
    if (usedHints[huidigeVraag]) { alert("Hint al gebruikt voor deze vraag."); return; }
    usedHints[huidigeVraag] = true;
    hintsLeft--;
    const hintText = document.getElementById('hintText');
    if (hintText) { hintText.innerText = hints[huidigeVraag] || "Geen hint beschikbaar."; hintText.style.display = 'block'; }
    const hideBtn = document.getElementById('hideHintBtn');
    if (hideBtn) hideBtn.style.display = 'inline-block';
    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) hintBtn.disabled = (hintsLeft <= 0);
    const hintsLeftEl = document.getElementById('hintsLeft');
    if (hintsLeftEl) hintsLeftEl.innerText = hintsLeft;
}
//verstopt hint text als je het wegklikt
function hideHint() {
    const hintText = document.getElementById('hintText');
    if (hintText) hintText.style.display = 'none';
    const hideBtn = document.getElementById('hideHintBtn');
    if (hideBtn) hideBtn.style.display = 'none';
}
//gaat terug naar home
function goBack() { window.history.back(); }
//reset quiz
function resetQuiz() {
    huidigeVraag = 0;
    score = 0;
    hintsLeft = maxHints;
    usedHints = new Array(vragen.length).fill(false);
    const container = document.querySelector('.quiz-container');
    if (!container) return;
    container.innerHTML = `
        <h2 class="vraag">Vraag <span id="vraagNummer">1</span>:</h2>
        <p id="vraagTekst"></p>
        <p id="uitleg" class="uitleg" style="font-size:0.95rem; color:#333; margin-bottom:10px;"></p>

        <form id="quiz-form">
            <div id="antwoorden"></div><br>
            <button type="button" onclick="checkAnswer()">Controleer antwoord</button>
        </form>

        <div id="result" class="result"></div>
        <div id="score" class="score"></div>

        <div style="margin-top:8px;">
            <button type="button" id="hintBtn" class="hint-button" onclick="showHint()">Hint (<span id="hintsLeft">${hintsLeft}</span>)</button>
        </div>

        <div id="hintText" class="result" style="display:none; margin-top:10px;"></div>

        <div class="return-button-container" style="margin-top:8px;">
            <button type="button" id="hideHintBtn" class="hide-hint-button" onclick="hideHint()" style="display:none;">Sluit hint</button>
        </div>

        <div class="return-button-container" style="margin-top:8px;">
            <button type="button" id="returnBtn" class="return-button" onclick="goBack()">Home</button>
        </div>

        <button onclick="resetQuiz()" style="margin-top:10px;">Reset quiz</button>
    `;
    selectedAnswerIndex = null;
    laadVraag();
}

// Forceer betrouwbare audio-play na checkAnswer (toevoeging — niet de bestaande logica wijzigen)
(function () {
  const origCheck = window.checkAnswer;
  if (typeof origCheck !== 'function') return;

  window.checkAnswer = function (...args) {
    // bewaar keuze vóór aanroepen van originele functie
    const chosenBefore = (typeof selectedAnswerIndex !== 'undefined') ? selectedAnswerIndex : null;
    // roep originele checkAnswer aan (behoudt bestaande gedrag)
    try {
      origCheck.apply(this, args);
    } catch (e) {
      console.warn('originele checkAnswer gaf een fout:', e);
    }

    // speel expliciet audio na originele verwerking (veilig met promise-catch)
    try {
      const sizzle = document.getElementById('sizzle');
      const burn = document.getElementById('burn');
      const correctIndex = (typeof vragen !== 'undefined' && typeof huidigeVraag !== 'undefined') ? vragen[huidigeVraag].correct : null;

      // only attempt if we had a selection
      if (chosenBefore !== null && correctIndex !== null) {
        const chosen = parseInt(chosenBefore, 10);
        if (!Number.isNaN(chosen) && chosen === correctIndex) {
          if (sizzle) {
            try { sizzle.currentTime = 0; const p = sizzle.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
          }
        } else {
          if (burn) {
            try { burn.currentTime = 0; const p = burn.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
          }
        }
      }
    } catch (e) {
      console.warn('audio override fout:', e);
    }
  };
})();

window.onload = () => { resetQuiz(); };
