// debugger;
alert("On commence ?");
// /////////////////
// // Exercise 1.1
// /////////////////
// let nber1 = 4;
// while (nber1 < 1 || nber1 > 3) {
//     nber1 = parseInt(prompt("Saisir un nombre entre 1 et 3", "0"), 10);
// }
// /////////////////
// // Exercise 1.2
// /////////////////
// let nber2 = 4;
// while (nber2 < 10 || nber2 > 20) {
//     nber2 = parseInt(prompt("Saisir un nombre entre 10 et 20", "0"), 10);
//     if (nber2 > 20) { alert("Plus petit !") }
//     if (nber2 < 10) { alert("Plus grand !") }
// }
// /////////////////
// // Exercise 1.3
// /////////////////
// let nber3 = 4;
// nber3 = parseInt(prompt("Saisir un nombre", "0"), 10);
// let nber4 = nber3;
// while (nber4 < nber3 + 10) {
//     nber4++;
//     alert(nber4);
// }
// /////////////////
// // Exercise 1.4
// /////////////////
// let nber5 = 4;
// nber5 = parseInt(prompt("Saisir un nombre", "0"), 10);
// for (let index = 1; index < 11; index++) {
//     nber5++;
//     alert(nber5);
// }
// /////////////////
// // Exercise 1.5
// /////////////////
// let nber6 = 4;
// nber6 = parseInt(prompt("Saisir un nombre", "0"), 10);
// for (let index = 1; index < 11; index++) {
//     alert(nber6 + " x " + index + " = " + nber6 * index);
// }

// /////////////////
// // Exercise 1.6
// /////////////////
// let nbentered1 = parseInt(prompt("Saisir un nombre", "0"), 10);
// let loopcounter8 = 1;
// let cumulative1 = 0;

// while (loopcounter8 <= nbentered1) {
//     cumulative1 = cumulative1 + loopcounter8;
//     loopcounter8++;
// }
// alert(cumulative1);

// /////////////////
// // Exercise 1.7a
// /////////////////
// let nbentered2 = parseInt(prompt("Saisir un nombre", "0"), 10);
// let loopcounter9 = nbentered2;
// let cumulative2 = 1;

// while (loopcounter9 > 0) {
//     cumulative2 = cumulative2 * loopcounter8;
//     loopcounter9--;
// }
// alert("Factorielle : " + cumulative2);

// /////////////////
// // Exercise 1.7b
// /////////////////
// var arr = [];
// for (var i = 0; i < 5; i++)
//     arr.push(prompt("Enter a number", "0"));
// alert("Le plus grand est : " + Math.max(...arr));

// /////////////////
// // Exercise 1.8
// /////////////////
// let nbpartants = parseInt(prompt("Saisir nombre de partants : ", "0"), 10);
// let nbjoues = parseInt(prompt("Saisir nombre de joués : ", "0"), 10);

// function factorielle(n) {
//     let loopcounter = n;
//     let cumulative = 1;

//     while (loopcounter > 0) {
//         cumulative = cumulative * loopcounter;
//         loopcounter--;
//     }
//     return cumulative;


// }
// let x = factorielle(nbpartants) / factorielle(nbpartants - nbjoues);
// alert("Une chance de gagner sur : " + x);

// /////////////////
// // Exercise 2.1
// /////////////////
// let arr1 = [];
// let loopcounter = 0;
// let consecutive = 1;
// // debugger;

// while (loopcounter == loopcounter) {
//     loopcounter++;
//     arr1.push(prompt("Enter a number (0 to finish)", "0"));
//     let nber = parseInt(arr1[loopcounter - 1], 10);
//     if (nber == 0) break;
//     let currentnb = 0;
//     let previousnb = 0;
//     if (loopcounter >= 2) {
//         currentnb = parseInt(arr1[loopcounter - 1], 10);
//         previousnb = parseInt(arr1[loopcounter - 2], 10);
//         if (currentnb !== previousnb + 1) { consecutive = 0; }
//     }
// }
// if (consecutive == 1)
//     alert("Les nombres sont consécutifs");
// else
//     alert("Les nombres ne sont pas consécutifs");

// /////////////////
// // Exercise 2.2a (tri par sélection)
// /////////////////
// let arr1 = [];
// let loopcounter1 = 0;

// // Saisie du tableau
// while (loopcounter1 == loopcounter1) {
//     loopcounter1++;
//     arr1.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
//     let nber = parseInt(arr1[loopcounter1 - 1], 10);
//     if (nber == 0) break;
// }
// arr1.pop();
// let len1 = arr1.length;
// alert(len1 + " nombres ont été saisis.");

// // Tri du tableau
// debugger;
// let valmini = 0;
// let mini = 0;
// for (let i = 0; i <= len1 - 2; i++) {
//     mini = i;
//     for (let j = i + 1; j <= len1 - 1; j++) {
//         if (arr1[j] < arr1[mini]) mini = j;
//     }
//     if (mini !== i) {
//         valmini = arr1[mini];
//         arr1[mini] = arr1[i];
//         arr1[i] = valmini;
//     }
// }

// // Affichage du tableau
// alert(arr1);

// /////////////////
// // Exercise 2.2b (Tri à bulles)
// /////////////////
// let arr2 = [];
// let loopcounter2 = 0;
// // debugger;

// // Saisie du tableau
// while (loopcounter2 == loopcounter2) {
//     loopcounter2++;
//     arr2.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
//     let nber = parseInt(arr2[loopcounter2 - 1], 10);
//     if (nber == 0) break;
// }
// arr2.pop();
// let len = arr2.length;
// alert(len + " nombres ont été saisis.");

// // Tri du tableau
// let valj = 0;
// let valjplus = 0;
// for (let i = len; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//         if (arr2[j] <= arr2[j + 1]) continue;
//         valj = arr2[j];
//         valjplus = arr2[j + 1];
//         arr2[j + 1] = valj;
//         arr2[j] = valjplus;
//     }
// }

// // Affichage du tableau
// alert(arr2);

// /////////////////
// // Exercise 2.3
// /////////////////
// let arrini = [];
// let arrinv = [];
// let loopcounter3 = 0;

// // Saisie du tableau
// while (loopcounter3 == loopcounter3) {
//     loopcounter3++;
//     arrini.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
//     let nber = parseInt(arrini[loopcounter3 - 1], 10);
//     if (nber == 0) break;
// }
// arrini.pop();
// let lenini = arrini.length;
// alert(lenini + " nombres ont été saisis.");

// // // Inversion du tableau (méthode de array)
// // debugger;
// // arrini.reverse()

// // Inversion du tableau (algorithme)
// debugger;
// for (let i = lenini - 1; i >= 0; i--) {
//     arrinv.push(arrini[i])
// }
// // Ré-écriture dans le tableau d'origine
// for (let i = 0; i < lenini; i++) {
//     arrini.pop()
// }
// for (let i = 0; i < lenini; i++) {
//     arrini.push(arrinv[i])
// }

// // Affichage du tableau
// alert(arrini);

// /////////////////
// // Exercise 2.4
// /////////////////
// let arr4 = [];
// let loopcounter4 = 0;

// // Saisie du tableau
// while (loopcounter4 == loopcounter4) {
//     loopcounter4++;
//     arr4.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
//     let nber = parseInt(arr4[loopcounter4 - 1], 10);
//     if (nber == 0) break;
// }
// arr4.pop();
// let lenini = arr4.length;
// alert(lenini + " nombres ont été saisis.");
// alert(arr4);

// let indexsup = prompt("Index de la valeur à supprimer :", "0");

// // Suppression de la valeur
// debugger;
// arr4.splice(indexsup,1);

// alert("Tableau édité :");
// alert(arr4);

/////////////////
// Exercise 2.5
/////////////////
let arr5 = [];
let loopcounter5 = 0;

// Saisie du tableau
while (loopcounter5 == loopcounter5) {
    loopcounter5++;
    arr5.push(prompt("Enter a word (0 to finish)", "0"));
    let nber = parseInt(arr5[loopcounter5 - 1], 10);
    if (nber == 0) break;
}
arr5.pop();
let lenini = arr5.length;
alert(lenini + " nombres ont été saisis.");
alert(arr5);

let mot = prompt("Mot à rechercher :", "0");
const wordinidct = (element) => element == mot;
if (arr5.findIndex(wordinidct) == -1)
    alert("Mauvaise orthographe");
else
    alert("Bonne orthographe");
;

///////////////
// Fin
/////////////////
alert("C'est fini !");