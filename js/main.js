document.addEventListener("DOMContentLoaded", () => {
    fetchJobs();
});

function fetchJobs() {
    fetch('data/jobs.json')
        .then(response => response.json())
        .then(data => {
            const jobListContainer = document.getElementById("job-listings");
            data.forEach(job => {
                const jobItem = document.createElement("div");
                jobItem.className = "job-item";
                jobItem.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
                jobListContainer.appendChild(jobItem);
            });
        })
        .catch(error => console.error('Error fetching jobs:', error));
}
