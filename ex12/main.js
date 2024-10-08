let startPop = prompt("Saisir le population :");
let rate = prompt("Saisir le taux (%) :");
let goalPop = prompt("Saisir la population visée :");

let cpt = 0;
while(startPop < goalPop) {
    startPop *= 1 + (100/rate);
    cpt ++;
}

console.log(`La population dépasse la population visée à l'année ${cpt} (${startPop} habitants)`)