// Gecombineerde gate + game-tile interacties
document.addEventListener('DOMContentLoaded', () => {
  const MIN_AGE = 10;
  console.log(`[gate] script geladen (min age = ${MIN_AGE})`);

  // --- Gate / overlay setup ----------------------------------------------------------------
  let logoutBtn = document.getElementById('logoutBtn');
  if (!logoutBtn) {
    const header = document.querySelector('header .header-container') || document.querySelector('header') || document.body;
    logoutBtn = document.createElement('button');
    logoutBtn.id = 'logoutBtn';
    logoutBtn.className = 'btn';
    logoutBtn.style.marginTop = '10px';
    logoutBtn.style.display = 'none';
    logoutBtn.textContent = 'Uitloggen';
    header.appendChild(logoutBtn);
    console.log('[gate] logoutBtn aangemaakt');
  }

  let overlay = document.getElementById('gateOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'gateOverlay';
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    console.log('[gate] gateOverlay aangemaakt');
  }

  if (!overlay.querySelector('.overlay-content')) {
    overlay.innerHTML = `
      <div class="overlay-content" role="dialog" aria-modal="true" aria-labelledby="gateTitle">
        <h2 id="gateTitle">Welkom — even voorstellen</h2>
        <p>Vul je naam en leeftijd in om verder te gaan.</p>
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
    console.log('[gate] overlay content toegevoegd');
  }

  const form = document.getElementById('gateForm');
  const nameInput = document.getElementById('visitorName');
  const ageInput = document.getElementById('visitorAge');
  const errorDiv = document.getElementById('gateError');
  const clearBtn = document.getElementById('clearGate');

  function showOverlay() {
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
    nameInput.value = '';
    ageInput.value = '';
    if (errorDiv) errorDiv.style.display = 'none';
    nameInput.focus();
    console.log('[gate] Overlay getoond');
  }
  function hideOverlay() {
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    if (errorDiv) errorDiv.style.display = 'none';
    console.log('[gate] Overlay verborgen');
  }
  function updateLogoutButton(show) {
    logoutBtn.style.display = show ? 'inline-block' : 'none';
  }

  // Controle opslag
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
    } else if (ageNum < MIN_AGE) {
      // verwijder zodat gebruiker later opnieuw kan invoeren
      console.log(`[gate] opgeslagen leeftijd < ${MIN_AGE} gevonden — verwijderen`);
      localStorage.removeItem('visitorName');
      localStorage.removeItem('visitorAge');
      showOverlay();
      updateLogoutButton(false);
    } else {
      hideOverlay();
      updateLogoutButton(true);
    }
  } else {
    showOverlay();
    updateLogoutButton(false);
  }

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errorDiv) errorDiv.style.display = 'none';
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

    console.log(`[gate] Ingevuld: ${name}, Leeftijd: ${age}`);

    if (age < MIN_AGE) {
      console.log(`[gate] Leeftijd < ${MIN_AGE} — redirect naar denied.html (geen opslag)`);
      localStorage.removeItem('visitorName');
      localStorage.removeItem('visitorAge');
      window.location.href = 'denied.html';
      return;
    }

    localStorage.setItem('visitorName', name);
    localStorage.setItem('visitorAge', String(age));
    hideOverlay();
    updateLogoutButton(true);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      nameInput.value = '';
      ageInput.value = '';
      showError('Invoer gewist. Vul opnieuw in en klik Start.');
      nameInput.focus();
    });
  }

  function logout() {
    console.log('[gate] Uitloggen — verwijder opgeslagen naam en leeftijd');
    localStorage.removeItem('visitorName');
    localStorage.removeItem('visitorAge');
    updateLogoutButton(false);
    showOverlay();
  }
  logoutBtn.addEventListener('click', logout);

  function showError(msg) {
    if (!errorDiv) return;
    errorDiv.innerText = msg;
    errorDiv.style.display = 'block';
  }

  // Sluit overlay als gebruiker klikt buiten content
  overlay.addEventListener('click', (ev) => {
    if (ev.target === overlay) {
      // don't automatically close — force re-entry required; comment uit als je wil toestaan
      // hideOverlay();
    }
  });

  // --- Game tile interactions ---------------------------------------------------------------
  const grid = document.getElementById('gameGrid');
  if (!grid) {
    console.log('[games] gameGrid niet gevonden — geen tile-logica uitgevoerd');
    return;
  }

  function closeAllReveals() {
    grid.querySelectorAll('.reveal').forEach(r => {
      r.classList.remove('show');
      r.innerHTML = '';
      r.setAttribute('aria-hidden', 'true');
    });
  }

  grid.querySelectorAll('.game-tile').forEach(tile => {
    // Zorg dat pointer cursor zichtbaar is
    tile.style.cursor = 'pointer';

    tile.addEventListener('click', (e) => {
      // als overlay zichtbaar is (toegang vereist) blokkeer game interactie
      if (overlay.classList.contains('show')) {
        showError('Vul eerst naam en leeftijd in om door te gaan.');
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      closeAllReveals();
      const href = tile.getAttribute('data-href') || '';
      const name = tile.getAttribute('data-name') || 'Game';
      const reveal = tile.querySelector('.reveal');
      if (!reveal) return;

      if (href && href !== '#' && href.trim() !== '') {
        const a = document.createElement('a');
        a.className = 'go-link';
        a.href = href;
        a.target = '_self';
        a.rel = 'noopener noreferrer';
        a.style.cursor = 'pointer';
        a.textContent = `Ga naar ${name}`;
        // voorkom dat de klik bubbelt en de reveal direct dichtklapt
        a.addEventListener('click', (ev) => {
          ev.stopPropagation();
          // expliciete navigatie als fallback
          window.location.href = a.href;
        });
        reveal.appendChild(a);
        reveal.classList.add('show');
        reveal.setAttribute('aria-hidden', 'false');
      } else {
        const span = document.createElement('span');
        span.className = 'go-link disabled';
        span.textContent = 'Nog niet gelinkt';
        reveal.appendChild(span);
        reveal.classList.add('show');
        reveal.setAttribute('aria-hidden', 'false');
      }
      tile.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  // klik buiten tiles sluit reveals
  document.addEventListener('click', (ev) => {
    if (!ev.target.closest('.game-tile')) closeAllReveals();
  });
});