/**
 * 页面加载事件
 */
window.onload=function () {
    /**
     * 为导航栏添加鼠标事件，设置相应样式
     */
    var flag;//设置标志位
    $(".nav li").click(function () {
        flag=$(this);
    }).mouseenter(function () {
        $(this).parent().children("li").css("background-color","");
        $(this).parent().find("p").remove();
        var span=$("<p></p>");
        span.appendTo($(this));
        var width=$(this).width();
        span.css({"width":width,"height":"3px","backgroundColor":"#42b8f1","position":"absolute","bottom":"0px"});
    }).mouseleave(function () {
        $(this).parent().children("li").css("background-color","");
        $(this).parent().find("p").remove();
        flag.parent().find("p").remove();
        // flag.parent().children("li").css("background-color","");
        var span=$("<p></p>");
        span.appendTo(flag);
        var width=$(this).width();
        span.css({"width":width,"height":"3px","backgroundColor":"#42b8f1","position":"absolute","bottom":"0px"});
        flag.css("background-color","#212325");
    });
    /*
    * 使页面高度自适应
    * */
    var obj={
        height:$(document).height()-72
    };
    $("#content_1,#content_2,#content_3,#content_4").css("height",obj.height+"px");
    /*
    * 点击导航页面跳到相应的位置
    * */
    $(".nav li").click(function () {
        var index=$(this).index();
        //     //先把上一次的动作清理掉，否则会出现重叠效果
            $("#content>div:eq("+(4-index)+")").stop().slideDown(1400);
            $("#content>div:eq("+(4-index)+")").siblings("div").stop().slideUp(0);

    });
    /*
    * 为播放音乐注册事件
    * */
    $("#menu #music img").click(function () {
        $(document).unbind("click");//解绑页面鼠标点击事件
        if($("#audio")[0].paused){
            $(this).css("animation-play-state","running");
            $("#audio").get(0).play();
        }else{
            $(this).css("animation-play-state","paused");
            $("#audio")[0].pause();
        }
        return false;//解决冒泡带来的问题
    });
    $(document).click(function () {
        if($("#audio")[0].paused){
            $("#audio")[0].play();//h5的自动播放有bug，使用js是页面一加载就播放
            console.log($("#audio")[0].paused);
        }
    });
};


