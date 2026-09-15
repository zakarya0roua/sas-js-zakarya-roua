/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPARAISON DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction sontEgaux(tab1, tab2) qui vérifie si deux tableaux contiennent exactement les mêmes éléments dans le même ordre. (Rappel: [1] == [1] donne false en JS !).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tab1 = [1, "reka", 79, 930]
let tab2 = [2, "reka", 75, 930]


function sontEgaux(tab1, tab2){
    if(tab1.length != tab2.length){
        return false;
    }

    for(let i = 0; i < tab1.length; i++){
        if(tab1[i] !== tab2[i]){
            return false
        }
    }

    return true
}

console.log(sontEgaux(tab1, tab2))