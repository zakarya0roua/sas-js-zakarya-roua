/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let panier = [101, 105, 101, 102]
function ajouterAuPanier(id){
    panier.push(id);
}

function retirerDuPanier(id){

    panier = panier.filter(panier => panier !== id);
    return panier;
}

function afficherQuantites(){
    let affiche = {};

    for(let i = 0; i < panier.length; i++){
        let id = panier[i];
        if(affiche[id] === undefined){
            affiche[id] = 1;
        }else
        affiche[id]++;
    }
    return affiche
}

console.log(panier);

ajouterAuPanier(105);
console.log(panier);

retirerDuPanier(101);
console.log(panier);

console.log(afficherQuantites());