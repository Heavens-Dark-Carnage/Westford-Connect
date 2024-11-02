<?php
header('Content-Type: application/json');

// Read registrations data
$registrationsFile = '../data/registrations.json';
$registrationsData = file_get_contents($registrationsFile);
echo $registrationsData;
?>
