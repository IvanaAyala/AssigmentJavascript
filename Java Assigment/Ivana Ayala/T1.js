// Tom wants kids to learn the concept of the century. 
// So he created a game. In this game, kids need to input 
// the year and the web page will show them which century 
// the year is in.  Write javascript code to finish this functionality.

// Example: year: 1905          output: 20
//          year: 1700          output: 17
//          year: 374           output: 4

// Input: integer   1 <= year <= 2005
// Output: integer

const solution=(year)=>{
    console.log('This is Task 1.')
    let result = 0
    // ***add your code below***//
    return Math.ceil(year/100);
    // ***add your code above***//
    return result
} 

console.log(solution(1905))  // output: 20
console.log(solution(1700))  // output: 17
console.log(solution(374))   // output: 4


export default solution