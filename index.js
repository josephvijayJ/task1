const students = [
    { name: "Adhi", gender: "male",score: 90 },
    { name: "Ahamed", gender: "male",score :80},
    { name: "Rutika Kadam", gender: "female",score: 75},
    { name: "Priyadharsini", gender: "female",score: 60 },
    { name:  "Deepak",gender: "male",score: 35},
    { name:  "Sateesh",gender: "male",score: 55},
  ];
  
  // // Task 1: find all female name
  // ["Rutika kadam", "Priyadharsini"];
  
  // //Task 2: Starting with 'A'
  // ["Adhi", "Ahamed"];
  
  // // Task 3: Count the no. of males
  // // 2
  const allfemales = students.filter(student => student.gender == 'female')
                     .map(student => student.name);
  console.log(allfemales);

  const StartA = students.filter(student => student.name[0] == 'A')
  .map(student => student.name);
  console.log(StartA);
  
  const noOfMales = students.filter(student => student.gender == 'male');
  console.log(noOfMales.length);
 
