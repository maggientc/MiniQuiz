(function() {
    'use strict';
    angular
        .module('miniquiz')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['ProductDataService'];

    function ProductService(products) {
        var data = products.data;
        return {
            imgUrl: 'assets/img/',
            getAll: getAll,
            getAllCategory: getAllCategory,
            getByCategory: getByCategory
        };

        function getAll() {
            return data;
        }

        function getAllCategory() {
            var categoryArray = [];
            data.forEach(function(item) {
                if (categoryArray.indexOf(item.category) == -1) {
                    categoryArray.push(item.category);
                }
            });
            return categoryArray;
        }

        function getByCategory(category) {
            if (category === 'all') {
                return getAll();

            }
            return data.filter(product => product.category == category);
        }
    }
})();
