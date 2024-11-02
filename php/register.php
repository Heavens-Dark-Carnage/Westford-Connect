<?php
header('Content-Type: application/json');

// Get the raw POST data
$data = json_decode(file_get_contents('php://input'), true);

// Check if all required fields are present
if (!isset($data['name'], $data['email'], $data['password'], $data['course'])) {
    echo json_encode(['success' => false, 'error' => 'Missing fields']);
    exit();
}

// File path for registrations
$registrationFile = '../data/registrations.json';

// Read existing registrations
$registrations = [];
if (file_exists($registrationFile)) {
    $registrations = json_decode(file_get_contents($registrationFile), true);
}

// Add new registration
$newRegistration = [
    'name' => $data['name'],
    'email' => $data['email'],
    'password' => password_hash($data['password'], PASSWORD_BCRYPT), // Securely hash password
    'course' => $data['course'],
    'status' => 'pending'
];

$registrations[] = $newRegistration;

// Write back to the file
file_put_contents($registrationFile, json_encode($registrations));

// Success response
echo json_encode(['success' => true]);
?>
