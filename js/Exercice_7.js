// 1. Multiplier la pointure par 2
// 2. Ajouter 5 au résultat
// 3. Multiplier le tout par 50
// 4. Soustraire l’année de naissance
// 5. Ajouter au tout 1766
function Multiplier(pointure, annee) {

    let result = (((((pointure * 2) + 5)*50) - annee) + 1766);

    return result
}
let point = prompt("quel est ta pointure ");
let ann = prompt(" quelle est ton année de naissance");


alert(Multiplier(point , ann));

