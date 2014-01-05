
angular.module('liveIslam2014')
	.controller('MenuCtrl', function($scope, $location){
/*
		var lookTypesPromise = LookTypeService.all();

		lookTypesPromise.then(function(lookTypes){
			$scope.lookTypes = lookTypes;
		});
*/
		var current = 0;
		var direction = "down"
		$scope.isActive = function(path){

			if(path=='/')
			 return $location() == path;
			return $location.path().indexOf(path)>=0;
		};

		$scope.currentID = function(id){

			if(id>current)
				direction = 0;
			else
				direction = 1;

			current = id;
			$scope.changePage(direction);
		}

		$scope.changePage = function(param){
			console.log("changePage",param)
            $scope.$emit('changeSection',param);
        }
	});