/**
 * JOUR 06 — GUIDE 01
 * Accès et Modification
 *
 * OBJECTIF
 * Créez un tableau fruits = ["Pomme", "Banane", "Orange"]. Changez "Banane" par "Mangue" et affichez le dernier élément du tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let fruits = ["Pomme", "Banane", "Orange"];
let mot = "Mangue";
let changez = "Banane";

for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === changez){
        fruits[i] = mot;
    }
}
 console.table(fruits)