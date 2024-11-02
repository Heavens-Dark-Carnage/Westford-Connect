document.addEventListener('DOMContentLoaded', function () {
    fetchStudents();
    fetchJobs();

    function fetchStudents() {
        fetch('php/fetch_students.php')
            .then(response => response.json())
            .then(data => {
                displayStudents(data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }

    function displayStudents(students) {
        const studentContainer = document.getElementById('student-list');
        studentContainer.innerHTML = '';

        students.forEach(student => {
            const studentElement = document.createElement('div');
            studentElement.className = 'student';
            studentElement.innerHTML = `
                <h3>${student.name} (${student.email}) - Status: ${student.status}</h3>
                <button onclick="approveStudent('${student.email}')">Approve</button>
                <button onclick="rejectStudent('${student.email}')">Reject</button>
            `;
            studentContainer.appendChild(studentElement);
        });
    }

    window.approveStudent = function(email) {
        // Logic to approve the student
        // This can be a fetch call to a PHP script to change the student's status
    };

    window.rejectStudent = function(email) {
        // Logic to reject the student
        // This can be a fetch call to a PHP script to change the student's status
    };

    function fetchJobs() {
        fetch('php/fetch_jobs.php')
            .then(response => response.json())
            .then(data => {
                displayJobs(data);
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }

    function displayJobs(jobs) {
        const jobContainer = document.getElementById('job-approvals');
        jobContainer.innerHTML = '';

        jobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.className = 'job';
            jobElement.innerHTML = `
                <h3>${job.title} - Status: ${job.status}</h3>
                <button onclick="approveJob('${job.id}')">Approve</button>
                <button onclick="rejectJob('${job.id}')">Reject</button>
            `;
            jobContainer.appendChild(jobElement);
        });
    }

    window.approveJob = function(id) {
        // Logic to approve the job
        // This can be a fetch call to a PHP script to change the job's status
    };

    window.rejectJob = function(id) {
        // Logic to reject the job
        // This can be a fetch call to a PHP script to change the job's status
    };
});
