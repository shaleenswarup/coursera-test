(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

    
RegistrationController.$inject = ['MenuService','RegistrationService'];
function RegistrationController(MenuService,RegistrationService) {
  var reg = this;
     reg.menuitemnotfound=false;

  reg.submit = function (short_name) {
    reg.completed = true;
     
    console.log(reg.user.menunumber);
            MenuService.getMenuItem(short_name).then(function(data){
            console.log(data);
            reg.infosaved=true;
            RegistrationService.register(reg.user,data)
       
   }).catch(function(error) {
        console.log(error);
        reg.menuitemnotfound=true;
        reg.infosaved=false;
    });
  };
}

})();
