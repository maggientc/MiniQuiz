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
        list.displayNumber = displayNumber;

        list.category = ProductService.getAllCategory();
        list.category.unshift('all');
        list.selectedCategory = ['all'];
        list.categoryUpdate = categoryUpdate;

        init();

        function init(){
            categoryUpdate();
        }

        function displayNumber(){
            list.showNumber = !list.showNumber;
            list.showNumberLabel = list.showNumber? 'Hide Nubmer':'Show Nubmer';
        }

        function categoryUpdate(){
            list.data = ProductService.getByCategory(list.selectedCategory);
        }
    }
})();