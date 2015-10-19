angular.module('MyApp')

.service('MathExpressions', function() {
	var self = this;

	self.calculateAvg = function(arrayOfNumbers) {
		var sum = 0;
		for (var i = 0; i < arrayOfNumbers.length; i++) {
			sum += arrayOfNumbers[i].grade;
		}

		return sum/arrayOfNumbers.length;
	};

	self.calculateGrade = function(avg) {
		var grade = null;

		if (avg >= 95)
			grade = 'A+';

		else if (avg < 95 && avg >= 85) 
			grade = 'A';

		else if (avg < 85 && avg >= 75) 
			grade = 'B';
		
		else if (avg < 75 && avg >= 65) 
			grade = 'C';
		
		else if (avg < 65 && avg >= 50) 
			grade = 'D';
		
		else 
			grade = 'F';
		
		return grade;
	};
})


.factory('Assignment', function(MathExpressions) {

	function Assignment(name, assignmentname, grade) {
		this.name = name;
		this.assignmentname = assignmentname;
		this.grade = grade;
	}

	Assignment.prototype.getassignmentName = function() {
		return this.assignmentname;
	};

	Assignment.prototype.getGrade = function() {
		return this.grade;
	};

	return Assignment;
})
