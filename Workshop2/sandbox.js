angular.module('MyApp', [])

.controller('YourController', function (Assignment, MathExpressions, MY_FOLDERS, MY_PASSWORD) {
  var self = this;
  self.folders = MY_FOLDERS;


  self.Assignments = [];
  self.AverageGrade = null;
  self.latestAssignment = null;

  self.addAssignment = function(name, assignmentname, grade) {
    console.log('h1');
    if (name && assignmentname && grade >= 0 && grade <= 100) {
      console.log('h2');
      self.latestAssignment = new Assignment(name, assignmentname, grade);
      // self.latestAssignment.updateAverage();
      // self.AverageGrade = self.latestAssignment.getAverage();
      self.Assignments.push(latestAssignment);
    }
  }



})

.controller('MyController', function (MathExpressions, MY_FOLDERS) {
  var self = this;
  // self.folders = angular.copy(MY_FOLDERS);



  // self.popFolder = function() {
  //   self.folders.pop();
  // };

  // self.car = new Car('Honda', 'Accord');


  // self.logColor = function() {
  //   console.log(self.car.getColor())
  // };

  

  // self.car = {
  //   make: 'Honda',
  //   model: 'Accord',
  //   year: null,
  //   age: null,
  //   owners: []
  // };

  // self.addOwner = function(ownerName) {
  //   self.car.owners.push({name: ownerName});
  // };

 // self.updateYear = function(newYear) {
  //     // if (newYear && newYear > 999) {
  //       self.car.age = 2015 - newYear;
  //     // } else {
  //       // self.car.age = '';
  //     // }
  // };

  // // $scope.$watch('ctrl.car.year', function(newVal, oldVal) {
  // //   // console.log('New: ', newVal, ' oldVal: ', oldVal);
  // //   if (newVal && newVal > 999) {
  // //     self.car.age = 2015 - newVal;
  // //   } else {
  // //     self.car.age = '';
  // //   }
  // // });

  // $scope.$watch(function() {
  //   return self.car.year;
  // } , function(newVal, oldVal) {

  // });

  // $scope.$watchCollection('ctrl.car.owners', function(newOwners, oldOwners) {
  //   console.log('New: ', newOwners, ' oldVal: ', oldOwners);
  //   if (newOwners) {

  //   };
  // });

  // $scope.$watch('ctrl.person', function(newVal, oldVal) {
  //   // console.log('New: ', newVal, ' oldVal: ', oldVal);
  //   if (newVal) {

  //   }
  // }, true);

  // self.person = {
  //   address: {
  //     street: '100',
  //     apt: 5
  //   }
  // };

});