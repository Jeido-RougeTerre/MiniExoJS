function fullName(firstname, lastname) {
    return firstname + " " + lastname;
}

let firstname = prompt("Votre prenom :");
let lastname = prompt("Votre nom :");

console.log(fullName(firstname, lastname));