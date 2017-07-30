(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.itemName =  ShoppingListCheckOffService.tobuyItems();
    tobuy.boughtitems=function(itemname,itemquantity,itemindex){
        ShoppingListCheckOffService.boughtitems(itemname,itemquantity,itemindex);
        
    }
//  itemAdder.itemQuantity = "";
//
//  itemAdder.addItem = function () {
//    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
//  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtitems = this;

  boughtitems.items = ShoppingListCheckOffService.boughtItems();

//  showList.removeItem = function (itemIndex) {
//    ShoppingListService.removeItem(itemIndex);
//  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuy = [{ name: "cookies", quantity: 110 },{ name: "apples", quantity: 160 },{ name: "oranges", quantity: 104 },{ name: "iphones", quantity: 16 },{ name: "potatoes", quantity: 220 }];
  var bought = [];

  service.boughtitems = function (itemName, quantity,itemIdex) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    bought.push(item);
    tobuy.splice(itemIdex, 1)
  };

  service.removeItem = function (itemIdex) {
    tobuy.splice(itemIdex, 1)
      
  };

  service.tobuyItems = function () {
    return tobuy;
  };
     service.boughtItems = function () {
    return bought;
  };
}

})();
