(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

//  var promise = MenuSearchService.getMatchedMenuItems();
    menu.items=" ";
    menu.noitem=false;
     menu.noheadings=true;
    menu.found=function(Name){
        if(Name===" "){
            
            menu.noitem=true;
            menu.noheadings=true;
        }
        else{
            MenuSearchService.getMatchedMenuItems(Name).then(function(data){
            menu.founditems=data;
                 menu.noitem=false;
                 menu.noheadings=false;
            if(menu.founditems.length===0) {
                menu.noitem=true;
                menu.noheadings=true;
            }
       
   });
        }
   
        console.log( menu.founditems);
    }
    menu.onRemove=function(index){
        menu.founditems.splice(index, 1);
        
    }
//    menu.founditems=data;= MenuSearchService.getMatchedMenuItems();

//  menu.logMenuItems = function (shortName) {
//    var promise = MenuSearchService.getMatchedMenuItems();
//
//    promise.then(function (response) {
//      console.log(response.data);
//    })
//    .catch(function (error) {
//      console.log(error);
//    })
//  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {

var service=this;
  service.getMatchedMenuItems = function (Name) {
   return $http({
      method: "GET",
      url: (ApiBasePath+"/menu_items.json")
    }).then(function (response) {

       var itemname=Name.toLowerCase();
          var founditems=[];
       for(var i=0;i<response.data.menu_items.length;i++){
          
         
         
         if (response.data.menu_items[i].description.toLowerCase().indexOf(itemname) !== -1) {
           founditems.push(response.data.menu_items[i])
            console.log(response.data.menu_items[i]);
             console.log(founditems[i]);
      }
       
       }
      
        return founditems;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  
  };


//
//  service.getMenuForCategory = function (shortName) {
//    var response = $http({
//      method: "GET",
//      url: (ApiBasePath + "/menu_items.json"),
//      params: {
//        category: shortName
//      }
//    });
//
//    return response;
//  };

}
    

function foundItems(){
    var ddo={
        scope: {
      found: '<',
     
    }
    }
    return ddo;
}

})();
