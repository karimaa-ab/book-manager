import { livres } from "./state.js";

export const afficherLivres = (livresAAfficher = livres) => {

    const listeLivres = document.querySelector("#mes-livres .grid");

    listeLivres.innerHTML = "";

    livresAAfficher.forEach((livre, index) => {

        const carteLivre = document.createElement("article");

        carteLivre.classList.add("rounded-xl", "border", "border-slate-200", "p-5");

        carteLivre.innerHTML = `
            <h3 class="text-lg font-bold">${livre.titre}</h3>
            <p class="mt-2 text-sm text-slate-500">Auteur : ${livre.auteur}</p>
            <p class="mt-2 text-sm">Année : ${livre.annee || "Non précisée."}</p>
            <p class="mt-2 text-sm">Genre : ${livre.genre || "Non précisé."}</p>
            <p class="mt-2 text-sm">Description : ${livre.description || ""}</p>
            <p class="mt-2 text-sm">Statut : ${livre.statut}</p>
            <button class="mt-4 rounded-lg bg-blue-950 px-4 py-2 text-white" data-action="modifier" data-index="${livres.indexOf(livre)}">Modifier</button>

        `;

        listeLivres.appendChild(carteLivre);

    });
};