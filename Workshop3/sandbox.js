angular.module('MyApp', [])

.controller('YourController', function (MY_SONGS, GENRES, ALLOW_EXPLCIT, CONVERSIONFUNCS) {
  var self = this;

  self.songs = MY_SONGS;
  self.genres = GENRES;
  self.explicits = ALLOW_EXPLCIT;

  self.genreSelected = self.genres[0].name;
  self.expSelected = self.explicits[0].name;

  self.output = '';


  self.submitSongs = function() {
    console.log(CONVERSIONFUNCS.converttoJson(MY_SONGS, self.expSelected));
    self.output = CONVERSIONFUNCS.converttoJson(MY_SONGS, self.expSelected);
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

});
