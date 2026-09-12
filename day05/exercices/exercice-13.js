/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) et retourne "1 234 567 MAD". (Vous pouvez chercher comment utiliser les regex pour insérer des espaces, ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function formater(montant){
    let str = String(montant);
    let result = "";
    let count = 0;
    for(let i = str.length -1; i >= 0; i--){
        if(count == 3){
            result = " " + result;
            count = 0;
        }
        count++;
        result = str[i] + result;
    }
    result += " MAD";
    return (result);
}

console.log(formater(1234567))