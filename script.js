// Toegangscontrole: naam + leeftijd (redirect naar denied.html bij <16)
// Verbeterd logout gedrag: altijd event listener, duidelijke show/hide helpers en form reset

document.addEventListener('DOMContentLoaded', () => {
  console.log('[gate] script geladen');

  const overlay = document.getElementById('gateOverlay');
  const form = document.getElementById('gateForm');
  const nameInput = document.getElementById('visitorName');
  const ageInput = document.getElementById('visitorAge');
  const errorDiv = document.getElementById('gateError');
  const clearBtn = document.getElementById('clearGate');
  const logoutBtn = document.getElementById('logoutBtn');

  if (!overlay || !form || !nameInput || !ageInput) {
    console.error('[gate] Vereiste elementen niet gevonden in DOM. Controleer index.html.');
    return;
  }

  function showOverlay() {
    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');
    nameInput.value = '';
    ageInput.value = '';
    errorDiv.style.display = 'none';
    nameInput.focus();
    console.log('[gate] Overlay getoond');
  }

  function hideOverlay() {
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');
    errorDiv.style.display = 'none';
    console.log('[gate] Overlay verborgen');
  }

  function updateLogoutButton(show) {
    if (!logoutBtn) return;
    logoutBtn.style.display = show ? 'inline-block' : 'none';
  }

  // Controleer opslag
  const storedName = localStorage.getItem('visitorName');
  const storedAge = localStorage.getItem('visitorAge');
  console.log('[gate] opgeslagen waarden:', { storedName, storedAge });

  if (storedName && storedAge) {
    const ageNum = parseInt(storedAge, 10);
    if (Number.isNaN(ageNum)) {
      localStorage.removeItem('visitorName');
      localStorage.removeItem('visitorAge');
      showOverlay();
      updateLogoutButton(false);
    } else if (ageNum < 16) {
      console.log('[gate] Leeftijd < 16 — redirect naar denied.html');
      window.location.href = 'denied.html';
      return;
    } else {
      hideOverlay();
      updateLogoutButton(true);
    }
  } else {
    // geen opgeslagen gegevens: toon overlay en verberg logout
    showOverlay();
    updateLogoutButton(false);
  }

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorDiv.style.display = 'none';
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    if (!name) {
      showError('Voer alstublieft uw naam in.');
      return;
    }
    if (!age || age <= 0) {
      showError('Voer een geldige leeftijd in.');
      return;
    }

    console.log(`[gate] Gebruiker ingevoerd: ${name}, Leeftijd: ${age}`);
    localStorage.setItem('visitorName', name);
    localStorage.setItem('visitorAge', String(age));

    if (age < 16) {
      console.log('[gate] Geen toestemming: leeftijd onder 16. Redirecting naar denied.html');
      window.location.href = 'denied.html';
      return;
    }

    hideOverlay();
    updateLogoutButton(true);
  });

  // Clear knop in overlay (wis invoer maar blijf op overlay)
  clearBtn.addEventListener('click', () => {
    nameInput.value = '';
    ageInput.value = '';
    showError('Invoer gewist. Vul opnieuw in en klik Start.');
    nameInput.focus();
  });

  // Logout functie: verwijder opgeslagen gegevens en toon gate opnieuw
  function logout() {
    console.log('[gate] Uitloggen — verwijder opgeslagen naam en leeftijd');
    localStorage.removeItem('visitorName');
    localStorage.removeItem('visitorAge');
    updateLogoutButton(false);
    showOverlay();
  }

  // Zorg dat logoutBtn altijd een listener heeft, ook als initially hidden
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }

  function showError(msg) {
    errorDiv.innerText = msg;
    errorDiv.style.display = 'block';
  }
});

// Verwijder opgeslagen gegevens bij afsluiten pagina
window.addEventListener('unload', () => {
    localStorage.removeItem('visitorName');
    localStorage.removeItem('visitorAge');
    console.log('[gate] Opgeslagen gegevens verwijderd bij afsluiten');
});

// Of gebruik beforeunload voor een iets vroeger moment
window.addEventListener('beforeunload', () => {
    localStorage.removeItem('visitorName');
    localStorage.removeItem('visitorAge');
    console.log('[gate] Opgeslagen gegevens verwijderd voor afsluiten');
});

// Wacht tot het volledige document geladen is
document.addEventListener("DOMContentLoaded", () => {
  // Minimale toegestane leeftijd
  const MIN_AGE = 5;
  console.log(`[gate] script geladen (min age = ${MIN_AGE})`);

  //  Gate / overlay setup
  // Controleer of er al een logout-knop bestaat.
  let logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) {
    const header =
      document.querySelector("header .header-container") ||
      document.querySelector("header") ||
      document.body;
    logoutBtn = document.createElement("button");
    logoutBtn.id = "logoutBtn";
    logoutBtn.className = "btn";
    logoutBtn.style.marginTop = "10px";
    logoutBtn.style.display = "none"; // verborgen
    logoutBtn.textContent = "Uitloggen";
    header.appendChild(logoutBtn);
    console.log("[gate] logoutBtn aangemaakt");
  }

  // Controleer of de overlay bestaat.
  let overlay = document.getElementById("gateOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "gateOverlay";
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    console.log("[gate] gateOverlay aangemaakt");
  }

  // Voeg formulier toe aan overlay.
  if (!overlay.querySelector(".overlay-content")) {
    overlay.innerHTML = `
      <div class="overlay-content" role="dialog" aria-modal="true" aria-labelledby="gateTitle">
        <h2 id="gateTitle">Welkom, voer uw naam en leefijd om door te gaan</h2>
        <p></p>
        <form id="gateForm">
          <input type="text" id="visitorName" name="name" placeholder="Je naam" required />
          <input type="number" id="visitorAge" name="age" placeholder="Leeftijd" required min="1" />
          <div class="form-row" style="margin-top:8px;">
            <button type="submit" class="btn">Start</button>
            <button type="button" id="clearGate" class="btn" style="background:#777">Wissen</button>
          </div>
          <div id="gateError" class="gate-error" style="display:none; margin-top:10px;"></div>
        </form>
      </div>
    `;
    console.log("[gate] overlay content toegevoegd");
  }

  // Haal verwijzingen naar formulieronderdelen op.
  const form = document.getElementById("gateForm");
  const nameInput = document.getElementById("visitorName");
  const ageInput = document.getElementById("visitorAge");
  const errorDiv = document.getElementById("gateError");
  const clearBtn = document.getElementById("clearGate");

  // Toon de overlay
  function showOverlay() {
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
    nameInput.value = "";
    ageInput.value = "";
    if (errorDiv) errorDiv.style.display = "none";
    nameInput.focus();
    console.log("[gate] Overlay getoond");
  }

  // Verberg de overlay
  function hideOverlay() {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    if (errorDiv) errorDiv.style.display = "none";
    console.log("[gate] Overlay verborgen");
  }

  // Laat of verberg de logout-knop
  function updateLogoutButton(show) {
    logoutBtn.style.display = show ? "inline-block" : "none";
  }

  // Haal opgeslagen naam en leeftijd op
  const storedName = localStorage.getItem("visitorName");
  const storedAge = localStorage.getItem("visitorAge");
  console.log("[gate] opgeslagen waarden:", { storedName, storedAge });

  // Bepaal gedrag op basis van opgeslagen waarden
  if (storedName && storedAge) {
    const ageNum = parseInt(storedAge, 10);
    if (Number.isNaN(ageNum)) {
      // Ongeldige leeftijd opgeslagen, wis het
      localStorage.removeItem("visitorName");
      localStorage.removeItem("visitorAge");
      showOverlay();
      updateLogoutButton(false);
    } else if (ageNum < MIN_AGE) {
      // Te jong, wis gegevens en toon overlay
      console.log(
        `[gate] opgeslagen leeftijd < ${MIN_AGE} gevonden — verwijderen`
      );
      localStorage.removeItem("visitorName");
      localStorage.removeItem("visitorAge");
      showOverlay();
      updateLogoutButton(false);
    } else {
      // Gegevens geldig, verberg overlay en toon logout-knop
      hideOverlay();
      updateLogoutButton(true);
    }
  } else {
    // Geen gegevens gevonden, toon overlay
    showOverlay();
    updateLogoutButton(false);
  }

  // Verwerk formulier bij indienen
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (errorDiv) errorDiv.style.display = "none";

    // Haal gegevens op uit formulier
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    // Validatie
    if (!name) {
      showError("Voer alstublieft uw naam in.");
      return;
    }
    if (!age || age <= 0) {
      showError("Voer een geldige leeftijd in.");
      return;
    }

    console.log(`[gate] Ingevuld: ${name}, Leeftijd: ${age}`);

    // Leeftijd te laag, redirect naar denied.html
    if (age < MIN_AGE) {
      console.log(
        `[gate] Leeftijd < ${MIN_AGE} — redirect naar denied.html (geen opslag)`
      );
      localStorage.removeItem("visitorName");
      localStorage.removeItem("visitorAge");
      window.location.href = "denied.html";
      return;
    }

    // Gegevens opslaan en doorgaan
    localStorage.setItem("visitorName", name);
    localStorage.setItem("visitorAge", String(age));
    hideOverlay();
    updateLogoutButton(true);
  });

  // Voeg functionaliteit toe aan "Wissen" knop
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      nameInput.value = "";
      ageInput.value = "";
      showError("Invoer gewist. Vul opnieuw in en klik Start.");
      nameInput.focus();
    });
  }

  // Uitlog-functie
  function logout() {
    console.log("[gate] Uitloggen — verwijder opgeslagen naam en leeftijd");
    localStorage.removeItem("visitorName");
    localStorage.removeItem("visitorAge");
    updateLogoutButton(false);
    showOverlay();
  }

  // Koppel uitlogfunctie aan knop
  logoutBtn.addEventListener("click", logout);

  // Toon foutmeldingen
  function showError(msg) {
    if (!errorDiv) return;
    errorDiv.innerText = msg;
    errorDiv.style.display = "block";
  }

  // Klik op overlay zelf sluit deze niet automatisch
  overlay.addEventListener("click", (ev) => {
    if (ev.target === overlay) {
      // hideOverlay(); // Uncomment als je overlay wil laten sluiten bij klik buiten formulier
    }
  });

  // --- Game tile interactions ---------------------------------------------------------------

  // Haal het spelraster op
  const grid = document.getElementById("gameGrid");
  if (!grid) {
    console.log("[games] gameGrid niet gevonden — geen tile-logica uitgevoerd");
    return;
  }

  // Sluit alle geopende reveals
  function closeAllReveals() {
    grid.querySelectorAll(".reveal").forEach((r) => {
      r.classList.remove("show");
      r.innerHTML = "";
      r.setAttribute("aria-hidden", "true");
    });
  }

  // Voeg klikgedrag toe aan elke game-tile
  grid.querySelectorAll(".game-tile").forEach((tile) => {
    // Toon pointer bij hover
    tile.style.cursor = "pointer";

    tile.addEventListener("click", (e) => {
      // Blokkeer klik als toegangspoort nog zichtbaar is
      if (overlay.classList.contains("show")) {
        showError("Vul eerst naam en leeftijd in om door te gaan.");
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      // Sluit eerdere reveals
      closeAllReveals();

      // Haal link en naam van de tile op
      const href = tile.getAttribute("data-href") || "";
      const name = tile.getAttribute("data-name") || "Game";
      const reveal = tile.querySelector(".reveal");
      if (!reveal) return;

      // Als er een geldige link is, maak een klikbare link aan
      if (href && href !== "#" && href.trim() !== "") {
        const a = document.createElement("a");
        a.className = "go-link";
        a.href = href;
        a.target = "_self";
        a.rel = "noopener noreferrer";
        a.style.cursor = "pointer";
        a.textContent = `Ga naar ${name}`;
        // Voorkom bubbelen van klik
        a.addEventListener("click", (ev) => {
          ev.stopPropagation();
          // Navigatie fallback
          window.location.href = a.href;
        });
        reveal.appendChild(a);
        reveal.classList.add("show");
        reveal.setAttribute("aria-hidden", "false");
      } else {
        // Geen geldige link: toon melding
        const span = document.createElement("span");
        span.className = "go-link disabled";
        span.textContent = "Nog niet gelinkt";
        reveal.appendChild(span);
        reveal.classList.add("show");
        reveal.setAttribute("aria-hidden", "false");
      }

      // Scroll tile in beeld
      tile.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  // Klik buiten een tile sluit alle reveals
  document.addEventListener("click", (ev) => {
    if (!ev.target.closest(".game-tile")) closeAllReveals();
  });
});

// Verwijder opgeslagen gegevens bij afsluiten pagina
window.addEventListener('unload', () => {
    localStorage.removeItem('visitorName');
    localStorage.removeItem('visitorAge');
    console.log('[gate] Opgeslagen gegevens verwijderd bij afsluiten');
});

// Of gebruik beforeunload voor een iets vroeger moment
window.addEventListener('beforeunload', () => {
    localStorage.removeItem('visitorName');
    localStorage.removeItem('visitorAge');
    console.log('[gate] Opgeslagen gegevens verwijderd voor afsluiten');
});
