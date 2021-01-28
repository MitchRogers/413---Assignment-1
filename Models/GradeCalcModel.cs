using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;        // needed for range function
using System.Linq;
using System.Threading.Tasks;

namespace Assignment_1.Models
{
    // Model created for the Grade Calculator
    public class GradeCalcModel
    {
        // one line getter and setter and a range restriction on the user input
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public String assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public String projects { get; set; }

        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public String quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public String exams { get; set; }

        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public String intex { get; set; }
    }
}
