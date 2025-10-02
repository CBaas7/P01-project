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
  score = score + 1;
  scoreTekst.innerHTML = "Score: " + score;
  console.log(score);
}

function VraagFout() {
  if (vraagNummer == 1) {
    vraag.innerHTML = "Vraag 2";
    vraagTekst.innerHTML = "Welke planeet staat het dichtst bij de zon?";
    knop1.innerHTML = "Venus";
    knop2.innerHTML = "Mars";
    knop3.innerHTML = "Mercurius";
    knop4.innerHTML = "Aarde";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 2;
  } else if (vraagNummer == 2) {
    vraag.innerHTML = "Vraag 3";
    vraagTekst.innerHTML = "Wat is de hoofdstad van Frankrijk?";
    knop1.innerHTML = "Londen";
    knop2.innerHTML = "Parijs";
    knop3.innerHTML = "Rome";
    knop4.innerHTML = "Madrid";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 3;
  } else if (vraagNummer == 3) {
    vraag.innerHTML = "Vraag 4";
    vraagTekst.innerHTML = "Hoeveel seconden zitten er in een minuut?";
    knop1.innerHTML = "60";
    knop2.innerHTML = "100";
    knop3.innerHTML = "30";
    knop4.innerHTML = "90";
    knop1.setAttribute("onClick", "javascript: VraagCorrect();");
    knop2.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 4;
  } else if (vraagNummer == 4) {
    vraag.innerHTML = "Vraag 5";
    vraagTekst.innerHTML = "Welke van deze dieren is een zoogdier?";
    knop1.innerHTML = "Kip";
    knop2.innerHTML = "Haai";
    knop3.innerHTML = "Walvis";
    knop4.innerHTML = "Schildpad";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop1.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 5;
  } else if (vraagNummer == 5) {
    vraag.innerHTML = "Vraag 6";
    vraagTekst.innerHTML = "Wat is de naam van het Nederlandse volkslied?";
    knop1.innerHTML = "Wilhelmus";
    knop2.innerHTML = "Vaderlandslied";
    knop3.innerHTML = "Oranje Boven";
    knop4.innerHTML = "Hollandlied";
    knop1.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 6;
  } else if (vraagNummer == 6) {
    vraag.innerHTML = "Vraag 7";
    vraagTekst.innerHTML = "Welke rivier stroomt door Parijs?";
    knop1.innerHTML = "Rijn";
    knop2.innerHTML = "Seine";
    knop3.innerHTML = "Donau";
    knop4.innerHTML = "Loire";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop1.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 7;
  } else if (vraagNummer == 7) {
    vraag.innerHTML = "Vraag 8";
    vraagTekst.innerHTML = "Wat is een synoniem van “vermoeden”?";
    knop1.innerHTML = "Weten";
    knop2.innerHTML = "Raden";
    knop3.innerHTML = "Denken";
    knop4.innerHTML = "Aannemen";
    knop4.setAttribute("onClick", "javascript: VraagCorrect();");
    knop2.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 8;
  } else if (vraagNummer == 8) {
    vraag.innerHTML = "Vraag 9";
    vraagTekst.innerHTML = "Hoeveel graden is een rechte hoek?";
    knop1.innerHTML = "45°";
    knop2.innerHTML = "90°";
    knop3.innerHTML = "180°";
    knop4.innerHTML = "360°";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 9;
  } else if (vraagNummer == 9) {
    vraag.innerHTML = "Vraag 10";
    vraagTekst.innerHTML = "Wat is het tegenovergestelde van “optimistisch”?";
    knop1.innerHTML = "Enthousiast";
    knop2.innerHTML = "Pessimistisch";
    knop3.innerHTML = "Realistisch";
    knop4.innerHTML = "Negatief";
    vraagNummer = 10;
  } else if (vraagNummer == 10) {
    vraagNummer = 0;
  }
}

function VraagCorrect() {
  if (vraagNummer == 1) {
    vraag.innerHTML = "Vraag 2";
    vraagTekst.innerHTML = "Welke planeet staat het dichtst bij de zon?";
    knop1.innerHTML = "Venus";
    knop2.innerHTML = "Mars";
    knop3.innerHTML = "Mercurius";
    knop4.innerHTML = "Aarde";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 2;
    updateScore();
  } else if (vraagNummer == 2) {
    vraag.innerHTML = "Vraag 3";
    vraagTekst.innerHTML = "Wat is de hoofdstad van Frankrijk?";
    knop1.innerHTML = "Londen";
    knop2.innerHTML = "Parijs";
    knop3.innerHTML = "Rome";
    knop4.innerHTML = "Madrid";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 3;
    updateScore();
  } else if (vraagNummer == 3) {
    vraag.innerHTML = "Vraag 4";
    vraagTekst.innerHTML = "Hoeveel seconden zitten er in een minuut?";
    knop1.innerHTML = "60";
    knop2.innerHTML = "100";
    knop3.innerHTML = "30";
    knop4.innerHTML = "90";
    knop1.setAttribute("onClick", "javascript: VraagCorrect();");
    knop2.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 4;
    updateScore();
  } else if (vraagNummer == 4) {
    vraag.innerHTML = "Vraag 5";
    vraagTekst.innerHTML = "Welke van deze dieren is een zoogdier?";
    knop1.innerHTML = "Kip";
    knop2.innerHTML = "Haai";
    knop3.innerHTML = "Walvis";
    knop4.innerHTML = "Schildpad";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop1.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 5;
    updateScore();
  } else if (vraagNummer == 5) {
    vraag.innerHTML = "Vraag 6";
    vraagTekst.innerHTML = "Wat is de naam van het Nederlandse volkslied?";
    knop1.innerHTML = "Wilhelmus";
    knop2.innerHTML = "Vaderlandslied";
    knop3.innerHTML = "Oranje Boven";
    knop4.innerHTML = "Hollandlied";
    knop1.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 6;
    updateScore();
  } else if (vraagNummer == 6) {
    vraag.innerHTML = "Vraag 7";
    vraagTekst.innerHTML = "Welke rivier stroomt door Parijs?";
    knop1.innerHTML = "Rijn";
    knop2.innerHTML = "Seine";
    knop3.innerHTML = "Donau";
    knop4.innerHTML = "Loire";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop1.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 7;
    updateScore();
  } else if (vraagNummer == 7) {
    vraag.innerHTML = "Vraag 8";
    vraagTekst.innerHTML = "Wat is een synoniem van “vermoeden”?";
    knop1.innerHTML = "Weten";
    knop2.innerHTML = "Raden";
    knop3.innerHTML = "Denken";
    knop4.innerHTML = "Aannemen";
    knop4.setAttribute("onClick", "javascript: VraagCorrect();");
    knop2.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 8;
    updateScore();
  } else if (vraagNummer == 8) {
    vraag.innerHTML = "Vraag 9";
    vraagTekst.innerHTML = "Hoeveel graden is een rechte hoek?";
    knop1.innerHTML = "45°";
    knop2.innerHTML = "90°";
    knop3.innerHTML = "180°";
    knop4.innerHTML = "360°";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    vraagNummer = 9;
    updateScore();
  } else if (vraagNummer == 9) {
    vraag.innerHTML = "Vraag 10";
    vraagTekst.innerHTML = "Wat is het tegenovergestelde van “optimistisch”?";
    knop1.innerHTML = "Enthousiast";
    knop2.innerHTML = "Pessimistisch";
    knop3.innerHTML = "Realistisch";
    knop4.innerHTML = "Negatief";
    vraagNummer = 10;
    updateScore();
  } else if (vraagNummer == 10) {
    vraagNummer = 0;
    updateScore();
  }
}