angular.module('MyApp', [])

.controller('YourController', function (MY_SONGS, GENRES, ALLOW_EXPLCIT, CONVERSIONFUNCS) {
  var self = this;

  self.songs = MY_SONGS;
  self.genres = GENRES;
  self.explicits = ALLOW_EXPLCIT;

  self.genreSelected = self.genres[0].name;
  self.expSelected = self.explicits[0].name;


  self.updateSonglist = function() {

  }

  self.submitSongs = function() {
    self.returndata = CONVERSIONFUNCS.converttoJson(MY_SONGS, self.expSelected));
  }

  self.isExpAllowed = function() {

      if (self.expSelected == 'Clean')
        return false;
      else
      {
        if (self.age > 20)
          return false;
        else
          return true;
      }
 
  }

  self.checkAgeExp = function() {
    if(self.age < 20 || !self.age) {
      self.expSelected = self.explicits[0].name;
    }
  }

  self.checkExp = function() {
    if(self.age < 20 || !self.age) {
      self.expSelected = self.explicits[0].name;
    }
  }

  // self.Assignments = [];
  // self.AverageGrade = null;
  // self.latestAssignment = null;

  // self.addAssignment = function(name, assignmentname, grade) {
  //   console.log('h1');
  //   if (name && assignmentname && grade >= 0 && grade <= 100) {
  //     console.log('h2');
  //     self.latestAssignment = new Assignment(name, assignmentname, grade);
  //     // self.latestAssignment.updateAverage();
  //     // self.AverageGrade = self.latestAssignment.getAverage();
  //     self.Assignments.push(latestAssignment);
  //   }
  // }



});

// .controller('MyController', function (MathExpressions, MY_FOLDERS) {
//   var self = this;
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

// });