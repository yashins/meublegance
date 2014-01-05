/** ==========================================================================
 StateProvider Controls the site url's and routes
 ========================================================================== **/


 angular.module('liveIslam2014')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.tpl.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.tpl.html',
        controller: 'AboutCtrl'
      })
      .when('/speakers', {
        templateUrl: 'views/speakers.tpl.html',
        controller: 'SpeakersCtrl'
      })
      .when('/activities', {
        templateUrl: 'views/activities.tpl.html',
        controller: 'ActivitiesCtrl'
      })
      .when('/schedules', {
        templateUrl: 'views/schedules.tpl.html',
        controller: 'SchedulesCtrl'
      })
      .when('/tickets', {
        templateUrl: 'views/tickets.tpl.html',
        controller: 'TicketsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.tpl.html',
        controller: 'LoginCtrl'
      })
      .when('/volunteer', {
        templateUrl: 'views/volunteer.tpl.html',
        controller: 'VolunteerCtrl'
      })
       .when('/contact', {
        templateUrl: 'views/contactus.tpl.html',
        controller: 'ContactUsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

})

/*
angular.module('liveIslam2014')


    .config(function ($stateProvider, $routeProvider, $urlRouterProvider) {

  $stateProvider
  .state('',
        {
            url:'',
             views:{
              'container@':{
                  templateUrl:'views/home.tpl.html',
                  controller:'HomeCtrl'
              }
          
           
        }) //main
		
  .state('home', {
        url: "/",
          views:{
              'container@':{
                  templateUrl:'views/home.tpl.html',
                  controller:'HomeCtrl'
              }
          }
    })
	
   .state('about', {
          url: "/about",
          views:{
              'container@':{
                  templateUrl:'views/about.tpl.html',
                  controller:'AboutCtrl'

              }
          }

    })
    .state('speakers', {
          url: "/speakers",
          views:{
              'container@':{
                  templateUrl:'views/speakers.tpl.html',
                  controller:'SpeakersCtrl'

              }
          }

    })
     .state('activities', {
          url: "/activities",
          views:{
              'container@':{
                  templateUrl:'views/activities.tpl.html',
                  controller:'ActivitiesCtrl'

              }
          }

    })
      .state('tickets', {
          url: "/tickets",
          views:{
              'container@':{
                  templateUrl:'views/tickets.tpl.html',
                  controller:'TicketsCtrl'

              }
          }

    })
     .state('schedules', {
          url: "/schedules",
          views:{
              'container@':{
                  templateUrl:'views/schedules.tpl.html',
                  controller:'SchedulesCtrl'

              }
          }

    })

});

*/