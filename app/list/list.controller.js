(function() {
    'use strict';
    angular
        .module('miniquiz')
        .controller('ListController', ListController);

    ListController.$inject = ['$log', 'ProductService'];

    function ListController($log, ProductService) {
        var list = this;

        list.showNumber = true;
        list.showNumberLabel = 'Hide Nubmer';
        list.imgUrl = ProductService.imgUrl;
        list.data = ProductService.getAll();
        list.displayNumber = displayNumber;

        function displayNumber(){
            list.showNumber = !list.showNumber;
            list.showNumberLabel = list.showNumber? 'Hide Nubmer':'Show Nubmer';
        }
    }
})();