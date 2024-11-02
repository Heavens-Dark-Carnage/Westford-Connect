document.addEventListener('DOMContentLoaded', function () {
    fetchPendingJobs();

    function fetchPendingJobs() {
        fetch('php/fetch_jobs.php')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                } else {
                    displayJobs(data);
                }
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }

    function displayJobs(jobs) {
        const jobContainer = document.getElementById('job-list'); // Make sure you have this div in your HTML
        jobContainer.innerHTML = ''; // Clear existing jobs

        jobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.className = 'job';
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.description}</p>
                <p>Posted by: ${job.postedBy}</p>
                <p>Status: ${job.status}</p>
            `;
            jobContainer.appendChild(jobElement);
        });
    }
});
