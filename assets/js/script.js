alert("On commence ?")
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
let nbentered = parseInt(prompt("Saisir un nombre", "0"), 10);
let loopcounter8 = 1;
let cumulative = 0;

while (loopcounter8 <= nbentered) {
    cumulative = cumulative + loopcounter8;
    loopcounter8++;
}git
alert(cumulative);
/////////////////
// Exercise 1.7
/////////////////
let nbentered = parseInt(prompt("Saisir un nombre", "0"), 10);
let loopcounter8 = nbentered;
let cumulative = 1;

while (loopcounter8 > 0) {
    cumulative = cumulative * loopcounter8;
    loopcounter8--;
    // alert(loopcounter8);
    // alert(cumulative);
}
alert("Factorielle : " + cumulative);
/////////////////
// Fin
/////////////////
alert("C'est fini !")