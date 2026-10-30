# 📚 BookManager

**BookManager** est une application web de gestion de bibliothèque personnelle. Elle permet aux utilisateurs d'organiser leurs livres, de suivre leur statut de lecture et de retrouver facilement un livre grâce à la recherche et au tri.

## 🎯 Objectif du projet

Développer une Single Page Application (SPA) en JavaScript moderne permettant de gérer une collection de livres avec une interface simple et intuitive.

## ✨ Fonctionnalités

* **Ajouter un livre :** ajouter un livre avec son titre, auteur, année, genre, description et statut.
* **Afficher les livres :** visualiser tous les livres enregistrés.
* **Modifier un livre :** mettre à jour les informations d'un livre.
* **Supprimer un livre :** supprimer un livre avec une confirmation.
* **Rechercher :** rechercher un livre par titre ou par auteur.
* **Trier :** organiser les livres par titre, auteur ou année.
* **Persistance des données :** sauvegarder les livres dans le navigateur grâce à LocalStorage.
* **Rechargement :** retrouver les livres enregistrés après avoir fermé et rouvert l'application.

## 🛠️ Technologies utilisées

* HTML5
* JavaScript (ES6+)
* Tailwind CSS
* LocalStorage
* Git & GitHub

## 📁 Structure du projet

```text
book-manager/
│
├── index.html
│
├── images/
│
├── src/
│   ├── app.js
│   ├── state.js
│   ├── ui.js
│   └── utils.js
│
└── README.md
```

### Organisation des fichiers

* **app.js :** gère les événements, les formulaires et les interactions avec l'utilisateur.
* **state.js :** gère les données des livres.
* **ui.js :** gère l'affichage dynamique des livres.
* **utils.js :** contient les fonctions utilitaires pour la recherche, le tri et la validation des données.

## 🚀 Installation et lancement

1. Cloner le repository :

```bash
git clone https://github.com/karimaa-ab/book-manager.git
```

2. Accéder au dossier du projet :

```bash
cd book-manager
```

3. Ouvrir le projet dans Visual Studio Code.

4. Lancer `index.html` avec l'extension **Live Server**.

## 💾 Stockage des données

L'application utilise **LocalStorage** pour sauvegarder les livres dans le navigateur.

Les méthodes utilisées sont :

* `localStorage.setItem()` : sauvegarder les données.
* `localStorage.getItem()` : récupérer les données.
* `JSON.stringify()` : convertir les données en JSON.
* `JSON.parse()` : convertir le JSON en objets JavaScript.

## 🌿 Gestion du projet avec Git

Le projet utilise Git et GitHub pour le contrôle de version.

Les fonctionnalités sont développées sur des branches dédiées, puis intégrées dans la branche principale `main` à travers des Pull Requests.

## 👩‍💻 Auteur

**Karima Abouhafsse**

Projet réalisé dans le cadre de la formation YouCode.
