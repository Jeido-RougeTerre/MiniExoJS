class Dog {
    constructor(nom, age, race) {
        this.nom = nom;
        this.age = age;
        this.race = race;
        this.id = listDog.length + 1;
        listDog.push(this);
    }
}
const listDog =[];


const form = document.querySelector("#mon-form");
const button = document.querySelector("#btn-submit");
const select = document.querySelector("#dog-select");

button.addEventListener("click", e => {
    const name = document.querySelector("#dog-name").value;
    const breed = document.querySelector("#dog-breed").value;
    const age = document.querySelector("#dog-age").value;

    let dog = new Dog(name, age, breed);

    const opt = document.createElement("option");
    opt.setAttribute("value", dog.id);
    opt.innerText = dog.nom;
    select.appendChild(opt);
    console.log("form submited");
});

const out = document.querySelector("#selectOutput");
const p = document.createElement("p");
p.innerText = "Pas de selection";
out.appendChild(p);

select.addEventListener("change", e => {
    p.innerText = (parseInt(e.target.selectedIndex) != 0)? `Vous avez sélectioné le chien avec l'ID: ${e.target.selectedIndex}` : "Pas de selection";
})