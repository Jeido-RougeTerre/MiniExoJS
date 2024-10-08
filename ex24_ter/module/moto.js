import Vehicule from "./vehicule.js";

export default class Moto extends Vehicule {
    constructor(marque, modele, kilometrage, annee) {
        super(marque, modele, kilometrage, annee);
    }

    display() {
        return `<strong>Moto :</strong> ${super.display()}`;
    }
}