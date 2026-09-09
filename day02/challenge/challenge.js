/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · CHALLENGE
 * LE BRUTE-FORCER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte :
 * Vous simulez un programme pour "craquer" un cadenas à 3 chiffres.
 *
 * Consignes :
 * 1. Définissez codeSecret = 739.
 * 2. Utilisez des boucles imbriquées (3 boucles for imbriquées allant chacune de 0 à 9) pour simuler les roues d'un cadenas de valise.
 * 3. À chaque essai, reconstituez le code testé (ex: c1 * 100 + c2 * 10 + c3).
 * 4. Si le code testé est égal au codeSecret, arrêtez toutes les boucles et affichez "Code trouvé : 739 après X essais".
 * Note : Réfléchissez à la manière de sortir de plusieurs boucles imbriquées (labels ou vérification de variable booléenne trouve).
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day02/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.

let codeSecret = 739;
let essais = 0;
let breaking_bad = false;
let txt = "";

for(let a = 0; a <= 9; a++){
    for(let b = 0; b <= 9; b++){
        for(let c = 0; c <= 9; c++){
            essais++;
            if((a * 100 + b * 10 + c) == codeSecret){
                txt = "Code trouvé : " + codeSecret + " après " + essais + " essais";
                breaking_bad = true;
            }
            if(breaking_bad)
                break;
        }
        if(breaking_bad)
            break;
    }
    if(breaking_bad)
        break;
}
console.log(txt);
