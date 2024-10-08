export default class Vehicule {
    constructor(marque, modele, kilometrage, annee) {
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
        this.annee = annee;
    }

    display() {
        return `${this.marque} - ${this.modele} - ${new Intl.NumberFormat().format(this.kilometrage)}km - ${this.annee}`;
    }
}