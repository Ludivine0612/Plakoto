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

// INITIALISATION DU JEU AVEC CHARGEMENT DE LA SAUVEGARDE
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
    // Si la plaque est vide et qu'on clique sur ✕, on propose de réinitialiser tout le jeu
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
  // Direct match (e.g. "2A", "971")
  if (DEPARTMENTS[up]) return [up, DEPARTMENTS[up]];
  // Zero-padded two-digit (e.g. "1" -> "01")
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

  box.className = 'result-box show';

  if (result) {
    const [key, dept] = result;
    if (found.has(key)) {
      icon.textContent = '⚠️';
      name.textContent = dept.name + ' — déjà trouvé !';
      region.textContent = dept.region;
      box.classList.remove('correct');
      box.classList.add('wrong');
      streak = 0;
    } else {
      found.add(key);
      icon.textContent = '✅';
      name.textContent = dept.name;
      region.textContent = ' ' + dept.region;
      box.classList.remove('wrong');
      box.classList.add('correct');
      streak++;
      
      // Sauvegarder immédiatement la nouvelle liste dans la mémoire locale
      localStorage.setItem('jeuDepartements_sauvegarde', JSON.stringify(Array.from(found)));
      
      addChip(key, dept.name);
      updateScores();
      if (found.size === TOTAL) setTimeout(celebrate, 600);
    }
    highlightMap(key);
  } else {
    icon.textContent = '❌';
    name.textContent = 'Numéro inconnu : ' + raw;
    region.textContent = 'Vérifie le numéro sur la plaque !';
    box.classList.remove('correct');
    box.classList.add('wrong');
    streak = 0;
  }

  input.value = '';
}

function highlightMap(deptId) {
  // Cette carte utilise le format "FR-01", "FR-75", "FR-2A", etc.
  const path = document.getElementById(`FR-${deptId}`);
  
  if (path) {
    // Ajouter la classe "found" pour le peindre en vert
    path.classList.add('found');
    
    // AJOUT : Écrire le numéro au centre du département si ce n'est pas déjà fait
    const textId = `text-FR-${deptId}`;
    if (!document.getElementById(textId)) {
      try {
        // Calcule automatiquement le centre géométrique du département
        const box = path.getBBox();
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2;
        
        // Crée une balise de texte spéciale pour le SVG
        const textSvg = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textSvg.setAttribute("id", textId);
        textSvg.setAttribute("x", x);
        textSvg.setAttribute("y", y);
        textSvg.setAttribute("class", "numero-carte-style");
        textSvg.textContent = deptId; // Écrit le numéro (ex: "01", "2A")
        
        // Insère le numéro juste au-dessus du département sur la carte
        path.parentNode.appendChild(textSvg);
      } catch (e) {
        console.log("Impossible de calculer le centre pour le département " + deptId);
      }
    }
    
    // Ajouter un flash temporaire "highlight" (jaune)
    path.classList.add('highlight');
    setTimeout(() => {
      path.classList.remove('highlight');
    }, 1500);
  }
}

function updateScores() {
  const f = found.size;
  document.getElementById('found-count-badge').textContent = f;
  const pct = Math.round((f / TOTAL) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-label').textContent = f + ' / ' + TOTAL + ' départements';
}

function addChip(key, name) {
  const chip = document.createElement('div');
  chip.className = 'found-chip';
  chip.innerHTML = `<span class="num">${key}</span> ${name}`;
  document.getElementById('found-list').prepend(chip);
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

// RESTAURATION DE LA PARTIE ENREGISTRÉE AU CHARGEMENT DE LA PAGE
function restaurerPartie() {
  if (found.size > 0) {
    found.forEach(key => {
      // 1. Colorer la carte
      const path = document.getElementById(`FR-${key}`);
      if (path) path.classList.add('found');
      
      // 2. Recréer les badges (chips) en bas
      if (DEPARTMENTS[key]) {
        addChip(key, DEPARTMENTS[key].name);
      }
    });
    // 3. Mettre à jour les scores et la barre
    updateScores();
  }
}

// Ouvre la boîte de dialogue personnalisée
function reinitialiserJeu() {
  const modal = document.getElementById('reset-modal');
  if (modal) modal.classList.add('show');
}

// Ferme la boîte de dialogue si on clique sur annuler
function fermerModalReset() {
  const modal = document.getElementById('reset-modal');
  if (modal) modal.classList.remove('show');
}

// S'exécute si on clique sur "Oui, effacer"
function confirmerResetTotal() {
  localStorage.removeItem('jeuDepartements_sauvegarde');
  found.clear();
  location.reload(); // Recharge l'application à zéro
}

// On démarre la restauration automatique dès que le script se lance
restaurerPartie();

// GESTION INTELLIGENTE DU CLAVIER (PC VS SMARTPHONE)
const deplacementInput = document.getElementById('dept-input');

if (deplacementInput) {
  // Détection : si l'appareil a un écran tactile (Smartphone/Tablette)
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  if (isTouchDevice) {
    // Sur MOBILE : on force inputmode à "none" pour bloquer le clavier natif
    deplacementInput.setAttribute('inputmode', 'none');
    deplacementInput.addEventListener('focus', (e) => e.preventDefault());
  } else {
    // Sur PC : on redonne le contrôle au clavier physique
    deplacementInput.removeAttribute('inputmode');
    
    // On force la mise au point automatique (focus) sur la plaque pour pouvoir taper direct
    window.addEventListener('DOMContentLoaded', () => {
      deplacementInput.focus();
    });
    
    // Sécurité : si l'utilisateur clique ailleurs, on lui permet de retaper directement dans la plaque
    document.addEventListener('click', (e) => {
      // Si on ne clique pas sur un bouton du pavé ou une autre zone interactive, on remet le focus sur la plaque
      if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
        deplacementInput.focus();
      }
    });
  }
}