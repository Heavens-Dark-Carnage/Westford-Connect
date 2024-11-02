<?php
header('Content-Type: application/json');

// Get the posted data
$data = json_decode(file_get_contents('php://input'), true);

// File path for registrations
$registrationFile = '../data/registrations.json';

// Read existing registrations
$registrations = json_decode(file_get_contents($registrationFile), true);

// Append the new registration
$registrations[] = $data;

// Write back to the file
file_put_contents($registrationFile, json_encode($registrations));

// Success response
echo json_encode(['success' => true]);
?>
