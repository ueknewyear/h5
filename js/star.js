$(function () {
    var app = $('#app');
    var offset = 0, cw = window.innerWidth,
        step = $('#app>div[id]'),
        four = $('#four'),
        five = $('#five'),
        six = $('#six'),
        flag = false,
        lefts = 0;
    app.css('width', cw * (step.length-3) + four.outerWidth());
    app.on('click', function () {
        if(lefts <= cw-app.width()){
            return ;
        }
        offset++;
        $(step[offset]).addClass('active');
        if(offset<3){
            $(this).css({'transform': `translateX(${-offset * cw}px)`})
        }else if(offset == 3){
            $(this).css({'transform': `translateX(${-((offset-1) * cw+four.outerWidth())}px)`})
        }else if(offset == 4){
            four.removeClass('active');
            four.css({transform:'translateX(6rem) scale(1,1)'});
            setTimeout(function(){
                four.css({transform:'translateX(6rem) scale(5,5)'});
            },0)
        }else if(offset == 5){
            five.css({transform:'rotate(0deg) scale(6,6)','transform-origin':'0.6rem 4.9rem'});
            six.css({display:'block',opacity:1});
            six.addClass('active');
        }else if(offset > 5){
            lefts = -((offset-3) * cw+four.outerWidth());
            $(this).css({'transform': `translateX(${-((offset-3) * cw+four.outerWidth())}px)`})
        }


    });

    four.on('webkitTransitionEnd',function(){
        flag = true;
        five.css({transform:'rotate(0deg) scale(1,1)',opacity:1})
    });
});
