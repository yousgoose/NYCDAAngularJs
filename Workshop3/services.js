angular.module('MyApp')

.service('CONVERSIONFUNCS', function() {
	var self = this;

	self.converttoJson = function(arrayofsongs, exp) {
	var outputarray = [];

	for (var i = 0; i < arrayofsongs.length; i++) {
		if(arrayofsongs[i].checked)
			outputarray.push({name: arrayofsongs[i].name, type: exp});
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
}, {
	name: 'All'
}])

.value('MY_SONGS', [{
	name: 'PopSong1',
	genre: 'Pop'
}, {
	name: 'PopSong2',
	genre: 'Pop'
}, {
	name: 'RockSong2',
	genre: 'Rock'
}, {
	name: 'RockSong1',
	genre: 'Rock'
}, {
	name: 'RAPSong1',
	genre: 'Rap'
}, {
	name: 'RAPSong2',
	genre: 'Rap'
}])
