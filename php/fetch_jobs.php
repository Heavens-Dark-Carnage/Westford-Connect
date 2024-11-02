<?php
header('Content-Type: application/json');

// Read jobs data
$jobsFile = '../data/jobs.json';
$jobsData = file_get_contents($jobsFile);
echo $jobsData;
?>
