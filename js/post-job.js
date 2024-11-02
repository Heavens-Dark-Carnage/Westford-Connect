document.getElementById("post-job-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const jobTitle = document.getElementById("job-title").value;
    const jobDescription = document.getElementById("job-description").value;
    const documents = document.getElementById("documents").files;

    console.log("Job posted:", { jobTitle, jobDescription, documents });
    alert("Job posted successfully and is pending verification!");
});
