/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidat = [{nom: "mohamad", score: 5}, {nom: "zakarya", score: 9}, {nom: "ali", score: 16}];
 function meilleur(candidat){
    let topScore = 0;
    let nom_Meilleur = [];
    
    for(let i = 0; i < candidat.length; i++){
        if(candidat[i].score >= 10){
            nom_Meilleur.push(candidat[i].nom)
        }
    }
    return nom_Meilleur
    
 }
console.log(meilleur(candidat))