document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Test credentials
    if (username === 'saadmansoor' && password === '1234567890') {
        // Redirect to admin dashboard if credentials are correct
        window.location.href = 'admin.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
