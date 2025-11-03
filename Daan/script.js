// Eelementen
let vraag = document.getElementById("h1Vraag");
let vraagTekst = document.getElementById("pVraag");
let scoreTekst = document.getElementById("score");
let knop1 = document.getElementById("knop1");
let knop2 = document.getElementById("knop2");
let knop3 = document.getElementById("knop3");
let knop4 = document.getElementById("knop4");
let codeEnQuiz = document.querySelector("h1");
let hintElmt = document.querySelector("#hint");

// Variabelen
let vraagNummer = 1;
let score = 0;
let hints = 3;

// Score geven
function updateScore() {
  score++
  scoreTekst.innerHTML = "Score: " + score;
  hintElmt = "Hints:", hints
}

function removeScore() {
  score--
  scoreTekst.innerHTML = "Score: " + score;
  hintElmt.innerHTML = "Hints:" + hints
  }

//Vragen verranderen
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
    removeScore()
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
    removeScore()
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
    removeScore()
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
    removeScore()
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
    removeScore()
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
    removeScore()
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
    removeScore()
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
    removeScore()
    vraagNummer = 9;
  } else if (vraagNummer == 9) {
    vraag.innerHTML = "Vraag 10";
    vraagTekst.innerHTML = "Wat is het tegenovergestelde van “optimistisch”?";
    knop1.innerHTML = "Enthousiast";
    knop2.innerHTML = "Pessimistisch";
    knop3.innerHTML = "Realistisch";
    knop4.innerHTML = "Negatief";
    removeScore()
    vraagNummer = 10;
  } else if (vraagNummer == 10) {
    vraag.innerHTML = "Vraag 11";
    vraagTekst.innerHTML = "Welke stof is nodig voor fotosynthese in planten?";
    knop1.innerHTML = "Zuurstof";
    knop2.innerHTML = "Koolstofdioxide";
    knop3.innerHTML = "Waterstof";
    knop4.innerHTML = "Methaan";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    removeScore()
    vraagNummer = 11;
  } else if (vraagNummer == 11) {
    vraag.innerHTML = "Vraag 12";
    vraagTekst.innerHTML =
      "Welke taal wordt voornamelijk gesproken in Brazilië?";
    knop1.innerHTML = "Spaans";
    knop2.innerHTML = "Portugees";
    knop3.innerHTML = "Frans";
    knop4.innerHTML = "Engels";
    removeScore()
    vraagNummer = 12;
  } else if (vraagNummer == 12) {
    vraag.innerHTML = "Vraag 13";
    vraagTekst.innerHTML = "Wat is de grootste oceaan ter wereld?";
    knop1.innerHTML = "Atlantische";
    knop2.innerHTML = "Indische";
    knop3.innerHTML = "Stille ";
    knop4.innerHTML = "Zuidelijke";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop2.setAttribute("onClick", "javascript: VraagFout();");
    removeScore()
    vraagNummer = 13;
  } else if (vraagNummer == 13) {
    vraag.innerHTML = "Vraag 14";
    vraagTekst.innerHTML = "Welke van deze landen ligt NIET in Europa?";
    knop1.innerHTML = "Polen";
    knop2.innerHTML = "Noorwegen";
    knop3.innerHTML = "Turkije ";
    knop4.innerHTML = "Brazilië";
    knop4.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    removeScore()
    vraagNummer = 14;
  } else if (vraagNummer == 14) {
    vraag.innerHTML = "Vraag 15";
    vraagTekst.innerHTML = "Wie schilderde de Mona Lisa?";
    knop1.innerHTML = "Vincent van Gogh";
    knop2.innerHTML = "Pablo Picasso";
    knop3.innerHTML = "Leonardo da Vinci ";
    knop4.innerHTML = "Rembrandt van Rijn";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    removeScore()
    vraagNummer = 15;
  } else if (vraagNummer == 15) {
    vraag.innerHTML = "Vraag 16";
    vraagTekst.innerHTML = "Wat is de hoofdstad van Canada?";
    knop1.innerHTML = "Ottawa";
    knop2.innerHTML = "Montreal";
    knop3.innerHTML = "Toronto";
    knop4.innerHTML = "Vancouver";
    removeScore()
    vraagNummer = 16;
  } else if (vraagNummer == 16) {
    vraag.innerHTML = "Vraag 17";
    vraagTekst.innerHTML = "Welke planeet staat bekend als de rode planeet?";
    knop1.innerHTML = "Saturnus";
    knop2.innerHTML = "Venus";
    knop3.innerHTML = "Mars";
    knop4.innerHTML = "Jupiter";
    removeScore()
    vraagNummer = 17;
  } else if (vraagNummer == 17) {
    vraag.innerHTML = "Vraag 18";
    vraagTekst.innerHTML = "Wat is het chemische symbool voor goud?";
    knop1.innerHTML = "Fe";
    knop2.innerHTML = "Pb";
    knop3.innerHTML = "Au";
    knop4.innerHTML = "Ag";
    removeScore()
    vraagNummer = 18;
  } else if (vraagNummer == 18) {
    vraag.innerHTML = "Vraag 19";
    vraagTekst.innerHTML = "Welke stof zorgt voor de groene kleur in planten?";
    knop1.innerHTML = "Chlorofyl";
    knop2.innerHTML = "Glucose";
    knop3.innerHTML = "Zuurstof";
    knop4.innerHTML = "Cellulose";
    knop1.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    removeScore()
    vraagNummer = 19;
  } else if (vraagNummer == 19) {
    vraag.innerHTML = "Vraag 20";
    vraagTekst.innerHTML = "Wat is de langste rivier ter wereld?";
    knop1.innerHTML = "Amazone";
    knop2.innerHTML = "Nijl";
    knop3.style.display = "none";
    knop4.style.display = "none";
    removeScore()
    vraagNummer = 20;
  } else if (vraagNummer == 20) {
    vraag.innerHTML = "Quiz klaar";
    let statshalf = score / 20;
    let statsfull = statshalf * 100;
    vraagTekst.innerHTML =
      "Je hebt alle 20 vragen beantwoord hiervan heb jij " +
      statsfull +
      "% goed";
    knop1.style.display = "none";
    knop2.style.display = "none";
    document.querySelector("main > a").style.display = "block";
  }
}

// Score geven en vraag verranderen
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
    updateScore();
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
    updateScore();
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
    updateScore();
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
    updateScore();
    vraagNummer = 5;
  } else if (vraagNummer == 5) {
    vraag.innerHTML = "Vraag 6";
    vraagTekst.innerHTML = "Wat is de naam van het Nederlandse volkslied?";
    knop1.innerHTML = "Wilhelmus";
    knop2.innerHTML = "Vaderlandlied";
    knop3.innerHTML = "Oranje Boven";
    knop4.innerHTML = "Hollandlied";
    knop1.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    updateScore();
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
    updateScore();
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
    updateScore();
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
    updateScore();
    vraagNummer = 9;
  } else if (vraagNummer == 9) {
    vraag.innerHTML = "Vraag 10";
    vraagTekst.innerHTML = "Wat is het tegenovergestelde van “optimistisch”?";
    knop1.innerHTML = "Enthousiast";
    knop2.innerHTML = "Pessimistisch";
    knop3.innerHTML = "Realistisch";
    knop4.innerHTML = "Negatief";
    updateScore();
    vraagNummer = 10;
  } else if (vraagNummer == 10) {
    vraag.innerHTML = "Vraag 11";
    vraagTekst.innerHTML = "Welke stof is nodig voor fotosynthese in planten?";
    knop1.innerHTML = "Zuurstof";
    knop2.innerHTML = "Koolstofdioxide";
    knop3.innerHTML = "Waterstof";
    knop4.innerHTML = "Methaan";
    knop2.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    updateScore();
    vraagNummer = 11;
  } else if (vraagNummer == 11) {
    vraag.innerHTML = "Vraag 12";
    vraagTekst.innerHTML =
      "Welke taal wordt voornamelijk gesproken in Brazilië?";
    knop1.innerHTML = "Spaans";
    knop2.innerHTML = "Portugees";
    knop3.innerHTML = "Frans";
    knop4.innerHTML = "Engels";
    updateScore();
    vraagNummer = 12;
  } else if (vraagNummer == 12) {
    vraag.innerHTML = "Vraag 13";
    vraagTekst.innerHTML = "Wat is de grootste oceaan ter wereld?";
    knop1.innerHTML = "Atlantische";
    knop2.innerHTML = "Indische";
    knop3.innerHTML = "Stille ";
    knop4.innerHTML = "Zuidelijke";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop2.setAttribute("onClick", "javascript: VraagFout();");
    updateScore();
    vraagNummer = 13;
  } else if (vraagNummer == 13) {
    vraag.innerHTML = "Vraag 14";
    vraagTekst.innerHTML = "Welke van deze landen ligt NIET in Europa?";
    knop1.innerHTML = "Polen";
    knop2.innerHTML = "Noorwegen";
    knop3.innerHTML = "Turkije ";
    knop4.innerHTML = "Brazilië";
    knop4.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    updateScore();
    vraagNummer = 14;
  } else if (vraagNummer == 14) {
    vraag.innerHTML = "Vraag 15";
    vraagTekst.innerHTML = "Wie schilderde de Mona Lisa?";
    knop1.innerHTML = "Vincent van Gogh";
    knop2.innerHTML = "Pablo Picasso";
    knop3.innerHTML = "Leonardo da Vinci ";
    knop4.innerHTML = "Rembrandt van Rijn";
    knop3.setAttribute("onClick", "javascript: VraagCorrect();");
    knop4.setAttribute("onClick", "javascript: VraagFout();");
    updateScore();
    vraagNummer = 15;
  } else if (vraagNummer == 15) {
    vraag.innerHTML = "Vraag 16";
    vraagTekst.innerHTML = "Wat is de hoofdstad van Canada?";
    knop1.innerHTML = "Ottawa";
    knop2.innerHTML = "Montreal";
    knop3.innerHTML = "Toronto";
    knop4.innerHTML = "Vancouver";
    updateScore();
    vraagNummer = 16;
  } else if (vraagNummer == 16) {
    vraag.innerHTML = "Vraag 17";
    vraagTekst.innerHTML = "Welke planeet staat bekend als de rode planeet?";
    knop1.innerHTML = "Saturnus";
    knop2.innerHTML = "Venus";
    knop3.innerHTML = "Mars";
    knop4.innerHTML = "Jupiter";
    updateScore();
    vraagNummer = 17;
  } else if (vraagNummer == 17) {
    vraag.innerHTML = "Vraag 18";
    vraagTekst.innerHTML = "Wat is het chemische symbool voor goud?";
    knop1.innerHTML = "Fe";
    knop2.innerHTML = "Pb";
    knop3.innerHTML = "Au";
    knop4.innerHTML = "Ag";
    updateScore();
    vraagNummer = 18;
  } else if (vraagNummer == 18) {
    vraag.innerHTML = "Vraag 19";
    vraagTekst.innerHTML = "Welke stof zorgt voor de groene kleur in planten?";
    knop1.innerHTML = "Chlorofyl";
    knop2.innerHTML = "Glucose";
    knop3.innerHTML = "Zuurstof";
    knop4.innerHTML = "Cellulose";
    knop1.setAttribute("onClick", "javascript: VraagCorrect();");
    knop3.setAttribute("onClick", "javascript: VraagFout();");
    updateScore();
    vraagNummer = 19;
  } else if (vraagNummer == 19) {
    vraag.innerHTML = "Vraag 20";
    vraagTekst.innerHTML = "Wat is de langste rivier ter wereld?";
    knop1.innerHTML = "Amazone";
    knop2.innerHTML = "Nijl";
    knop3.style.display = "none";
    knop4.style.display = "none";
    updateScore();
    vraagNummer = 20;
  } else if (vraagNummer == 20) {
    updateScore();
    vraag.innerHTML = "Quiz klaar";
    let statshalf = score / 20;
    let statsfull = statshalf * 100;
    vraagTekst.innerHTML =
      "Je hebt alle 20 vragen beantwoord hiervan heb jij " +
      statsfull +
      "% goed";
    knop1.style.display = "none";
    knop2.style.display = "none";
    document.querySelector("main > a").style.display = "block";
  }
}

// easteregg
codeEnQuiz.addEventListener("click", function () {
  alert("Code&Quiz");
});

hintElmt.addEventListener("click", function () {
  if (hints >= 1) {
    console.log("hint gebruikt");
    hints--;
    if (vraagNummer == 1) {
      hintElmt.innerHTML = "Deze planeet heeft een grote rode vlek die altijd stormt."
    } else if (vraagNummer == 2) {
      hintElmt.innerHTML = "Deze planeet is heet overdag, ijskoud ’s nachts."
    } else if (vraagNummer == 3) {
      hintElmt.innerHTML = "In deze stad staat een toren die iedereen kent."
    } else if (vraagNummer == 4) {
      hintElmt.innerHTML = "Je leert dit al in groep 3."
    } else if (vraagNummer == 5) {
      hintElmt.innerHTML = "Zoogdieren geven melk aan hun jongen en ademen lucht, zelfs als ze in het water leven."
    } else if (vraagNummer == 6) {
      hintElmt.innerHTML = "De naam lijkt op die van Willem van Oranje."
    } else if (vraagNummer == 7) {
      hintElmt.innerHTML = "Het is de beroemdste rivier van Frankrijk."
    } else if (vraagNummer == 8) {
      hintElmt.innerHTML = "Het is een ander woord voor een voorzichtige aanname, vaak zonder bewijs."
    } else if (vraagNummer == 9) {
      hintElmt.innerHTML = "Het is precies een kwart van een volledige cirkel."
    } else if (vraagNummer == 10) {
      hintElmt.innerHTML = "Wat is het tegenovergestelde van “optimistisch”?"
    } else if (vraagNummer == 11) {
      hintElmt.innerHTML = "Planten halen het uit de lucht via hun bladeren."
    } else if (vraagNummer == 12) {
      hintElmt.innerHTML = "Het is een Romaanse taal die ook in Portugal wordt gesproken."
    } else if (vraagNummer == 13) {
      hintElmt.innerHTML = "Het ligt tussen Azië en Amerika."
    } else if (vraagNummer == 14) {
      hintElmt.innerHTML = "Eén van deze landen ligt niet in Europa, maar op een ander continent."
    } else if (vraagNummer == 15) {
      hintElmt.innerHTML = "Deze Italiaanse kunstenaar was ook een uitvinder en wetenschapper in de Renaissance."
    } else if (vraagNummer == 16) {
      hintElmt.innerHTML = "Deze stad ligt in de provincie Ontario en is niet Toronto."
    } else if (vraagNummer == 17) {
      hintElmt.innerHTML = "Deze planeet heeft zijn bijnaam te danken aan het ijzerrijke stof op het oppervlak, dat een roodachtige kleur geeft."
    } else if (vraagNummer == 18) {
      hintElmt.innerHTML = "Het symbool komt van het Latijnse woord aurum."
    } else if (vraagNummer == 19) {
      hintElmt.innerHTML = "Deze stof zit in de bladgroenkorrels en vangt zonlicht op voor fotosynthese."
    } else if (vraagNummer == 20) {
      hintElmt.innerHTML = "Deze rivier stroomt door het Amazonegebied in Zuid-Amerika."
    }
  } else {
  }
});