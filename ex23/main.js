let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
];

/**
 * 
 * @param {{    prenom: string;    nom: string;    matieres: {        francais: number;        anglais: number;        humour: number;        informatique?: undefined;        sport?: undefined;    };} | {    prenom: string;    nom: string;    matieres: {        francais: number;        anglais: number;        humour: number;        informatique: number;        sport: number;    };}} etu  
 */
function affichageEtudiant(etu) {
    console.log("Debut étudiant");
    console.log("Étudiant : " + etu.nom + " " + etu.prenom);
    let tot = 0;
    let cpt = 0;
    for(const key in etu.matieres) {
        console.log(` ${key} : ${etu.matieres[key]} /20`);
        tot += parseInt(etu.matieres[key]);
        cpt ++;
    }
    let moy = tot / cpt;
    console.log(`La moyenne est de ${moy}`);
    console.log(moy.toFixed(2));
    console.log('Fin étudiant');
}

etudiants.forEach(element => affichageEtudiant(element));