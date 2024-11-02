document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const course = document.getElementById('course').value;

    const data = {
        name: name,
        email: email,
        password: password,
        course: course,
        status: 'pending' // Initial status
    };

    fetch('php/register_student.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful! Please wait for admin approval.');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Registration failed. Please try again.');
        }
    });
});
