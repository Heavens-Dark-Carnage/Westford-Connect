// Function to fetch registered students
function fetchRegistrations() {
    fetch('php/fetch_registrations.php')
        .then(response => response.json())
        .then(data => {
            const studentList = document.getElementById('student-list').getElementsByTagName('tbody')[0];
            studentList.innerHTML = ''; // Clear existing content

            data.forEach(student => {
                const row = studentList.insertRow();
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.course}</td>
                    <td>${student.status}</td>
                `;
            });
        });
}

// Function to fetch pending job verifications
function fetchJobs() {
    fetch('php/fetch_jobs.php')
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list').getElementsByTagName('tbody')[0];
            jobList.innerHTML = ''; // Clear existing content

            data.forEach(job => {
                const row = jobList.insertRow();
                row.innerHTML = `
                    <td>${job.title}</td>
                    <td>${job.company}</td>
                    <td>${job.status}</td>
                    <td>
                        <button onclick="approveJob('${job.id}')">Approve</button>
                        <button onclick="rejectJob('${job.id}')">Reject</button>
                    </td>
                `;
            });
        });
}

// Approve Job Function
function approveJob(jobId) {
    fetch(`php/approve_job.php?id=${jobId}`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchJobs(); // Refresh job list
        });
}

// Reject Job Function
function rejectJob(jobId) {
    fetch(`php/reject_job.php?id=${jobId}`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchJobs(); // Refresh job list
        });
}

// Call fetch functions when the admin page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchRegistrations();
    fetchJobs();
});
