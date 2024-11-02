<?php
header('Content-Type: application/json');

// Get the job ID from the request
$jobId = $_POST['jobId'];

// File path for jobs
$jobFile = '../data/jobs.json';

// Read existing jobs
$jobs = json_decode(file_get_contents($jobFile), true);

// Find the job and update its status
foreach ($jobs as &$job) {
    if ($job['id'] === $jobId) {
        $job['status'] = 'approved'; // Change status to approved
        break;
    }
}

// Write back to the file
file_put_contents($jobFile, json_encode($jobs));

// Success response
echo json_encode(['success' => true]);
?>
