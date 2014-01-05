'use strict';

angular.module('liveIslam2014')
  .controller('HomeCtrl', function ($scope, $rootElement, $http, $location) {

    console.log("HomeCtrl")
/*
        var currentTextID = 0;

          HomeService.get()
            .then(function(homeTexts){
                console.log(homeTexts)
                $scope.homeTexts = angular.fromJson(homeTexts);
                changeText(0);
            })

        var myTexts = ["Welcome to our agency website. This is the home text. Welcome to our agency website. This is the home text.Welcome to our agency website. This is the home text.",
        "This is the digital Department. This is the digital Department. This is the digital Department. This is the digital Department. This is the digital Department. This is the digital Department.",
          "This is the Print Department. This is the Print Department. This is the Print Department. This is the Print Department. This is the Print Department. This is the Print Department.",
           "This is the CGI Department. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.",
       		"This is the QA Department. This is the QA Department. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.",
        ]
        var sectWidth = ($rootElement.find('#home-digital')).width();
        var imageWidth = sectWidth - 150;

        $scope.mobback = "images/home/digital_home.jpg";

        
        function changeText(id){
            console.log("currentTextID",currentTextID)
        	if(id!=currentTextID || id==0){
        		TweenLite.to($rootElement.find('#home-text-Container'), 0, { y:-20, alpha:0});
				TweenLite.to($rootElement.find('#home-text-Container'), 0.5, { y:0, alpha:1});
				$scope.centerText  = $scope.homeTexts[id].description;
				currentTextID = id;
				
			}
        }

        $scope.mobText= function(id){
            changeText(id);
            if(id==0)
             $scope.mobback = "images/home/digital_home.jpg";
            if(id==1)
             $scope.mobback = "images/home/digital_print.jpg";
            if(id==2)
             $scope.mobback = "images/home/digital_cgi.jpg";
            if(id==3)
             $scope.mobback = "images/home/digital_qa.jpg";
        }

		$scope.expandDigital = function (){
				changeText(1);
            	TweenLite.to($rootElement.find('#digitalT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#digitalI'), 0.5, { width:imageWidth});
        }

        $scope.expandPrint = function (){
        		changeText(2);
            	TweenLite.to($rootElement.find('#printT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#printI'), 0.5, { width:imageWidth});
        }

        $scope.expandCGI = function (){
        		changeText(3);
            	TweenLite.to($rootElement.find('#cgiT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#cgiI'), 0.5, { width:imageWidth});
        }
         $scope.expandQA = function (){
         		changeText(4);
            	TweenLite.to($rootElement.find('#qaT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#qaI'), 0.5, { width:imageWidth});
        }

        $scope.contractDigital = function (){
        		changeText(0);
            	TweenLite.to($rootElement.find('#digitalT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#digitalI'), 0.5, { width:0,ease:Quart.easeOut});
        }
        $scope.contractPrint = function (){
        		changeText(0);
            	TweenLite.to($rootElement.find('#printT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#printI'), 0.5, { width:0,ease:Quart.easeOut});
        }
        $scope.contractCGI = function (){
        		changeText(0);
            	TweenLite.to($rootElement.find('#cgiT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#cgiI'), 0.5, { width:0,ease:Quart.easeOut});
        }
        $scope.contractQA = function (){
        		changeText(0);
            	TweenLite.to($rootElement.find('#qaT'), 0.5, { x:0,ease:Quart.easeOut});
            	TweenLite.to($rootElement.find('#qaI'), 0.5, { width:0,ease:Quart.easeOut});
        }

        */

  });
