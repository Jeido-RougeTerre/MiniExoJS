let n;

do {
    n = prompt("entrer un nombre entier supérieur à 0 :");
    n = Number(n);
} while (n <= 0);

let affichage1 = "";
let affichage2 = "  1  2  3  4  5  6  7  8  9 10\n-------------------------------\n";
for (let i = 1; i <= n; i++) {
    affichage1 += `Tables des ${i} :\n`;
    for (let j = 1; j <= 10; j++) {
        affichage1 += `${i} x ${j} = ${i*j}\n`;
        affichage2 += `${" ".repeat(Math.max(3 - (i * j).toString().length,1))}${i*j}`;
    }
    affichage1 += "\n";
    affichage2 += "\n";
}

console.log(affichage1);
console.log(affichage2);
