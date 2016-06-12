(function() {
    'use strict';
    angular
        .module('miniquiz')
        .controller('ListController', ListController);

    ListController.$inject = ['$log', 'ProductService'];

    function ListController($log, ProductService) {
        var list = this;

        list.imgUrl = ProductService.imgUrl;
        list.data = ProductService.getAll();
    }
})();