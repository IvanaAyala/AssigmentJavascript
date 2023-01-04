// There is another game. Input some letters randomly. 
// If the string is exactly the same as the one it is reversed.  
// The page will show ‘you win’, otherwise the page will show 
// ‘you lose’. Write javascript code to check if the string is the same 
// when it is reversed.

// Example: inputString: "aabaa"          output: true
//          inputString: "abac"           output: false
//          inputString: "a"              output: true

// Input: string     A non-empty string consisting of lowercase characters.
// Output: boolean

const solution=(inputString)=>{
    console.log('This is Task 2.')
    let result = false
    // ***add your code below***//
    let splitString = inputString.split('')
    let reverseArray = splitString.reverse();
    let newString = reverseArray.join('');

    console.log(newString);
    if (newString == inputString){
        return true 

    }else{
        return false
    }
    
    // ***add your code above***//
    return result
} 

console.log(solution("aabaa")) // output: true
console.log(solution("abac"))  // output: false
console.log(solution("a"))     // output: true

export default solution