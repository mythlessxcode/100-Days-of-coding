// maps 
const students = [
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
const Average = marks=> marks.reduce((s,m)=> s+m, 0)/ marks.length

//grade 
const grade = Average =>{
        if(Average >= 90) return "A";
    if(Average >= 85) return "B";
    if(Average >= 80) return "C";
    return "D";
}

const StudentReports = students.map(student=> {
    const average = Average(student.marks);
    return{
        name: student.name,
        average: average,
        grade: grade(average)
    };
});

const topStudent = StudentReports.reduce((top, current)=>{
    return current.average > top.average? current : top;
})

console.log("student Report:", StudentReports);
console.log("Top Student:", topStudent);







