let h;
let r;

h = prompt("Hauteur :");
r = prompt("Rayon :");

h = Number(h);
r = Number(r);

let volume = (Math.PI * r * r * h) / 3;

alert(`Le volume d'un Cone de rayon ${r} et de hauteur ${h} est de ${volume}`)
