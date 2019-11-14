// 2340×1080分辨率，生涯部分不适用

/*********************** 生涯用车 ******************************/
var carrerCars = [1, 2, 3, 4, 5, 6];
/*********************** 生涯用车 ******************************/

/*********************** 多人用车 开始 ******************************/
var mpLevelName = ['legend', 'platinum', 'gold', 'silver', 'bronze', 'legend2', 'platinum2', 'gold2', 'silver2', 'bronze2'];
// 传奇、白金、黄金、白银、青铜的车是否可用，true表示可用，false表示不可用
var mpStatus = [
    true,     // 传奇
    true,     // 白金
    true,     // 黄金
    false,     // 白银
    false,     // 青铜

    false,     // 传奇
    false,     // 白金
    true,     // 黄金
    false,     // 白银
    false    // 青铜
];

var mpCarPick = {
    legend: [1, 2, 3, 4, 6],
    platinum: [1, 2, 3, 4, 5, 6, 7, 9, 10, 14],
    gold: [6, 8, 9, 10, 11, 13, 14],
    silver: [7, 8, 9, 12, 13],
    bronze: [5, 6, 7, 8, 9, 10, 11, 12],

    legend2: [1, 2, 3, 4],
    platinum2: [1, 2, 3, 4, 5, 6, 7, 12],
    gold2: [1, 2],
    silver2: [1, 2, 3],
    bronze2: [3]
};
/*********************** 多人用车 结束 ******************************/

const robot = require('robot.js');

module.exports = {
    // 生涯
    carrer: {
        // 生涯用车
        cars : carrerCars,

        // 分辨率宽度
        width : 1920,
        
        // 分辨率高度
        height : 1080,
    
        // 最上方代币图标
        token: { x: 921 , y: 42 },
    
        // 最上方积分图标
        credit: { x: 1206 , y: 42 },
    
        // 生涯,开始,继续
        goldenPoint: { x: 1500, y: 1000 },
    
        // 生涯百分比
        careerPercent: { x: 1560, y: 1050 },
    
        // euro
        euro: { x: 350, y: 300 },
    
        // 选关
        swipeScreen: function () {
            for (i = 0; i < 4; i++) {
                robot.swipe(this.height * 2 / 3, 150, this.height * 2 / 3, 900, 400);
                sleep(200);
            }
        },
    
        // 12
        block12: { x: 680, y: 800 },
    
        // 推荐性能分
        recommendedPoints: { x: 1800, y: 900 },
    
        // 第一辆车
        firstCar: { x: 555, y: 616 },
    
        // 车辆间距
        distance: { x: 519, y: 365 },
    },

    // 多人
    mp: {
        // 上方多人>尖端=#ffffff白色，多人赛事调整时y会有变化
        homeup: { x: 1841, y: 279 },
//        homeup: { x: 1841, y: 226 },
        // 下方多人>尖端=#ffffff，多人赛事调整时y会有变化
        homedown: {x: 1842, y: 615 },
 //       homedown: {x: 1842, y: 896 },
        
    		// 出错窗口左下角=#1c5ab2蓝色
		    errorleft: { x: 225, y: 765},
		    // 出错窗口右下角=#1c5ab2蓝色
		    errorright: { x: 1695, y:765},
		
        // 多人数据
        levelName : mpLevelName,

        status : mpStatus,

        carPick : mpCarPick,

        // 分辨率宽度
        width : 2340,
        
        // 分辨率高度
        height : 1080,

        // 最上方代币图标=#0090ff蓝色，会有色差
        token: { x: 1226, y: 42 },
        
        // 最上方积分图标=#ffc600黄色
        credit: { x: 1530, y: 42 },
        
        // 返回按钮=#ffffff白色
        back: { x: 25, y: 25 },
        // 返回按钮里的<尖端=#010101黑色
        backward: { x: 51, y: 46 },

        // 多人游戏按钮
        multiplayer: { x: 1050, y: 1050},
        // 每日赛事按钮
        meiri: { x: 760, y: 1050},
        // 特殊赛事按钮
        teshu: { x: 400, y: 1050},

        // 开始按钮
        start: { x: 960, y: 999 },

        // 领奖按钮
        claim: { x: 960, y: 750 },
        // 多人包的车库等级标签=#fa154f红色
        mpackage1: { x: 900, y: 600 },
        mpackage2: { x: 1050, y: 600 },
                
        // 青铜
        bronze: { x: 1290, y: 168 },
        
        // 白银
        silver: { x: 1410, y: 168 },

        // 黄金
        gold: { x: 1530, y: 168 },

        // 白金
        platinum: { x: 1650, y: 168 },

        // 传奇
        legend: { x: 1770, y: 168 },

        // 生涯,开始,继续
        goldenPoint: { x: 1500, y: 1000 },
        

        // 第一辆车
        firstCar: { x: 344, y: 611 },

        // 车辆间距
        distance: { x: 694, y: 355 }
    }    
} 
