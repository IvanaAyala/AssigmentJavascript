// To help the kids to tell the time from digital clocks 
// and analog clocks, Tom created a game. In this game, 
// there is one digital clock and one analog clock in the page.
// Kids can input the time in the digital clock then the time 
// will be shown in the analog clock. Write javascript code to 
// check if the input is a 24 hour format.

// Example: time: "13:58"          output: true
//          time: "25:51"          output: false
//          time: "02:76"          output: false


// Input: string         A string in HH:MM format
// Output: boolean


const solution=(time)=>{
    console.log('This is Task 4.')
    let result = 0
    // ***add your code below***//

	let regex = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);
	if (time == null) {
		return "false";
	}
	if (regex.test(time) == true) {
		return "true";
	}
	else {
		return "false";
	}

    // ***add your code above***//
    return result
} 

console.log(solution("13:58"))         // output: true
console.log(solution("25:51"))         // output: false
console.log(solution("02:76"))         // output: false

export default solution