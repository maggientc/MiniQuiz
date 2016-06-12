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
        list.selectedCategory = 'all';
        list.selectCategory = selectCategory;

        init();

        function init(){
            selectCategory();
        }

        function displayNumber(){
            list.showNumber = !list.showNumber;
            list.showNumberLabel = list.showNumber? 'Hide Nubmer':'Show Nubmer';
        }

        function selectCategory(){
            list.data = ProductService.getByCategory(list.selectedCategory);
        }
    }
})();