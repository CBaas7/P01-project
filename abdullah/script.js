// Sportvragen
const vragen = [
    {
        vraag: "Welke sport wordt gespeeld op Wimbledon?",
        antwoorden: ["Voetbal", "Tennis", "Hockey", "Basketbal"],
        correct: 1 // Tennis
    },
    {
        vraag: "Hoeveel spelers staan er bij voetbal in één team op het veld?",
        antwoorden: ["9", "10", "11", "12"],
        correct: 2 // 11 spelers
    },
    {
        vraag: "Wie won de FIFA Wereldbeker in 2018?",
        antwoorden: ["Brazilië", "Frankrijk", "Duitsland", "Argentinië"],
        correct: 1 // Frankrijk
    },
    {
        vraag: "Welke sport wordt gespeeld met een puck?",
        antwoorden: ["Basketbal", "Rugby", "IJshockey", "Golf"],
        correct: 2 // Ijshockey
    },
    {
        vraag: "Hoeveel ringen staan er op de Olympische vlag?",
        antwoorden: ["4", "5", "6", "7"],
        correct: 1 // 5 ringen
    },
    {
        vraag: "Welke sport wordt vaak 'the beautiful game' genoemd?",
        antwoorden: ["Tennis", "Basketbal", "Voetbal", "Rugby"],
        correct: 2 // Voetbal
    },
    {
        vraag: "In welke sport kun je een strike gooien?",
        antwoorden: ["Bowlen", "Honkbal", "Darten", "Korfbal"],
        correct: 0 // Bowlen
    },
    {
        vraag: "Wie wordt vaak gezien als de beste basketbalspeler ooit?",
        antwoorden: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal"],
        correct: 2 // Michael Jordan
    },
    {
        vraag: "Welke sport gebruikt een shuttle?",
        antwoorden: ["Squash", "Badminton", "Tennis", "Tafeltennis"],
        correct: 1 // Badminton
    },
    {
        vraag: "Welke Nederlandse schaatser won de meeste Olympische medailles?",
        antwoorden: ["Sven Kramer", "Piet Kleine", "Ard Schenk", "Ireen Wüst"],
        correct: 3 // Ireen Wüst
    },
    {
        vraag: "Wat is de maximale score bij darts in één beurt (3 pijlen)?",
        antwoorden: ["150", "180", "170", "200"],
        correct: 1 // 180
    },
    {
        vraag: "In welke sport gebruik je een bal met noppen?",
        antwoorden: ["Rugby", "Golf", "Basketbal", "Handbal"],
        correct: 0 // Rugby
    },
    {
        vraag: "Hoeveel minuten duurt een standaard voetbalwedstrijd?",
        antwoorden: ["80", "90", "100", "120"],
        correct: 1 // 90 minuten
    },
    {
        vraag: "Welke sport hoort bij de Tour de France?",
        antwoorden: ["Hardlopen", "Fietsen", "Motorsport", "Roeien"],
        correct: 1 // Fietsen
    },
    {
        vraag: "Welke sport wordt vaak in een octagon beoefend?",
        antwoorden: ["Boksen", "MMA", "Judo", "Worstel"],
        correct: 1 // MMA
    },
    {
        vraag: "Hoe heet het veld bij honkbal?",
        antwoorden: ["Court", "Pitch", "Diamond", "Arena"],
        correct: 2 // Diamond
    },
    {
        vraag: "Welke zwemslag is meestal de snelste?",
        antwoorden: ["Schoolslag", "Vlinderslag", "Rugslag", "Vrije slag"],
        correct: 3 // Vrije slag
    },
    {
        vraag: "Welke club won de Champions League in 2023?",
        antwoorden: ["Real Madrid", "Manchester City", "Bayern München", "PSG"],
        correct: 1 // Manchester City
    },
    {
        vraag: "Welke sport deed Epke Zonderland, ook wel 'The Flying Dutchman'?",
        antwoorden: ["Schoonspringen", "Turnen", "Atletiek", "BMX"],
        correct: 1 // Turnen
    },
    {
        vraag: "In welke sport kun je een hole-in-one maken?",
        antwoorden: ["Golf", "Bowlen", "Basketbal", "Darten"],
        correct: 0 // Golf
    }
];

// dit zijn de variabelen
let huidigeVraag = 0; // welke vraag je nu hebt
let score = 0;        // hoeveel je er goed hebt
let fiftyCount = 3;   // 3x 50/50 power-up
let gekozen = false;  // voorkomt verdergaan zonder kiezen

// HTML elementen koppelen
const vraagBox = document.getElementById("Antwoordt");
const antwoordKnoppen = document.querySelectorAll(".Antwoorden button");
const progress = document.getElementById("progress");
const volgendeBtn = document.getElementById("volgendeBtn");
const terugBtn = document.getElementById("terugBtn");
const opnieuwBtn = document.getElementById("opnieuwBtn");
const fiftyBtn = document.getElementById("fifty");
const homeBtn = document.getElementById("homeBtn");

// Vraag laden

function laadVraag() {
    const q = vragen[huidigeVraag];
    vraagBox.style.backgroundColor = "#A7C1A8"; // blijft altijd dezelfde kleur
    vraagBox.textContent = q.vraag;
    gekozen = false;
    volgendeBtn.disabled = true;

    // antwoorden zichtbaar maken
    antwoordKnoppen.forEach((btn, index) => {
        btn.style.visibility = "visible";
        btn.style.background = "#819A91"; // knopkleur
        btn.textContent = q.antwoorden[index];
        btn.onclick = () => selectAntwoord(index);
    });

    updateProgress();
}

// Antwoord kiezen
function selectAntwoord(index) {
    gekozen = true;
    const juist = vragen[huidigeVraag].correct;

    // score verhogen als het goed is
    if (index === juist) {
        score++;
    }

    // alleen knoppen kleuren, vraag-box blijft hetzelfde
    antwoordKnoppen.forEach((btn, i) => {
        if (i === juist) {
            btn.style.background = "green"; // juiste antwoord groen
        } else if (i === index && index !== juist) {
            btn.style.background = "red"; // fout gekozen rood
        } else {
            btn.style.background = "#819A91"; // andere blijven normaal
        }
    });

    volgendeBtn.disabled = false;
}

// Volgende vraag
function volgendeVraag() {
    if (!gekozen) return alert("Kies eerst een antwoord!");
    if (huidigeVraag < vragen.length - 1) {
        huidigeVraag++;
        laadVraag();
    } else {
        toonResultaat();
    }
}


// Terug naar vorige vraag
function terugVraag() {
    if (huidigeVraag > 0) {
        huidigeVraag--;
        laadVraag();
    }
}

// Power-up 50/50
function gebruikFifty() {
    if (fiftyCount > 0) {
        fiftyCount--;
        fiftyBtn.textContent = `50/50 (${fiftyCount}x)`;
        const juist = vragen[huidigeVraag].correct;
        let verwijderd = 0;

        while (verwijderd < 2) {
            const rand = Math.floor(Math.random() * 4);
            if (rand !== juist && antwoordKnoppen[rand].style.visibility !== "hidden") {
                antwoordKnoppen[rand].style.visibility = "hidden";
                verwijderd++;
            }
        }

        if (fiftyCount === 0) fiftyBtn.disabled = true;
    } else {
        alert("Je hebt geen 50/50 power-ups meer!");
    }
}

// Opnieuw spelen
function opNieuwSpelen() {
    huidigeVraag = 0;
    score = 0;
    fiftyCount = 3;
    fiftyBtn.textContent = "50/50 (3x)";
    fiftyBtn.disabled = false;
    laadVraag();
}


// Naar homepagina
//function gaNaarHome() {
  //  window.location.href = "index.html"; // pas aan naar jouw homepage



// Voortgang bijwerken
function updateProgress() {
    progress.textContent = `Vraag ${huidigeVraag + 1} van ${vragen.length} | Score: ${score}`;
}

// Eindresultaat
function toonResultaat() {
    vraagBox.textContent = `Klaar! Je score = ${score} van de ${vragen.length}`;
    document.querySelector(".Antwoorden").innerHTML = "";
    document.querySelector(".navigatie-buttons").innerHTML = "";
    fiftyBtn.disabled = true;
}

// Start quiz
laadVraag();

// Knoppen werkend maken
volgendeBtn.onclick = volgendeVraag;
terugBtn.onclick = terugVraag;
opnieuwBtn.onclick = opNieuwSpelen;
fiftyBtn.onclick = gebruikFifty;
homeBtn.onclick = gaNaarHome;