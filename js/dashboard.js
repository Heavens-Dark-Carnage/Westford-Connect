document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const resume = document.getElementById("resume").files[0];

    console.log("Profile saved:", { name, course, resume });
    alert("Profile saved successfully!");
});
