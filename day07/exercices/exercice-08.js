/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidat = [{nom: "mohamad", score: 10}, {nom: "zakarya", score: 20}, {nom: "ali", score: 16}];
 function meilleur(candidat){
    let topScore = 0;
    let nom_Meilleur = "";
    
    for(let i = 0; i < candidat.length; i++){
        if(topScore < candidat[i].score){
            topScore = candidat[i].score
            nom_Meilleur = candidat[i].nom
        }
    }
    return nom_Meilleur
    
 }
console.log(meilleur(candidat))