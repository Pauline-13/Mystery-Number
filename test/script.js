let maxNombre = 10;
let essaisMax = 3;

let mysteryNumber = genererNombreMystere();
let essaisRestants = essaisMax;
let gameOver = false;

// Fonction appelée au clic sur le bouton
function maFonction() {
  if (gameOver) return; // Si le jeu est terminé, ne rien faire

  let input = document.getElementById("my-input").value; // Récupère la valeur de l'input
  let result = ""; // Message du résultat

  // Vérifie si l'entrée est valide (un nombre entre 1 et 10)
  if (input < 1 || input > maxNombre || input === "") {
    result = "Entre un nombre avant de valider.";
  } else {
    // Si l'entrée est valide, on vérifie si le nombre est correct
    if (input < mysteryNumber) {
      result = "C'est plus !";
    } else if (input > mysteryNumber) {
      result = "C'est moins !";
    } else if (input == mysteryNumber) {
      result = "Bravo ! Tu as trouvé le nombre mystère !";
      gameOver = true; // Le jeu est terminé
      let resultatElement = document.getElementById("resultats");
      resultatElement.classList.remove("animation-victoire"); // on la retire d’abord

      // Force un "reflow" pour que le navigateur prenne en compte le retrait
      void resultatElement.offsetWidth;

      resultatElement.classList.add("animation-victoire"); // on la rajoute juste après
    }

    essaisRestants--; // On décrémente le nombre d'essais
    if (essaisRestants <= 0 && input != mysteryNumber) {
      result = "Dommage, tu as perdu. Le nombre mystère était " + mysteryNumber;
      gameOver = true; // Le jeu est terminé
      let resultatElement = document.getElementById("resultats");
resultatElement.classList.remove("animation-defaite");
void resultatElement.offsetWidth;
resultatElement.classList.add("animation-defaite");
    }
  }

  // Affiche le résultat
  document.getElementById("resultats").textContent = result;
  document.getElementById("my-input").value = ""; // Réinitialise l'input

  // Affiche le nombre d'essais restants
  if (!gameOver) {
    document.getElementById("resultats").textContent +=
      " Il te reste " + essaisRestants + " essai(s).";
  }

  // Si le jeu est terminé, désactive le bouton
  if (gameOver) {
    document.getElementById("my-button").style.display = "none";
    document.getElementById("rejouer-button").style.display = "inline"; // Affiche le bouton Rejouer
  }
}

function relancerJeu() {
  mysteryNumber = genererNombreMystere();
  essaisRestants = essaisMax;
  gameOver = false;

  document.getElementById("my-button").style.display = "inline";
  document.getElementById("rejouer-button").style.display = "none";
  document.getElementById("resultats").textContent = "";
  document.getElementById("resultats").classList.remove("animation-victoire", "animation-defaite", "texte-defaite");
  document.getElementById("my-input").value = "";
}


function genererNombreMystere() {
  return Math.floor(Math.random() * maxNombre) + 1;
}

function changerNiveau(niveau) {
  // Change les paramètres en fonction du niveau
  if (niveau === "facile") {
    maxNombre = 10;
    essaisMax = 3;
  } else if (niveau === "moyen") {
    maxNombre = 50;
    essaisMax = 5;
  } else if (niveau === "difficile") {
    maxNombre = 100;
    essaisMax = 7;
  } else if (niveau === "expert") {
    maxNombre = 100;
    essaisMax = 1;
  }

  // Mets à jour l'affichage des règles
  document.getElementById("regle").innerHTML = 
    `Devine le nombre caché entre 1 et ${maxNombre}<br>Tu as ${essaisMax} essai(s) !`;

  // Relance le jeu avec les nouveaux paramètres
  relancerJeu();
}


// Ajouter un écouteur d'événements pour la touche "Enter" (Entrée)
document
  .getElementById("my-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Si la touche pressée est "Enter"
      maFonction(); // Appeler la fonction du jeu comme si on avait cliqué sur le bouton
    }
  });
