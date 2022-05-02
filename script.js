// const student1 = {
//   name: 'Mirco',
//   surname: 'Faro',
//   yob: 1993,
//   gender: 'm',
//   gradesArray: grades
// }

// console.log(student1);


// function calculateStudentMean(student){

//   let sum = 0;
//   for (let i = 0; i < student.gradesArray.length; i++) {
//     const grade = student.gradesArray[i];
//     sum = sum + grade;
//   }
//   const mean = sum / student.gradesArray.length;

//   return mean;
// }

// console.log(calculateStudentMean(student1));



// Richiamo classe Student, e tra parentesi ci metto il valore desiderato 
// per ogni proprietà dichiarata nel contructor;

// const grades = [10, 7, 4, 9, 10];


// const student2 = new Student('Mirco', 'Faro', 1993, 'm', grades);


// console.log(student2);


// console.log(student2, student2.calculateGradeMean());


// const student3 = new Student("Paolo", "Foppiano", 1997, "m", [10, 9, 2]);


// console.log(student3.calculateGradeMean());


// console.log('età mirco', student2.calculateAge());
// console.log("età paolo", student3.calculateAge());


// console.log(student2.toString());
// console.log(student3.toString());







// const athlete1 = new Athlete('Davide', 'Leclerc', 1989, 'atletica', [13, 6, 5, 2, 7], 'm', false);

// console.log(athlete1.toString());

// const athlete2 = new Athlete('Linda', 'Olivieri', 1989, 'atletica', [35, 8, 25, 19, 2], 'f', false);

// console.log(athlete2.toString());

// const athlete3 = new Athlete('Stefano', 'Sottile', 1998, 'atletica', [4, 7, 12, 1, 3], 'm', true);

// console.log(athlete3.toString());



const vitamin1 = new Vitamin('Vitamin D3', 'California Gold Nutrition', [5, 4], '90 softgels', false);

console.log(vitamin1.toString());


const vitamin2 = new Vitamin('Vitamin B12', 'Natural Factors', [3, 2], '90 chewable tablets', false);

console.log(vitamin2.toString());


const vitamin3 = new Vitamin('Vitamin C', 'Solaray', [5, 2], '100 VegCaps', false);

console.log(vitamin3.toString());


const vitamin4 = new Vitamin('Iron', 'Solaray', [1, 6], '60 VegCaps', true);

console.log(vitamin4.toString());