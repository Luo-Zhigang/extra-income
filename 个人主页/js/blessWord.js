window.onload = function () {
    /**
     * 获取指定标签对象
     * @param id 标签的id属性值
     * @returns {Element}根据id属性值返回指定标签对象
     */
    function my$(id) {
        return document.getElementById(id);
    }

    var messages = [
        {
            "id": 1,
            "name": "9.8的妹纸",
            "content": "你总是说话得体,举止大方。不要吝啬赞美!因为你的赞美,对他人是一种鼓励,一种信任。",
            "time": "2020-02-17 00:00:00"
        },
        {
            "id": 2,
            "name": "9.8的妹纸",
            "content": "你也许没有水汪汪亮晶晶的眼睛，但你的眼神也应该顾盼多情，勾魂摄魄。",
            "time": "2020-02-18 12:40:00"
        },
        {
            "id": 3,
            "name": "9.8的妹纸",
            "content": "你乌灵的眼眸，倏地笼上层嗜血的寒意，仿若魔神降世一般，一双冰眸轻易贯穿人心，刺透心底最柔弱，舞衣的角落",
            "time": "2020-03-18 12:40:00"
        },
        {
            "id": 4,
            "name": "9.8的妹纸",
            "content": "你就好像是上品的西湖龙井那种淡淡的苦涩是你的成属熟越品你越有味道",
            "time": "2020-03-18 12:40:00"
        },
        {
            "id": 5,
            "name": "9.8的妹纸.",
            "content": "帅的掉渣，乾坤无敌，迷倒千万少女，当年抛弃林青霞，甩掉戴安娜，人称情场杀答手鬼见愁的就是你~~ 噢 我不知道该怎么形容才好!",
            "time": "2020-02-22 12:40:00"
        },
        {
            "id": 6,
            "name": "9.8的妹纸.",
            "content": "高大威猛 英俊潇洒 风流倜傥 人见人爱 花见花开 车见车栽才高八斗，学富五车，玉回树临风，英俊潇洒，风流倜傥，貌似潘安，人称一朵梨花压海棠",
            "time": "2020-02-22 01:30:00"
        },
        {
            "id": 7,
            "name": "9.8的妹纸",
            "content": "在午后的阳光下，没有丝毫红晕，清秀的脸上只显出了一种病态的苍白，却无时不流露出高贵淡雅的气质，配合他颀长纤细的身材。",
            "time": "2020-02-22 01:30:00"
        },
        {
            "id": 8,
            "name": "9.8的妹纸",
            "content": "自古英雄出少年,你年纪轻轻,就有经天纬地之才,定国安邦之智,古人云,卧龙凤雏得一而安天下。",
            "time": "2020-02-22 01:30:00"
        },
        {
            "id": 9,
            "name": "9.8的妹纸",
            "content": "在现在这样一个物欲横流的金钱社会里，竟然还能见到你这样的性情中人，无疑是我这辈子最大的幸运。让我深深感受到了人性的伟答大。",
            "time": "2016-02-22 02:30:00"
        }
    ];
//先获取最外面的div----content
    var content = my$("content");
//遍历数组创建div(每个便签的壳,立刻加入到content中)
    for (var i = 0; i < messages.length; i++) {
        //获取每个数组元素对象
        var dt = messages[i];
        //创建div
        var dvObj = document.createElement("div");
        //加入到content中
        content.appendChild(dvObj);
        //设置id和类样式
        dvObj.id = "cc" + i;
        dvObj.className = "tip1";
        dvObj.innerHTML = '<div class="tip_h" title="双击关闭纸条">' +
            '<div class="num">第[' + dt.id + ']条 ' + dt.time + '</div>' +
            '<div class="close" title="关闭纸条">×</div>' +
            '<div class="clr"></div>' +
            '</div>' +
            '<div class="tip_c">' + dt.content + '</div>' +
            '<div class="tip_f">' +
            '<div class="icon">' +
            '<img src="../img/pic_1.gif" alt="" title="">' +
            '</div>' +
            '<div class="name">' + dt.name + '</div>' +
            '<div class="clr"></div>' +
            '</div>';
        //设置每个div的left和top属性值(随机的)
        var x = parseInt(Math.random() * 600 + 300);
        //top竟然是个window-----注意了-----
        var y = parseInt(Math.random() * 300 + 100);
        //console.log(x,y);
        dvObj.style.left = x + "px";
        dvObj.style.top = y + "px";
        //div中有没有x
        //每个便签中的关闭的x
        dvObj.getElementsByClassName("close")[0].onclick = function () {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        };
        //双击关闭纸条
        dvObj.getElementsByClassName("tip_h")[0].ondblclick = function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        };
        //点击纸条,改变层级
        dvObj.onclick = clickHandle;
    }
    var zIndex = 0;//改变层级
    function clickHandle() {
        zIndex++;
        this.style.zIndex = zIndex;
    }
};