// 1. Récupérer les éléments HTML

import { livres } from "./state.js";
import { afficherLivres } from "./ui.js";

const btnAjouter = document.querySelector("#btn-ajouter");
const formulaireLivre = document.querySelector("#formulaire-livre");
const btnAnnuler = document.querySelector("#annuler-ajout");
const formLivre = document.querySelector("#form-livre");

const inputTitre = document.querySelector("#title");
const inputAuteur = document.querySelector("#author");
const inputAnnee = document.querySelector("#year");
const inputGenre = document.querySelector("#genre");
const inputDescription = document.querySelector("#description");
const inputStatut = document.querySelector("#status");
const erreurTitre = document.querySelector("#title-error");
const erreurAuteur = document.querySelector("#author-error");
const listeLivres = document.querySelector("#mes-livres .grid");

afficherLivres();

// 2. Afficher le formulaire.
btnAjouter.addEventListener("click", () => {
    formulaireLivre.classList.remove("hidden");
});

// 3. Masquer le formulaire.
btnAnnuler.addEventListener("click", () => {
    formulaireLivre.classList.add("hidden");
});
// 4. Envoyer le formulaire
 formLivre.addEventListener("submit", (event) => {
     event.preventDefault();

     erreurTitre.textContent = "";
     erreurAuteur.textContent = "";

    if( inputTitre.value.trim() === ""){

      erreurTitre.textContent = "Le titre est obligatoire.";
      return;

    }

    if( inputAuteur.value.trim() === ""){

      erreurAuteur.textContent = "L'auteur est obligatoire.";
      return;

    }

    const livre = {
       titre: inputTitre.value,
       auteur: inputAuteur.value,
       annee: inputAnnee.value,
       genre: inputGenre.value,
       description: inputDescription.value,
       statut: inputStatut.value
    };

    livres.push(livre);
    localStorage.setItem("livres", JSON.stringify(livres));
    afficherLivres();
    formLivre.reset();
    formulaireLivre.classList.add("hidden");


});
   
