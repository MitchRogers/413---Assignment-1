// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
$("#calculateGrades").click(function () {
    // declare variables for grade weights
    var maxAssignments = 0.50;
    var maxProjects = 0.10;
    var maxQuizzes = 0.10;
    var maxExams = 0.20;
    var maxIntex = 0.10;

    // collect input values
    var assignmentScore = $('#assignments').val();
    var projectScore = $('#projects').val();
    var quizScore = $('#quizzes').val();
    var examScore = $('#exams').val();
    var intexScore = $('#intex').val();

    // initialize variables for output
    var overallScore = 0.0;
    var letterGrade = 'A';

    // calculate score
    overallScore = (assignmentScore * maxAssignments) + (projectScore * maxProjects) + (quizScore * maxQuizzes) + (examScore * maxExams) + (intexScore * maxIntex);

    // assign a value to letter grade
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

    // alert box displaying grade and overall score
    alert('Your overall score is ' + overallScore + '. You received a(n) ' + letterGrade + ' as your final grade.');
});