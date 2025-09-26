let vraag = document.getElementById("h1Vraag");
let vraagTekst = document.getElementById("pVraag");
let scoreTekst = document.getElementById("score");
let knop1 = document.getElementById("knop1");
let knop2 = document.getElementById("knop2");
let knop3 = document.getElementById("knop3");
let knop4 = document.getElementById("knop4");
let vraagNummer = 1;
let score = 0;

function updateScore() {
  scoreTekst.innerHTML = "Score: " + score;
}

function VraagFout() {
  if (vraagNummer == 1) {
    vraag.innerHTML = "Vraag 2";
    vraagTekst.innerHTML = "Welke planeet staat het dichtst bij de zon?";
    knop1.innerHTML = "Venus"
    knop2.innerHTML = "Mars"
    knop3.innerHTML = "Mercurius"
    knop4.innerHTML = "Aarde"
    // 3 is correct
    vraagNummer = 2;
    updateScore();
  } else if (vraagNummer == 2) {
    vraag.innerHTML = "Vraag 3";
    vraagTekst.innerHTML = "Uit hoeveel procent water bestaat het menselijk lichaam?";
    vraagNummer = 3;
    updateScore();
  } else if (vraagNummer == 3) {
    vraag.innerHTML = "Vraag 4";
    vraagTekst.innerHTML = "Tekst Vraag 4";
    vraagNummer = 4;
    updateScore();
  } else if (vraagNummer == 4) {
    vraag.innerHTML = "Vraag 5";
    vraagTekst.innerHTML = "Tekst Vraag 5";
    vraagNummer = 5;
    updateScore();
  } else if (vraagNummer == 5) {
    vraag.innerHTML = "Vraag 6";
    vraagTekst.innerHTML = "Tekst Vraag 6";
    vraagNummer = 6;
    updateScore();
  } else if (vraagNummer == 6) {
    vraag.innerHTML = "Vraag 7";
    vraagTekst.innerHTML = "Tekst Vraag 7";
    vraagNummer = 7;
    updateScore();
  } else if (vraagNummer == 7) {
    vraag.innerHTML = "Vraag 8";
    vraagTekst.innerHTML = "Tekst Vraag 8";
    vraagNummer = 8;
    updateScore();
  } else if (vraagNummer == 8) {
    vraag.innerHTML = "Vraag 9";
    vraagTekst.innerHTML = "Tekst Vraag 9";
    vraagNummer = 9;
    updateScore();
  } else if (vraagNummer == 9) {
    vraag.innerHTML = "Vraag 10";
    vraagTekst.innerHTML = "Tekst Vraag 10";
    vraagNummer = 10;
    updateScore();
  }
}
