/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], et retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day05/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let nombres = [1, 2, 3, 4, 5, 6]

function tableau(nombres){
    let nouveau_Tbl = [];
    for(let i = 0; i < nombres.length; i++){
        if(nombres[i] % 2 == 0){
            nouveau_Tbl.push(nombres[i]);
        }
    }
    return nouveau_Tbl;
}

console.log(tableau(nombres))