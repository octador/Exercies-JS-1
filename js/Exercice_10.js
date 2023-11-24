let mot = prompt("donne moi un mot");


// for (let index = 0; index < mot.length; index++) {
    
//     console.log(mot[index]);
// }
let message = "";
function affich(motus) {
    for (let index = 0; index < motus.length; index++) {
         message += motus[index]+"\n \n";

    }return message
}
alert (affich(mot));
    