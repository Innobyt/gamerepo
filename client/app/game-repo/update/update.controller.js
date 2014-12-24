(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('UpdateCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$filter', 'ngTableParams', 'gameRepo', UpdateCtrl]);

	// UpdateCtrl requires 2 actions of CRUD, 
	// 'R' as in retrieve, 'U' as in update
	function UpdateCtrl($rootScope, $scope, $state, $stateParams, $filter, ngTableParams, gameRepo) {

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.$stateParams.gamename = $stateParams.gamename;
		console.log($stateParams.gamename);
		
		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};			
	
		// prepare to add update
		$scope.add = function(gamename) {
			if ($stateParams.gamename == gamename) {
				var add_gamerepo = gameRepo.get({ gamename: gamename }, function() {
					$scope.add_gamerepo = add_gamerepo;
				}); 
			};
		};			
		
		// prepare to update
		$scope.update = function() {
			var update = gameRepo.update($scope.add_gamerepo, function() {
				//$scope.edit($scope.add_gamerepo._gamename);			
				$scope.formData.$save($scope.add_gamerepo.gamename);
				//$scope.submit();
			});
		};
		
		// post, gameRepo creation ('C' in Crud)
		$scope.submit = function() {
			$scope.formData.$save(function(){ $scope.initialize(); });
		 };		

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameRepo();
		};

		$scope.initialize();
	};
})();