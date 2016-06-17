(function() {
    'use strict';
    angular
        .module('miniquiz')
        .factory('ProductDataService', ProductDataService);

    function ProductDataService() {
        var data = [{
                name: '韭菜',
                value: 34,
                image: 'chive.jpg',
                category: 'vegetables'
            },
            {
                name: '小芥菜',
                value: 66,
                image: 'sgaichoy.jpg',
                category: 'vegetables'
            },
            {
                name: '蓎蒿',
                value: 86,
                image: 'chunho.jpg',
                category: 'vegetables'
            },
            {
                name: '芥蘭',
                value: 96,
                image: 'gailan.jpg',
                category: 'vegetables'
            },
            {
                name: '潺菜',
                value: 99,
                image: 'sunchoy.jpg',
                category: 'vegetables'
            },
            {
                name: '雪裡紅',
                value: 113,
                image: 'sheilihon.jpg',
                category: 'vegetables'
            },
            {
                name: '大芥菜',
                value: 132,
                image: 'lgaichoy.jpg',
                category: 'vegetables'
            },
            {
                name: '豆苗',
                value: 167,
                image: 'snowpealeaf.jpg',
                category: 'vegetables'
            },
            {
                name: '白骨空心菜',
                value: 205,
                image: 'onchoywhite.jpg',
                category: 'vegetables'
            },
            {
                name: '紹菜',
                value: 137,
                image: 'napashort.jpg',
                category: 'bok-choy'
            },
            {
                name: '長紹菜',
                value: 138,
                image: 'longnapasuichoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '油菜',
                value: 213,
                image: 'youchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '奶油白菜',
                value: 407,
                image: 'bokchoyshort.jpg',
                category: 'bok-choy'
            },
            {
                name: '大白菜',
                value: 408,
                image: 'bokchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '台灣白菜',
                value: 409,
                image: 'twbokchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '上海白菜',
                value: 410,
                image: 'shoanghaibokchoy.jpg',
                category: 'bok-choy'
            },
            {
                name: '上海白菜苗',
                value: 423,
                image: 'shanghaibokchoysprout.jpg',
                category: 'bok-choy'
            },
            {
                name: '奶油白菜苗',
                value: 475,
                image: 'bokchoysrpout.jpg',
                category: 'bok-choy'
            },
            {
                name: '高麗菜',
                value: 27,
                image: 'kolecabbage.jpg',
                category: 'cabbage'
            },
            {
                name: '椰菜花',
                value: 28,
                image: 'cauliflower.jpg',
                category: 'cabbage'
            },
            {
                name: '椰菜',
                value: 29,
                image: 'cabbage.jpg',
                category: 'cabbage'
            },
            {
                name: '香麥菜',
                value: 101,
                image: 'chineselettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '生菜',
                value: 102,
                image: 'cellolettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '綠葉生菜',
                value: 104,
                image: 'greenleaflettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '羅曼生菜',
                value: 106,
                image: 'romainelettuce.jpg',
                category: 'lettuce'
            },
            {
                name: '大蕃茄',
                value: 196,
                image: 'ltomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '羅馬蕃茄',
                value: 199,
                image: 'romatomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '溫室蕃茄',
                value: 203,
                image: 'hothousetomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '帶莖蕃茄',
                value: 445,
                image: 'vinetomatoes.jpg',
                category: 'tomato'
            },
            {
                name: '去皮大芋頭',
                value: 191,
                image: 'peeledlargetaro.jpg',
                category: 'taro'
            },
            {
                name: '大芋頭',
                value: 192,
                image: 'ltaro.jpg',
                category: 'taro'
            },
            {
                name: '小芋頭',
                value: 193,
                image: 'staro.jpg',
                category: 'taro'
            },
            {
                name: '紫茄',
                value: 73,
                image: 'eggplant.jpg',
                category: 'eggplant'
            },
            {
                name: '中茄',
                value: 74,
                image: 'chineseeggplant.jpg',
                category: 'eggplant'
            },
            {
                name: '蘑菇',
                value: 127,
                image: 'mushroommed.jpg',
                category: 'mushroom'
            },
            {
                name: '鮮花菇',
                value: 130,
                image: 'shitake.jpg',
                category: 'mushroom'
            },
            {
                name: '杏鮑菇皇',
                value: 134,
                image: 'kingoystermushroom.jpg',
                category: 'mushroom'
            },
            {
                name: '芫茜',
                value: 45,
                image: 'cilanntro.jpg',
                category: 'greens'
            },
            {
                name: '波菜',
                value: 180,
                image: 'spinach.jpg',
                category: 'greens'
            },
            {
                name: '西洋菜',
                value: 204,
                image: 'watercress.jpg',
                category: 'greens'
            },
            {
                name: '去頭百加利',
                value: 412,
                image: 'crownbroccoli.jpg',
                category: 'greens'
            },
            {
                name: '合掌瓜',
                value: 32,
                image: 'chayote.jpg',
                category: 'squash'
            },
            {
                name: '大青瓜',
                value: 51,
                image: 'cucumber.jpg',
                category: 'squash'
            },
            {
                name: '無子青瓜',
                value: 52,
                image: 'englishcucumber.jpg',
                category: 'squash'
            },
            {
                name: '日本小青瓜',
                value: 53,
                image: 'japanesecucumber.jpg',
                category: 'squash'
            },
            {
                name: '日本南瓜',
                value: 97,
                image: 'kapocha.jpg',
                category: 'squash'
            },
            {
                name: '毛瓜',
                value: 126,
                image: 'moqua.jpg',
                category: 'squash'
            },
            {
                name: '匏瓜',
                value: 141,
                image: 'opo.png',
                category: 'squash'
            },
            {
                name: '菱形絲瓜',
                value: 144,
                image: 'singqua.jpg',
                category: 'squash'
            },
            {
                name: '義大利瓜',
                value: 185,
                image: 'italiansquash.jpg',
                category: 'squash'
            },
            {
                name: '冬瓜',
                value: 210,
                image: 'konquachina.jpg',
                category: 'squash'
            },
            {
                name: '苦瓜',
                value: 416,
                image: 'bittermelon.jpg',
                category: 'squash'
            },
            {
                name: '西葫蘆',
                value: 856,
                image: 'zucchinilocal.jpg',
                category: 'squash'
            },
            {
                name: '紅蘿蔔',
                value: 43,
                image: 'carrot.jpg',
                category: 'radish'
            },
            {
                name: '唐蘿蔔',
                value: 68,
                image: 'chinesewhiteradish.jpg',
                category: 'radish'
            },
            {
                name: '青蘿蔔',
                value: 69,
                image: 'greenradish.jpg',
                category: 'radish'
            },
            {
                name: '白馬鈴薯',
                value: 152,
                image: 'whitepotatoes.jpg',
                category: 'potato'
            },
            {
                name: '馬鈴薯',
                value: 154,
                image: 'potatoes.jpg',
                category: 'potato'
            },
            {
                name: '甜薯',
                value: 156,
                image: 'sweetpotatoes.jpg',
                category: 'potato'
            },
            {
                name: '紅馬鈴薯',
                value: 157,
                image: 'redpotatoes.png',
                category: 'potato'
            },
            {
                name: '番薯',
                value: 216,
                image: 'yam.jpg',
                category: 'potato'
            },
            {
                name: '紫心番薯',
                value: 388,
                image: 'purpleyam.jpg',
                category: 'potato'
            },
            {
                name: '沙葛',
                value: 91,
                image: 'jicama.jpg',
                category: 'roots'
            },
            {
                name: '粉葛',
                value: 215,
                image: 'arrowroot.jpg',
                category: 'roots'
            },
            {
                name: '蒜頭',
                value: 85,
                image: 'garlic.jpg',
                category: 'garlic/onion'
            },
            {
                name: '蒜苔',
                value: 110,
                image: 'garlicsproutleekbud.jpg',
                category: 'garlic/onion'
            },
            {
                name: '青蔥',
                value: 145,
                image: 'greenonion.jpg',
                category: 'garlic/onion'
            },
            {
                name: '紅洋蔥',
                value: 147,
                image: 'redonion.jpg',
                category: 'garlic/onion'
            },
            {
                name: '白洋蔥',
                value: 148,
                image: 'whiteonion.jpg',
                category: 'garlic/onion'
            },
            {
                name: '特大洋蔥',
                value: 153,
                image: 'jumboonion.jpg',
                category: 'garlic/onion'
            },
            {
                name: '青椒',
                value: 163,
                image: 'greenbellpepper.jpg',
                category: 'pepper'
            },
            {
                name: '紅椒',
                value: 164,
                image: 'redbellpepper.jpg',
                category: 'pepper'
            },
            {
                name: '黃椒',
                value: 170,
                image: 'goldbellpepper.jpg',
                category: 'pepper'
            },
            {
                name: '橙椒',
                value: 469,
                image: 'orangebellpepper.jpg',
                category: 'pepper'
            },
            {
                name: '三色椒',
                value: 674,
                image: 'colorbellpepper.jpg',
                category: 'pepper'
            },
            {
                name: '四季豆',
                value: 417,
                image: 'greenbean.jpg',
                category: 'bean/sprout'
            },
            {
                name: '長腳豆',
                value: 418,
                image: 'longbean.jpg',
                category: 'bean/sprout'
            },
            {
                name: '綠豆芽',
                value: 419,
                image: 'beansprout.jpg',
                category: 'bean/sprout'
            },
            {
                name: '甜玉米',
                value: 33,
                image: 'corn.jpg',
                category: 'other(vegi)'
            },
            {
                name: '韭菜花',
                value: 36,
                image: 'chivebud.jpg',
                category: 'other(vegi)'
            },
            {
                name: '栗子',
                value: 44,
                image: 'chesnut.jpg',
                category: 'other(vegi)'
            },
            {
                name: '西芹',
                value: 46,
                image: 'celery.jpg',
                category: 'other(vegi)'
            },
            {
                name: '唐芹',
                value: 47,
                image: 'chinesecelery.jpg',
                category: 'other(vegi)'
            },
            {
                name: '薑',
                value: 82,
                image: 'ginger.jpg',
                category: 'other(vegi)'
            },
            {
                name: '芥蘭頭',
                value: 95,
                image: 'kolhrabi.jpg',
                category: 'other(vegi)'
            },
            {
                name: '蓮藕',
                value: 115,
                image: 'lotusroot.jpg',
                category: 'other(vegi)'
            },
            {
                name: '山藥',
                value: 125,
                image: 'nagaimo.jpg',
                category: 'other(vegi)'
            },
            {
                name: '馬蹄',
                value: 207,
                image: 'waterchestnut.jpg',
                category: 'other(vegi)'
            },
            {
                name: '蘆筍',
                value: 403,
                image: 'asparagus.jpg',
                category: 'other(vegi)'
            },
            {
                name: '香瓜',
                value: 250,
                image: 'cantaloupes.jpg',
                category: 'melon'
            },
            {
                name: '白蜜瓜',
                value: 287,
                image: 'honeydew.jpg',
                category: 'melon'
            },
            {
                name: '無籽西瓜',
                value: 289,
                image: 'seedlesswatermelon.jpg',
                category: 'melon'
            },
            {
                name: '韓國蜜瓜',
                value: 291,
                image: 'koreanmelon.png',
                category: 'melon'
            },
            {
                name: '新彊哈蜜瓜',
                value: 335,
                image: 'xinjiangmelon.jpg',
                category: 'melon'
            },
            {
                name: '迷你無籽西瓜',
                value: 517,
                image: 'miniseedlesswatermelon.jpg',
                category: 'melon'
            },
            {
                name: '大紅蘋果',
                value: 227,
                image: 'reddeliciousapple.jpg',
                category: 'apple'
            },
            {
                name: '小紅蘋果',
                value: 228,
                image: 'sreddeliciousapple.jpg',
                category: 'apple'
            },
            {
                name: '大黃蘋果',
                value: 230,
                image: 'lgoldapple.jpg',
                category: 'apple'
            },
            {
                name: '大綠蘋果',
                value: 231,
                image: 'lgreenapple.jpg',
                category: 'apple'
            },
            {
                name: '小綠蘋果',
                value: 232,
                image: 'sgreenapple.jpg',
                category: 'apple'
            },
            {
                name: '富士蘋果',
                value: 234,
                image: 'fujiapple.jpg',
                category: 'apple'
            },
            {
                name: '小黃蘋果',
                value: 241,
                image: 'sgoldenapple.jpg',
                category: 'apple'
            },
            {
                name: '加美澳蘋果',
                value: 245,
                image: 'cameoapple.jpg',
                category: 'apple'
            },
            {
                name: '紐西蘭蘋果(gala apple)',
                value: 346,
                image: 'galaapple.png',
                category: 'apple'
            },
            {
                name: '新紐西蘭蘋果(braeburn apple)',
                value: 347,
                image: 'braeburnapple.jpg',
                category: 'apple'
            },
            {
                name: '玫瑰紅蘋果',
                value: 350,
                image: 'pacificroseapple.jpg',
                category: 'apple'
            },
            {
                name: '司巴坦蘋果',
                value: 455,
                image: 'spartan.png',
                category: 'apple'
            },
            {
                name: '中國富士',
                value: 625,
                image: 'fujiapplechina.jpg',
                category: 'apple'
            },
            {
                name: '油桃',
                value: 293,
                image: 'nectarine.jpg',
                category: 'peach'
            },
            {
                name: '大油桃',
                value: 294,
                image: 'nectarinelarge.jpg',
                category: 'peach'
            },
            {
                name: '白油桃',
                value: 301,
                image: 'whitenectarine.jpg',
                category: 'peach'
            },
            {
                name: '白玉桃',
                value: 302,
                image: 'whitepeach.jpg',
                category: 'peach'
            },
            {
                name: '大毛桃',
                value: 303,
                image: 'peachlarge.jpg',
                category: 'peach'
            },
            {
                name: '潘桃',
                value: 669,
                image: 'donutpeach.jpg',
                category: 'peach'
            },
            {
                name: '椰青',
                value: 57,
                image: 'youngcoconut.jpg',
                category: 'fruit'
            },
            {
                name: '火龍果',
                value: 186,
                image: 'firedargonfruit.jpg',
                category: 'fruit'
            },
            {
                name: '牛油果',
                value: 236,
                image: 'avocado.jpg',
                category: 'fruit'
            },
            {
                name: '櫻桃',
                value: 251,
                image: 'cherry.jpg',
                category: 'fruit'
            },
            {
                name: '金枕榴槤',
                value: 256,
                image: 'monthongdurian.jpg',
                category: 'fruit'
            },
            {
                name: '奇異果',
                value: 272,
                image: 'kiwi.jpg',
                category: 'fruit'
            },
            {
                name: '富有甜柿',
                value: 309,
                image: 'fuyupersimmon.jpg',
                category: 'fruit'
            },
            {
                name: '石榴',
                value: 314,
                image: 'pomegrante.jpg',
                category: 'fruit'
            },
            {
                name: '棗子',
                value: 374,
                image: 'date.jpg',
                category: 'fruit'
            },
            {
                name: '黃櫻桃',
                value: 384,
                image: 'rainjercherry.jpg',
                category: 'fruit'
            },
            {
                name: '特甜鳳梨',
                value: 386,
                image: 'extrasweetpineapple.jpg',
                category: 'fruit'
            },
            {
                name: '黃金奇異果',
                value: 476,
                image: 'goldenkiwi.jpg',
                category: 'fruit'
            },
            {
                name: '砂糖橘',
                value: 513,
                image: 'honeymandarin.jpg',
                category: 'fruit'
            },
            {
                name: '墨西哥芒果',
                value: 282,
                image: 'mexicomango.jpg',
                category: 'mongo'
            },
            {
                name: '呂宋芒果',
                value: 284,
                image: 'ataulfomango.jpg',
                category: 'mongo'
            },
            {
                name: '芭樂',
                value: 263,
                image: 'guava.jpg',
                category: 'tropical'
            },
            {
                name: '龍眼',
                value: 278,
                image: 'longan.jpg',
                category: 'tropical'
            },
            {
                name: '荔枝',
                value: 279,
                image: 'specialtylychee.jpg',
                category: 'tropical'
            },
            {
                name: '山竹',
                value: 363,
                image: 'mangosteen.jpg',
                category: 'tropical'
            },
            {
                name: '加州甜柑',
                value: 323,
                image: 'kinnowtangerine.jpg',
                category: 'tangerine'
            },
            {
                name: '巴基斯坦蜜柑',
                value: 324,
                image: 'pakistantangerine.jpg',
                category: 'tangerine'
            },
            {
                name: '蜜柑',
                value: 325,
                image: 'honeytangerine.jpg',
                category: 'tangerine'
            },
            {
                name: '台灣大椪柑',
                value: 328,
                image: 'pokanl.jpg',
                category: 'tangerine'
            },
            {
                name: '中國蜜柑',
                value: 330,
                image: 'chinesemandarin.jpg',
                category: 'tangerine'
            },
            {
                name: '櫨柑',
                value: 332,
                image: 'lokan.jpg',
                category: 'tangerine'
            },
            {
                name: '秘魯蜜柑',
                value: 334,
                image: 'satsumamanadrin.jpg',
                category: 'tangerine'
            },
            {
                name: '檸檬',
                value: 275,
                image: 'lemon.jpg',
                category: 'lemon'
            },
            {
                name: '西檸',
                value: 276,
                image: 'lime.jpg',
                category: 'lemon'
            },
            {
                name: '黑李子',
                value: 310,
                image: 'blackplum.jpg',
                category: 'plum'
            },
            {
                name: '紅李子',
                value: 312,
                image: 'redplum.jpg',
                category: 'plum'
            },
            {
                name: '三華李(恐龍蛋)',
                value: 313,
                image: 'pluotplum.jpg',
                category: 'plum'
            },
            {
                name: '西梅',
                value: 352,
                image: 'prune.jpg',
                category: 'plum'
            },
            {
                name: '黑葡萄',
                value: 264,
                image: 'seedlessblackgrape.jpg',
                category: 'grape'
            },
            {
                name: '無籽紅葡萄',
                value: 266,
                image: 'redgrapeseedless.jpg',
                category: 'grape'
            },
            {
                name: '無籽綠葡萄',
                value: 268,
                image: 'seedlessgreengrape.jpg',
                category: 'grape'
            },
            {
                name: '大紅葡萄',
                value: 269,
                image: 'redglobegarpe.jpg',
                category: 'grape'
            },
            {
                name: '小葡萄柚',
                value: 254,
                image: 'sgrapefruit.jpg',
                category: 'grapefruit'
            },
            {
                name: '大葡萄柚',
                value: 259,
                image: 'lgrapefruit.jpg',
                category: 'grapefruit'
            },
            {
                name: '廣西沙田柚',
                value: 260,
                image: 'whitepomelo.jpg',
                category: 'grapefruit'
            },
            {
                name: '紅肉柚子',
                value: 261,
                image: 'pomelored.jpg',
                category: 'grapefruit'
            },
            {
                name: '白肉柚子',
                value: 262,
                image: 'pomelowhite.jpg',
                category: 'grapefruit'
            },
            {
                name: '大象木瓜',
                value: 159,
                image: 'elephantpapaya.png',
                category: 'papaya'
            },
            {
                name: '青木瓜',
                value: 158,
                image: 'greenpapaya.jpg',
                category: 'papaya'
            },
            {
                name: '紅肉木瓜',
                value: 339,
                image: 'redpapaya.jpg',
                category: 'papaya'
            },
            {
                name: '夏威夷木瓜',
                value: 340,
                image: 'hwpapaya.jpg',
                category: 'papaya'
            },
            {
                name: '香吉士橙',
                value: 296,
                image: 'sunkistorange.jpg',
                category: 'orange'
            },
            {
                name: '中國臍橙',
                value: 297,
                image: 'sweetorange.jpg',
                category: 'orange'
            },
            {
                name: '中甜橙',
                value: 298,
                image: 'navalorange.png',
                category: 'orange'
            },
            {
                name: '藍鳥橙',
                value: 343,
                image: 'bluejayorange.jpg',
                category: 'orange'
            },
            {
                name: '澳大利亞橙',
                value: 449,
                image: 'australianorange.jpg',
                category: 'orange'
            },
            {
                name: '香蕉',
                value: 242,
                image: 'banana.jpg',
                category: 'banana'
            },
            {
                name: '中芭蕉',
                value: 244,
                image: 'burro.png',
                category: 'banana'
            },
            {
                name: '小香蕉',
                value: 247,
                image: 'babybanana.jpg',
                category: 'banana'
            },
            {
                name: '中國水晶梨',
                value: 239,
                image: 'chinesegolderpear.jpg',
                category: 'pear'
            },
            {
                name: '黃沙梨',
                value: 248,
                image: 'housuipearchina.jpg',
                category: 'pear'
            },
            {
                name: '豐水梨',
                value: 249,
                image: 'shinkopear.jpg',
                category: 'pear'
            },
            {
                name: '大陸香梨',
                value: 281,
                image: 'chinesehonpear.png',
                category: 'pear'
            },
            {
                name: '波斯梨',
                value: 305,
                image: 'boscpear.png',
                category: 'pear'
            },
            {
                name: '啤梨',
                value: 306,
                image: 'danjoupear.jpg',
                category: 'pear'
            },
            {
                name: '鴨梨',
                value: 316,
                image: 'yalipear.png',
                category: 'pear'
            },
            {
                name: '尖啤梨',
                value: 319,
                image: 'barlettepear.jpg',
                category: 'pear'
            },
            {
                name: '紅啤梨',
                value: 371,
                image: 'reddanjoupear.png',
                category: 'pear'
            }
        ];

        return {
            data: data
        };
    }
})();
