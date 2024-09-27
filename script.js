document.getElementById('randomDishButton').addEventListener('click', function() {
    var dishes = [
        "宫保鸡丁",
        "鱼香肉丝",
        "麻婆豆腐",
        "红烧肉",
        "清蒸鲈鱼",
        "糖醋排骨",
        "地三鲜",
        "干锅菜花",
        "手撕包菜",
        "西红柿炒鸡蛋"
    ];

    var randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    document.getElementById('dish').innerText = "今天为您推荐：" + randomDish;
});