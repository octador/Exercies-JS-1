// let etoiles = ["*"];
// let etoile = ["*"];

// for (let index = 1; index <= 5; index++) {
//     let star = etoiles * index.length;
//     for (let i = star; i < star.length; i++) {
//         let star2 = etoile * star.length;
//         starwars = star, star2;
//         return starwars;
//     }

// }
// console.log(starwars);

// ----------good------

// for (let i = 1; i <= 5; i++) {
//     console.log('*'.repeat(i));
// }
// ---------------------------------------------------------------
let star = '';
for (let i = 1; i <= 5; i++) {
    star += '*'.repeat(i) + '\n';
}

alert(star);