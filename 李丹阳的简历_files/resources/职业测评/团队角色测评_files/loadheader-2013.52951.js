(function(){var n={www:"http://www.dajie.com",job:"http://job.dajie.com",c:"http://c.dajie.com",cJob:"http://job.c.dajie.com",weibo:"http://apps.weibo.com/djcareer"};var c={img:"http://assets.dajieimg.com/images/header/dj_logo_2013.png",url:n.www+"/home"};var l={img:"http://assets.dajieimg.com/images/header/dj_logo_m_2013.png",url:n.www+"/home"};var i={img:"http://assets.dajieimg.com/images/header/dj_logo_c_2013.png",url:n.c+"/circle/home"};var f=function(q){var p=!q?"www":"c";var r=!q?"job":"cJob";return[["帐号设置",n[p]+"/settings/avatar"]]};var g=function(q){var p=!q?"www":"c";var r=!q?"job":"cJob";return[["职位邀请",n[r]+"/invitation/unhandled","invitation-notice-tag"],["站内信",n[p]+"/message/inbox","mailbox-notice-tag"],["人脉邀请",n[p]+"/notice/invite?from=menu","buddyinvite-notice-tag"],["系统消息",n[p]+"/notice/note","system-notice-tag"],["评论/回复",n[p]+"/notice/comment","commentreply-notice-tag"]]};var e=[{name:"首页",url:n.www,sublist:[]},{name:"我的档案",url:n.www+"/profile/mine",sublist:[]},{name:"职位",url:n.job+"/",sublist:[]},{name:"公司",url:n.www+"/corp/?f=nav",sublist:[]},{name:"问答",url:n.www+"/ask/home",sublist:[]}];var d=[{name:"首页",url:n.www,sublist:[]},{name:"我的档案",url:n.www+"/profile/mine",sublist:[]},{name:"校园招聘",url:"http://campus.dajie.com/campusIndex",sublist:[]},{name:"公司",url:n.www+"/corp/?f=nav",sublist:[]},{name:"问答",url:n.www+"/ask/home",sublist:[]}];var b=[{name:"首页",url:n.www,sublist:[]},{name:"职位",url:n.job+"/",sublist:[]},{name:"公司",url:n.www+"/corp/?f=nav",sublist:[]}];var k=[{name:"首页",id:"HOME",url:n.www,sublist:[]},{name:"我的档案",id:"PROFILE",url:n.www+"/profile/mine",sublist:[]},{name:"人脉",id:"CARD",url:n.www+"/profile/search/index",sublist:[]},{name:"职业圈",id:"CIRCLE",url:n.www+"/circle/home",sublist:[["我的职业圈","","title"],["我的校友圈","","separate"],["+&nbsp;添加经历",n.www+"/circle/finishguide/createpractice?f=nav","separate","button"]]},{name:"职位",id:"JOB",url:n.job+"/index",sublist:[["找工作",n.job+"/index"],["校园招聘","http://campus.dajie.com/campusIndex"],["我的投递反馈",n.job+"/jobapply/feedback"],["我的简历",n.job+"/resume/index"],["发布职位",n.job+"/recruit/create","separate"],["我的招聘",n.job+"/recruit/list"]]},{name:"公司",id:"CORP",url:n.www+"/corp/?f=nav",sublist:[]},{name:"问答",id:"ASK",url:n.www+"/ask/home",sublist:[]},{name:"更多",url:"javascript:void(0);",sublist:[["读书",n.www+"/book?from=nav","","isnew:dj-nav-new-book"],["投票",n.www+"/vote"],["技能/专长",n.www+"/skill"],["评测中心",n.www+"/ce"],["非你莫属","http://fnms.dajie.com?from=nav"],["职场身价",n.www+"/identify/index?from=nav"],["移动应用",n.www+"/html/phone/"]],isnew:"dj-nav-new-book"}];var m=[{name:"首页",id:"HOME",url:n.www,sublist:[]},{name:"我的档案",id:"PROFILE",url:n.www+"/profile/mine",sublist:[]},{name:"人脉",id:"CARD",url:n.www+"/profile/search/index",sublist:[]},{name:"职业圈",id:"CIRCLE",url:n.www+"/circle/home",sublist:[["我的职业圈","","title"],["我的校友圈","","separate"],["+&nbsp;添加经历",n.www+"/circle/finishguide/createpractice?f=nav","separate","button"]]},{name:"职位",id:"JOB",url:n.job+"/index",sublist:[["找工作",n.job+"/index"],["我的投递反馈",n.job+"/jobapply/feedback"],["我的简历",n.job+"/resume/index"],["发布职位",n.job+"/recruit/create","separate"],["我的招聘",n.job+"/recruit/list"]]},{name:"公司",id:"CORP",url:n.www+"/corp/?f=nav",sublist:[]},{name:"问答",id:"ASK",url:n.www+"/ask/home",sublist:[]},{name:"更多",url:"javascript:void(0);",sublist:[["读书",n.www+"/book?from=nav","","isnew:dj-nav-new-book"],["投票",n.www+"/vote"],["技能/专长",n.www+"/skill"],["评测中心",n.www+"/ce"],["非你莫属","http://fnms.dajie.com?from=nav"],["职场身价",n.www+"/identify/index?from=nav"],["移动应用",n.www+"/html/phone/"]],isnew:"dj-nav-new-book"}];var a=[{name:"首页",id:"HOME",url:n.www,sublist:[]},{name:"我的档案",id:"PROFILE",url:n.www+"/profile/mine",sublist:[]},{name:"人脉",id:"CARD",url:n.www+"/profile/search/index",sublist:[]},{name:"职业圈",id:"CIRCLE",url:n.www+"/circle/home",sublist:[["我的职业圈","","title"],["我的校友圈","","separate"],["+&nbsp;添加经历",n.www+"/circle/finishguide/createpractice?f=nav","separate","button"]]},{name:"校园招聘",id:"JOB",url:"http://campus.dajie.com/campusIndex",sublist:[["应届生项目","http://campus.dajie.com/campusIndex"],["找全职",n.job+"/index"],["找实习",n.job+"/job/intern"],["我的投递反馈",n.job+"/jobapply/feedback"],["我的简历",n.job+"/resume/index"],["发布职位",n.job+"/recruit/create","separate"],["我的招聘",n.job+"/recruit/list"]]},{name:"公司",id:"CORP",url:n.www+"/corp/?f=nav",sublist:[]},{name:"问答",id:"ASK",url:n.www+"/ask/home",sublist:[]},{name:"更多",url:"javascript:void(0);",sublist:[["读书",n.www+"/book?from=nav","","isnew:dj-nav-new-book"],["投票",n.www+"/vote"],["技能/专长",n.www+"/skill"],["评测中心",n.www+"/ce"],["非你莫属","http://fnms.dajie.com?from=nav"],["职场身价",n.www+"/identify/index?from=nav"],["移动应用",n.www+"/html/phone/"]],isnew:"dj-nav-new-book"}];var j=[{name:"首页",id:"HOME",url:n.weibo+"/www/c/circle/home",sublist:[]},{name:"我的档案",id:"PROFILE",url:n.weibo+"/www/c/profile/mine",sublist:[]},{name:"人脉",id:"CARD",url:n.weibo+"/www/c/profile/search/index",sublist:[]},{name:"职位",id:"JOB",url:n.weibo+"/job/c",sublist:[["找工作",n.job+"/"],["校园招聘","http://campus.dajie.com/"],["校园人才库",n.weibo+"/job/c/candidate/campus/search"],["发布新职位",n.weibo+"/job/c/post/create","separate"],["我发布的职位",n.weibo+"/job/c/recruit/list"],["我收到的简历",n.weibo+"/job/c/apply/profile/index"],["我的面试安排",n.weibo+"/job/c/interview/schedule"]]},{name:"公司",id:"CORP",url:n.weibo+"/www/c/corp/?f=nav",sublist:[]},{name:"职场身价",id:"IDENTIFY",url:n.weibo+"/www/c/identify/sinac/welcome?from=nav",sublist:[]},{name:"问答",id:"ASK",url:n.weibo+"/www/c/ask/home",sublist:[]}];var o='<div id="dj-nav-type-change" class="dj-nav-<%= navVersion %>"><p class="dj-nav-type-change-tit" title="<% if(navVersion=="pro"){ %>职场版<% }else{ %>校园版<% } %>"><%= navVersion %></p><% if(!isMini){ %><div class="dj-nav-type-change-list"><span></span><ul><li class="dj-nav-pro">职场版 Pro</li><li class="dj-nav-campus">校园版 Campus</li></ul></div><div class="dj-nav-type-change-tip dj-nav-<%= navVersion %>-tip" <% if(!isTip){ %>style="display:none;"<% } %> ><a class="remove" href="#">关闭</a><p><% if(navVersion=="pro"){ %>还在上学吗<% }else{ %>已经工作了吗<% } %></p><div><span class="btn">立即切换</span><% if(navVersion=="pro"){ %>切换到校园版（Campus）看看<% }else{ %>切换到职场版（Pro）看看<% } %></div></div><div class="dj-nav-type-change-tip2" style="display:none;"><a class="remove" href="#">关闭</a>以后点这里切换职场版/校园版</div><% } %><div id="dj-nav-type-change-alert" style="display:none;"><div class="dj-nav-type-change-alert"><p class="b">切换至<% if(navVersion=="pro"){ %>校园<% }else{ %>职场<% } %>版吗？</p><p>确定后将无法进入部分<% if(navVersion=="pro"){ %>职场<% }else{ %>校园<% } %>版专属服务</p><div><a class="big-fresh J_DialogOK" href="javascript:void(0);"><span>确定</span></a><a class="big-normal J_DialogCancel" href="javascript:void(0);"><span>取消</span></a></div></div></div></div>';var h='<div id="header"><div id="logo"><h1><a href="<%= logo.url %>"><img src="<%= logo.img %>" alt="大街网"/></a></h1><%= change %></div><div class="dj-top-section clearfix"><div class="dj-uinfo-action"><% if (!isMini) { %><div id="dajie-notice-region1" class="dj-user-activity clearfix" style="<% if (!isLogin || !isActive) { %>display:none;<% } %>"><div id="total-notice-tag" class="message-tips _has-tips"><div class="inner"><a href="http://www.dajie.com/notice/index" id="total-invite"><span class="icon-g icon-i"></span><span class="tips-g" id="total-invite-number"></span></a></div></div><div id="total-notice-tag2" class="message-tips _has-tips"><div class="inner"><a href="http://www.dajie.com/message/inbox" id="total-message"><span class="icon-g icon-m"></span><span class="tips-g" id="total-message-number"></span></a></div></div><div id="total-notice-tag3" class="message-tips _has-tips"><div class="inner"><a href="http://www.dajie.com/notice/index" id="total-notice"><span class="icon-g icon-n"></span><span class="tips-g" id="total-notice-number"></span></a></div></div></div><% } %><div id="login-header-region" class="dj-user-info" style="<% if (!isLogin) { %>display:none;<% } %>"><div class="uinfo-inner"><div class="user-avatar"><% if (isMini) { %><a class="aname" href="<%= baseUrl %>/profile/mine"><span class="uname"><%= name %></span><b class="arrow-ud"></b></a><% }else{ %><a href="<%= baseUrl %>/profile/mine"><img src="<%= avatar %>" alt="<%= name %>" /></a><% } %></div><div class="user-stuff"><ul class="nav-select"><% for (var i = 0, j = person.length; i < j; i++) { %><li><a href="<%= person[i][1] %>"><%= person[i][0] %></a></li><% } %><li class="has-separate last"><a class="dj-hd-special-out" href="<%= baseUrl %>/account/logout" title="">退出</a></li></ul></div></div></div><div id="unlogin-header-region" class="login-pls" style="<% if (isLogin) { %>display:none;<% } %>"><a title="登录" href="<%= baseUrl %>/account/login">登录</a><b class="dj-top-separate"></b><a title="注册" href="http://www.dajie.com/account/reg?from=header">注册</a></div></div><div class="dj-nav-g"><ul id="dj-nav-list" class="dj-nav-list clearfix"><% for (var i = 0, j = channel.length; i < j; i ++) { %><li class="<% if (currentChannel.split("-")[0] == channel[i].id && !isMini) { %>current <% } %> <% if (channel[i].sublist.length) { %>has-more clearfix<% } %>" ><a href="<%= channel[i].url %>" title="<%= channel[i].name %>" <% if(isC){ %>blank="_top"<% } %> ><cite><%= channel[i].name %><% if (channel[i].sublist.length) { %><b class="arrow-ud"> </b><% } %></cite></a><% if (channel[i].isnew && !isMini) { %><span id="<%= channel[i].isnew %>" class="new" style="display:none;"></span><% } %><% if (channel[i].sublist.length) { %><ul class="nav-select"><% for (var sublist = channel[i].sublist, m = 0, n = sublist.length; m < n; m ++) { %><li class="<% if (m == 0){ %>first <% } %><% if (m == n-1){ %>last <% } %><% if (sublist[m][2] == "separate"){ %>has-separate<% } %>"><% if (sublist[m][2]){ %><% if (sublist[m][1]){ %><% if (sublist[m][3] == "button"){ %><a <% if(isC){ %>blank="_top"<% } %> class="dj-hd-special-add" href="<%= sublist[m][1] %>"><%= sublist[m][0] %></a><% }else{ %><a <% if(isC){ %>blank="_top"<% } %> href="<%= sublist[m][1] %>" <% if (channel[i].name == "职业圈"){ %>title="<%= sublist[m][0] %>"<% } %> ><%= sublist[m][0] %></a><% } %><% }else{ %><span><%= sublist[m][0] %></span><% } %><% }else{ %><a <% if(isC){ %>blank="_top"<% } %> href="<%= sublist[m][1] %>" <% if (channel[i].name == "职业圈"){ %>title="<%= sublist[m][0] %>"<% } %> ><% if (sublist[m][3] && (sublist[m][3].split(":")[0] == "isnew") && !isMini) { %><i><%= sublist[m][0] %><span id="<%= sublist[m][3].split(":")[1] %>" class="new" style="display:none;"></span></i><% }else{ %><%= sublist[m][0] %><% } %></a><% } %></li><% } %></ul><% } %></li><% } %></ul></div></div></div>';window.G_dj_head_getHeader=function(){var q=n[_staticHeader.isC?"c":"www"];$.ajax({url:q+"/navigation/usernav",dataType:"jsonp",data:"",jsonp:"callback",success:p});function p(s){var x={baseUrl:q,channel:k,mail:g(_staticHeader.isC),person:f(_staticHeader.isC),logo:c,isC:_staticHeader.isC,isMini:_staticHeader.isMini,isLogin:s.isLogin,currentChannel:_staticHeader.currentChannel,name:s.loginUserName,avatar:s.loginUserAvatar,navVersion:s.navVersion==-1?"normal":(s.navVersion==0?"campus":"pro"),isMatch:s.isMatch,isTip:!s.isMatch&&t(!s.isMatch),change:"",isActive:s.isActive};var z=x.isLogin;if(x.isMini){if(z){if(x.navVersion=="campus"){x.channel=d}else{x.channel=e}}else{x.channel=b}x.logo=l}else{if(x.navVersion=="pro"){x.channel=m}if(x.navVersion=="campus"){x.channel=a}}if(x.isC){x.channel=j;x.logo=i}if(x.currentChannel=="JOB"){if(z&&x.navVersion=="campus"){$(".dj-sub-title h2").html("校园招聘<em>CAMPUS</em>")}else{$(".dj-sub-title h2").html("职位<em>CAREER</em>")}}function t(r){if($.cookie("dj-hd-type-time-limit")){return false}if(!r){return false}if(!$.cookie("dj-hd-type-time")){return true}else{return false}}function u(){var r=new Date();r.setTime(r.getTime()+(60*60*1000)*24*7);$.cookie("dj-hd-type-time","1",{path:"/",domain:"dajie.com",expires:r})}(function(){var E;var r=[];var F=x.channel;for(var D in F){if(F[D]["name"]=="职业圈"){E=F[D];break}}if(!E){return}if(!s.schoolCircles.length&&!s.professionCircles.length){E.sublist=[]}else{if(s.professionCircles.length){r.push(E.sublist[0]);for(var D=0,C=s.professionCircles.length;D<C;D++){r.push(s.professionCircles[D])}}E.sublist.shift();if(s.schoolCircles.length){r.push(E.sublist[0]);for(var D=0,C=s.schoolCircles.length;D<C;D++){r.push(s.schoolCircles[D])}}E.sublist.shift();r.push(E.sublist[0])}E.sublist=r})();if(!x.isC&&z&&(s.navVersion!=-1)){var w=template.compile(o);var A=w(x);x.change=A}var v=template.compile(h);var y=v(x);$("#header-fix").html(y);function B(){var C=location.pathname;var r=location.hostname;if(C.indexOf("corp")==1){return true}if(C.indexOf("careertalk")==1&&r=="company.dajie.com"){return true}return false}if(x.isMini){if(B()){$("#header-fix").removeAttr("id")}}(function(){if(x.isMini){$("#dj-header-wrap").addClass("dj-top-micro");(function(){var r=$(".dj-uinfo-action");var D=r.find(".uname");var C=D.outerWidth();C=(C>40)?80:C;D.width(C);r.width(C==80?106:80)})()}if(x.isC){$("#dj-header-wrap").addClass("dj-top-smart")}})();(function(){$("#dj-nav-list .new").each(function(){var r=$(this);if(!$.cookie("c-"+r.attr("id"))){r.show()}});$("#dj-nav-list > li > a").click(function(){var C=$(this).next(".new");if(C.length){var r=new Date();r.setTime(r.getTime()+(60*60*1000)*24*180);$.cookie("c-"+C.attr("id"),"1",{path:"/",domain:"dajie.com",expires:r})}});$("#dj-nav-list .nav-select > li > a").click(function(){var C=$(this).find(".new");if(C.length){var r=new Date();r.setTime(r.getTime()+(60*60*1000)*24*180);$.cookie("c-"+C.attr("id"),"1",{path:"/",domain:"dajie.com",expires:r})}})})();(function(){var C='<iframe class="iframe-mask" frameborder="0" style="" src="javascript:void(0);"></iframe>',r=[];$(".has-more, #login-header-region > .uinfo-inner, #dajie-notice-region").each(function(D){$(this).bind("mouseover",function(){var I=$(this);if(I.parents("#dj-nav-list").length&&!I.hasClass("has-more")){return false}var H=I.find(".nav-select"),E=H.outerWidth(),F=H.outerHeight();I.addClass("on");if(I.hasClass("uinfo-inner")){var G=I.outerWidth()-2;G=(G<94)?94:G;H.css({width:G});E=G;r[4]="1"}if(!H.parents(".on").find("iframe").length){H.parents(".on").append(C)}$(".on").find("iframe").css({width:E,height:F});I.find(".iframe-mask").show()}).bind("mouseleave",function(){var E=$(this);if(E.parents("#dj-nav-list").length&&!E.hasClass("has-more")){return false}E.removeClass("on");E.find(".iframe-mask").hide()})});$("#dj-header-wrap .dj-nav-g, #dj-header-wrap .dj-uinfo-action").mouseout(function(D){if(D.clientY<0){setTimeout(function(){$(".dj-nav-g li, #login-header-region .uinfo-inner, #dajie-notice-region").removeClass("on");$("#dj-header-wrap .iframe-mask").hide()},0)}})})();(function(){$("#unlogin-header-region a:eq(1)").bind("click",function(D){if(typeof window.dj_hd_reg_login_dialog=="function"){D.preventDefault();dj_hd_reg_login_dialog("reg");typeof click_b=="function"&&click_b("header_float_reg")}if($.cookie("custom_reg")!=null){var r=new Date();var C=new Date(r.getFullYear()-1,r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getMinutes());$.cookie("custom_reg","",{expires:C,path:"/",domain:"www.dajie.com"})}});$("#unlogin-header-region a:eq(0)").bind("click",function(r){if(typeof window.dj_hd_reg_login_dialog=="function"){r.preventDefault();dj_hd_reg_login_dialog("login");typeof click_b=="function"&&click_b("header_float_login")}})})();(function(){if(x.isLogin){if($("#dajie-notice-region").length>0){$("#dajie-notice-region").show();try{setTimeout(function(){$.getScript(n.www+"/notice/check?t="+new Date().getTime())},1000);setInterval(function(){$.getScript(n.www+"/notice/check?t="+new Date().getTime())},5000*60)}catch(r){}}}})();(function(){_staticHeader.changeNav=r;_staticHeader.navType=s.navVersion;if(x.isMini||x.isC){return}if(!z){return}var G=$(".dj-nav-type-change-tit");var C=$(".dj-nav-type-change-list");var H=$(".dj-nav-type-change-tip");var F=$(".dj-nav-type-change-tip2");var D=$("#dj-nav-type-change").attr("class");G.click(function(I){if(H.css("display")!="none"){return false}F.hide();if(C.css("display")=="none"){C.show()}else{C.hide()}I.stopPropagation()});$(window).bind("click.navTypeChange",function(){C.hide()});C.find("li").click(function(){var J=$(this);var I=J.attr("class");if(D==I){return true}r()});H.find(".remove").click(function(I){H.hide();F.show();setTimeout(function(){F.hide()},5000);u();return false});F.find(".remove").click(function(I){F.hide();return false});H.find(".btn").click(function(){E(!s.navVersion-0)});function r(){if(x.isMatch){$.dialog("#dj-nav-type-change-alert",{title:"大街提示",mask:true,width:500,defbtn:false,mercy:false,oncomplete:function(){E(!s.navVersion-0)}})}else{E(!s.navVersion-0)}}function E(I){$.ajax({url:q+"/navigation/setnav",dataType:"jsonp",data:{version:I},jsonp:"callback",success:function(K){var J=new Date();J.setTime(J.getTime()+(60*60*1000)*24*7);var L=new Date();L.setTime(L.getTime()+(5*60*1000));$.cookie("dj-hd-type-time","1",{path:"/",domain:"dajie.com",expires:J});$.cookie("dj-hd-type-time-limit","1",{path:"/",domain:"dajie.com",expires:L});location.reload()},error:function(){}})}})();(function(){return;if(x.navVersion!="campus"){return}var r=$(".nav2 span:contains('找工作')");if(!r.length){return}if($.cookie("dj-hd-nav2-work-tip")){return}setTimeout(function(){$.tips({$point:r,$content:'<p style="padding:5px;">找实习搬到这啦！</p>',width:120,arrow:"bl",offset:30,zIndex:9,theme:"dj-tips-smart",onBtnX:function(){var C=new Date();C.setTime(C.getTime()+(60*60*1000)*24*365*10);$.cookie("dj-hd-nav2-work-tip","",{path:"/",domain:"dajie.com",expires:C})}})},1000)})();(function(){return;if($.cookie("dj-hd-nav2-stop")){return}var G=false;if($.browser.msie&&$.browser.version==6){G=true}var E=x.isMini;var C=$("#dj-header-wrap");var r=C.height();var F=$("<div><span>系统将于4月18日晚11:00~次日凌晨5:00进行升级，届时大街网将暂时无法访问，给您带来不便深感抱歉。</span></div>");var D=$('<a title="不在提示"></a>');D.addClass("remove").css({display:"inline-block"});F.css({"text-align":"center",background:"#fffcd9",border:"solid #f2e085","border-width":"1px 0","line-height":"28px",height:"28px","font-size":"12px",color:"#ff6600","z-index":-1});if(!E&&!G){F.css({position:"relative","vertical-align":"middle",top:46})}if(G){F.find("span").css({display:"inline-block","vertical-align":"top"})}C.css("height",r+30);F.append(D);C.append(F);D.click(function(){F.remove();C.removeAttr("style");var H=new Date();H.setTime(H.getTime()+(60*60*1000)*24*2);$.cookie("dj-hd-nav2-stop","1",{path:"/",domain:"dajie.com",expires:H})})})();(function(){if(x.isMini||x.isC||!x.isActive||!x.isLogin){return}var C=$.nowDate();function K(){template.helper("$setTime",R)}function R(an){var aq=an.split(/[\- \:]/);var ak=new Date(aq[0],aq[1]-1,aq[2],aq[3],aq[4]);var aj,ap,ao,am;if(C.getDate()==ak.getDate()){aj=ak.getHours();ap=ak.getMinutes();return al(aj)+":"+al(ap)}else{ao=ak.getMonth()+1;am=ak.getDate();return al(ao)+"-"+al(am)}function al(ar){return ar>=10?""+ar:"0"+ar}}function S(ak,aj){var am=ak.split(/[\- \:]/);var al=new Date(am[0],am[1]-1,am[2],am[3],am[4])-0;return al>aj}var I={num:"/ui-include/getinfo-num.php",info:"/ui-include/getinfo-user.php",message:"/ui-include/getinfo-user.php",notice:"/ui-include/getinfo-user.php",delInfo:"/ui-include/getinfo-user-info-one.php",delInfo2:"/ui-include/getinfo-user-info-one.php",delLoad:"/ui-include/getinfo-user-info-one.php",addInfo:"/ui-include/getinfo-user-info-one2.php",addLoad:"/ui-include/getinfo-user-info-one2.php"};var J={num:"http://www.dajie.com/notice_layout/check",info:"http://www.dajie.com/notice_layout/invites",message:"http://www.dajie.com/notice_layout/inbox",notice:"http://www.dajie.com/notice_layout/note",delInfo:"http://www.dajie.com/notice_layout/invites/card/exchange/refuse",delInfo2:"http://www.dajie.com/notice_layout/invites/relationship",delLoad:"http://www.dajie.com/notice_layout/relationship/updatestatus",addInfo:"http://www.dajie.com/notice_layout/invites/card/exchange/accept",addLoad:"http://www.dajie.com/notice_layout/relationship/updateStatus"};var ae='<div class="notice-hd"><a href="http://job.dajie.com/invitation/unhandled" class="b">职位邀请<% if(positionInvite.num){ %> <em class="jnum">(<%= positionInvite.num %>)</em><% } %></a></div><div class="notice-bd"><ul class="itemList"><% var info = positionInvite.itemInfo, j = info.length; if(!j){ %><li class="noneMini">还没收到新的职位邀请，看看过去的<a href="http://job.dajie.com/invitation/unhandled">职位邀请</a></li><% }else{ %><% for (var i = 0; i < j; i++) { %><li class="<% if(info[i].heightLight) {%>new<% }%> <% if(!info[i].hasRead) {%>unread<% }%>" rel="http://job.dajie.com/invitation/unhandled"><div class="uavatar"><img src="<%= info[i].avatar %>"></div><div class="itemInfo"><p class="info-hd"><span class="time-bar"><%= $setTime(info[i].time) %></span><span class="title-bar"><%= info[i].name %><em>（<%= info[i].jobTit.length > 11 ? info[i].jobTit.slice(0, 10)+"..." : info[i].jobTit %>）</em></span></p><p class="info-text"><% switch(info[i].type){case 0:case undefined: %>邀请你投递<% break;case 1: %>邀请你投递<% break; case 2: %>邀请你参加<% break;} %><b><%= info[i].positionName.length > 41 ? info[i].positionName.slice(0, 40)+"..." : info[i].positionName %></b><% switch(info[i].type){case 0:case undefined: %>职位<% break;case 1: %>相关职位<% break; case 2: %>相关活动<% break;} %></p></div></li><% } %><% } %></ul></div><div class="notice-hd"><a href="http://www.dajie.com/notice/invite?from=menu" class="b">人脉邀请<% if(networkInvite.num){ %> <em class="pnum">(<%= networkInvite.num %>)</em><% } %></a></div><div class="notice-bd"><ul class="itemList"><% var info = networkInvite.itemInfo, j = info.length; if(!j){ %><li class="noneMini2">还没收到人脉邀请，去看看<a href="http://www.dajie.com/card/maybeknow" target="_blank">可能认识的人</a></li><% }else{ %><% for (var i = 0; i < j; i++) { %><li uid="<%= info[i].uid %>" noticeid="<%= info[i].noticeId %>" class="<%if(i+1==j){%>last-child<%}%>" ><div class="uavatar"><a href="<%= info[i].profileUrl %>" target="_blank" nocardtips="true"><img src="<%= info[i].avatar %>"></a></div><div class="itemInfo"><% if(info[i].messageUrl){ %><p class="info-hd"><span class="close-bar"><a href="#" class="remove"></a></span><span class="title-bar"><a href="<%= info[i].profileUrl %>" class="b" target="_blank" nocardtips="true"><%= info[i].name %></a>已和你结为联系人</span></p><p class="info-text"><a href="<%= info[i].profileUrl %>" target="_blank" nocardtips="true">查看档案</a><span class="dian">·</span><a href="<%= info[i].messageUrl %>" target="_blank">写站内信</a></p><% }else if(info[i].friendName){ %><p class="info-hd"><span class="title-bar"><a href="<%= info[i].profileUrl %>" class="b" target="_blank" nocardtips="true"><%= info[i].name %></a><span class="g9">（<a href="<%= info[i].friendProfileUrl %>" target="_blank" nocardtips="true"><%= info[i].friendName %></a>引荐）</span></span></p><p class="info-text"><span class="btn"><a class="small-fresh" href="<%= info[i].detailUrl %>" target="_blank"><span>查看</span></a><a class="small-default"><span>忽略</span></a></span><%= info[i].corp.length > 6 ? info[i].corp.slice(0, 6) : info[i].corp %>&nbsp;<%= info[i].jobTit.length > 6 ? info[i].jobTit.slice(0,6) : info[i].jobTit %></p><% }else{ %><p class="info-hd"><span class="title-bar"><a href="<%= info[i].profileUrl %>" class="b" target="_blank" nocardtips="true"><%= info[i].name %></a></span></p><p class="info-text"><span class="btn"><a class="small-fresh"><span>同意</span></a><a class="small-default"><span>忽略</span></a></span><%= info[i].corp.length > 6 ? info[i].corp.slice(0, 6) : info[i].corp %>&nbsp;<%= info[i].jobTit.length > 6 ? info[i].jobTit.slice(0,6) : info[i].jobTit %></p><% } %></div></li><% } %><% } %></ul></div>';var aa='<% var info = positionInvite.itemInfo, j = info.length; if(!j){ %><li class="noneMini">还没收到新的职位邀请，看看过去的<a href="http://job.dajie.com/invitation/unhandled">职位邀请</a></li><% }else{ %><% for (var i = 0; i < j; i++) { %><li class="<% if(info[i].heightLight) {%>new<% }%> <% if(!info[i].hasRead) {%>unread<% }%>" rel="http://job.dajie.com/invitation/unhandled"><div class="uavatar"><img src="<%= info[i].avatar %>"></div><div class="itemInfo"><p class="info-hd"><span class="time-bar"><%= $setTime(info[i].time) %></span><span class="title-bar"><%= info[i].name %><em>（<%= info[i].jobTit.length > 11 ? info[i].jobTit.slice(0, 10)+"..." : info[i].jobTit %>）</em></span></p><p class="info-text"><% switch(info[i].type){case 0:case undefined: %>邀请你投递<% break;case 1: %>邀请你投递<% break; case 2: %>邀请你参加<% break;} %><b><%= info[i].positionName.length > 41 ? info[i].positionName.slice(0, 40)+"..." : info[i].positionName %></b><% switch(info[i].type){case 0:case undefined: %>职位<% break;case 1: %>相关职位<% break; case 2: %>相关活动<% break;} %></p></div></li><% } %><% } %>';var X='<% var info = networkInvite.itemInfo, j = info.length %><% for (var i = 0; i < j; i++) { %><li uid="<%= info[i].uid %>" noticeid="<%= info[i].noticeId %>"><div class="uavatar"><a href="<%= info[i].profileUrl %>" target="_blank" nocardtips="true"><img src="<%= info[i].avatar %>"></a></div><div class="itemInfo"><% if(info[i].messageUrl){ %><p class="info-hd"><span class="close-bar"><a href="#" class="remove"></a></span><span class="title-bar"><a href="<%= info[i].profileUrl %>" class="b" target="_blank" nocardtips="true"><%= info[i].name %></a>已和你结为联系人</span></p><p class="info-text"><a href="<%= info[i].profileUrl %>" target="_blank" nocardtips="true">查看档案</a><span class="dian">·</span><a href="<%= info[i].messageUrl %>" target="_blank">写站内信</a></p><% }else if(info[i].friendName){ %><p class="info-hd"><span class="title-bar"><a href="<%= info[i].profileUrl %>" class="b" target="_blank" nocardtips="true"><%= info[i].name %></a><span class="g9">（<a href="<%= info[i].friendProfileUrl %>" target="_blank" nocardtips="true"><%= info[i].friendName %></a>引荐）</span></span></p><p class="info-text"><span class="btn"><a class="small-fresh" href="<%= info[i].detailUrl %>" target="_blank"><span>查看</span></a><a class="small-default"><span>忽略</span></a></span><%= info[i].corp.length > 6 ? info[i].corp.slice(0, 5)+"..." : info[i].corp %>&nbsp;<%= info[i].jobTit.length > 6 ? info[i].jobTit.slice(0, 5)+"..." : info[i].jobTit %></p><% }else{ %><p class="info-hd"><span class="title-bar"><a href="<%= info[i].profileUrl %>" class="b" target="_blank" nocardtips="true"><%= info[i].name %></a></span></p><p class="info-text"><span class="btn"><a class="small-fresh"><span>同意</span></a><a class="small-default"><span>忽略</span></a></span><%= info[i].corp.length > 6 ? info[i].corp.slice(0, 5)+"..." : info[i].corp %>&nbsp;<%= info[i].jobTit.length > 6 ? info[i].jobTit.slice(0, 5)+"..." : info[i].jobTit %></p><% } %></div></li><% } %>';var ab='<div class="notice-hd"><a href="http://www.dajie.com/message/inbox" class="b">站内信<% if(message.num){ %><em class="mnum"> (<%= message.num %>)</em><% } %></a></div><div class="notice-bd"><% var info = message.itemInfo, j = info.length; if(j >5) {%><div class="hd-scroll-box"><% }%><ul class="itemList"><% if(!j){ %><li class="none">没有收到站内信</li><% }else{ %><% for (var i = 0; i < j; i++) { %><li class="<% if(info[i].heightLight) {%>new<% }%> <% if(!info[i].hasRead) {%>unread<% }%>" rel="<%= info[i].messageUrl %>"><div class="uavatar"><img src="<%= info[i].avatar %>"></div><div class="itemInfo"><p class="info-hd"><span class="time-bar"><%= $setTime(info[i].time) %></span><span class="title-bar"><%= info[i].name %></span></p><p class="info-text"><span class="title <% if(info[i].reply) {%>reply<% }%>"><%= info[i].title.length > 19 ? info[i].title.slice(0, 18)+"..." : info[i].title %></span></br><span class="content"><%= info[i].content.length > 19 ? info[i].content.slice(0, 18)+"..." : info[i].content %></span></p></div></li><% } %><% } %></ul><% if(j > 5) {%><div class="hd-scroll-bg"><span class="hd-scroll-bar"></span></div></div><div class="hd-scroll-mask"></div><% }%></div>';var U='<div class="notice-hd top-hd"><a href="http://www.dajie.com/notice/index" class="b">通知</a></div><div class="notice-bd"><% var info = notice.itemInfo, j = info.length; if(j >5) {%><div class="hd-scroll-box"><% }%><ul class="itemList"><% if(!j){ %><li class="none">没有收到新的通知</li><% }else{ %><% for (var i = 0; i < j; i++) { %><% if(typeof info[i] == "object"){ %><li class="<% if(info[i].heightLight) {%>new<% }%> <% if(!info[i].hasRead) {%>unread<% }%>" rel="<%= info[i].messageUrl %>"><div class="uavatar"><img src="<%= info[i].avatar %>"></div><div class="itemInfo"><p class="info-mline"><span class="time-bar"><%= $setTime(info[i].time) %></span><span class="title-bar"><%= info[i].content %></span></p></div></li><% }else{ %><%= info[i] %><% } %><% } %><% } %></ul><% if(j>5) {%><div class="hd-scroll-bg"><span class="hd-scroll-bar"></span></div></div><div class="hd-scroll-mask"></div><% }%></div>';var F=null;var ah,M,P;var V,Q,T;var Z,N,E;var ac=template.compile(X);var Y=template.compile(aa);var ai=(function(){var ap=null;var ao=true;var ak=null;var am=true;var al=null;var aj=true;var an={info:[undefined,false],message:[undefined,false],notice:[undefined,false]};return{num:function(){L("num",function(aq){var ar=[{$btn:Z,num:aq.invite,status:"info",$tip:ah},{$btn:N,num:aq.message,status:"message",$tip:M},{$btn:E,num:aq.notice,status:"notice",$tip:P}];$.each(ar,function(av,aw){var au=aw.num;aw["$btn"][au?"addClass":"removeClass"]("has-tips").find(".tips-g").text(au>99?"99":au).attr("num",au);var at=an[aw.status];if(at[0]==undefined||at[0]!=au){at[1]=true;at[0]=au;if(aw["$tip"].css("display")!="none"){ai[aw.status]()}}})});setTimeout(function(){ai.num()},1000*30)},info:function(){if(!an.info[1]&&!ao){return}ao=false;an.info[1]=false;if(!ap){ap=template.compile(ae)}L("info",function(aq){var ar=ap(aq);V.html(ar);H()})},message:function(){if(!an.message[1]&&!am&&!N.hasClass("has-tips")){return}am=false;an.message[1]=false;N.removeClass("has-tips");if(!ak){ak=template.compile(ab)}L("message",function(aq){var ar=ak(aq);Q.html(ar);W(Q);H()})},notice:function(){if(!an.notice[1]&&!aj&&!E.hasClass("has-tips")){return}aj=false;an.notice[1]=false;E.removeClass("has-tips");if(!al){al=template.compile(U)}L("notice",function(at){var aq=al(at);T.html(aq);var ar=T.find("ul");var au=ar.find("li");au.each(function(){var az=$(this);az.find(".reply-topic p:empty").remove();var aw=az.find(".reply-topic > p");var ay=aw.length-1;if(ay==0){var av=aw.find("a:last-child").attr("href");var ax=aw.text().replace(/\s/g,"");az.attr("rel",av);aw.removeClass("g9").removeClass("g6").removeAttr("style").html(ax)}else{aw.removeClass("g9").removeClass("g6").removeAttr("style").each(function(aC,aA){var aB=$(this);switch(aC){case ay:az.attr("rel",aB.find("a").attr("href"));aB.remove();break;default:var aD=aB.text().replace(/\s/g,"");aB.html(aD)}})}az.find("a img").each(function(){$(this).unwrap()})});T.find(".reply-topic .remove").remove();T.find(".number").each(function(aw,av){var ay=$(this);var az=ay.closest("li");var ax=ay.text();ay.text(R(ax));if(S(ax,at.notice.pullDate)){az.addClass("new")}});if(ar.height()>405&&!ar.parent().hasClass("hd-scroll-box")){ar.wrap('<div class="hd-scroll-box">').after('<div class="hd-scroll-bg" style="display: none;"><span class="hd-scroll-bar" style="top: 0px;"></span></div><div class="hd-scroll-mask"></div>')}W(T);H()})}}})();function L(aj,ak){$.ajax({url:J[aj],dataType:"jsonp",data:"",jsonp:"callback",success:function(al){if(typeof al=="object"){if(!template.prototype["$setTime"]){K()}ak(al)}}})}function ad(){ah=$.tips({"$content":'<div class="loading"></div>',name:"dj-subInfo","$point":Z,hasClose:false,arrow:"tc",width:360,distance:-4,arrowOffset:167,theme:"total-notice-sub",fixed:true}).hide();V=ah.find(".inn-con");M=$.tips({"$content":'<div class="loading"></div>',name:"dj-subMessage","$point":N,hasClose:false,arrow:"tc",width:360,distance:-4,offset:-45,arrowOffset:212,theme:"total-notice-sub",fixed:true}).hide();Q=M.find(".inn-con");P=$.tips({"$content":'<div class="loading"></div>',name:"dj-subNotice","$point":E,hasClose:false,arrow:"tc",width:360,distance:-4,offset:-90,arrowOffset:257,theme:"total-notice-sub",fixed:true}).hide();T=P.find(".inn-con")}function r(){var ak=M.find(".mnum");var aj=ak.text().replace(/[\(\)]/g,"")-1;ak.text("("+aj+")");return aj}function O(){var al=Z.find(".tips-g");var aj=al.attr("num")-0;var am=ah.find(".jnum");var ak=ah.find(".pnum");if(aj==0){return 0}aj-=1;al.text(aj>99?"99":aj).attr("num",aj);if(aj<=0){Z.removeClass("has-tips");am.text("");ak.text("")}}function H(){setTimeout(function(){$(".total-notice-sub li.new").removeClass("new")},2000)}var D=(function(){return function(){var aj=[{time:null,timeIn:null,$btn:Z,$tip:ah,status:"info"},{time:null,timeIn:null,$btn:N,$tip:M,status:"message"},{time:null,timeIn:null,$btn:E,$tip:P,status:"notice"}];var ak=ah.add(M).add(P);$("#dj-header-wrap .dj-uinfo-action").mouseout(function(al){if(al.clientY<0){setTimeout(function(){ak.hide()},0)}});$.each(aj,function(al,am){am["$btn"].add(am["$tip"]).hover(function(){clearTimeout(am.time);am.timeIn=setTimeout(function(){ak.not(am["$tip"]).hide();am["$tip"].show();ai[am.status]()},500)},function(){clearTimeout(am.timeIn);am.time=setTimeout(function(){am["$tip"].hide()},100)})})}})();var ag=function(){ah.add(M).add(P).delegate(".itemList li","click",function(){var al=$(this);var aj=al.attr("rel");var ak=al.parents(".total-notice-sub");al.removeClass("unread");if(aj){switch(ak[0]){case ah[0]:setTimeout(function(){$.ajax({url:J.info,dataType:"jsonp",jsonp:"callback",success:function(ao){var an=Z.find(".tips-g");var ap=ah.find(".jnum");ap.text(num?"("+num+")":"");var am=Y(ao);al.parent().html(am);H();ai.num()}})},100);break;case M[0]:r("message");break}ak.hide();open(aj)}})};var G=function(){ah.delegate(".small-default, .remove ","click",function(ap){var ao=$(this);var ak=ao.hasClass("small-default");if(ao.data("isClick")){return false}ao.data("isClick",true);var aq=ao.parents("li");var al=aq.parent();var an=aq.attr("uid");var aj=aq.attr("noticeid");$.ajax({url:ao.hasClass("remove")?J.delInfo2:J.delInfo,dataType:"jsonp",data:{status:"IGNORE_REQUEST",uid:an,noticeId:aj},jsonp:"callback",success:function(ar){ao.data("isClick",false);if(ar.networkInvite){am(ar)}else{ai.num()}}});function am(av){var ar="";var au=ah.find(".pnum");var at=av.networkInvite["num"];if(ak){O()}au.text(at?"("+at+")":"");if(av.networkInvite["itemInfo"].length){ar=ac(av)}else{ar=at==0?'<li class="noneMini">还没收到人脉邀请，去看看<a href="http://www.dajie.com/card/maybeknow" target="_blank">可能认识的人</a></li>':""}al.html(ar)}return false})};var af=function(){ah.delegate(".small-fresh","click",function(ao){var an=$(this);if(an.attr("href")){return}if(an.data("isClick")){return false}an.data("isClick",true);var ap=an.parents("li");var ak=ap.parent();var am=ap.attr("uid");var aj=ap.attr("noticeid");$.ajax({url:J.addInfo,dataType:"jsonp",data:{status:"ACCEPT_REQUEST",gids:1,uid:am,noticeId:aj},jsonp:"callback",success:function(aq){an.data("isClick",false);if(aq.networkInvite){al(aq)}else{ai.num()}}});function al(au){var aq="";var at=ah.find(".pnum");var ar=at.text().replace(/[\(\)]/g,"")-0;O();at.text(ar?"("+(ar-1)+")":"");if(au.networkInvite["itemInfo"].length){aq=ac(au)}ap.replaceWith(aq)}return false})};$(function(){Z=$("#total-notice-tag");N=$("#total-notice-tag2");E=$("#total-notice-tag3");ad();ai.num();D();ag();G();af()});var W=function(){};(function(){var aj=$(".hd-scroll-box");var al=$.browser.mozilla;W=function(am){setTimeout(function(){var an=am.find(".hd-scroll-box");if(!an.length){return false}var aq=an.find(".itemList");var ap=an.find(".hd-scroll-bar");var ar=aq.height();var ao=an.height();ap.css("height",ao*ao/ar)},0)};$(".hd-scroll-box").live(al?"DOMMouseScroll":"mousewheel",function(ao,aq){ao.preventDefault();ao.stopPropagation();var ap=$(this);var aq=aq||ao.wheelDelta||ao.detail;var am=aq<0?-1:1;if(al){am=-am}an();function an(){var av=ap.find(".itemList");var ax=ap.find(".hd-scroll-bg");var au=ap.find(".hd-scroll-bar");var at=parseInt(av.css("top").replace(/px/,""))||0;var aw=-(av.height()-ap.height());var ar=at+am*20;ar=ar>=0?0:ar;ar=ar<=aw?aw:ar;av.css({top:ar+"px"});au.css({top:(ap.height()-au.height())*(at/aw)});clearTimeout(ap.data("scrollBarScrollShow"));ax.show();ap.data("scrollBarScrollShow",setTimeout(function(){ax.hide()},1000))}});$(".hd-scroll-bar").live("mousedown",function(ar){var aq=$(this);var ap=aq.parents(".hd-scroll-box");var au=ap.find(".hd-scroll-bg");var ao=ap.find(".itemList");var an=ar.clientY;var am=parseInt(aq.css("top").replace(/px/,""))||0;var at=ap.height()-aq.height();ap.data("scrollBar",true);ap.bind("mousemove.scrollBar",function(ax){var aw=ax.clientY;var av=am+aw-an;av=av>0?av:0;av=av<at?av:at;aq.css({top:av});ao.css({top:-(av/at)*(ao.height()-ap.height())});ap.data("scrollBarAutoShow",false);au.addClass("hover")}).bind("selectstart.scrollBar",function(av){return false})});aj.live("mouseup mouseleave",function(){var am=$(this);var an=am.find(".hd-scroll-bg");am.unbind("mousemove.scrollBar").unbind("selectstart.scrollBar");am.data("scrollBar",false);am.data("scrollBarAutoShow",true);an.removeClass("hover")});aj.live("mouseenter",function(aq){var ap=$(this);var ar=ap.find(".hd-scroll-bg");var an=ap.width();var ao=ap.offset()["left"];var am=aq.clientX;if(am==undefined){return}if(ao+an-am>30){ar.fadeIn();setTimeout(function(){ar.fadeOut()},1500)}});aj.live("mousemove",ak).live("mouseleave",function(){var am=$(this);var an=am.find(".hd-scroll-bg");an.fadeOut()});function ak(aq){var ap=$(this);var ar=ap.find(".hd-scroll-bg");var an=ap.width();var ao=ap.offset()["left"];var am=aq.clientX;if(am==undefined){return}if(ao+an-am<30){ar.fadeIn();ap.data("scrollBarAutoShow",true)}else{if(ap.data("scrollBarAutoShow")){ar.fadeOut();ap.data("scrollBarAutoShow",false)}}}})()})()}}})();