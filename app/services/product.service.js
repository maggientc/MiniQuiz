(function() {
    'use strict';
    angular
        .module('miniquiz')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['ProductDataService'];

    function ProductService(products) {
        return {
            imgUrl: 'assets/img/',
            getAll: getAll
        };

        function getAll() {
            return products.data;
        }
    }
})();
