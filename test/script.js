let mysteryNumber = Math.floor(Math.random() * 10) + 1;
//Math.floor → permet d'arrondir à la décimale du dessous
//Math.random → Génère un nombre aléatoire entre 0 et 1
let essaisRestants = 3;

const input = document.getElementById("my-input");
// .getElementById → Permet de rechercher l'ID correspondant dans le HTML

console.log("mysteryNumber:"); //Affiche le texte
console.log(mysteryNumber); //Affiche la valeur

function maFonction() {
  for (let i = 2; i > 0; i--) {
    // Ceci sera exécuté 3 fois
    // À chaque éxécution, la variable "pas"  terminera.

    // document.getElementById("my-button").click();
    // console.log("un évènement click a eu lieu");

    let input = document.getElementById("my-input").value; //Récupérer la valeur du champ Input
    // alert(input); // Afficher la valeur
    let result;

    if (input < mysteryNumber) {
      console.log("C'est plus");
      result = "C'est plus";
    } else if (input > mysteryNumber) {
      console.log("C'est moins");
      result = "C'est moins";
    } else if (input == mysteryNumber) {
      console.log("Bravo !");
      result = "Bravo !";
    }

    console.log("Il reste " + i + " essaies");

    if (i == 1) {
      console.log("C'est perdu");

      console.log(result);
    }

    document.getElementById("my-input").value = "";

    document.getElementById("resultats").textContent = result; //Affiche le résultat sur la page HTML
    //return result; //Toujours la dernière instruction
  }
}
// document.getElementById("resultats").textContent = maFonction();
