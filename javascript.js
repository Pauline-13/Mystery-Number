let maxNombre = 10;
let essaisMax = 3;

let mysteryNumber = genererNombreMystere();
let essaisRestants = essaisMax;
let gameOver = false;

function maFonction() {
  if (gameOver) return; 

  let input = document.getElementById("my-input").value; 
  let result = ""; 

  
  if (input < 1 || input > maxNombre || input === "") {
    result = "Entre un nombre avant de valider.";
  } else {
    if (input < mysteryNumber) {
      result = "C'est plus !";
    } else if (input > mysteryNumber) {
      result = "C'est moins !";
    } else if (input == mysteryNumber) {
      result = "Bravo ! Tu as trouvé le nombre mystère !";
      gameOver = true; 
      let resultatElement = document.getElementById("resultats");
      resultatElement.classList.remove("animation-victoire"); 

      
      void resultatElement.offsetWidth;

      resultatElement.classList.add("animation-victoire"); 
    }

    essaisRestants--; 
    if (essaisRestants <= 0 && input != mysteryNumber) {
      result = "Dommage, tu as perdu. Le nombre mystère était " + mysteryNumber;
      gameOver = true; 
      let resultatElement = document.getElementById("resultats");
resultatElement.classList.remove("animation-defaite");
void resultatElement.offsetWidth;
resultatElement.classList.add("animation-defaite");
    }
  }

 
  document.getElementById("resultats").textContent = result;
  document.getElementById("my-input").value = ""; 


  if (!gameOver) {
    document.getElementById("resultats").textContent +=
      " Il te reste " + essaisRestants + " essai(s).";
  }

  
  if (gameOver) {
    document.getElementById("my-button").style.display = "none";
    document.getElementById("rejouer-button").style.display = "inline"; 
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


  document.getElementById("regle").innerHTML = 
    `Devine le nombre caché entre 1 et ${maxNombre}<br>Tu as ${essaisMax} essai(s) !`;


  relancerJeu();
}



document
  .getElementById("my-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      
      maFonction(); 
    }
  });
