
angular.module('liveIslam2014')
    .controller('MainCtrl', function($scope, $location,$rootElement){

        $scope.$on('changeSection', function(event,data) {
          //console.log("Main",data)
          	switch(data)
			{
			case 0:
			  $scope.backgroundStyle = 'bg-home';
			  break;
			case 1:
			  $scope.backgroundStyle = 'bg-projects';
			 	break;
			case 2:
			  $scope.backgroundStyle = 'bg-technos';
			 	break;
			case 3:
			  $scope.backgroundStyle = 'bg-clients';
			 	break;
			case 4:
			  $scope.backgroundStyle = 'bg-about';
			 	break;
			default:
			  $scope.backgroundStyle = 'bg-home';
			}
            
        });

        $scope.fromClass = 'from-right';

		$rootElement.find('.content').height($(window).height() - 117);
        
});