﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function calculateGrades()
{
    var maxAssignments = 0.50;
    var maxProjects = 0.10;
    var maxQuizzes = 0.10;
    var maxExams = 0.20;
    var maxIntex = 0.10;

    var assignmentScore = document.getElementById('assignments').value;
    var projectScore = document.getElementById('projects').value;
    var quizScore = document.getElementById('quizzes').value;
    var examScore = document.getElementById('exams').value;
    var intexScore = document.getElementById('intex').value;

    var overallScore = 0.0;
    var letterGrade = 'A';

    overallScore = (assignmentScore * maxAssignments) + (projectScore * maxProjects) + (quizScore * maxQuizzes) + (examScore * maxExams) + (intexScore * maxIntex);

    if (overallScore >= 94) {
        letterGrade = 'A';
    }
    else if (overallScore >= 90) {
        letterGrade = 'A-';
    }
    else if (overallScore >= 87) {
        letterGrade = 'B+';
    }
    else if (overallScore >= 84) {
        letterGrade = 'B';
    }
    else if (overallScore >= 80) {
        letterGrade = 'B-';
    }
    else if (overallScore >= 77) {
        letterGrade = 'C+';
    }
    else if (overallScore >= 74) {
        letterGrade = 'C';
    }
    else if (overallScore >= 70) {
        letterGrade = 'C-';
    }
    else if (overallScore >= 67) {
        letterGrade = 'D+';
    }
    else if (overallScore >= 64) {
        letterGrade = 'D';
    }
    else if (overallScore >= 60) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'E';
    }

    // the line below executes then disappears because page refreshes
    //document.getElementById('output').innerHTML = 'Your overall score is ' + overallScore + '. You received a(n) ' + letterGrade + ' as your final grade.';
    alert('Your overall score is ' + overallScore + '. You received a(n) ' + letterGrade + ' as your final grade.');
}