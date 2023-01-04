// There is a story game on Tom’s website. Kids play the game 
// and learn what is vowel: The US Coast Guard has recently 
// seen increased levels of pirate activity in the East Bay. 
// To make sure the boats coming in to dock are not pirate ships, 
// the guards check the tag on every boat. 
// *If a boat has exactly 2 vowels that are consecutive 
// *or starts with a vowel and has only one vowel it is not a pirate ship. Write a program that 
// returns true if a ship is a pirate ship and false if the ship 
// is not a pirate ship. We consider the letters "A","E","I","O","U","Y" 
// to be vowels for this problem.

// Example: tag: "XAERTM"     output: false
//          tag: "YPMRGB"     output: false
//          tag: "YOMANR"     output: true
 

// Input: string        A string of uppercase letters.    
// Output: boolean

const solution=(tag)=>{
    console.log('This is Task 7.')
    let result = true
    // ***add your code below***//
  
    if (!tag || tag.length <= 0) return false;
    let lowerCase = tag.toLowerCase();
    let firstIndex = lowerCase.charAt(0);
    let secondIndex = lowerCase.charAt(1);


    const vowel = ["a", "e", "i", "o", "u", "y"];

    if (vowel.indexOf(firstIndex) === -1 || vowel.indexOf(secondIndex) === -1 ) {
        return false;
    } else {
        return true;
    }

    // ***add your code above***//
    return result
}

console.log(solution("XAERTM"))       // output: false
console.log(solution("YPMRGB"))       // output: false
console.log(solution("YOMANR"))       // output: true

export default solution