import Moto from "./module/moto.js";
import Voiture from "./module/voiture.js";

const div = document.querySelector(".container");

let voiture = new Voiture("Renault", "Kangoo", 24000, 2003, true);
div.innerHTML += `<p>${voiture.display()}</p>`;

let moto = new Moto("BMW", "R1150R Rockster", 65000, 2005);
div.innerHTML += `<p>${moto.display()}</p>`;