(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'item'];
function ItemDetailController($stateParams, item) {
  var itemDetail = this;
 itemDetail.itemsforcategory=item.data.menu_items;
  
}

})();
//description
//:
//"chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra"
//id
//:
//1069
//large_portion_name
//:
//null
//name
//:
//"Orange Chicken"
//price_large
//:
//9.75
//price_small
//:
//null
//short_name
//:
//"L1"
//small_portion_name
//:
