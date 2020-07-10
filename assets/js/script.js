let choice = "0";
do {
    // ;
    let choice = prompt("Quel exercice ? (1.1,1.2,... 2.1,2.2... 0 pour sortir)");
    switch (choice) {
        case "1.1":
            /////////////////
            // Exercise 1.1
            /////////////////
            alert("Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.");
            let nber1 = 4;
            while (nber1 < 1 || nber1 > 3) {
                nber1 = parseInt(prompt("Saisir un nombre entre 1 et 3", "0"), 10);
            }

            break;
        case "1.2":
            /////////////////
            // Exercise 1.2
            /////////////////
            alert("Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10. ");
            let nber2 = 4;
            while (nber2 < 10 || nber2 > 20) {
                nber2 = parseInt(prompt("Saisir un nombre entre 10 et 20", "0"), 10);
                if (nber2 > 20) { alert("Plus petit !") }
                if (nber2 < 10) { alert("Plus grand !") }
            }
        case "1.3":
            /////////////////
            // Exercise 1.3
            /////////////////
            alert("Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.")
            let nber3 = 4;
            nber3 = parseInt(prompt("Saisir un nombre", "0"), 10);
            let nber4 = nber3;
            while (nber4 < nber3 + 10) {
                nber4++;
                alert(nber4);
            }
        case "1.4":
            /////////////////
            // Exercise 1.4
            /////////////////
            alert("Réécrire l'algorithme précédent, en utilisant cette fois l'instruction Pour");
            let nber5 = 4;
            nber5 = parseInt(prompt("Saisir un nombre", "0"), 10);
            for (let index = 1; index < 11; index++) {
                nber5++;
                alert(nber5);
            }
        case "1.5":
            /////////////////
            // Exercise 1.5
            /////////////////
            alert("Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre");
            let nber6 = 4;
            nber6 = parseInt(prompt("Saisir un nombre", "0"), 10);
            for (let index = 1; index < 11; index++) {
                alert(nber6 + " x " + index + " = " + nber6 * index);
            }
        case "1.6":
            /////////////////
            // Exercise 1.6
            /////////////////
            alert("Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre.");
            let nbentered1 = parseInt(prompt("Saisir un nombre", "0"), 10);
            let loopcounter8 = 1;
            let cumulative1 = 0;

            while (loopcounter8 <= nbentered1) {
                cumulative1 = cumulative1 + loopcounter8;
                loopcounter8++;
            }
            alert(cumulative1);

        case "1.7":
            /////////////////
            // Exercise 1.7a
            /////////////////
            alert("Ecrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle.");
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
            alert("Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres");
            var arr = [];
            for (var i = 0; i < 5; i++)
                arr.push(prompt("Enter a number", "0"));
            alert("Le plus grand est : " + Math.max(...arr));

        case "1.8":
            /////////////////
            // Exercise 1.8
            /////////////////
            alert("Écrire un algorithme qui permette de connaître ses chances de gagner au tiercé, quarté, quinté et autres impôts volontaires.");
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

        case "2.1":
            /////////////////
            // Exercise 2.1
            /////////////////
            alert("Ecrivez un algorithme qui permette de saisir un nombre quelconque de valeurs, et qui les range au fur et à mesure dans un tableau. Le programme, une fois la saisie terminée, doit dire si les éléments du tableau sont tous consécutifs ou non. ");
            let arr1 = [];
            let loopcounter = 0;
            let consecutive = 1;
            // ;

            while (loopcounter == loopcounter) {
                loopcounter++;
                arr1.push(prompt("Enter a number (0 to finish)", "0"));
                let nber = parseInt(arr1[loopcounter - 1], 10);
                if (nber == 0) break;
                let currentnb = 0;
                let previousnb = 0;
                if (loopcounter >= 2) {
                    currentnb = parseInt(arr1[loopcounter - 1], 10);
                    previousnb = parseInt(arr1[loopcounter - 2], 10);
                    if (currentnb !== previousnb + 1) { consecutive = 0; }
                }
            }
            if (consecutive == 1)
                alert("Les nombres sont consécutifs");
            else
                alert("Les nombres ne sont pas consécutifs");

        case "2.2":
            /////////////////
            // Exercise 2.2a (tri par sélection)
            /////////////////
            alert("Ecrivez un algorithme qui trie (par sélection) un tableau dans l’ordre décroissant");
            let arr2a = [];
            let loopcounter2a = 0;

            // Saisie du tableau
            while (loopcounter2a == loopcounter2a) {
                loopcounter2a++;
                arr2a.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
                let nber = parseInt(arr2a[loopcounter2a - 1], 10);
                if (nber == 0) break;
            }
            arr2a.pop();
            let len1 = arr2a.length;
            alert(len1 + " nombres ont été saisis.");

            // Tri du tableau
            let valmini = 0;
            let mini = 0;
            for (let i = 0; i <= len1 - 2; i++) {
                mini = i;
                for (let j = i + 1; j <= len1 - 1; j++) {
                    if (arr2a[j] < arr2a[mini]) mini = j;
                }
                if (mini !== i) {
                    valmini = arr2a[mini];
                    arr2a[mini] = arr2a[i];
                    arr2a[i] = valmini;
                }
            }

            // Affichage du tableau
            alert(arr2a);

            /////////////////
            // Exercise 2.2b (Tri à bulles)
            /////////////////
            alert("Ecrivez un algorithme qui trie (à bulles) un tableau dans l’ordre décroissant");
            let arr2 = [];
            let loopcounter2 = 0;
            // ;

            // Saisie du tableau
            while (loopcounter2 == loopcounter2) {
                loopcounter2++;
                arr2.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
                let nber = parseInt(arr2[loopcounter2 - 1], 10);
                if (nber == 0) break;
            }
            arr2.pop();
            let len = arr2.length;
            alert(len + " nombres ont été saisis.");

            // Tri du tableau
            let valj = 0;
            let valjplus = 0;
            for (let i = len; i > 0; i--) {
                for (let j = 0; j < i - 1; j++) {
                    if (arr2[j] <= arr2[j + 1]) continue;
                    valj = arr2[j];
                    valjplus = arr2[j + 1];
                    arr2[j + 1] = valj;
                    arr2[j] = valjplus;
                }
            }

            // Affichage du tableau
            alert(arr2);

        case "2.3":
            /////////////////
            // Exercise 2.3
            /////////////////
            alert("Ecrivez un algorithme qui inverse l’ordre des éléments d’un tableau dont on suppose qu'il a été préalablement saisi (« les premiers seront les derniers… ») ");
            let arrini = [];
            let arrinv = [];
            let loopcounter3 = 0;

            // Saisie du tableau
            while (loopcounter3 == loopcounter3) {
                loopcounter3++;
                arrini.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
                let nber = parseInt(arrini[loopcounter3 - 1], 10);
                if (nber == 0) break;
            }
            arrini.pop();
            let lenini23 = arrini.length;
            alert(lenini23 + " nombres ont été saisis.");

            // // Inversion du tableau (méthode de array)
            // ;
            // arrini.reverse()

            // Inversion du tableau (algorithme)
            for (let i = lenini23 - 1; i >= 0; i--) {
                arrinv.push(arrini[i])
            }
            // Ré-écriture dans le tableau d'origine
            for (let i = 0; i < lenini23; i++) {
                arrini.pop()
            }
            for (let i = 0; i < lenini23; i++) {
                arrini.push(arrinv[i])
            }

            // Affichage du tableau
            alert(arrini);

        case "2.4":
            /////////////////
            // Exercise 2.4
            /////////////////
            alert("Ecrivez un algorithme qui permette à l’utilisateur de supprimer une valeur d’un tableau préalablement saisi.");
            let arr24 = [];
            let loopcounter4 = 0;

            // Saisie du tableau
            while (loopcounter4 == loopcounter4) {
                loopcounter4++;
                arr24.push(parseInt(prompt("Enter a number (0 to finish)", "0"), 10));
                let nber = parseInt(arr24[loopcounter4 - 1], 10);
                if (nber == 0) break;
            }
            arr24.pop();
            let lenini24 = arr24.length;
            alert(lenini24 + " nombres ont été saisis.");
            alert(arr24);

            let indexsup = prompt("Index de la valeur à supprimer :", "0");

            // Suppression de la valeur
            ;
            arr24.splice(indexsup, 1);

            alert("Tableau édité :");
            alert(arr24);

        case "2.5":
            /////////////////
            // Exercise 2.5
            /////////////////
            alert("Ecrivez l'algorithme qui recherche un mot saisi au clavier dans un dictionnaire");
            let arr25 = [];
            let loopcounter5 = 0;

            // Saisie du tableau
            while (loopcounter5 == loopcounter5) {
                loopcounter5++;
                arr25.push(prompt("Enter a word (0 to finish)", "0"));
                let nber = parseInt(arr25[loopcounter5 - 1], 10);
                if (nber == 0) break;
            }
            arr25.pop();
            let lenini25 = arr25.length;
            alert(lenini25 + " nombres ont été saisis.");
            alert(arr25);

            let mot25 = prompt("Mot25 à rechercher :", "0");
            const wordindict = (element) => element == mot25;
            if (arr25.findIndex(wordindict) == -1)
                alert("Mauvaise orthographe");
            else
                alert("Bonne orthographe");
            ;

        case "2.6":
            /////////////////
            // Exercise 2.6
            /////////////////
            alert("Écrivez un algorithme qui permette de saisir les éléments d'un tableau, et qui vérifie s'ils sont tous différents.");
            let arr26 = [];
            let duplicates = false;

            while (true) {
                // Saisie du tableau
                arr26.push(prompt("Enter a word (0 to finish)", "0"));
                // Test for exit
                if (arr26[arr26.length - 1] === "0") break;

                // Test for duplicate
                for (let index = 0; index < arr26.length - 1; index++) {
                    if (arr26[arr26.length - 1] === arr26[index]) duplicates = true;
                }
            }

            arr26.pop();
            let lenini26 = arr26.length;
            alert(lenini26 + " mots ont été saisis : " + arr26);

            if (duplicates === true) {
                alert("Des doublons");
            }
            else {
                alert("Pas de doublons");
                ;
            }

        default:
            break;
    }
}
while (choice !== "0");

///////////////
// Fin
/////////////////

alert("C'est fini !");