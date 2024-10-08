

let temp;

temp = prompt("temperature :");

temp = Number(temp);

console.log(`%c Votre eau est ${(temp < 0)? "SOLIDE": (temp <= 100)? "LIQUIDE" : "GAZEUSE"}`, "color:orange;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 2px coral;font-weight:bold")
