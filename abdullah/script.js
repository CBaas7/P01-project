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


let huidigeVraag = 0;
let score = 0;

// HTML elementen
const vraagBox = document.getElementById("Antwoordt");
const antwoordKnoppen = document.querySelectorAll(".Antwoorden button");
const progress = document.getElementById("progress");

// Vraag laden
function laadVraag() {
    const q = vragen[huidigeVraag];
    vraagBox.textContent = q.vraag;
    antwoordKnoppen.forEach((btn, index) => {
        btn.textContent = q.antwoorden[index];
        btn.onclick = () => checkAntwoord(index);
    });
    updateProgress();
}

// Antwoord checken
function checkAntwoord(index) {
    if (index === vragen[huidigeVraag].correct) {
        score++;
    }
    volgendeVraag();
}

// Volgende vraag
function volgendeVraag() {
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

// Voortgang bijwerken
function updateProgress() {
    progress.textContent = `Vraag ${huidigeVraag + 1} van ${vragen.length} | Score: ${score}`;
}

// Resultaat tonen
function toonResultaat() {
    vraagBox.textContent = `Quiz klaar! Je score: ${score} van de ${vragen.length}`;
    document.querySelector(".Antwoorden").innerHTML = "";
    document.querySelector(".navigatie-buttons").innerHTML = "";
}

// Start quiz
laadVraag();

// Zorg dat knoppen werken
document.querySelector(".navigatie-buttons button:first-child").onclick = terugVraag;
document.querySelector(".navigatie-buttons button:last-child").onclick = volgendeVraag;



function opNieuwSpelen(){


    



}