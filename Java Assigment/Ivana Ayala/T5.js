const solution = (s) => {
    console.log('This is Task 5.')
    var result = 0
    // add your code below//

    let length = s.length;
  
        s = s.replace(/\s/g, "");
        final = {} 
        for (let char in s) { 
            if (s[char] in final) { 
                final[s[char]] = final[s[char]] + 1
            } else { 
                final[s[char]] = 1
            }
        }

        tmp = ``
        Object.keys(final).forEach(function(letra) {
            tmp += result++
        })
  
    // add your code above//
    return result
}

console.log(solution("cabca")) // output: 3
console.log(solution("aba")) // output: 2
console.log(solution("ccccccccccc")) // output: 1
