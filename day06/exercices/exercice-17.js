/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tableau = ["pomme", "banane", "pomme", "orange", "banane", "pomme"]

function combien(tableau){
    let trete = {}
    for(let i = 0; i < tableau.length; i++){
        let element = tableau[i]
        if(trete[element] !== undefined){
            trete[element]++;
        }else
            trete[element] = 1;
    }
    return trete;
}

console.log(combien(tableau))