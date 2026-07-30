function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (name === "" || roll === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${course}</td>
        <td><button onclick="deleteStudent(this)">Delete</button></td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(button) {
    let row = button.parentNode.parentNode;
    row.remove();
}
