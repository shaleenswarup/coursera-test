(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
  var categories = this;
  categories.items = items.data;
}

})();
