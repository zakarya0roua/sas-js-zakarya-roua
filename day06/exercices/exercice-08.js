/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tableau = [13, 3, 99, 35, 109]

function max_min_number(tableau){
    let max = tableau[0];
    let min = tableau[0]

    for(let i = 0; i < tableau.length; i++){
        if(max >= tableau[i]){
            max = tableau[i];
        }
        else if(min < tableau[i]){
            min = tableau[i];
        }
    }
    return [max, min];
}

console.log(max_min_number(tableau))