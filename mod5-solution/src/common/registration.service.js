(function () {
"use strict";

angular.module('common')
.service('RegistrationService',RegistrationService);


RegistrationService.$inject = ['$http', 'ApiPath'];
function RegistrationService($http, ApiPath) {
var service = this;
var status=false;
var registered={}
service.register=function(user,data){
      registered={
                    email:user.email,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    menunumber:user.menunumber,
                    phone:user.phone,
                    data:data
                    };
status=true;
     console.log(registered);
    
   
}

service.getuser=function(){
    
    
    return registered;
}
service.availablestatus=function(){
    
    return status;
    
}
}



})();
