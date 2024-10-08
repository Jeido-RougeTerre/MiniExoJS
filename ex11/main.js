let ep = 0.1;
let goal = 400 * 1000;
let cpt = 0;

while (ep < goal) {
    ep *= 2;
    cpt ++;
}

console.log("rep1:"+cpt);
ep = 400 * 1000;
goal = 0.1;
cpt = 0;

while (ep > goal) {
    ep /= 2;
    cpt ++;
}

console.log("rep2:"+cpt);
