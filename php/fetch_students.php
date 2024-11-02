<?php
header('Content-Type: application/json');

// File path for registrations
$registrationFile = '../data/registrations.json';

// Check if the file exists
if (!file_exists($registrationFile)) {
    echo json_encode([]);
    exit();
}

// Read the JSON file
$registrations = json_decode(file_get_contents($registrationFile), true);

// Return the registrations as JSON
echo json_encode($registrations);
?>
