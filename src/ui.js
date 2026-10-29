import { livres } from "./state.js";

export const afficherLivres = () => {

    const listeLivres = document.querySelector("#mes-livres .grid");

    listeLivres.innerHTML = "";

    livres.forEach((livre, index) => {

        const carteLivre = document.createElement("article");

        carteLivre.classList.add("rounded-xl", "border", "border-slate-200", "p-5");

        carteLivre.innerHTML = `
            <h3 class="text-lg font-bold">${livre.titre}</h3>
            <p class="mt-2 text-sm text-slate-500">Auteur : ${livre.auteur}</p>
            <p class="mt-2 text-sm">Année : ${livre.annee || "Non précisée."}</p>
            <p class="mt-2 text-sm">Genre : ${livre.genre || "Non précisé."}</p>
            <p class="mt-2 text-sm">Description : ${livre.description || ""}</p>
            <p class="mt-2 text-sm">Statut : ${livre.statut}</p>
        `;

        listeLivres.appendChild(carteLivre);

    });
};