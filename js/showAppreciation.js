window.onload=(function(){
    const MCO = {
        '1':'#EA5455', //100>=money
        '2': '#b294db', // 100>money>=50
        '3': '#FDD819', // 50>money>=30
        '4': '#0396FF', // 30>money>=10
        '5': '#28C76F', // 10>money>=5
        '6': '#000000', // 5>mone>=3
        '7': '#363636' // money<3
    };
    const data = [
        { name: '我是张*锐',color: MCO['1'], money: '200.00', date: '2024/01/10'},
        { name: '我是张*锐',color: MCO['1'], money: '400.00', date: '2023/12/01'},
        { name: '我是张*锐',color: MCO['1'], money: '100.00', date: '2023/11/28'},
        { name: '我是张*锐',color: MCO['1'], money: '100.00', date: '2023/11/27'},
        { name: '我是张*锐',color: MCO['1'], money: '100.00', date: '2023/11/14'},
        { name: '我是张*锐',color: MCO['1'], money: '100.00', date: '2023/11/01'},
        { name: '*🐵',color: MCO['3'], money: '35.00', date: '2023/11/20'},
        { name: '*迁',color: MCO['4'], money: '20.00', date: '2023/11/07'},
        { name: '*遥',color: MCO['4'], money: '18.88', date: '2023/11/29'},
        { name: '*ཀ',color: MCO['4'], money: '10.00', date: '2023/11/22'},
        { name: '*许',color: MCO['5'], money: '6.60', date: '2023/12/14'},
    ];

    const rewardDom = document.getElementById('reward');
    var html = '';
    for(var i = 0; i < data.length; i++) {
        html += `<div class="reward-item-content">
        <div class="reward-item-name">${data[i].name}</div>
        <div class="reward-item-time">
            <div class="reward-item-money" style="background-color: ${data[i].color};">￥${data[i].money}</div>
            <div>${data[i].date}</div>
        </div>
        </div>`;
    };
    
    rewardDom.innerHTML = html;
        
})();