const studentsData = 
    [
  { name: "Rahul",   marks: [70, 80, 90] },
  { name: "Ananya",  marks: [85, 78, 88] },
  { name: "Vikram",  marks: [60, 72, 68] },
  { name: "Priya",   marks: [90, 92, 95] },
  { name: "Aman",    marks: [55, 65, 70] },
  { name: "Sneha",   marks: [88, 84, 91] },
  { name: "Rohit",   marks: [73, 69, 75] },
  { name: "Kavya",   marks: [81, 79, 85] },
  { name: "Arjun",   marks: [66, 74, 70] },
  { name: "Neha",    marks: [92, 89, 94] }
];

//Average

const getAverage =  marks => marks.reduce((s, m)=> s+m , 0)/marks.length

//Grades
const getGrade = getAverage =>{
  if(getAverage >= 90) return "A";
    if(getAverage >= 85) return "B";
    if(getAverage >= 80) return "C";
    return "D"
}

const report = studentsData.map(student =>{
  const average = getAverage(student.marks)

  return{
    name: student.name,
    average: average,
    grade: getGrade(average) 
   };
});

console.log(report);


