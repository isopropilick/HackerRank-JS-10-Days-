'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//Codigo realizado de ejercicio -Code carried out for the proposed exercise
function getGrade(score) {
    let grade;

    if(25 < score && score <=30)
        grade = 'A';
    else if (20 < score && score <= 25)
        grade = 'B';
    else if (15 < score && score <= 20)
        grade = 'C';
    else if (10 < score && score <= 15)
        grade = 'D';
    else if (5 < score && score <= 10)
        grade = 'E';
    else if (0 <= score && score <= 5)
        grade = 'F';
    return grade;
}
//Fin del codigo realizado - End of code done

function main() {
    const score = +(readLine());

    console.log(getGrade(score));
}