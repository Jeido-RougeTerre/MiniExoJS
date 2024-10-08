import Vehicule from "./vehicule.js";

export default class Voiture extends Vehicule {
    constructor(marque, modele, kilometrage, annee, clim = false) {
        super(marque, modele, kilometrage, annee);
        this.clim = clim;
    }

    display() {
        return `<strong>Voiture :</strong> ${super.display()}${this.clim? " - Climatisée" : ""}`
    }
}