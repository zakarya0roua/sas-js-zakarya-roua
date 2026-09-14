/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let  notes = [12, 15, 8, 19];
let  sum = 0
let i = 0

for(; i < notes.length; i++){
    sum += notes[i]
}

let  result = sum / i;

console.log(result)