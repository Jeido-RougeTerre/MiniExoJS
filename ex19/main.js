/**
 * 
 * @param {string} str 
 */
function compterLettreA(str) {
    let cpt = 0;
    for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "a") {
            cpt++;
        }
    }
    return cpt;
}

console.log(`Banana have ${compterLettreA("banana")} a`);
console.log(`mixer have ${compterLettreA("mixer")} a`);