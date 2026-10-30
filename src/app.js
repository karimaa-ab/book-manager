// 1. Récupérer les éléments HTML

import { livres } from "./state.js";
import { afficherLivres } from "./ui.js";

const btnAjouter = document.querySelector("#btn-ajouter");
const inputRecherche = document.querySelector('#recherche input[type="search"]');
const triLivres = document.querySelector("#tri-livres");
const formulaireLivre = document.querySelector("#formulaire-livre");
const lienAjouterLivre = document.querySelector('a[href="#ajouter-livre"]');
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
const btnSubmit = formLivre.querySelector('button[type="submit"]');

afficherLivres();

//  Afficher le formulaire.
btnAjouter.addEventListener("click", () => {
    indexLivreAModifier = null;
    formLivre.reset();
    btnSubmit.textContent = "Ajouter le livre";
    formulaireLivre.classList.remove("hidden");
});

lienAjouterLivre.addEventListener("click", () => {
    indexLivreAModifier = null;
    formLivre.reset();
    btnSubmit.textContent = "Ajouter le livre";
    formulaireLivre.classList.remove("hidden");
});

//  Masquer le formulaire.
btnAnnuler.addEventListener("click", () => {
    formulaireLivre.classList.add("hidden");
    formLivre.reset();
    indexLivreAModifier = null;
    btnSubmit.textContent = "Ajouter le livre";

});

let indexLivreAModifier = null;

//  Envoyer le formulaire
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

    if (indexLivreAModifier === null) {
        livres.push(livre);
    } else {
        livres[indexLivreAModifier] = livre;
    }
    localStorage.setItem("livres", JSON.stringify(livres));
    afficherLivres();
    formLivre.reset();
    formulaireLivre.classList.add("hidden");
 
    indexLivreAModifier = null;

});

// rechercher et trier les livres  
const rechercherLivres = () =>{

    const recherche = inputRecherche.value.toLowerCase().trim();
    let livresFiltres = livres.filter((livre) => {
        return livre.titre.toLowerCase().includes(recherche)|| livre.auteur.toLowerCase().includes(recherche);
    });
    const tri = triLivres.value;
    if(tri === "titre"){
        livresFiltres.sort((a,b)=> a.titre.localeCompare(b.titre))
    }

    if (tri === "auteur") {
    livresFiltres.sort((a, b) => a.auteur.localeCompare(b.auteur));
    }

    if (tri === "annee") {
    livresFiltres.sort((a, b) => Number(a.annee) - Number(b.annee));
    }

    afficherLivres(livresFiltres);
};
inputRecherche.addEventListener("input", rechercherLivres);
triLivres.addEventListener("change", rechercherLivres);

// modifier 
listeLivres.addEventListener("click", (event) => {
    const bouton = event.target.closest('[data-action="modifier"]');

    if (bouton) {
        const index = Number(bouton.dataset.index);

        const livre = livres[index];

        indexLivreAModifier = index;
        btnSubmit.textContent = "Enregistrer les modifications";

        inputTitre.value = livre.titre;
        inputAuteur.value = livre.auteur;
        inputAnnee.value = livre.annee;
        inputGenre.value = livre.genre;
        inputDescription.value = livre.description;
        inputStatut.value = livre.statut;

        formulaireLivre.classList.remove("hidden");

    }
});