export const rechercherEtTrierLivres = (livres, recherche, tri) => {

    const rechercheMinuscule = recherche.toLowerCase().trim();

    let livresFiltres = livres.filter((livre) => {
        return livre.titre.toLowerCase().includes(rechercheMinuscule) ||
               livre.auteur.toLowerCase().includes(rechercheMinuscule);
    });

    if (tri === "titre") {
        livresFiltres.sort((a, b) => a.titre.localeCompare(b.titre));
    }

    if (tri === "auteur") {
        livresFiltres.sort((a, b) => a.auteur.localeCompare(b.auteur));
    }

    if (tri === "annee") {
        livresFiltres.sort((a, b) => Number(a.annee) - Number(b.annee));
    }

    return livresFiltres;
};

export const validerLivre = (titre, auteur) => {
    return {
        titreValide: titre.trim() !== "",
        auteurValide: auteur.trim() !== ""
    };
};