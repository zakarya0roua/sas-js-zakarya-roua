/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * LE FILTRE À INSULTES / CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Créez une fonction filtrerMessage(message)  qui reçoit le message tapé par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit être remplacé par des astérisques de la même longueur (ex: "").
 * 4. Retournez le message censuré.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> Résultat attendu : "Tu es vraiment un GROS  et un * !!"
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let message = "Tu es vraiment un GROS NooB et un idiot !!";

function filtrerMessage(message){
    let mot_interdits = ["noob", "idiot", "nul"];
    message = message.split(" ");
    let store = "";

    for(let i = 0; i < message.length; i++){
        let trouve = false;
        for(let j = 0; j < mot_interdits.length; j++){
            if(message[i].toLowerCase() === mot_interdits[j].toLocaleLowerCase()){
                trouve = true;
                for(let y = 0; y < mot_interdits[j].length; y++){
                    store += "*";
                }
            }
        }
        if(!(trouve)){
            store += message[i];
        }
        if(i < message.length - 1)
        {
            store += " ";
        }
    }
    return store;
}

console.table(filtrerMessage(message))