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
    for (let i = 0; i < tab.length; i++) {
        let note = tab[i];
        if (max < note) max = note;
        if (min > note) min = note;
        tot += note;
    }

    let moy = tot / tab.length;

    console.log(`La note maximale est de ${max} / 20`);
    console.log(`La note minimale est de ${min} / 20`);
    console.log(`La moyenne est de ${moy} / 20`);
}

menu();