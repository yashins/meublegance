app.directive('ngOnBlur', function($parse){
        return function(scope, elm, attrs){       
                var onBlurFunction = $parse(attrs['ngOnBlur']);
                elm.bind("blur", function(event) {
                    scope.$apply(function() {
                        onBlurFunction(scope, { $event: event });
                    })});
        };
    });
