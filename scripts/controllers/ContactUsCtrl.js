angular.module('liveIslam2014')
    .controller('ContactUsCtrl', function ($scope) {



/*
        console.log("Contact Us controller 04.09.2013");
        var form = document.getElementById('frm');

        function highlight(textfield, erreur)
        {
            if(erreur)
            {
                textfield.style.backgroundColor = "#FFFF00";
                textfield.focus();
                textfield.value="";
            }
            else
            {
                textfield.style.backgroundColor = "";
                form.myNotice.value="";
            }
        }

        $scope.validateName = function(){
            var myName;
            myName = $scope.nameValid;

            var regex = /^[a-zA-ZàáâäãåąćęèéêëìíîïłńòóôöõøùúûüÿýżźñçčšžÀÁÂÄÃÅĄĆĘÈÉÊËÌÍÎÏŁŃÒÓÔÖÕØÙÚÛÜŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

            if(myName == null || myName =="")
            {
//                alert("Please input your Name");
                form.myNotice.value="Please input your Name";
                highlight(form.myName, true);
                return false;
            }
            else if(!regex.test(myName))
            {
                form.myNotice.value="Invalid Name";
                highlight(form.myName, true);
                return false;
            }
            else
            {
                highlight(form.myName, false);
                return true;
            }
        }


        $scope.validateSurname = function(){
            var mySurname;
            mySurname = $scope.surnameValid;

            var regex = /^[a-zA-ZàáâäãåąćęèéêëìíîïłńòóôöõøùúûüÿýżźñçčšžÀÁÂÄÃÅĄĆĘÈÉÊËÌÍÎÏŁŃÒÓÔÖÕØÙÚÛÜŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

            if(mySurname == null || mySurname =="")
            {
                form.myNotice.value="Please input your Surname";
                highlight(form.mySurname, true);
                return false;
            }
            else if(!regex.test(mySurname))
            {
                form.myNotice.value="Invalid Surname";
                highlight(form.mySurname, true);
                return false;
            }
            else
            {
                highlight(form.mySurname, false);
                return true;
            }
        }


        $scope.validateAddress = function(){
            var myAddress;
            myAddress = $scope.addressValid;

            var regex = /^[a-zA-Z0-9\s,'-]*$/;

            if(myAddress == null || myAddress =="")
            {
                form.myNotice.value="Please input your Address";
                highlight(form.myAddress, true);
                return false;
            }
            else if(!regex.test(myAddress))
            {
                form.myNotice.value="Invalid Address";
                highlight(form.myAddress, true);
                return false;
            }
            else
            {
                highlight(form.myAddress, false);
                return true;
            }
        }

        $scope.validateEmail = function(){
            var myEmail;
            myEmail = $scope.emailValid;

            var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

            if(myEmail==null ||  myEmail =="")
            {
                form.myNotice.value="Please input your Email address";
                highlight(form.myEmail, true);
                return false;
            }
            else if(!regex.test(myEmail))
            {
                form.myNotice.value="Invalid Email";
                highlight(form.myEmail, true);
                return false;
            }
            else
            {
                highlight(form.myEmail, false);
                return true;
            }
        }

        $scope.validateAge = function(){
            var myAge;
            myAge = $scope.ageValid;

            var regex = /^1[0-9][0-9]$|^[1-9][0-9]$|^[0-9]$/;

            if(myAge==null ||  myAge =="")
            {
                form.myNotice.value="Please input your Age";
                highlight(form.myAge, true);
                return false;
            }
            else if(!regex.test(myAge))
            {
                form.myNotice.value="Invalid Age";
                highlight(form.myAge, true);
                return false;
            }
            else
            {
                highlight(form.myAge, false);
                return true;
            }
        }

        $scope.validatePhone = function(){
            var myPhone;
            myPhone = $scope.phoneValid;

//            var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//            var regex = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
//            var regex = /^\[0-9 \-\. ]+$/;
            var regex = /\d+/;

            if(myPhone==null ||  myPhone =="")
            {
                form.myNotice.value="Please input your Phone Number";
                highlight(form.myPhone, true);
                return false;
            }
            else if(!regex.test(myPhone))
            {
                form.myNotice.value="Invalid Phone Number";
                highlight(form.myPhone, true);
                return false;
            }
            else
            {
                highlight(form.myPhone, false);
                return true;
            }
        }

        $scope.submitForm = function(){

//            var myData=new Array($scope.nameValid,$scope.surnameValid,$scope.addressValid,$scope.countryValid, $scope.emailValid,$scope.ageValid,$scope.phoneValid,$scope.queryValid);
            var myData =   {name : $scope.nameValid,
                            surname: $scope.surnameValid,
                            address: $scope.addressValid,
                            country:$scope.countryValid,
                            email: $scope.emailValid,
                            age:$scope.ageValid,
                            phone: $scope.phoneValid,
                            query: $scope.queryValid};

            ContactService.serverPostRequest(myData)

                .then(function(returnValue){
                    //var myData=new Array($scope.nameValid,$scope.surnameValid,$scope.addressValid,$scope.countryValid, $scope.emailValid,$scope.ageValid,$scope.phoneValid,$scope.queryValid);
                    console.log(returnValue);
                })
        }

        */

    });
