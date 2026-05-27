const DEPARTMENTS = {
  "01": { name: "Ain", region: "Auvergne-Rhône-Alpes" },
  "02": { name: "Aisne", region: "Hauts-de-France" },
  "03": { name: "Allier", region: "Auvergne-Rhône-Alpes" },
  "04": { name: "Alpes-de-Haute-Provence", region: "Provence-Alpes-Côte d'Azur" },
  "05": { name: "Hautes-Alpes", region: "Provence-Alpes-Côte d'Azur" },
  "06": { name: "Alpes-Maritimes", region: "Provence-Alpes-Côte d'Azur" },
  "07": { name: "Ardèche", region: "Auvergne-Rhône-Alpes" },
  "08": { name: "Ardennes", region: "Grand Est" },
  "09": { name: "Ariège", region: "Occitanie" },
  "10": { name: "Aube", region: "Grand Est" },
  "11": { name: "Aude", region: "Occitanie" },
  "12": { name: "Aveyron", region: "Occitanie" },
  "13": { name: "Bouches-du-Rhône", region: "Provence-Alpes-Côte d'Azur" },
  "14": { name: "Calvados", region: "Normandie" },
  "15": { name: "Cantal", region: "Auvergne-Rhône-Alpes" },
  "16": { name: "Charente", region: "Nouvelle-Aquitaine" },
  "17": { name: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "18": { name: "Cher", region: "Centre-Val de Loire" },
  "19": { name: "Corrèze", region: "Nouvelle-Aquitaine" },
  "2A": { name: "Corse-du-Sud", region: "Corse" },
  "2B": { name: "Haute-Corse", region: "Corse" },
  "21": { name: "Côte-d'Or", region: "Bourgogne-Franche-Comté" },
  "22": { name: "Côtes-d'Armor", region: "Bretagne" },
  "23": { name: "Creuse", region: "Nouvelle-Aquitaine" },
  "24": { name: "Dordogne", region: "Nouvelle-Aquitaine" },
  "25": { name: "Doubs", region: "Bourgogne-Franche-Comté" },
  "26": { name: "Drôme", region: "Auvergne-Rhône-Alpes" },
  "27": { name: "Eure", region: "Normandie" },
  "28": { name: "Eure-et-Loir", region: "Centre-Val de Loire" },
  "29": { name: "Finistère", region: "Bretagne" },
  "30": { name: "Gard", region: "Occitanie" },
  "31": { name: "Haute-Garonne", region: "Occitanie" },
  "32": { name: "Gers", region: "Occitanie" },
  "33": { name: "Gironde", region: "Nouvelle-Aquitaine" },
  "34": { name: "Hérault", region: "Occitanie" },
  "35": { name: "Ille-et-Vilaine", region: "Bretagne" },
  "36": { name: "Indre", region: "Centre-Val de Loire" },
  "37": { name: "Indre-et-Loire", region: "Centre-Val de Loire" },
  "38": { name: "Isère", region: "Auvergne-Rhône-Alpes" },
  "39": { name: "Jura", region: "Bourgogne-Franche-Comté" },
  "40": { name: "Landes", region: "Nouvelle-Aquitaine" },
  "41": { name: "Loir-et-Cher", region: "Centre-Val de Loire" },
  "42": { name: "Loire", region: "Auvergne-Rhône-Alpes" },
  "43": { name: "Haute-Loire", region: "Auvergne-Rhône-Alpes" },
  "44": { name: "Loire-Atlantique", region: "Pays de la Loire" },
  "45": { name: "Loiret", region: "Centre-Val de Loire" },
  "46": { name: "Lot", region: "Occitanie" },
  "47": { name: "Lot-et-Garonne", region: "Nouvelle-Aquitaine" },
  "48": { name: "Lozère", region: "Occitanie" },
  "49": { name: "Maine-et-Loire", region: "Pays de la Loire" },
  "50": { name: "Manche", region: "Normandie" },
  "51": { name: "Marne", region: "Grand Est" },
  "52": { name: "Haute-Marne", region: "Grand Est" },
  "53": { name: "Mayenne", region: "Pays de la Loire" },
  "54": { name: "Meurthe-et-Moselle", region: "Grand Est" },
  "55": { name: "Meuse", region: "Grand Est" },
  "56": { name: "Morbihan", region: "Bretagne" },
  "57": { name: "Moselle", region: "Grand Est" },
  "58": { name: "Nièvre", region: "Bourgogne-Franche-Comté" },
  "59": { name: "Nord", region: "Hauts-de-France" },
  "60": { name: "Oise", region: "Hauts-de-France" },
  "61": { name: "Orne", region: "Normandie" },
  "62": { name: "Pas-de-Calais", region: "Hauts-de-France" },
  "63": { name: "Puy-de-Dôme", region: "Auvergne-Rhône-Alpes" },
  "64": { name: "Pyrénées-Atlantiques", region: "Nouvelle-Aquitaine" },
  "65": { name: "Hautes-Pyrénées", region: "Occitanie" },
  "66": { name: "Pyrénées-Orientales", region: "Occitanie" },
  "67": { name: "Bas-Rhin", region: "Grand Est" },
  "68": { name: "Haut-Rhin", region: "Grand Est" },
  "69": { name: "Rhône", region: "Auvergne-Rhône-Alpes" },
  "70": { name: "Haute-Saône", region: "Bourgogne-Franche-Comté" },
  "71": { name: "Saône-et-Loire", region: "Bourgogne-Franche-Comté" },
  "72": { name: "Sarthe", region: "Pays de la Loire" },
  "73": { name: "Savoie", region: "Auvergne-Rhône-Alpes" },
  "74": { name: "Haute-Savoie", region: "Auvergne-Rhône-Alpes" },
  "75": { name: "Paris", region: "Île-de-France" },
  "76": { name: "Seine-Maritime", region: "Normandie" },
  "77": { name: "Seine-et-Marne", region: "Île-de-France" },
  "78": { name: "Yvelines", region: "Île-de-France" },
  "79": { name: "Deux-Sèvres", region: "Nouvelle-Aquitaine" },
  "80": { name: "Somme", region: "Hauts-de-France" },
  "81": { name: "Tarn", region: "Occitanie" },
  "82": { name: "Tarn-et-Garonne", region: "Occitanie" },
  "83": { name: "Var", region: "Provence-Alpes-Côte d'Azur" },
  "84": { name: "Vaucluse", region: "Provence-Alpes-Côte d'Azur" },
  "85": { name: "Vendée", region: "Pays de la Loire" },
  "86": { name: "Vienne", region: "Nouvelle-Aquitaine" },
  "87": { name: "Haute-Vienne", region: "Nouvelle-Aquitaine" },
  "88": { name: "Vosges", region: "Grand Est" },
  "89": { name: "Yonne", region: "Bourgogne-Franche-Comté" },
  "90": { name: "Territoire de Belfort", region: "Bourgogne-Franche-Comté" },
  "91": { name: "Essonne", region: "Île-de-France" },
  "92": { name: "Hauts-de-Seine", region: "Île-de-France" },
  "93": { name: "Seine-Saint-Denis", region: "Île-de-France" },
  "94": { name: "Val-de-Marne", region: "Île-de-France" },
  "95": { name: "Val-d'Oise", region: "Île-de-France" },
  "971": { name: "Guadeloupe", region: "Outre-mer" },
  "972": { name: "Martinique", region: "Outre-mer" },
  "973": { name: "Guyane", region: "Outre-mer" },
  "974": { name: "La Réunion", region: "Outre-mer" },
  "976": { name: "Mayotte", region: "Outre-mer" },
};

const TOTAL = Object.keys(DEPARTMENTS).length; // 101
let streak = 0;

const savedData = localStorage.getItem('jeuDepartements_sauvegarde');
let found = savedData ? new Set(JSON.parse(savedData)) : new Set();

document.getElementById('score-total').textContent = TOTAL;

const input = document.getElementById('dept-input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') validate();
});

function pad(val) {
  if (val === 'del') {
    input.value = input.value.slice(0, -1);
  } else if (val === 'clear') {
    if (input.value === '') {
      reinitialiserJeu();
    } else {
      input.value = '';
    }
  } else {
    if (input.value.length < 3) input.value += val;
  }
  input.focus();
}

function lookupDept(raw) {
  const up = raw.trim().toUpperCase();
  if (DEPARTMENTS[up]) return [up, DEPARTMENTS[up]];
  const padded = up.padStart(2, '0');
  if (DEPARTMENTS[padded]) return [padded, DEPARTMENTS[padded]];
  return null;
}

function validate() {
  const raw = input.value.trim();
  if (!raw) return;

  const result = lookupDept(raw);
  const box = document.getElementById('result-box');
  const icon = document.getElementById('result-icon');
  const name = document.getElementById('result-name');
  const region = document.getElementById('result-region');

  if (box) box.className = 'result-box show';

  if (result) {
    const [key, dept] = result;
    if (found.has(key)) {
      if (icon) icon.textContent = '⚠️';
      if (name) name.textContent = dept.name + ' — déjà trouvé !';
      if (region) region.textContent = dept.region;
      if (box) {
        box.classList.remove('correct');
        box.classList.add('wrong');
      }
      streak = 0;
    } else {
      found.add(key);
      if (icon) icon.textContent = '✅';
      if (name) name.textContent = dept.name;
      if (region) region.textContent = ' ' + dept.region;
      if (box) {
        box.classList.remove('wrong');
        box.classList.add('correct');
      }
      streak++;
      
      localStorage.setItem('jeuDepartements_sauvegarde', JSON.stringify(Array.from(found)));
      
      addChip(key, dept.name);
      updateScores();
      if (found.size === TOTAL) setTimeout(celebrate, 600);
    }
    highlightMap(key);
  } else {
    if (icon) icon.textContent = '❌';
    if (name) name.textContent = 'Numéro inconnu : ' + raw;
    if (region) region.textContent = 'Vérifie le numéro sur la plaque !';
    if (box) {
      box.classList.remove('correct');
      box.classList.add('wrong');
    }
    streak = 0;
  }

  input.value = '';
}

// APPLICATION DU VERT ET CONFIGURATION DE LA CLIQUE
function highlightMap(deptId) {
  const path = document.getElementById(`FR-${deptId}`);
  if (path) {
    path.classList.add('found');
    path.setAttribute('data-num', deptId); // Stocke de manière sécurisée le numéro
    
    path.classList.add('highlight');
    setTimeout(() => {
      path.classList.remove('highlight');
    }, 1500);
  }
}

// UNE SEULE ET UNIQUE FONCTION DE RESTAURATION (CORRIGÉE)
function restaurerPartie() {
  if (found.size > 0) {
    found.forEach(key => {
      highlightMap(key); // Applique la classe "found" ET le "data-num"
      if (DEPARTMENTS[key]) {
        addChip(key, DEPARTMENTS[key].name);
      }
    });
    updateScores();
  }
}

function updateScores() {
  const f = found.size;
  const badge = document.getElementById('found-count-badge');
  const bar = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');
  
  if (badge) badge.textContent = f;
  const pct = Math.round((f / TOTAL) * 100);
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = f + ' / ' + TOTAL + ' départements';
}

function addChip(key, name) {
  const chip = document.createElement('div');
  chip.className = 'found-chip';
  chip.style.cursor = 'pointer';
  chip.innerHTML = `<span class="num">${key}</span> ${name}`;
  
  // Au clic sur le badge vert en bas
  chip.addEventListener('click', () => {
    // 1. On va chercher l'élément qui contient ta carte (le <object> ou le <svg> directement)
    const objetSvg = document.getElementById('map') || document.querySelector('object');
    
    // 2. On détermine où chercher (dans l'objet interne si c'est un <object>, ou directement dans la page)
    let docCarte = document;
    if (objetSvg && objetSvg.contentDocument) {
      docCarte = objetSvg.contentDocument;
    }

    // 3. On nettoie l'ancien département qui était en bleu (partout)
    document.querySelectorAll('.selected-blue').forEach(el => el.classList.remove('selected-blue'));
    docCarte.querySelectorAll('.selected-blue').forEach(el => el.classList.remove('selected-blue'));

    // 4. On cherche le département à l'endroit précis où se trouve la carte
    const path = docCarte.getElementById(`FR-${key}`);
    
    if (path) {
      // 5. On lui applique enfin la classe bleue !
      path.classList.add('selected-blue');
      
      // 6. On remonte l'écran automatiquement vers la carte pour voir le résultat
      const vueCarte = document.getElementById('map') || document.querySelector('object') || document.querySelector('svg');
      if (vueCarte) {
        vueCarte.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      console.log(`Département FR-${key} introuvable dans la carte.`);
    }
  });

  const list = document.getElementById('found-list');
  if (list) list.prepend(chip);
}

function celebrate() {
  const celebEl = document.getElementById('celebration');
  if (celebEl) celebEl.classList.add('show');
  launchConfetti();
}

function launchConfetti() {
  const emojis = ['🎉','✨','🎊','⭐️','🇫🇷'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('span');
    el.className = 'confetti-emoji';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (2 + Math.random() * 3) + 's';
    el.style.animationDelay = Math.random() * 2 + 's';
    el.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 6000);
  }
}

function reinitialiserJeu() {
  const modal = document.getElementById('reset-modal');
  if (modal) modal.classList.add('show');
}

function fermerModalReset() {
  const modal = document.getElementById('reset-modal');
  if (modal) modal.classList.remove('show');
}

function confirmerResetTotal() {
  localStorage.removeItem('jeuDepartements_sauvegarde');
  found.clear();
  location.reload();
}

// === GESTIONNAIRE D'ÉVÉNEMENTS GLOBAL POUR LE CLIC (PC & ÉCRANS TACTILES) ===
window.addEventListener('load', () => {
  // Lance la restauration une fois que TOUTE la page (et le SVG de la carte) est chargée à 100%
  restaurerPartie();

  // Écoute les clics et tapotements tactiles sur tout le document
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('found')) {
      const num = e.target.getAttribute('data-num');
      const deptId = num || e.target.id.replace('FR-', '');
      const deptInfo = DEPARTMENTS[deptId];
      
      if (deptInfo) {
        const box = document.getElementById('result-box');
        const icon = document.getElementById('result-icon');
        const name = document.getElementById('result-name');
        const region = document.getElementById('result-region');
        
        if (box) {
          box.className = 'result-box show correct';
          if (icon) icon.textContent = '🗺️';
          if (name) name.textContent = `${deptId} — ${deptInfo.name}`;
          if (region) region.textContent = ' ' + deptInfo.region;
        }
        
        // Petit effet flash rapide au toucher
        e.target.classList.add('highlight');
        setTimeout(() => e.target.classList.remove('highlight'), 300);
      }
    }
  });
});

// === FONCTION POUR ACTIVER LES CLICS DIRECTEMENT SUR LA CARTE ===
function activerClicsSurCarte(svgDocument) {
  if (!svgDocument) return;

  // On écoute le clic directement dans le document du SVG
  svgDocument.addEventListener('click', (e) => {
    // Si la zone cliquée est un département trouvé (vert)
    if (e.target && e.target.classList.contains('found')) {
      const num = e.target.getAttribute('data-num');
      const deptId = num || e.target.id.replace('FR-', '');
      const deptInfo = DEPARTMENTS[deptId];
      
      if (deptInfo) {
        // IMPORTANT : On cherche la boîte de texte dans la page principale (window.parent ou document)
        const docPrincipal = window.document;
        const box = docPrincipal.getElementById('result-box');
        const icon = docPrincipal.getElementById('result-icon');
        const name = docPrincipal.getElementById('result-name');
        const region = docPrincipal.getElementById('result-region');
        
        if (box) {
          box.className = 'result-box show correct';
          if (icon) icon.textContent = '🗺️';
          if (name) name.textContent = `${deptId} — ${deptInfo.name}`;
          if (region) region.textContent = ' ' + deptInfo.region;
        }
        
        // Petit effet de flash visuel
        e.target.classList.add('highlight');
        setTimeout(() => e.target.classList.remove('highlight'), 300);
      }
    }
  });
}

// === INITIALISATION GLOBALE AU CHARGEMENT ===
window.addEventListener('load', () => {
  // 1. On restaure d'abord la partie (applique le vert sur la carte)
  restaurerPartie();

  // 2. ÉCOUTEUR PRINCIPAL (si le SVG est directement écrit au milieu du HTML)
  activerClicsSurCarte(document);

  // 3. ÉCOUTEUR SECONDAIRE (si ta carte utilise une balise <object id="..." data="carte.svg">)
  // Remplace 'map' par l'ID de ta balise <object> si tu en as un !
  const objetSvg = document.getElementById('map') || document.querySelector('object');
  if (objetSvg) {
    objetSvg.addEventListener('load', () => {
      const svgInterne = objetSvg.contentDocument;
      activerClicsSurCarte(svgInterne);
    });
    // Si l'objet était déjà chargé entre-temps
    try {
      if (objetSvg.contentDocument) {
        activerClicsSurCarte(objetSvg.contentDocument);
      }
    } catch(err) {
      console.log("Le SVG est sur un autre domaine ou inaccessible");
    }
  }
});