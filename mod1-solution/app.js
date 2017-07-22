(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', lunchchecker);
lunchchecker.$inject = ['$scope'];
    function lunchchecker($scope){
        
        $scope.items=" ";
        $scope.noofitems=0;
        $scope.countitems=function(){
                $scope.items.split(/\s*,\s*/).forEach(function(mystring,index,array) {
                   
                    console.log(index);
                    console.log(array.length);
                    if(index===array.length-1){
                        $scope.noofitems=array.length; 
                         console.log($scope.items);
                    }
             
                })
           
            if($scope.items==" "||$scope.items==""){
                 $scope.mood="Please enter data first";
                $scope.messageColor="red"
            }
            else{
            if($scope.noofitems<=3){
                $scope.mood="Enjoy!";
                $scope.messageColor="green"
            }
            else{
                $scope.mood="Too much!";
                 $scope.messageColor="green"
                 }
            }
            
                }
        
    
    }
})();
