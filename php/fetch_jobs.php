<?php
header('Content-Type: application/json');

// File path
$jsonFile = '../data/jobs.json';

// Check if the file exists
if (!file_exists($jsonFile)) {
    echo json_encode(["error" => "File not found."]);
    exit();
}

// Read the JSON file
$jsonData = file_get_contents($jsonFile);
$jobs = json_decode($jsonData, true);

// Filter jobs by status 'pending' for verification
$pendingJobs = array_filter($jobs, function ($job) {
    return $job['status'] === 'pending';
});

// Return the filtered jobs as JSON
echo json_encode(array_values($pendingJobs));
?>
