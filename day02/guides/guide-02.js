/**
 * JOUR 02 — GUIDE 02
 * Attendre un événement (Boucle while)
 *
 * OBJECTIF
 * On vous donne un nombre N = 100. Divisez ce nombre par 2 en boucle jusqu'à ce qu'il soit strictement inférieur à 1. Comptez combien de divisions ont été nécessaires.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';
let nombre_N = 100;

while(nombre_N > 1){
    nombre_N = nombre_N / 2;
    console.log(nombre_N);
}