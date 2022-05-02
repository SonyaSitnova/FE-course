
// Example 1 - Find the maxValue

var numbers = [5,66,987,54,36,12,36,58];

numbers.sort();
numbers.reverse();

console.log('MaxValue is ' + numbers[0]);


// Examlpe 2 - Odd/Even students

var students = ['Gosho', 
                'Ivan' ,
                'Nikola', 
                'Sonya',
                'Peter', 
                'Eleonora',
                'Katya',
                'Petya',
                'Vladimir', 
                'Sisi', 
                'Mitko', 
                'Dariya']

var evenNum = [];
var oddNum=[];

for(var i = 0; i < students.length; i++){
    if(i % 2 !== 0 ){
        evenNum.push(students[i]);
    }
    else {
        oddNum.push(students[i]);
    }
}
console.log(evenNum);
console.log(oddNum);



