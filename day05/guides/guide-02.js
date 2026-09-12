/**
 * JOUR 05 — GUIDE 02
 * Recherche de mot-clé (Sensibilité à la casse)
 *
 * OBJECTIF
 * Vérifiez si le mot "javascript" est présent dans la phrase "J'apprends le JavaScript à YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let mot = "J'apprends le JavaScript à YouCode";
let motRecherche = "javascript";

let mot_lowr = mot.toLowerCase();
let motRecherche_lowr = motRecherche.toLowerCase();

if (mot_lowr.includes(motRecherche_lowr)) {
  console.log("Le mot est présent dans la phrase.");
}else {
  console.log("Le mot n'est pas présent dans la phrase.");
}