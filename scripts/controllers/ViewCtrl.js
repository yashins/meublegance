angular.module('liveIslam2014')
	.controller('ViewCtrl', function($scope, $location){
			

			$scope.$on('changeSection', function(event,data) {
          		
          		console.log("ViewCtrl",data);

	          	switch(data)
				{
				case 0:
				  $scope.fromClass = 'from-bottom';
				  break;
				case 1:
				  $scope.fromClass= 'from-top';
				 	break;
				default:
				  $scope.fromClass = 'from-bottom';
				}

				
            
        	});
	});