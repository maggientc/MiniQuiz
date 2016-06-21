(function() {
    'use strict';
    angular
        .module('miniquiz')
        .factory('ProductDataService', ProductDataService);

    function ProductDataService() {
        var data = [{
                name: '韭菜',
                value: 1,
                image: 'chive.jpg',
                category: 'vegetables'
            },
            {
                name: '小芥菜',
                value: 2,
                image: 'sgaichoy.jpg',
                category: 'vegetables'
            },
            {
                name: '蓎蒿',
                value: 3,
                image: 'chunho.jpg',
                category: 'vegetables'
            },
            {
                name: '芥蘭',
                value: 4,
                image: 'gailan.jpg',
                category: 'vegetables'
            },
            {
                name: '潺菜',
                value: 5,
                image: 'sunchoy.jpg',
                category: 'vegetables'
            },
            {
                name: '雪裡紅',
                value: 6,
                image: 'sheilihon.jpg',
                category: 'vegetables'
            },
            {
                name: '大芥菜',
                value: 7,
                image: 'lgaichoy.jpg',
                category: 'vegetables'
            },
            {
                name: '豆苗',
                value: 8,
                image: 'snowpealeaf.jpg',
                category: 'vegetables'
            },
            {
                name: '白骨空心菜',
                value: 9,
                image: 'onchoywhite.jpg',
                category: 'vegetables'
            },
            {
                name: '紹菜',
                value: 10,
                image: 'napashort.jpg',
                category: 'bok-choy'
            },
            {
                name: '長紹菜',
                value: 11,
                image: 'longnapasuichoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '油菜',
                value: 12,
                image: 'youchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '奶油白菜',
                value: 13,
                image: 'bokchoyshort.jpg',
                category: 'bok-choy'
            },
            {
                name: '大白菜',
                value: 14,
                image: 'bokchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '台灣白菜',
                value: 15,
                image: 'twbokchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '上海白菜',
                value: 16,
                image: 'shoanghaibokchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '上海白菜苗',
                value: 17,
                image: 'shanghaibokchoysprout.jpg',
                category: 'bok-choy'
            },
            {
                name: '奶油白菜苗',
                value: 18,
                image: 'bokchoysrpout.jpg',
                category: 'bok-choy'
            },
            {
                name: '高麗菜',
                value: 19,
                image: 'kolecabbage.jpg',
                category: 'cabbage'
            },
            {
                name: '椰菜花',
                value: 20,
                image: 'cauliflower.jpg',
                category: 'cabbage'
            },
            {
                name: '椰菜',
                value: 21,
                image: 'cabbage.jpg',
                category: 'cabbage'
            },
            {
                name: '香麥菜',
                value: 22,
                image: 'chineselettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '生菜',
                value: 23,
                image: 'cellolettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '綠葉生菜',
                value: 24,
                image: 'greenleaflettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '羅曼生菜',
                value: 25,
                image: 'romainelettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '大蕃茄',
                value: 26,
                image: 'ltomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '羅馬蕃茄',
                value: 27,
                image: 'romatomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '溫室蕃茄',
                value: 28,
                image: 'hothousetomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '帶莖蕃茄',
                value: 29,
                image: 'vinetomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '去皮大芋頭',
                value: 30,
                image: 'peeledlargetaro.jpg',
                category: 'taro'
            },
            {
                name: '大芋頭',
                value: 31,
                image: 'ltaro.jpg',
                category: 'taro'
            },
            {
                name: '小芋頭',
                value: 32,
                image: 'staro.jpg',
                category: 'taro'
            }
        ];

        return {
            data: data
        };
    }
})();
