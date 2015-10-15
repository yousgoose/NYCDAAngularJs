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
})

.factory('Assignment', function(MathExpressions) {

	var avgGrade = 'Red'

	function Assignment(name, assignmentname, grade) {
		this.name = name;
		this.assignmentname = assignmentname;
		this.grade = grade;
	}

	Assignment.prototype.getAverage = function() {
		return this.avgGrade;
	};

	Assignment.prototype.getassignmentName = function() {
		return this.assignmentname;
	};

	Assignment.prototype.updateAverage = function() {
		this.avgGrade = MathExpressions.calculateAvg(Assignment);
	};

	return Assignment;
})

.value('MY_PASSWORD', 'JELLO24')

.value('MY_FOLDERS', [{
  name: 'Folder1'
}, {
  name: 'Folder2'
}, {
  name: 'Folder3'
}])