function rndPopulateTab(n = 10) {
    let tab = [];
    for(let i = 0; i < n; i++) {
        tab.push(Math.floor(Math.random() * 50 + 1))
    }
    return tab;
}

const isEven = n => (n % 2 == 0);

function affiche(tab) {
    for(let i = 0; i < tab.length; i++) {
        console.log(`Le nombre ${tab[i]} est ${(isEven(tab[i]))? "pair" : "impair"}`);
    }
}

affiche(rndPopulateTab(parseInt(prompt("Nombre de chiffres :"))));
