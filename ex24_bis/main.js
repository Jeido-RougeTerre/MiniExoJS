const div = document.querySelector(".container");


class Voiture {
    constructor(marque, model, vitesse) {
        this.marque = marque;
        this.model = model;
        this.vitesse = Number(vitesse);
    }

    accelerer() {
        this.vitesse += 10;
        let p = document.createElement("p");
        p.innerHTML = `La voiture <strong>${this.marque} ${this.model}</strong> avance désormais à <strong>${this.vitesse}km/h</strong>`;
        div.appendChild(p);
    }

    turn() {
        this.vitesse = (this.vitesse <5)? 0 : this.vitesse - 5;
        let p = document.createElement("p");
        p.innerHTML = `La voiture <strong>${this.marque} ${this.model}</strong> avance désormais à <strong>${this.vitesse}km/h</strong>`;
        div.appendChild(p);        
    }
}

let v1 = new Voiture("BMW", "Serie 1", 80);
v1.accelerer();
v1.accelerer();
v1.accelerer();
let v2 = new Voiture("Mercedes", "GLB", 100);
v2.accelerer();
v2.accelerer();
v2.turn();
v2.turn();