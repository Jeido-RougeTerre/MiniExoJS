function menu() {
    let choix = "";
    while (choix !== 0) {
        choix = prompt("1. Saisie avant la saisie des notes 2. permissif 0.QUIT");
        switch (choix) {
            case "1":
                saisie();
                return;
            case "2":
                permissif();
                return;
            case "0": return;
        
            default:
                console.error("Invalid choice!");
                break;
        }
    }
}

function saisie() {
    let nbNote = parseInt(prompt("Combien de notes ?"));

    console.info("Début de Saisie !");
    let tab = [];
    for (let i = 0; i < nbNote; i++) {
        let note;
        do{
            note = parseInt(prompt(`Veuillez entrer une note entre 0 et 20 compris (note ${i + 1}/${nbNote}) :`));
            if (note < 0 || note > 20) {
                console.error("Saisie invalide");
            }
        } while (note < 0 || note > 20);
        tab.push(note);
    }
    console.info("Fin de Saisie !");
    affichage(tab);
}

function permissif() {

    console.info("Début de Saisie !");
    let tab = [];
    let note;
    do  {
        do {
            note = parseInt(prompt(`Veuillez entrer une note entre 0 et 20 compris :`));
            if (note > 20) {
                console.error("Saisie invalide");
            }
        } while (note > 20)
        if (note >= 0) tab.push(note);
    } while (note >= 0)
    console.info("Fin de Saisie !");
    affichage(tab);
}

function affichage(tab) {
    let max = -Infinity;
    let min = Infinity;
    let tot = 0;
    const p1 = document.querySelector("#pul1");
    p1.innerHTML = `La série ${(tab.length > 0)? "" : "ne "}contient <strong>${(tab.length > 0)? tab.length : aucune} note${(tab.length > 1)? "s" : ""}</strong> :`;
    const p2 = document.querySelector("#pul2");
    p2.innerHTML = `${(tab.length > 0)? "Sur l'ensemble des" : "La serie ne contient"} <strong>${(tab.length > 0)? tab.length : aucune} note${(tab.length > 1)? "s" : ""}</strong> :`;
    const ul1 = document.querySelector("#ul1");
    for (let i = 0; i < tab.length; i++) {
        let note = tab[i];
        if (max < note) max = note;
        if (min > note) min = note;
        tot += note;
        const li = document.createElement("li");
        li.innerHTML = `En note <strong>${i + 1}</strong>, vous avez saisi <strong>${note}/20</strong>.`;
        ul1.appendChild(li);
    }

    let moy = tot / tab.length;
    const ul2 = document.querySelector("#ul2");
    ul2.children[0].innerHTML = `La meilleure note est de <strong>${max}/20</strong>`
    ul2.children[1].innerHTML = `La note minimale est de <strong>${min}/20</strong>`;
    ul2.children[2].innerHTML = `La moyenne est de <strong>${moy.toFixed(2)}/20</strong>`;
}

menu();