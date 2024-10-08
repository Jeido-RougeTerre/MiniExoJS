let n;

do {
    n = prompt("entrer un nombre entier supérieur à 0 :");
    n = Number(n);
} while (n <= 0);

let str = "";
for (let i = 0; i <= n; i++) {
    str += `${" ".repeat(n - i)}${"*".repeat(i * 2 + 1)}\n`;
}

console.log(str);