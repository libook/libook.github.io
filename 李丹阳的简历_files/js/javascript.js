//页面关闭或刷新提示
window.onbeforeunload = function() { 
    if ( /Firefox[\/\s](\d+)/.test(navigator.userAgent) && new Number(RegExp.$1) >= 4) {
        if(confirm('录用我吧！*\\( ^ v ^ )\/* GO')){
            history.go();
        } else{
            window.setTimeout(function() { window.stop(); }, 1);
        }
    } else{
        return '录用我吧！*\\( ^ v ^ )\/* GO';
    }
}



//时钟控制
function checkTime(i){
    if (i<10) 
      {i="0" + i}
      return i
}
function settime() {
    var nowtime=new Date();
    $("#clock").text(nowtime.getMonth()+1+'-'+nowtime.getDate()+' '+nowtime.getHours()+':'+checkTime(nowtime.getMinutes()));
}
clock = setInterval("settime()", 1000);



//两个栏以及面板排版和功能
$(document).ready(function(){
    $("#battery").css("right","175px");
    $("#clock").animate({top:"1px"},"slow");
    $("#battery").animate({top:"2px"},"slow");
    $("#access").animate({top:"0px"},"slow");
    $("#backbtn").animate({bottom:"0px"},"slow");
    $("#mainbtn").animate({bottom:"0px"},"slow");
    $("#nextbtn").animate({bottom:"0px"},"slow");
     
     //面板伸缩控制
    function panelctrl(trigger)
    {
        if($("#infolabel0").is(":visible"))
        {
            $("#desktop").css({"filter":"alpha(Opacity=100)","-moz-opacity":"1","opacity": "1","background-color":"transparent"});
            $("#infolabel0_back").hide("fast");
            $("#infolabel0").hide("fast");
            $("#infolabel1").hide("fast");
            $("#infolabel2").hide("fast");
            $("#infolabel3").hide("fast");
            $("#infolabel4").hide("fast");
            $("#infolabel5").hide("fast");
            $("#infolabel6").hide("fast");
            $("#infolabel7").hide("fast");
            $("#infolabel8").hide("fast");
            $("#infopanel").slideToggle("slow");
            return;
        }
        if(trigger)
        {
            $("#desktop").css({"filter":"alpha(Opacity=50)","-moz-opacity":"0.5","opacity": "0.5","background-color":"black"});
            $("#infopanel").slideToggle("slow",function(){
                if($("#infolabel0").is(":hidden")) 
                {
                    $("#infolabel0").show(100);
                    $("#infolabel1").show(200);
                    $("#infolabel2").show(300);
                    $("#infolabel3").show(400);
                    $("#infolabel4").show(500);
                    $("#infolabel5").show(600);
                    $("#infolabel6").show(700);
                    $("#infolabel7").show(800);
                    $("#infolabel8").show(900);
                }
            });
        }
    }
    $("#status_notification").click(function(){
        panelctrl(true);
    });
    $("#desktop").click(function(){
        panelctrl(false);
    });
    $("#navigation").click(function(){
        panelctrl(false);
    });
    
    //面板标签0鼠标事件
    $("#infolabel0").mouseenter(function(){$("#infolabel0_back").show();});
    $("#infolabel0_back").mouseleave(function(){$("#infolabel0_back").hide();});
    $("#infolabel3").mouseover(function(){$("#infolabel0_back").hide();});
    //面板标签们鼠标事件
    $("#infolabel0_back").click(function(){
        nextpage("str0",-1,-1);
    });
    $("#infolabel1").click(function(){
        nextpage("str1",0,2);
        shownext();
    });
    $("#infolabel2").click(function(){
        nextpage("str2",0,2);
        shownext();
    });
    $("#infolabel3").click(function(){
        nextpage("str3",-1,-1);
    });
    $("#infolabel4").click(function(){
        nextpage("str4",-1,-1);
    });
    $("#infolabel5").click(function(){
        nextpage("str5",-1,-1);
    });
    $("#infolabel6").click(function(){
        nextpage("str6",-1,-1);
    });
    $("#infolabel7").click(function(){
        nextpage("str7",-1,-1);
    });
    $("#infolabel8").click(function(){
        nextpage("str8",-1,-1);
    });
    
//////////////导航栏按钮start
    //全局变量以及堆栈声明
    pages=-1;//表示最大角标
    pages_now=-1;//表示当前角标
    pages_id='';//前缀
    
    thepast= new Array;//每个元素是一个3元素数组
    function inthepast(){
        var temp=thepast[thepast.length-1];
        if((temp!=undefined)&&(!((pages!=temp[0])||(pages_now!=temp[1])||(pages_id!=temp[2]))))
        {
            return;
        }
        thepast.push(new Array(pages,pages_now,pages_id));
    }
    function outthepast(){
        past=thepast.pop();
        if(past!=undefined)
        {
            pages=past[0];
            pages_now=past[1];
            pages_id=past[2];
            return true;
        }
        else
        {
            return false;
        }
    }
    
    //面板标签们和Main点击翻页效果完全体
    function nextpage(id,now,page)
    {
        inthepast();
        pages_id=id;
        pages=page;
        pages_now=now;
        var thepage='#'+pages_id;
        if(pages>=0){thepage+=pages_now}
        $("#board").animate({left:"-2000px"},"fast",function(){
                if(pages_id=='')
                {
                    $("#board").html("");
                }
                else
                {
                    $("#board").html($(thepage).html());
                }
                $("#board").hide(1,function(){
                    $("#board").animate({left:"3000px"},1,function(){
                        $("#board").show(1,function(){
                            $("#board").animate({left:"0px"},"fast")
                        })
                    });
                });
            });
        panelctrl(false);
    }
    
    //按钮单击事件
    $("#nextbtn").click(function(){
        if(pages_now>=pages)
        {return;}
        else
        {
            inthepast();
            $("#board").animate({left:"-2000px"},"fast",function(){
                pages_now++;
                $("#board").html($('#'+pages_id+pages_now).html());
                $("#board").hide(1,function(){
                    $("#board").animate({left:"3000px"},1,function(){
                        $("#board").show(1,function(){
                            $("#board").animate({left:"0px"},"fast")
                        })
                    });
                });
            });
        }
    });
    $("#backbtn").click(function(){
        var temp=outthepast();
        if(temp)
        {
            if(pages_id=='')
            {
                $("#board").animate({left:"3000px"},"fast",function(){
                $("#board").html("");
                $("#board").hide(1,function(){
                    $("#board").animate({left:"-2000px"},1,function(){
                        $("#board").show(1,function(){
                            $("#board").animate({left:"0px"},"fast")
                        })
                    });
                });
            });
                return;
            }
            $("#board").animate({left:"3000px"},"fast",function(){
                var thepage='#'+pages_id;
                if(pages>=0){thepage+=pages_now}
                $("#board").html($(thepage).html());
                $("#board").hide(1,function(){
                    $("#board").animate({left:"-2000px"},1,function(){
                        $("#board").show(1,function(){
                            $("#board").animate({left:"0px"},"fast")
                        })
                    });
                });
            });
        }
        else
        {return;}
    });
    $("#mainbtn").click(function(){
        if(pages_id=="")
        {
            return;
        }
        else
        {
            nextpage("",-1,-1);
        }
    });
//////////////导航栏按钮end
    
});
    
    
//手指演示动画
$(document).ready(function(){
    $("#fingerclick0").show(1000,function(){
        $("#fingerclick0").animate({top:"-10px",right:"40%"},2000,function(){
            $("#fingerclick0").attr("src","./李丹阳的简历_files/images/click.png");
            $("html").click(function(){$("#fingerclick0").hide("fast",function(){
                $("#fingerclick0").remove();
            })});
        });
    });
});
function shownext(){
    $("#fingerclick1").show(1000,function(){
        $("#fingerclick1").animate({top:"93%",right:"25%"},2000,function(){
            $("#fingerclick1").attr("src","./李丹阳的简历_files/images/click.png");
            $("html").click(function(){$("#fingerclick1").hide("fast",function(){
                $("#fingerclick1").remove();
            })});
        });
    });
}
