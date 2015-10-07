angular.module('MyApp', [])

  .controller('MyController', function () {
    var self = this;

    self.init = function() {
        self.showEdit = false;
        self.showMain = true;
        self.headerTitle = 'User Info';
        self.first = 'George';
        self.last = 'Dagher';
        self.email = 'george@nycda.com'
    }
    
    self.openDialog = function() {
      self.tempfirst = self.first;
      self.templast = self.last;
      self.showMain = false;
      self.showEdit = true;
    };

    self.cancelDialog = function() {
      self.showMain = true;
      self.showEdit = false;
      self.tempfirst = '';
      self.templast = '';
    };


    self.saveInfo = function() {
      self.first = self.tempfirst;
      self.last = self.templast;
      self.showMain = true;
      self.showEdit = false;
    };
  
});