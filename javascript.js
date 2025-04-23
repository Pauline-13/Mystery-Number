let mysteryNumber = Math.floor(Math.random() * 10) + 1;
let essaisRestants = 3; // Nombre d'essais
let gameOver = false; // Pour vérifier si le jeu est terminé

// Fonction appelée au clic sur le bouton
function maFonction() {
  if (gameOver) return; // Si le jeu est terminé, ne rien faire

  let input = document.getElementById("my-input").value; // Récupère la valeur de l'input
  let result = ""; // Message du résultat

  // Vérifie si l'entrée est valide (un nombre entre 1 et 10)
  if (input < 1 || input > 10 || input === "") {
    result = "Entre un nombre entre 1 et 10.";
  } else {
    // Si l'entrée est valide, on vérifie si le nombre est correct
    if (input < mysteryNumber) {
      result = "C'est plus !";
    } else if (input > mysteryNumber) {
      result = "C'est moins !";
    } else if (input == mysteryNumber) {
      result = "Bravo ! Tu as trouvé le nombre mystère !";
      gameOver = true; // Le jeu est terminé
    }

    essaisRestants--; // On décrémente le nombre d'essais
    if (essaisRestants <= 0 && input != mysteryNumber) {
      result =
        "Dommage, tu as perdu. Le nombre mystère était " + mysteryNumber;
      gameOver = true; // Le jeu est terminé
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
    document.getElementById("my-button").disabled = true;
  }
}

// Ajouter un écouteur d'événements pour la touche "Enter" (Entrée)
document.getElementById("my-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Si la touche pressée est "Enter"
    maFonction(); // Appeler la fonction du jeu comme si on avait cliqué sur le bouton
  }
});
