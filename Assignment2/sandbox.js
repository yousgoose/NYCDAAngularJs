angular.module('MyApp', [])

.controller('YourController', function ($timeout, $interval) {
  var self = this;

  self.turn = 'user';

  self.startGame = 0;
  self.gameCount = 1; //level
  self.loopCount = 0;
  self.readState = 0;
  self.firstPlay = 0;

  self.userArray = [];
  self.simonArrayCopy = [];

  self.switchTurns = function () {
   switchturn = $timeout(function() {
    if (self.turn == 'user') {
      self.gameCount++;
      self.simonArrayCopy = [];
      self.userArray = [];
      self.turn = 'simon';
      self.goSimon();
    }
    else
      self.turn = 'user'
    }, 200)
  };

  self.startGame = function () {
    self.turn = 'user';
    self.gameCount = 1; //level
    self.loopCount = 0;
    self.userArray = [];
    self.simonArray = [];
    self.startGame = 1;

    self.goSimon();
  };

  self.goSimon = function () {
    self.turn = 'simon';
    self.simonmakeChoice();
  };

  self.simonmakeChoice = function() {


      //Make new selection and add color to array
      var randomNum = Math.floor((Math.random() * 4) + 1);
        
      switch(randomNum) {
        case 1:
          self.addtoSelections(self.turn, 'red');
          break;
        case 2:
          self.addtoSelections(self.turn, 'blue');
          break;
        case 3:
          self.addtoSelections(self.turn, 'green');
          break;
        case 4:
          self.addtoSelections(self.turn, 'yellow');
          break;
      }

      //Loop through colors and display without re-adding to array
      self.readState = 1;

      play = $interval(function() {
        
        switch(self.simonArray[self.loopCount].color) {
          case 'red':
            self.submitbuttonOne();
            break;
          case 'blue':
            self.submitbuttonTwo();
            break;
          case 'green':
            self.submitbuttonThree();
            break;
          case 'yellow':
            self.submitbuttonFour();
            break;
        }

        self.loopCount ++;

        if(self.loopCount == self.gameCount)
        {
          self.loopCount = 0;
          self.readState = 0;

          $timeout(function() {
            self.switchTurns();
          }, 500)
        }

      }, 500, self.simonArray.length)
  };


  self.addtoSelections = function (turn, color) {
    if(turn == 'user') {
      self.userArray.push({color: color});
    }
    else {
      if(self.readState == 0) {
        self.simonArray.push({color: color});
      }
      else if (self.readState == 1) {
        self.simonArrayCopy.push({color: color});
      }
    }
  };


  self.submitbuttonOne = function() {
    self.buttonOne.class += ' flash';

    $timeout(function() {
      self.buttonOne.class = self.buttonOne.baseclass;
    }, 100)

   
    self.addtoSelections(self.turn, self.buttonOne.color);

    if(self.turn == 'user') {
      self.loopCount ++;

      if(self.gameCount == self.loopCount) {
        self.loopCount = 0;

         if(angular.equals(self.userArray, self.simonArray)) {
          //self.gameCount++;
          self.switchTurns(); 
        }
        else {
          self.startGame = 0;
          self.firstPlay++;
        }
      }

    }

  };

  self.submitbuttonTwo = function() {
    self.buttonTwo.class += ' flash';

    $timeout(function() {
      self.buttonTwo.class = self.buttonTwo.baseclass;
    }, 100)

    self.addtoSelections(self.turn, self.buttonTwo.color);

    if(self.turn == 'user') {
      self.loopCount ++;

      if(self.gameCount == self.loopCount) {
        self.loopCount = 0;

         if(angular.equals(self.userArray, self.simonArray)) {
          //self.gameCount++;
          self.switchTurns(); 
        }
        else {
          self.startGame = 0;
          self.firstPlay++;
        }
      }
    }
  };

  self.submitbuttonThree = function() {
    self.buttonThree.class += ' flash';

    $timeout(function() {
      self.buttonThree.class = self.buttonThree.baseclass;
    }, 100)

    self.addtoSelections(self.turn, self.buttonThree.color);

    if(self.turn == 'user') {
      self.loopCount ++;

      if(self.gameCount == self.loopCount) {
        self.loopCount = 0;

        if(angular.equals(self.userArray, self.simonArray)) {
          //self.gameCount++;
          self.switchTurns(); 
        }
        else {
          self.startGame = 0;
          self.firstPlay++;
        }
      }
    }
  };

  self.submitbuttonFour = function() {
    self.buttonFour.class += ' flash';

    $timeout(function() {
      self.buttonFour.class = self.buttonFour.baseclass;
    }, 100)

    self.addtoSelections(self.turn, self.buttonFour.color);

    if(self.turn == 'user') {
      self.loopCount ++;

      if(self.gameCount == self.loopCount) {
        self.loopCount = 0;

        if(angular.equals(self.userArray, self.simonArray)) {
          //self.gameCount++;
          self.switchTurns(); 
        }
        else {
          self.startGame = 0;
          self.firstPlay++;
        }
      }
    }
  };



  self.buttonOne = {
    baseclass: 'buttons buttonone',
    class: 'buttons buttonone',
    color: 'red'
  };

  self.buttonTwo = {
    baseclass: 'buttons buttontwo',
    class: 'buttons buttontwo',
    color: 'blue'
  };

  self.buttonThree = {
    baseclass: 'buttons buttonthree',
    class: 'buttons buttonthree',
    color: 'green'
  };

  self.buttonFour = {
    baseclass: 'buttons buttonfour',
    class: 'buttons buttonfour',
    color: 'yellow'
  };



});