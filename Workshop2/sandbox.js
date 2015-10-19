angular.module('MyApp', [])

.controller('YourController', function (Assignment, MathExpressions) {
  var self = this;

  self.Assignments = [];
  self.AverageGrade = null;
  self.letterGrade = null;
  self.latestAssignment = null;

  self.addAssignment = function(name, assignmentname, grade) {
    if (name && assignmentname && grade >= 0 && grade <= 100) {
      self.latestAssignment = new Assignment(name, assignmentname, grade);
      self.Assignments.push(self.latestAssignment);
      self.AverageGrade = MathExpressions.calculateAvg(self.Assignments);
      self.letterGrade = MathExpressions.calculateGrade(self.AverageGrade);
    }
  };
});
