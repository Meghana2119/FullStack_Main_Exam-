function isPangram(str) {
    
   
    str = str.toLowerCase();
    
   
    let alphabets = new Set("abcdefghijklmnopqrstuvwxyz");

  
    for (let char of str) {
        // Delete the character from the set if it exists
        alphabets.delete(char);

        // If the set is empty, all letters have been found
        if (alphabets.size === 0) {
            return true;
        }
    }

    return false;
}

// Test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // should be true
console.log(isPangram("Hello, World!")); // should be false
console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); // should be true
