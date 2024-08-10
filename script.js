
// Initialize an empty array to store student data
let students = [];

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    
    
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Basic phone number format validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return;
    }

    const student = { name, email, age, phone };
    students.push(student);

    displayStudents();
    clearForm();
});

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML =`NAME : ${student.name}, EMAIL : ${student.email},   AGE : ${student.age},   PHONE : ${student.phone} .
             <button onclick="editStudent(${index})" type="edit">Edit</button>
            <button onclick="deleteStudent(${index})" type="delete">Delete</button>`;
        studentList.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('email').value = student.email;
    document.getElementById('age').value = student.age;
    document.getElementById('phone').value = student.phone;

    students.splice(index, 1);
    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}