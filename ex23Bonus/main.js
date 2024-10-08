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

const cont = document.querySelector(".container");

/**
 * 
 * @param {{    prenom: string;    nom: string;    matieres: {        francais: number;        anglais: number;        humour: number;        informatique?: undefined;        sport?: undefined;    };} | {    prenom: string;    nom: string;    matieres: {        francais: number;        anglais: number;        humour: number;        informatique: number;        sport: number;    };}} etu  
 */
function affichageEtudiant(etu) {
    const div = document.createElement("div");
    div.className = "card";

    const h1 = document.createElement("h1");
    h1.innerText = `${etu.nom} ${etu.prenom}`;
    div.appendChild(h1);

    const ul = document.createElement("ul");

    let tot = 0;
    let cpt = 0;
    for(const key in etu.matieres) {
        const li = document.createElement("li");
        li.innerHTML = `<em>${key} :</em> ${etu.matieres[key]}/20`
        ul.appendChild(li);
        tot += parseInt(etu.matieres[key]);
        cpt ++;
    }
    div.append(ul);

    let moy = tot / cpt;

    const p1 = document.createElement("p");
    p1.innerHTML = `La moyenne est de <strong>${moy}</strong>`;
    div.append(p1);

    const p2 = document.createElement("p");
    p2.innerHTML =`<strong>${moy.toFixed(2)}</strong>`;

    div.appendChild(p2);
    cont.appendChild(div);
}

etudiants.forEach(element => affichageEtudiant(element));