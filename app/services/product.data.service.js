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
                category: '葉菜'
            },
            {
                name: '小芥菜',
                value: 66,
                image: 'sgaichoy.jpg',
                category: '葉菜'
            },
            {
                name: '蓎蒿',
                value: 86,
                image: 'chunho.jpg',
                category: '葉菜'
            },
            {
                name: '芥蘭',
                value: 96,
                image: 'gailan.jpg',
                category: '葉菜'
            },
            {
                name: '潺菜',
                value: 99,
                image: 'sunchoy.jpg',
                category: '葉菜'
            },
            {
                name: '雪裡紅',
                value: 113,
                image: 'sheilihon.jpg',
                category: '葉菜'
            },
            {
                name: '大芥菜',
                value: 132,
                image: 'lgaichoy.jpg',
                category: '葉菜'
            },
            {
                name: '豆苗',
                value: 167,
                image: 'snowpealeaf.jpg',
                category: '葉菜'
            },
            {
                name: '白骨空心菜',
                value: 205,
                image: 'onchoywhite.jpg',
                category: '葉菜'
            },
            {
                name: '紹菜',
                value: 137,
                image: 'napashort.jpg',
                category: '白菜'
            },
            {
                name: '長紹菜',
                value: 138,
                image: 'longnapasuichoy.jpg',
                category: '白菜'
            },
            {
                name: '油菜',
                value: 213,
                image: 'youchoy.jpg',
                category: '白菜'
            },
            {
                name: '奶油白菜',
                value: 407,
                image: 'bokchoyshort.jpg',
                category: '白菜'
            },
            {
                name: '大白菜',
                value: 408,
                image: 'bokchoy.jpg',
                category: '白菜'
            },
            {
                name: '台灣白菜',
                value: 409,
                image: 'twbokchoy.jpg',
                category: '白菜'
            },
            {
                name: '上海白菜',
                value: 410,
                image: 'shoanghaibokchoy.jpg',
                category: '白菜'
            },
            {
                name: '上海白菜苗',
                value: 423,
                image: 'shanghaibokchoysprout.jpg',
                category: '白菜'
            },
            {
                name: '奶油白菜苗',
                value: 475,
                image: 'bokchoysrpout.jpg',
                category: '白菜'
            },
            {
                name: '高麗菜',
                value: 27,
                image: 'kolecabbage.jpg',
                category: '椰菜'
            },
            {
                name: '椰菜花',
                value: 28,
                image: 'cauliflower.jpg',
                category: '椰菜'
            },
            {
                name: '椰菜',
                value: 29,
                image: 'cabbage.jpg',
                category: '椰菜'
            },
            {
                name: '香麥菜',
                value: 101,
                image: 'chineselettuce.jpg',
                category: '生菜'
            },
            {
                name: '生菜',
                value: 102,
                image: 'cellolettuce.jpg',
                category: '生菜'
            },
            {
                name: '綠葉生菜',
                value: 104,
                image: 'greenleaflettuce.jpg',
                category: '生菜'
            },
            {
                name: '羅曼生菜',
                value: 106,
                image: 'romainelettuce.jpg',
                category: '生菜'
            },
            {
                name: '大蕃茄',
                value: 196,
                image: 'ltomatoes.jpg',
                category: '蕃茄'
            },
            {
                name: '羅馬蕃茄',
                value: 199,
                image: 'romatomatoes.jpg',
                category: '蕃茄'
            },
            {
                name: '溫室蕃茄',
                value: 203,
                image: 'hothousetomatoes.jpg',
                category: '蕃茄'
            },
            {
                name: '帶莖蕃茄',
                value: 445,
                image: 'vinetomatoes.jpg',
                category: '蕃茄'
            },
            {
                name: '去皮大芋頭',
                value: 191,
                image: 'peeledlargetaro.jpg',
                category: '芋頭'
            },
            {
                name: '大芋頭',
                value: 192,
                image: 'ltaro.jpg',
                category: '芋頭'
            },
            {
                name: '小芋頭',
                value: 193,
                image: 'staro.jpg',
                category: '芋頭'
            },
            {
                name: '紫茄',
                value: 73,
                image: 'eggplant.jpg',
                category: '茄'
            },
            {
                name: '中茄',
                value: 74,
                image: 'chineseeggplant.jpg',
                category: '茄'
            },
            {
                name: '蘑菇',
                value: 127,
                image: 'mushroommed.jpg',
                category: '菇'
            },
            {
                name: '鮮花菇',
                value: 130,
                image: 'shitake.jpg',
                category: '菇'
            },
            {
                name: '杏鮑菇皇',
                value: 134,
                image: 'kingoystermushroom.jpg',
                category: '菇'
            },
            {
                name: '芫茜',
                value: 45,
                image: 'cilanntro.jpg',
                category: '濕菜'
            },
            {
                name: '波菜',
                value: 180,
                image: 'spinach.jpg',
                category: '濕菜'
            },
            {
                name: '西洋菜',
                value: 204,
                image: 'watercress.jpg',
                category: '濕菜'
            },
            {
                name: '去頭百加利',
                value: 412,
                image: 'crownbroccoli.jpg',
                category: '濕菜'
            },
            {
                name: '合掌瓜',
                value: 32,
                image: 'chayote.jpg',
                category: '瓜菜'
            },
            {
                name: '大青瓜',
                value: 51,
                image: 'cucumber.jpg',
                category: '瓜菜'
            },
            {
                name: '無子青瓜',
                value: 52,
                image: 'englishcucumber.jpg',
                category: '瓜菜'
            },
            {
                name: '日本小青瓜',
                value: 53,
                image: 'japanesecucumber.jpg',
                category: '瓜菜'
            },
            {
                name: '日本南瓜',
                value: 97,
                image: 'kapocha.jpg',
                category: '瓜菜'
            },
            {
                name: '毛瓜',
                value: 126,
                image: 'moqua.jpg',
                category: '瓜菜'
            },
            {
                name: '匏瓜',
                value: 141,
                image: 'opo.png',
                category: '瓜菜'
            },
            {
                name: '菱形絲瓜',
                value: 144,
                image: 'singqua.jpg',
                category: '瓜菜'
            },
            {
                name: '義大利瓜',
                value: 185,
                image: 'italiansquash.jpg',
                category: '瓜菜'
            },
            {
                name: '冬瓜',
                value: 210,
                image: 'konquachina.jpg',
                category: '瓜菜'
            },
            {
                name: '苦瓜',
                value: 416,
                image: 'bittermelon.jpg',
                category: '瓜菜'
            },
            {
                name: '西葫蘆',
                value: 856,
                image: 'zucchinilocal.jpg',
                category: '瓜菜'
            },
            {
                name: '紅蘿蔔',
                value: 43,
                image: 'carrot.jpg',
                category: '蘿蔔'
            },
            {
                name: '唐蘿蔔',
                value: 68,
                image: 'chinesewhiteradish.jpg',
                category: '蘿蔔'
            },
            {
                name: '青蘿蔔',
                value: 69,
                image: 'greenradish.jpg',
                category: '蘿蔔'
            },
            {
                name: '白馬鈴薯',
                value: 152,
                image: 'whitepotatoes.jpg',
                category: '薯'
            },
            {
                name: '馬鈴薯',
                value: 154,
                image: 'potatoes.jpg',
                category: '薯'
            },
            {
                name: '甜薯',
                value: 156,
                image: 'sweetpotatoes.jpg',
                category: '薯'
            },
            {
                name: '紅馬鈴薯',
                value: 157,
                image: 'redpotatoes.png',
                category: '薯'
            },
            {
                name: '番薯',
                value: 216,
                image: 'yam.jpg',
                category: '薯'
            },
            {
                name: '紫心番薯',
                value: 388,
                image: 'purpleyam.jpg',
                category: '薯'
            },
            {
                name: '沙葛',
                value: 91,
                image: 'jicama.jpg',
                category: '葛'
            },
            {
                name: '粉葛',
                value: 215,
                image: 'arrowroot.jpg',
                category: '葛'
            },
            {
                name: '蒜頭',
                value: 85,
                image: 'garlic.jpg',
                category: '蔥蒜'
            },
            {
                name: '蒜苔',
                value: 110,
                image: 'garlicsproutleekbud.jpg',
                category: '蔥蒜'
            },
            {
                name: '青蔥',
                value: 145,
                image: 'greenonion.jpg',
                category: '蔥蒜'
            },
            {
                name: '紅洋蔥',
                value: 147,
                image: 'redonion.jpg',
                category: '蔥蒜'
            },
            {
                name: '白洋蔥',
                value: 148,
                image: 'whiteonion.jpg',
                category: '蔥蒜'
            },
            {
                name: '特大洋蔥',
                value: 153,
                image: 'jumboonion.jpg',
                category: '蔥蒜'
            },
            {
                name: '青椒',
                value: 163,
                image: 'greenbellpepper.jpg',
                category: '椒'
            },
            {
                name: '紅椒',
                value: 164,
                image: 'redbellpepper.jpg',
                category: '椒'
            },
            {
                name: '黃椒',
                value: 170,
                image: 'goldbellpepper.jpg',
                category: '椒'
            },
            {
                name: '橙椒',
                value: 469,
                image: 'orangebellpepper.jpg',
                category: '椒'
            },
            {
                name: '三色椒',
                value: 674,
                image: 'colorbellpepper.jpg',
                category: '椒'
            },
            {
                name: '四季豆',
                value: 417,
                image: 'greenbean.jpg',
                category: '豆芽'
            },
            {
                name: '長腳豆',
                value: 418,
                image: 'longbean.jpg',
                category: '豆芽'
            },
            {
                name: '綠豆芽',
                value: 419,
                image: 'beansprout.jpg',
                category: '豆芽'
            },
            {
                name: '甜玉米',
                value: 33,
                image: 'corn.jpg',
                category: '其他菜'
            },
            {
                name: '韭菜花',
                value: 36,
                image: 'chivebud.jpg',
                category: '其他菜'
            },
            {
                name: '栗子',
                value: 44,
                image: 'chesnut.jpg',
                category: '其他菜'
            },
            {
                name: '西芹',
                value: 46,
                image: 'celery.jpg',
                category: '其他菜'
            },
            {
                name: '唐芹',
                value: 47,
                image: 'chinesecelery.jpg',
                category: '其他菜'
            },
            {
                name: '薑',
                value: 82,
                image: 'ginger.jpg',
                category: '其他菜'
            },
            {
                name: '芥蘭頭',
                value: 95,
                image: 'kolhrabi.jpg',
                category: '其他菜'
            },
            {
                name: '蓮藕',
                value: 115,
                image: 'lotusroot.jpg',
                category: '其他菜'
            },
            {
                name: '山藥',
                value: 125,
                image: 'nagaimo.jpg',
                category: '其他菜'
            },
            {
                name: '馬蹄',
                value: 207,
                image: 'waterchestnut.jpg',
                category: '其他菜'
            },
            {
                name: '蘆筍',
                value: 403,
                image: 'asparagus.jpg',
                category: '其他菜'
            },
            {
                name: '香瓜',
                value: 250,
                image: 'cantaloupes.jpg',
                category: '瓜果'
            },
            {
                name: '白蜜瓜',
                value: 287,
                image: 'honeydew.jpg',
                category: '瓜果'
            },
            {
                name: '無籽西瓜',
                value: 289,
                image: 'seedlesswatermelon.jpg',
                category: '瓜果'
            },
            {
                name: '韓國蜜瓜',
                value: 291,
                image: 'koreanmelon.png',
                category: '瓜果'
            },
            {
                name: '新彊哈蜜瓜',
                value: 335,
                image: 'xinjiangmelon.jpg',
                category: '瓜果'
            },
            {
                name: '迷你無籽西瓜',
                value: 517,
                image: 'miniseedlesswatermelon.jpg',
                category: '瓜果'
            },
            {
                name: '大紅蘋果',
                value: 227,
                image: 'reddeliciousapple.jpg',
                category: '蘋果'
            },
            {
                name: '小紅蘋果',
                value: 228,
                image: 'sreddeliciousapple.jpg',
                category: '蘋果'
            },
            {
                name: '大黃蘋果',
                value: 230,
                image: 'lgoldapple.jpg',
                category: '蘋果'
            },
            {
                name: '大綠蘋果',
                value: 231,
                image: 'lgreenapple.jpg',
                category: '蘋果'
            },
            {
                name: '小綠蘋果',
                value: 232,
                image: 'sgreenapple.jpg',
                category: '蘋果'
            },
            {
                name: '富士蘋果',
                value: 234,
                image: 'fujiapple.jpg',
                category: '蘋果'
            },
            {
                name: '小黃蘋果',
                value: 241,
                image: 'sgoldenapple.jpg',
                category: '蘋果'
            },
            {
                name: '加美澳蘋果',
                value: 245,
                image: 'cameoapple.jpg',
                category: '蘋果'
            },
            {
                name: '紐西蘭蘋果',
                value: 346,
                image: 'galaapple.png',
                category: '蘋果'
            },
            {
                name: '新紐西蘭蘋果',
                value: 347,
                image: 'braeburnapple.jpg',
                category: '蘋果'
            },
            {
                name: '玫瑰紅蘋果',
                value: 350,
                image: 'pacificroseapple.jpg',
                category: '蘋果'
            },
            {
                name: '司巴坦蘋果',
                value: 455,
                image: 'spartan.png',
                category: '蘋果'
            },
            {
                name: '中國富士',
                value: 625,
                image: 'fujiapplechina.jpg',
                category: '蘋果'
            },
            {
                name: '油桃',
                value: 293,
                image: 'nectarine.jpg',
                category: '桃'
            },
            {
                name: '大油桃',
                value: 294,
                image: 'nectarinelarge.jpg',
                category: '桃'
            },
            {
                name: '白油桃',
                value: 301,
                image: 'whitenectarine.jpg',
                category: '桃'
            },
            {
                name: '白玉桃',
                value: 302,
                image: 'whitepeach.jpg',
                category: '桃'
            },
            {
                name: '大毛桃',
                value: 303,
                image: 'peachlarge.jpg',
                category: '桃'
            },
            {
                name: '潘桃',
                value: 669,
                image: 'donutpeach.jpg',
                category: '桃'
            },
            {
                name: '椰青',
                value: 57,
                image: 'youngcoconut.jpg',
                category: '其他果'
            },
            {
                name: '火龍果',
                value: 186,
                image: 'firedargonfruit.jpg',
                category: '其他果'
            },
            {
                name: '牛油果',
                value: 236,
                image: 'avocado.jpg',
                category: '其他果'
            },
            {
                name: '櫻桃',
                value: 251,
                image: 'cherry.jpg',
                category: '其他果'
            },
            {
                name: '金枕榴槤',
                value: 256,
                image: 'monthongdurian.jpg',
                category: '其他果'
            },
            {
                name: '奇異果',
                value: 272,
                image: 'kiwi.jpg',
                category: '其他果'
            },
            {
                name: '富有甜柿',
                value: 309,
                image: 'fuyupersimmon.jpg',
                category: '其他果'
            },
            {
                name: '石榴',
                value: 314,
                image: 'pomegrante.jpg',
                category: '其他果'
            },
            {
                name: '棗子',
                value: 374,
                image: 'date.jpg',
                category: '其他果'
            },
            {
                name: '黃櫻桃',
                value: 384,
                image: 'rainjercherry.jpg',
                category: '其他果'
            },
            {
                name: '特甜鳳梨',
                value: 386,
                image: 'extrasweetpineapple.jpg',
                category: '其他果'
            },
            {
                name: '黃金奇異果',
                value: 476,
                image: 'goldenkiwi.jpg',
                category: '其他果'
            },
            {
                name: '砂糖橘',
                value: 513,
                image: 'honeymandarin.jpg',
                category: '其他果'
            },
            {
                name: '墨西哥芒果',
                value: 282,
                image: 'mexicomango.jpg',
                category: '芒果'
            },
            {
                name: '呂宋芒果',
                value: 284,
                image: 'ataulfomango.jpg',
                category: '芒果'
            },
            {
                name: '芭樂',
                value: 263,
                image: 'guava.jpg',
                category: '熱帶水果'
            },
            {
                name: '龍眼',
                value: 278,
                image: 'longan.jpg',
                category: '熱帶水果'
            },
            {
                name: '荔枝',
                value: 279,
                image: 'specialtylychee.jpg',
                category: '熱帶水果'
            },
            {
                name: '山竹',
                value: 363,
                image: 'mangosteen.jpg',
                category: '熱帶水果'
            },
            {
                name: '加州甜柑',
                value: 323,
                image: 'kinnowtangerine.jpg',
                category: '柑'
            },
            {
                name: '巴基斯坦蜜柑',
                value: 324,
                image: 'pakistantangerine.jpg',
                category: '柑'
            },
            {
                name: '蜜柑',
                value: 325,
                image: 'honeytangerine.jpg',
                category: '柑'
            },
            {
                name: '台灣大椪柑',
                value: 328,
                image: 'pokanl.jpg',
                category: '柑'
            },
            {
                name: '中國蜜柑',
                value: 330,
                image: 'chinesemandarin.jpg',
                category: '柑'
            },
            {
                name: '櫨柑',
                value: 332,
                image: 'lokan.jpg',
                category: '柑'
            },
            {
                name: '秘魯蜜柑',
                value: 334,
                image: 'satsumamanadrin.jpg',
                category: '柑'
            },
            {
                name: '檸檬',
                value: 275,
                image: 'lemon.jpg',
                category: '檸檬'
            },
            {
                name: '西檸',
                value: 276,
                image: 'lime.jpg',
                category: '檸檬'
            },
            {
                name: '黑李子',
                value: 310,
                image: 'blackplum.jpg',
                category: '李子'
            },
            {
                name: '紅李子',
                value: 312,
                image: 'redplum.jpg',
                category: '李子'
            },
            {
                name: '三華李(恐龍蛋)',
                value: 313,
                image: 'pluotplum.jpg',
                category: '李子'
            },
            {
                name: '西梅',
                value: 352,
                image: 'prune.jpg',
                category: '李子'
            },
            {
                name: '黑葡萄',
                value: 264,
                image: 'seedlessblackgrape.jpg',
                category: '葡萄'
            },
            {
                name: '無籽紅葡萄',
                value: 266,
                image: 'redgrapeseedless.jpg',
                category: '葡萄'
            },
            {
                name: '無籽綠葡萄',
                value: 268,
                image: 'seedlessgreengrape.jpg',
                category: '葡萄'
            },
            {
                name: '大紅葡萄',
                value: 269,
                image: 'redglobegarpe.jpg',
                category: '葡萄'
            },
            {
                name: '小葡萄柚',
                value: 254,
                image: 'sgrapefruit.jpg',
                category: '柚'
            },
            {
                name: '大葡萄柚',
                value: 259,
                image: 'lgrapefruit.jpg',
                category: '柚'
            },
            {
                name: '廣西沙田柚',
                value: 260,
                image: 'whitepomelo.jpg',
                category: '柚'
            },
            {
                name: '紅肉柚子',
                value: 261,
                image: 'pomelored.jpg',
                category: '柚'
            },
            {
                name: '白肉柚子',
                value: 262,
                image: 'pomelowhite.jpg',
                category: '柚'
            },
            {
                name: '大象木瓜',
                value: 159,
                image: 'elephantpapaya.png',
                category: '木瓜'
            },
            {
                name: '青木瓜',
                value: 158,
                image: 'greenpapaya.jpg',
                category: '木瓜'
            },
            {
                name: '紅肉木瓜',
                value: 339,
                image: 'redpapaya.jpg',
                category: '木瓜'
            },
            {
                name: '夏威夷木瓜',
                value: 340,
                image: 'hwpapaya.jpg',
                category: '木瓜'
            },
            {
                name: '香吉士橙',
                value: 296,
                image: 'sunkistorange.jpg',
                category: '橙'
            },
            {
                name: '中國臍橙',
                value: 297,
                image: 'sweetorange.jpg',
                category: '橙'
            },
            {
                name: '中甜橙',
                value: 298,
                image: 'navalorange.png',
                category: '橙'
            },
            {
                name: '藍鳥橙',
                value: 343,
                image: 'bluejayorange.jpg',
                category: '橙'
            },
            {
                name: '澳大利亞橙',
                value: 449,
                image: 'australianorange.jpg',
                category: '橙'
            },
            {
                name: '香蕉',
                value: 242,
                image: 'banana.jpg',
                category: '蕉'
            },
            {
                name: '中芭蕉',
                value: 244,
                image: 'burro.png',
                category: '蕉'
            },
            {
                name: '小香蕉',
                value: 247,
                image: 'babybanana.jpg',
                category: '蕉'
            },
            {
                name: '中國水晶梨',
                value: 239,
                image: 'chinesegolderpear.jpg',
                category: '梨'
            },
            {
                name: '黃沙梨',
                value: 248,
                image: 'housuipearchina.jpg',
                category: '梨'
            },
            {
                name: '豐水梨',
                value: 249,
                image: 'shinkopear.jpg',
                category: '梨'
            },
            {
                name: '大陸香梨',
                value: 281,
                image: 'chinesehonpear.png',
                category: '梨'
            },
            {
                name: '波斯梨',
                value: 305,
                image: 'boscpear.png',
                category: '梨'
            },
            {
                name: '啤梨',
                value: 305,
                image: 'danjoupear.jpg',
                category: '梨'
            },
            {
                name: '鴨梨',
                value: 316,
                image: 'yalipear.png',
                category: '梨'
            },
            {
                name: '尖啤梨',
                value: 319,
                image: 'barlettepear.jpg',
                category: '梨'
            },
            {
                name: '紅啤梨',
                value: 371,
                image: 'reddanjoupear.png',
                category: '梨'
            }
        ];

        return {
            data: data
        };
    }
})();
