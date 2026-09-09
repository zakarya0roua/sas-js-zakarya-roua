/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

for(let lignes = 1; lignes <= 3; lignes++){
    let étoiles = "";
    for(let colonnes = 1; colonnes <= 3; colonnes++){
        étoiles += "*";
    }
    console.log(étoiles);
}