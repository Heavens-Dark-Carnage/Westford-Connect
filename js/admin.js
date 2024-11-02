document.addEventListener('DOMContentLoaded', function() {
    fetch('php/fetch_registrations.php')
        .then(response => response.json())
        .then(data => {
            const studentList = document.getElementById('student-list');
            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.course}</td>
                    <td>${student.status}</td>
                    <td>
                        <button onclick="approveStudent('${student.email}')">Approve</button>
                        <button onclick="rejectStudent('${student.email}')">Reject</button>
                    </td>
                `;
                studentList.appendChild(row);
            });
        });
});

function approveStudent(email) {
    fetch('php/approve_student.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Student approved.');
            location.reload(); // Refresh the page
        }
    });
}

function rejectStudent(email) {
    fetch('php/reject_student.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Student rejected.');
            location.reload(); // Refresh the page
        }
    });
}
