/**
 * 
 * @param {string} str 
 */
function isPalindrom(str) {
    for (let i = 0; i < str.length / 2; i++) {
        
        let charFirst = str.charAt(i);
        let charLast = str.charAt(str.length - (i + 1));

        if (charFirst != charLast) {
            return false;
        }
    } 
    return true;
}

console.log(`is kayak a palindrome ? ${isPalindrom("kayak")}`);
console.log(`is toot a palindrome ? ${isPalindrom("toot")}`);
console.log(`is men a palindrome ? ${isPalindrom("men")}`);
