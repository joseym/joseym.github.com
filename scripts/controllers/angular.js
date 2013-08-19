'use strict';

angular.module('tulsaWebDevsApp')
.controller('AngularCtrl', function ($scope) {
  
  $scope.subject = "World";

  $.extend($scope, {
  	hilite: false,
  	greeting: "Hello",
  	punctuation: "!",
  	highlight: function(){
  		$scope.hilite = !$scope.hilite;
  	},
  	show: {
  		toggle: function(type){
  			if(type !== 'button') $scope.show.button = false;
  			if(type !== 'checkbox') $scope.show.checkbox = false;
  			if(type !== 'hilite') $scope.show.hilite = false;
  			$scope.show[type] = !$scope.show[type];
  		},
  		button: false,
  		checkbox: false,
  		hilite: false
  	}

  });
  
});
