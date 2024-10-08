function populateTab(n = 10) {
    let tab = [];
    for(let i = 0; i < n; i++) {
        tab.push(prompt(`valeur n°${i + 1}`));
    }
    return tab;
}

function rndPopulateTab(n = 10, minimum = 0, maximum = 100) {
    let tab = [];
    for(let i = 0; i < n; i++) {
        tab.push(Math.floor(Math.random() * maximum + minimum))
    }
    return tab;
}


function printTab(tab) {
    let str = "Affichage des valeurs saisies :\n"
    for (let i = 0; i < tab.length; i++) {
        str += `${tab[i]}\n${"\t".repeat(i + 1)}`;
    }
    console.log(str);
}

printTab(populateTab());
printTab(rndPopulateTab(20));