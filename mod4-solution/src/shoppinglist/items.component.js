(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/shoppinglist/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
