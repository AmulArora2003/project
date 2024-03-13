// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const ledgerTable = document.querySelector('.ledger table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(name) {
//       const student = students.find(
//           (student) => student.name.toLowerCase() === name.toLowerCase()
//       );

//       if (student) {
//           displayLedger(student);
//       } else {
//           alert('Student not found');
//       }
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const name = searchForm.querySelector('input[name="Student name"]').value;
//       searchStudent(name);
//   });
// });
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const studentDetailsTable = document.querySelector('.details table');
//   const ledgerTable = document.querySelector('.ledger table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           fatherName: 'Mr. XYZ',
//           ledger: [
//               { period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           fatherName: 'Mr. ABC',
//           ledger: [
//               { period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(name) {
//       const student = students.find(
//           (student) => student.name.toLowerCase() === name.toLowerCase()
//           // (student) => student.admno() === name
//       );

//       if (student) {
//           displayStudentDetails(student);
//           displayLedger(student);
//       } else {
//           alert('Student not found');
//       }
//   }

//   // Function to display student details
//   function displayStudentDetails(student) {
//       studentDetailsTable.querySelector('tr:nth-child(2) td').textContent = student.name;
//       studentDetailsTable.querySelector('tr:nth-child(3) td').textContent = student.rollno;
//       studentDetailsTable.querySelector('tr:nth-child(4) td').textContent = student.admno;
//       studentDetailsTable.querySelector('tr:nth-child(5) td').textContent = student.fatherName;
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const name = searchForm.querySelector('input[name="Student name"]').value;
//       searchStudent(name);
//   });
// });
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const studentDetails = document.querySelector('.details');
//   const ledgerTable = document.querySelector('.ledger table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           fatherName: 'Mr. XYZ',
//           ledger: [
//               { period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           fatherName: 'Mr. ABC',
//           ledger: [
//               { period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(query) {
//       const student = students.find(
//           (student) => student.name.toLowerCase() === query.toLowerCase() || student.admno === query
//       );

//       if (student) {
//           displayStudentDetails(student);
//           displayLedger(student);
//       } else {
//           alert('Student not found');
//       }
//   }

//   // Function to display student details
//   function displayStudentDetails(student) {
//       const studentName = student.name;
//       const studentRollno = student.rollno;
//       const studentAdmno = student.admno;
//       const studentFatherName = student.fatherName;

//       studentDetails.querySelector('.name').textContent = studentName;
//       studentDetails.querySelector('.rollno').textContent = studentRollno;
//       studentDetails.querySelector('.admno').textContent = studentAdmno;
//       studentDetails.querySelector('.fatherName').textContent = studentFatherName;
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const query = searchForm.querySelector('input[name="search"]').value;
//       searchStudent(query);
//   });
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const ledgerTable = document.querySelector('.ledger table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(query) {
//       const student = students.find(
//           (student) => student.name.toLowerCase() === query.toLowerCase() || student.admno === query
//       );

//       if (student) {
//           displayLedger(student);
//       } else {
//           alert('Student not found');
//       }
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const query = searchForm.querySelector('input[name="Student name"]').value.trim();
//       if (query) {
//           searchStudent(query);
//       } else {
//           alert('Please enter a name or admission number');
//       }
//   });
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//     const searchForm = document.querySelector('.form');
//     const searchButton = searchForm.querySelector('button');
//     const ledgerTable = document.querySelector('.ledger table');

//     // Sample data
//     const students = [
//         {
//             name: 'John Doe',
//             rollno: '1',
//             admno: '12345',
//             ledger: [
//                 { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//                 { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//             ],
//         },
//         {
//             name: 'Jane Doe',
//             rollno: '2',
//             admno: '67890',
//             ledger: [
//                 { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//                 { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//             ],
//         },
//     ];

//     // Function to search for a student
//     function searchStudent(query) {
//         const student = students.find(
//             (student) => student.name.toLowerCase() === query.toLowerCase() || student.admno === query
//         );

//         if (student) {
          
//             displayLedger(student);
//             displayStudentDetails(student);
//         } else {
//             alert('Student not found');
//         }
//     }
//     // Function to display student details
//     function displayStudentDetails(student) {
//         studentDetailsTable.querySelector('tr:nth-child(2) td').textContent = student.name;
//         studentDetailsTable.querySelector('tr:nth-child(3) td').textContent = student.rollno;
//         studentDetailsTable.querySelector('tr:nth-child(4) td').textContent = student.admno;
//         studentDetailsTable.querySelector('tr:nth-child(5) td').textContent = student.fatherName;
//     }

//     // Function to display ledger
//     function displayLedger(student) {
//         ledgerTable.innerHTML = '';

//         const headerRow = document.createElement('tr');
//         headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//         ledgerTable.appendChild(headerRow);

//         student.ledger.forEach((ledger) => {
//             const row = document.createElement('tr');
//             row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//             ledgerTable.appendChild(row);
//         });
//     }

//     // Event listener for the search button
//     searchButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         const query = searchForm.querySelector('input[name="Student name"]').value;
//         if (!query) {
//             const admnoQuery = searchForm.querySelector('input[name="admissionno"]').value;
//             searchStudent(admnoQuery);
//         } else {
//             searchStudent(query);
//         }
//     });
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const ledgerTable = document.querySelector('.ledger table');
//   const studentDetails = document.querySelector('.details table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(query) {
//       const student = students.find(
//           (student) => student.name.toLowerCase() === query.toLowerCase() || student.admno === query
//       );

//       if (student) {
//           displayLedger(student);
//           displayStudentDetails(student);
//       } else {
//           alert('Student not found');
//       }
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Function to display student details
//   function displayStudentDetails(student) {
//       studentDetails.querySelector('.name').textContent = student.name;
//       studentDetails.querySelector('.rollno').textContent = student.rollno;
//       studentDetails.querySelector('.admno').textContent = student.admno;
//       studentDetails.querySelector('.fatherName').textContent = student.fatherName;
//   }

//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const query = searchForm.querySelector('input[name="Student name"]').value;
//       if (!query) {
//           const admnoQuery = searchForm.querySelector('input[name="admissionno"]').value;
//           searchStudent(admnoQuery);
//       } else {
//           searchStudent(query);
//       }
//   });
// });
///////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const ledgerTable = document.querySelector('.ledger table');
//   const studentDetails = document.querySelector('.details table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(query) {
//       const student = students.find(
//           (student) => student.name.toLowerCase() === query.toLowerCase() || student.admno === query
//       );

//       if (student) {
//           displayLedger(student);
//           displayStudentDetails(student);
//       } else {
//           alert('Student not found');
//       }
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Function to display student details
//   function displayStudentDetails(student) {
//       studentDetails.querySelector('.name').textContent = student.name;
//       studentDetails.querySelector('.rollno').textContent = student.rollno;
//       studentDetails.querySelector('.admno').textContent = student.admno;
//   }

//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const nameQuery = searchForm.querySelector('input[name="Student name"]').value.trim();
//       const admnoQuery = searchForm.querySelector('input[name="admissionno"]').value.trim();
      
//       if (admnoQuery) {
//           searchStudent(admnoQuery);
//       } else if (nameQuery) {
//           searchStudent(nameQuery);
//       } else {
//           alert('Please enter a search query');
//       }
//   });
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const ledgerTable = document.querySelector('.ledger table');
//   const studentDetails = document.querySelector('.details table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'John Smith',
//           rollno: '3',
//           admno: '12345678',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1500, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2200 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(query) {
//       // Find all students whose names start with the provided query
//       const matchingStudents = students.filter(
//           (student) => student.name.toLowerCase().startsWith(query.toLowerCase()) || student.admno === query
//       );

//       if (matchingStudents.length === 0) {
//           alert('No matching students found');
//       } else if (matchingStudents.length === 1) {
//           // If only one matching student found, display details directly
//           displayLedger(matchingStudents[0]);
//           displayStudentDetails(matchingStudents[0]);
//       } else {
//           // If multiple matching students found, create a dropdown menu
//           showDropdownMenu(matchingStudents);
//       }
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Function to display student details
//   function displayStudentDetails(student) {
//       studentDetails.querySelector('.name').textContent = student.name;
//       studentDetails.querySelector('.rollno').textContent = student.rollno;
//       studentDetails.querySelector('.admno').textContent = student.admno;
//   }

//   function showDropdownMenu(students) {
//     // Check if dropdown menu already exists, if so, remove it
//     const existingDropdown = searchForm.querySelector('#studentDropdown');
//     if (existingDropdown) {
//         existingDropdown.remove();
//     }

//     // Create a dropdown menu
//     const dropdown = document.createElement('select');
//     dropdown.setAttribute('id', 'studentDropdown');

//     // Add options for each matching student
//     students.forEach((student) => {
//         const option = document.createElement('option');
//         option.textContent = student.name;
//         dropdown.appendChild(option);
//     });

//     // Replace the name input field with the dropdown menu
//     const nameInput = searchForm.querySelector('input[name="Student name"]');
//     nameInput.replaceWith(dropdown);

//     // Add event listener for selecting a student from the dropdown
//     dropdown.addEventListener('change', function() {
//         const selectedStudentName = this.value;
//         const selectedStudent = students.find((student) => student.name === selectedStudentName);
//         displayLedger(selectedStudent);
//         displayStudentDetails(selectedStudent);
//     });
//   }



//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const name = searchForm.querySelector('input[name="Student name"]').value.trim();
//       const admno = searchForm.querySelector('input[name="admissionno"]').value.trim();
      
//       // Check if name or admission number is provided
//       if (name || admno) {
//           searchStudent(name || admno);
//       } else {
//           alert('Please enter either the student name or admission number.');
//       }
//   });
// });
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const searchForm = document.querySelector('.form');
//   const searchButton = searchForm.querySelector('button');
//   const ledgerTable = document.querySelector('.ledger table');
//   const studentDetails = document.querySelector('.details table');

//   // Sample data
//   const students = [
//       {
//           name: 'John Doe',
//           rollno: '1',
//           admno: '12345',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'Jane Doe',
//           rollno: '2',
//           admno: '67890',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
//           ],
//       },
//       {
//           name: 'John Smith',
//           rollno: '3',
//           admno: '12345678',
//           ledger: [
//               { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
//               { srno: 2, period: 'February', slipAmt: 1500, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2200 },
//           ],
//       },
//   ];

//   // Function to search for a student
//   function searchStudent(nameQuery, admnoQuery) {
//       // Find all students whose names start with the provided query
//       const matchingStudentsByName = students.filter(
//           (student) => student.name.toLowerCase().startsWith(nameQuery.toLowerCase())
//       );

//       // Find all students with the provided admission number
//       const matchingStudentsByAdmno = students.filter(
//           (student) => student.admno === admnoQuery
//       );

//       const matchingStudents = [...matchingStudentsByName, ...matchingStudentsByAdmno];

//       if (matchingStudents.length === 0) {
//           alert('No matching students found');
//       } else if (matchingStudents.length === 1) {
//           // If only one matching student found, display details directly
//           displayLedger(matchingStudents[0]);
//           displayStudentDetails(matchingStudents[0]);
//       } else {
//           // If multiple matching students found, create a dropdown menu
//           showDropdownMenu(matchingStudents);
//       }
//   }

//   // Function to display ledger
//   function displayLedger(student) {
//       ledgerTable.innerHTML = '';

//       const headerRow = document.createElement('tr');
//       headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
//       ledgerTable.appendChild(headerRow);

//       student.ledger.forEach((ledger) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
//           ledgerTable.appendChild(row);
//       });
//   }

//   // Function to display student details
//   function displayStudentDetails(student) {
//       studentDetails.querySelector('.name').textContent = student.name;
//       studentDetails.querySelector('.rollno').textContent = student.rollno;
//       studentDetails.querySelector('.admno').textContent = student.admno;
//   }

//   function showDropdownMenu(students) {
//       // Check if dropdown menu already exists, if so, remove it
//       const existingDropdown = searchForm.querySelector('#studentDropdown');
//       if (existingDropdown) {
//           existingDropdown.remove();
//       }

//       // Create a dropdown menu
//       const dropdown = document.createElement('select');
//       dropdown.setAttribute('id', 'studentDropdown');

//       // Add options for each matching student
//       students.forEach((student) => {
//           const option = document.createElement('option');
//           option.textContent = student.name;
//           dropdown.appendChild(option);
//       });

//       // Replace the name input field with the dropdown menu
//       const nameInput = searchForm.querySelector('input[name="Student name"]');
//       nameInput.replaceWith(dropdown);

//       // Add event listener for selecting a student from the dropdown
//       dropdown.addEventListener('change', function() {
//           const selectedStudentName = this.value;
//           const selectedStudent = students.find((student) => student.name === selectedStudentName);
//           displayLedger(selectedStudent);
//           displayStudentDetails(selectedStudent);
//       });
//   }

//   // Event listener for the search button
//   searchButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       const name = searchForm.querySelector('input[name="Student name"]').value.trim();
//       const admno = searchForm.querySelector('input[name="admissionno"]').value.trim();
      
//       // Check if name or admission number is provided
//       if (name || admno) {
//           searchStudent(name, admno); // Pass both name and admission number queries
//       } else {
//           alert('Please enter either the student name or admission number.');
//       }
//   });
// });
///////////////////////////////////////////////////////////////////////this showing right search////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.form');
  const searchButton = searchForm.querySelector('button');
  const ledgerTable = document.querySelector('.ledger table');
  const studentDetails = document.querySelector('.details table');

  // Sample data
  const students = [
      {
          name: 'John Doe',
          rollno: '1',
          admno: '12345',
          fatherName: 'Mr. XYZ',
          ledger: [
              { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
              { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
          ],
      },
      {
          name: 'Jane Doe',
          rollno: '2',
          admno: '67890',
          fatherName: 'Mr. ABC',
          ledger: [
              { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
              { srno: 2, period: 'February', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2000 },
          ],
      },
      {
          name: 'John Smith',
          rollno: '3',
          admno: '12345678',
          fatherName: 'Mr. PQR',
          ledger: [
              { srno: 1, period: 'January', slipAmt: 1000, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 1000 },
              { srno: 2, period: 'February', slipAmt: 1500, conc: 0, waiveOff: 0, netSlip: 1000, totalAdj: 0, balance: 2200 },
          ],
      },
  ];

  // Function to search for a student
  function searchStudent(nameQuery, admnoQuery) {
      let matchingStudents = [];

      if (nameQuery) {
          // Find all students whose names start with the provided query
          const matchingStudentsByName = students.filter(
              (student) => student.name.toLowerCase().startsWith(nameQuery.toLowerCase())
          );
          matchingStudents = matchingStudents.concat(matchingStudentsByName);
      }

      if (admnoQuery) {
          // Find all students with the provided admission number
          const matchingStudentsByAdmno = students.filter(
              (student) => student.admno === admnoQuery
          );
          matchingStudents = matchingStudents.concat(matchingStudentsByAdmno);
      }

      if (matchingStudents.length === 0) {
          alert('No matching students found');
      } else if (matchingStudents.length === 1) {
          // If only one matching student found, display details directly
          displayLedger(matchingStudents[0]);
          displayStudentDetails(matchingStudents[0]);
      } else {
          // If multiple matching students found, create a dropdown menu
          showDropdownMenu(matchingStudents);
      }
  }

  // Function to display ledger
  function displayLedger(student) {
      ledgerTable.innerHTML = '';

      const headerRow = document.createElement('tr');
      headerRow.innerHTML = '<th>Sr.no</th><th>Period</th><th>slip-Amt.</th><th>conc.</th><th>waive-off</th><th>net-slip</th><th>total-adj</th><th>balance</th>';
      ledgerTable.appendChild(headerRow);

      student.ledger.forEach((ledger) => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${ledger.srno}</td><td>${ledger.period}</td><td>${ledger.slipAmt}</td><td>${ledger.conc}</td><td>${ledger.waiveOff}</td><td>${ledger.netSlip}</td><td>${ledger.totalAdj}</td><td>${ledger.balance}</td>`;
          ledgerTable.appendChild(row);
      });
  }

  
  function displayStudentDetails(student) {
    const detailsTable = document.querySelector('.details table');

    // Update existing table with student details
    detailsTable.querySelector('tr:nth-child(2) td').textContent = student.name;
    detailsTable.querySelector('tr:nth-child(3) td').textContent = student.rollno;
    detailsTable.querySelector('tr:nth-child(4) td').textContent = student.admno;
    detailsTable.querySelector('tr:nth-child(5) td').textContent = student.fatherName;
    // Add more rows for other details as needed
  }

  function showDropdownMenu(students) {
      // Check if dropdown menu already exists, if so, remove it
      const existingDropdown = searchForm.querySelector('#studentDropdown');
      if (existingDropdown) {
          existingDropdown.remove();
      }

      // Create a dropdown menu
      const dropdown = document.createElement('select');
      dropdown.setAttribute('id', 'studentDropdown');

      // Add options for each matching student
      students.forEach((student) => {
          const option = document.createElement('option');
          option.textContent = student.name;
          dropdown.appendChild(option);
      });

      // Replace the name input field with the dropdown menu
      const nameInput = searchForm.querySelector('input[name="Student name"]');
      nameInput.replaceWith(dropdown);

      // Add event listener for selecting a student from the dropdown
      dropdown.addEventListener('change', function() {
          const selectedStudentName = this.value;
          const selectedStudent = students.find((student) => student.name === selectedStudentName);
          displayLedger(selectedStudent);
          displayStudentDetails(selectedStudent);
      });
  }

  // Event listener for the search button
  searchButton.addEventListener('click', function(event) {
      event.preventDefault();
      const name = searchForm.querySelector('input[name="Student name"]').value.trim();
      const admno = searchForm.querySelector('input[name="admissionno"]').value.trim();

      // Check if name or admission number is provided
      if (name && admno) {
          alert('Please enter either the student name or admission number, not both.');
      } else if (name || admno) {
          searchStudent(name, admno);
      } else {
          alert('Please enter either the student name or admission number.');
      }
  });
});

