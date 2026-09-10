/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE CALLBACK BASIQUE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction executerOperation(a, b, operation). operation sera une fonction passée en argument. Appelez : executerOperation(5, 3, multiplier) (en utilisant la fonction multiplier créée plus tôt).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day03/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function executerOperation(a, b, operation){
    if(operation == "multiplication"){
        return (a * b)
    }else if(operation == "division"){
        if (b != 0){
        return (a / b)
        }else
            return ("n'est pas division par 0");
    }else if(operation == "addition"){
        return (a + b)
    }else if(operation == "soustraction"){
        return (a - b)
    }else
        return ("Veuillez entrer operation correctement");
}

console.log(executerOperation(6, 0, "division"))