<?php
header('Content-Type: application/json');

// File path for registrations
$registrationFile = '../data/registrations.json';

// Read existing registrations
$registrations = json_decode(file_get_contents($registrationFile), true);

// Send the data as JSON
echo json_encode($registrations);
?>
