angular.module('MyApp')

.service('CONVERSIONFUNCS', function() {
	var self = this;

	self.converttoJson = function(arrayofsongs, exp) {
		var outputarray = [];
		
		for (var i = 0; i < arrayofsongs.length; i++) {
			if(arrayofsongs[i].checked)
			{
				outputarray.push({name: arrayofsongs[i].name, type: exp});
			}
		}

		return angular.toJson(outputarray);
	};
})


.value('ALLOW_EXPLCIT', [{
  name: 'Clean',
  inactive: 'False'
}, {
   name: 'Explicit',
   inactive: 'True' 
}])

.value('GENRES', [{
	name: 'Pop'
}, {
	name: 'Rock'
}, {
	name: 'Rap'
}])

.value('MY_SONGS', [{
  name: 'PopSong1',
  genre: 'Pop',
  type: 'Clean'
}, {
  name: 'PopSong2',
  genre: 'Pop',
  type: 'Explicit'
}, {
  name: 'RockSong2',
  genre: 'Rock',
  type: 'Explicit'
}, {
  name: 'RockSong1',
  genre: 'Rock',
  type: 'Clean'
}, {
  name: 'RAPSong1',
  genre: 'Rap',
  type: 'Clean'
}, {
  name: 'RAPSong2',
  genre: 'Rap',
  type: 'Explcit'
}])