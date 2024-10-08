let n;

do {
    n = prompt("entrer un nombre entier supérieur à 0 :");
    n = Number(n);
} while (n <= 0);

console.log("Les sommes consécutives sont :");
let midNb = n / 2 + 1;

for(let i = 1; i <= midNb; i++) {
    let sum = 0;
    let isValid = false;
    let stop = 0;

    for (let j = i; j <= midNb; j++) {
        sum += j;
        if (sum == n) {
            isValid = true;
            stop = j;
            break;
        }
        if (sum > n) break;
    }

    if (isValid) {
        let str = `${n} = ${i}`;
        for(let j = i + 1; j <= stop; j++) {
            str += `+${j}`;
        }
        console.log(str);
    }
}
