(function () {

angular.module('public')
.controller('MyinfoController', MyinfoController);

    
 MyinfoController.$inject = ['MenuService','RegistrationService','ApiPath'];
function MyinfoController(MenuService,RegistrationService,ApiPath) {
  var info = this;
    info.user=RegistrationService.getuser();
    info.apipath=ApiPath;
    info.available=RegistrationService.availablestatus();
     
}

})();
