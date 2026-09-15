/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tableau = [1, 23, 4, 56, 7, 8, 987, 65, 43, 45, 67, 89, 8, 765, 43, 3456, 78, 8, 76, 54, 3, 2, 3, 456, 7, 876, 54];
let premiers = [];
    premiers = tableau.slice(0, 10)

console.log(premiers);