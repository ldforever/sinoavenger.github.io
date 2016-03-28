/**
 * Created by Administrator on 2016/3/28.
 */
/*轮播图*/
$(document).ready(function(){
    var imgs = ['img/banner_pic_1.png','img/banner_pic_2.png','img/banner_pic_3.png'];
    var timer1=null;


    $('.banner span').mouseover(function(){
        var n=$(this).index();
        $('.banner span').removeClass('active').filter(this).addClass('active');
        $('#list li').css('bottom',-63).eq($(this).index()).css('bottom',0);
        $('#imges').attr('src',imgs[n]);
    })
})





/*底部切换*/
$(document).ready(function(){

    $('#list_footer li').mouseover(function(){
        var n=$(this).index();
        $('#list_footer li').removeClass('active').filter(this).addClass('active');

    })
})

