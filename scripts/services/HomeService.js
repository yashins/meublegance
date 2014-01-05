'use strict';
angular.module('liveIslam2014')
    .factory('HomeService', function($http, $q){
        var api = {
            get : function (){
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: '../www/webservice/departments/'
                })
                    .success(function(data){
                        if(data){
                            deferred.resolve(data);
                        }

                        else deferred.reject('NO DATA');
                    })
                    .error(function(errorMsg){
                        deferred.reject(errorMsg);
                    });

                return deferred.promise;
                },

            getProj : function (){
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: '../www/webservice/projects/'
                })
                    .success(function(data){
                        if(data){
                            deferred.resolve(data);
                        }

                        else deferred.reject('NO DATA');
                    })
                    .error(function(errorMsg){
                        deferred.reject(errorMsg);
                    });

                return deferred.promise;
            }
        }
        return api;
    }

);