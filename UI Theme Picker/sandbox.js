angular.module('MyApp', [])

   // .value('MY_FOLDERS', [{
   //   name: 'Personal',
   //   subFolders: []
   // }, {
   //   name: 'Work',
   //   subFolders: []
   // }, {
   //   name: 'Trip',
   //   subFolders: []
   // }])

   .factory('Folder', function() {

        function Folder(name) {
            this.name = name;
            this.subFolders = [{name: 'hello'}];
        };

        Folder.prototype.addSubfolder = function(subName){
            this.subFolders.push({name: subName});
        };

        return Folder;
   })

  .controller('MyController', function (Folder) {
    var self = this;

    self.folderList = [];

    self.folderList.push(new Folder('Personal'));
    self.folderList.push(new Folder('Work'));
    self.folderList.push(new Folder('Trip'));

    self.addFolders = function(fName) {
        if(self.folderSelection >= 0 && self.fileName){
            this.folderList[self.folderSelection].addSubfolder(self.fileName);
            self.fileName = '';
        }
    };


    self.defaultValue = {
        class: 'panel panel-primary',
        class2: 'panel panel-primary2',
        class3: 'panel panel-primary3'
    };

    self.successValue = {
        class: 'panel panel-success',
        class2: 'panel panel-success2',
        class3: 'panel panel-success3'
    };

    self.infoValue = {
        class: 'panel panel-info',
        class2: 'panel panel-info2',
        class3: 'panel panel-info3'
    };

    self.warningValue = {
        class: 'panel panel-warning',
        class2: 'panel panel-warning2',
        class3: 'panel panel-warning3'
    };

    self.dangerValue = {
        class: 'panel panel-danger',
        class2: 'panel panel-danger2',
        class3: 'panel panel-danger3'
    };
    
  
});