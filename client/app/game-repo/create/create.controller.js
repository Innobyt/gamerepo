(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('CreateCtrl', ['$scope', 'gameRepo', CreateCtrl]);

	// CreateCtrl requires 1 actions of CRUD, C as in create
	function CreateCtrl($scope, gameRepo) {

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.formData = new gameRepo();
		};

		// post, gameRepo creation ('C' in Crud)
		$scope.submit = function() {
			$scope.formData.$save(function(){ $scope.initialize(); });
		 };

		$scope.initialize();
	};
})();