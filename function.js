/* function startFunc(person) {
    console.log('stand Up ' + person);
    console.log('walk towards the switch ' + person);
    console.log('Press the switch ' + person);
}

startFunc('Aurna'); */

function getTotal(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const avg = total / 3;
    return avg;
}

const assignment1Marks = 60;
const assignment2Marks = 60;
const assignment3Marks = 60;

console.log('My average: ' + getTotal(assignment1Marks, assignment2Marks, assignment3Marks));


