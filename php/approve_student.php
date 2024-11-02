<?php
header('Content-Type: application/json');

// Get the email from the request
$email = $_POST['email'];

// File path for registrations
$registrationFile = '../data/registrations.json';

// Read existing registrations
$registrations = json_decode(file_get_contents($registrationFile), true);

// Find the student and update their status
foreach ($registrations as &$student) {
    if ($student['email'] === $email) {
        $student['status'] = 'approved'; // Change status to approved
        break;
    }
}

// Write back to the file
file_put_contents($registrationFile, json_encode($registrations));

// Success response
echo json_encode(['success' => true]);
?>
