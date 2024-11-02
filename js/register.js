document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const course = document.getElementById('course').value;

    // Create a registration object
    const registrationData = {
        name: name,
        email: email,
        password: password,
        course: course,
        status: 'pending' // Default status for new users
    };

    // Send the data to the server
    fetch('php/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful! Please wait for admin approval.');
            window.location.href = 'login.html'; // Redirect to login after registration
        } else {
            alert('Registration failed: ' + data.error);
        }
    })
    .catch(error => console.error('Error:', error));
});
