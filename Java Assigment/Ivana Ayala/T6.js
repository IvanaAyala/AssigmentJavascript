// This is a fun game. Kids need to learn how to sort numbers. 
// So there is a group of students on the page. They are standing
// in a row. There are rocks between them which cannot be moved. 
// The kids need to rearrange the students by their heights in 
// a non-descending order without moving the rocks. Write javascript 
// code to build this game.


// Example: a: [-1, 50, 90, 70, -1, -1, 60, 80]         output: [-1, 50, 60, 70, -1, -1, 80, 90]
//          a: [-1, -1, -1, -1, -1]                     output: [-1, -1, -1, -1, -1]
//          a: [4, 2, 9, 11, 2, 16]                     output: [2, 2, 4, 9, 11, 16]


// Input: array         If a[i] is -1, then the ith position is occupied by a tree. 
//                      Otherwise a[i] is the height of a person standing in the ith position.
//                      -1 <= a[i] <= 1000

// Output: array        Sorted array a with all the trees untouched.


const solution=(a)=>{
    console.log('This is Task 6.')
    let result = 0
    // ***add your code below***//
    var h = a.filter((result) => result != -1);
    h.sort((a, b) => b - a);
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
        a[i] = h.pop();
      }
    }
      return a;
  
  
    // ***add your code above***//
    return result
} 

console.log(solution([-1, 50, 90, 70, -1, -1, 60, 80]))       // output: [-1, 50, 60, 70, -1, -1, 80, 90]
console.log(solution([-1, -1, -1, -1, -1]))                   // output: [-1, -1, -1, -1, -1]
console.log(solution([4, 2, 9, 11, 2, 16]))                   // output: [2, 2, 4, 9, 11, 16]

export default solution