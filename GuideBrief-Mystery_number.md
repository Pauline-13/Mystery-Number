# 🗺️ Fiche-Guide : Jeu du Numéro Mystère

## 🎯 Objectif du jeu
Deviner un numéro entre 1 et 10 en 3 essais maximum !

---

## 🛠️ Mon plan d'action

### 1. Construire la base HTML
- [ ] Créer un fichier `index.html`.
- [ ] Ajouter :
  - [ ] Un champ `<input type="number">` pour entrer le nombre.
  - [ ] Un bouton `<button>` pour valider la tentative.
  - [ ] Un `<div>` pour afficher les messages / indices.
- [ ] Lier un fichier `script.js` à mon HTML.

**Tips** : _“Commence simple. Structure d'abord, décor ensuite.”_

---

### 2. Générer le numéro mystère en JavaScript
- [ ] Créer un fichier `script.js`.
- [ ] Générer un nombre aléatoire entre 1 et 10 :
  ```javascript
  let mysteryNumber = Math.floor(Math.random() * 10) + 1;
  ```
- [ ] Vérifier dans la console que le nombre est bien généré.

**Tips** : _“Ne fais confiance à personne. Vérifie toujours dans la console.”_

---

### 3. Gérer l'envoi d'une tentative
- [ ] Capturer l’événement `click` sur le bouton.
- [ ] Récupérer la valeur du champ `<input>`.
- [ ] Comparer la valeur avec le numéro mystère :
  - [ ] Si plus petit → Afficher "C'est plus !"
  - [ ] Si plus grand → Afficher "C'est moins !"
  - [ ] Si égal → Afficher "Bravo !"

---

### 4. Limiter le nombre d'essais
- [ ] Initialiser un compteur d'essais (ex : `let essaisRestants = 3`).
- [ ] À chaque tentative :
  - [ ] Décrémenter le compteur.
  - [ ] Afficher le nombre d'essais restants.
  - [ ] Bloquer les essais et afficher "Perdu" si essais = 0.

**Tips** : _“Le compteur, c’est ton chrono de survie.”_

---

### 5. Ajouter un bouton "Rejouer"
- [ ] Créer un bouton "Rejouer" qui :
  - [ ] Réinitialise le champ d'entrée.
  - [ ] Remet les essais à 3.
  - [ ] Génère un nouveau numéro mystère.
  - [ ] Vide les anciens messages.

---

## ⭐ Bonus (pour les braves)

- [ ] Ajouter une animation (petit délai d'affichage avec `setTimeout`).
- [ ] Ajouter 3 niveaux de difficulté :
  - Facile : 1-10 / 3 essais
  - Moyen : 1-50 / 2 essais
  - Difficile : 1-100 / 1 essai

---

## 📝 Remarques Importantes
- Teste souvent ton code.
- Fais des petits commits Git fréquents.
- Commente ton code si besoin pour t’y retrouver.
