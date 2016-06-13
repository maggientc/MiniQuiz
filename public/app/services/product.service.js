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
            getByCategory: getByCategory,
            getRandomQuizList: getRandomQuizList
        };

        function getAll() {
            return data;
        }

        function getAllCategory() {
            var categoryArray = [];
            data.forEach(function(item) {
                if (!_.contains(categoryArray, item.category)) {
                    categoryArray.push(item.category);
                }
            });
            return categoryArray;
        }

        function getByCategory(category) {
            if (_.contains(category, 'all')) {
                return getAll();
            }
            return data.filter(product => _.contains(category, product.category));
        }

        function getRandomQuizList(n) {
            return _.sample(data, n);
        }
    }
})();
