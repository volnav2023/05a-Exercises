alert("On commence ?");
/////////////////
// Exercise 1.1
/////////////////
let nber1 = 4;
while (nber1 < 1 || nber1 > 3) {
    nber1 = parseInt(prompt("Saisir un nombre entre 1 et 3", "0"), 10);
}
/////////////////
// Exercise 1.2
/////////////////
let nber2 = 4;
while (nber2 < 10 || nber2 > 20) {
    nber2 = parseInt(prompt("Saisir un nombre entre 10 et 20", "0"), 10);
    if (nber2 > 20) { alert("Plus petit !") }
    if (nber2 < 10) { alert("Plus grand !") }
}
/////////////////
// Exercise 1.3
/////////////////
let nber3 = 4;
nber3 = parseInt(prompt("Saisir un nombre", "0"), 10);
let nber4 = nber3;
while (nber4 < nber3 + 10) {
    nber4++;
    alert(nber4);
}
/////////////////
// Exercise 1.4
/////////////////
let nber5 = 4;
nber5 = parseInt(prompt("Saisir un nombre", "0"), 10);
for (let index = 1; index < 11; index++) {
    nber5++;
    alert(nber5);
}
/////////////////
// Exercise 1.5
/////////////////
let nber6 = 4;
nber6 = parseInt(prompt("Saisir un nombre", "0"), 10);
for (let index = 1; index < 11; index++) {
    alert(nber6 + " x " + index + " = " + nber6 * index);
}

/////////////////
// Exercise 1.6
/////////////////
let nbentered1 = parseInt(prompt("Saisir un nombre", "0"), 10);
let loopcounter8 = 1;
let cumulative1 = 0;

while (loopcounter8 <= nbentered1) {
    cumulative1 = cumulative1 + loopcounter8;
    loopcounter8++;
}
alert(cumulative1);

/////////////////
// Exercise 1.7a
/////////////////
let nbentered2 = parseInt(prompt("Saisir un nombre", "0"), 10);
let loopcounter9 = nbentered2;
let cumulative2 = 1;

while (loopcounter9 > 0) {
    cumulative2 = cumulative2 * loopcounter8;
    loopcounter9--;
}
alert("Factorielle : " + cumulative2);

/////////////////
// Exercise 1.7b
/////////////////
var arr = [];
for (var i = 0; i < 5; i++)
    arr.push(prompt("Enter a number", "0"));
alert("Le plus grand est : " + Math.max(...arr));

/////////////////
// Exercise 1.8
/////////////////
let nbpartants = parseInt(prompt("Saisir nombre de partants : ", "0"), 10);
let nbjoues = parseInt(prompt("Saisir nombre de joués : ", "0"), 10);

function factorielle(n) {
    let loopcounter = n;
    let cumulative = 1;

    while (loopcounter > 0) {
        cumulative = cumulative * loopcounter;
        loopcounter--;
    }
    return cumulative;


}
let x = factorielle(nbpartants) / factorielle(nbpartants - nbjoues);
alert("Une chance de gagner sur : " + x);

/////////////////
// Exercise 2.1
/////////////////
let arr = [];
let loopcounter = 0;
let consecutive = 1;
console.log("Test console");
// debugger;

while (loopcounter == loopcounter) {
    loopcounter++;
    arr.push(prompt("Enter a number (0 to finish)", "0"));
    let nber = parseInt(arr[loopcounter - 1], 10);
    alert("nber :" + nber);
    if (nber == 0) break;
    let currentnb = 0;
    let previousnb = 0;
    if (loopcounter >= 2) {
        currentnb = parseInt(arr[loopcounter - 1], 10);
        previousnb = parseInt(arr[loopcounter - 2], 10);
        if (currentnb !== previousnb + 1) { consecutive = 0; }
    }
}
if (consecutive == 1)
    alert("Les nombres sont consécutifs");
else
    alert("Les nombres ne sont pas consécutifs");

/////////////////
// Fin
/////////////////
alert("C'est fini !")