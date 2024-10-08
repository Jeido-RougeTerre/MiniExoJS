

let age, salary, years;

let isValid = true;

age = prompt("Votre age (minimum 30 ans) :");

age = parseInt(age);

if (age < 30) {
    console.log("age non valide");
    isValid = false;
}

salary = prompt("Votre salaire (maximum 40 000€) :");

salary = parseInt(salary);

if (salary > 40000) {
    console.log("salaire non valide");
    isValid = false;
}

years = prompt("Le nombre d'année d'epxerience (minimum 5 ans) :");

years = parseInt(years);

if (years < 5) {
    console.log("années d'exp. non valide");
    isValid = false;
}

console.log(`%c Votre profile est ${(isValid)? "Valide": "Invalide"}`, `color:${isValid? "green" : "red"};font-family:system-ui;font-size:4rem;-webkit-text-stroke: 2px black;font-weight:bold`);
