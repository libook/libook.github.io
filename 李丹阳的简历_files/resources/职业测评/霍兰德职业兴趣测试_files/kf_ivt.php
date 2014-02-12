	function hz6d$(id)
	{
		return document.getElementById(id) ? document.getElementById(id) : null;
	}
	var hz6d_guest_id = "";
	var hz6d_get_guest_id_over = 0;
	var hz6d_get_guest_id_num = 5;
	var hz6d_get_guest_id_timer = 0;
	var hz6d_cus_web_msg_gids = "";
	var hz6d_block_trace_guest = false;
	var hz6d_block_trace_over = false;

	var hz6d_flash_html='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="1" height="1" align="middle" id="mainserverim"><param name="allowScriptAccess" value="always" /><param name="movie" value="http://chat.53kf.com/flash/hz6d_53kf_kf_gid.swf"/><param name="quality" value="high" /><param name="wmode" value="transparent"><param name="bgcolor" value="#ffffff" /><embed name="mainserverim" src="http://chat.53kf.com/flash/hz6d_53kf_kf_gid.swf" quality="high" wmode="transparent" bgcolor="#ffffff" width="1" height="1" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" swLiveConnect="true"/></object>';
	document.write(hz6d_flash_html);

	function returnGid(args){
		hz6d_guest_id = args;
		hz6d_get_guest_id_over = 1;
	}

	function hz6d_get_guest_id(){
		if(hz6d_get_guest_id_over==0 && hz6d_get_guest_id_num>0){
			hz6d_get_guest_id_num--;
			setTimeout("hz6d_get_guest_id()", 500);
		}else{
			// 已经获得guest_id或者重复获取次数已满 
			clearTimeout(hz6d_get_guest_id_timer);

			// guest_id guest_ip 是否在block_trace中，即是否阻止轨迹 
      hz6d_block_trace_guest = (function(){
        var ip = "",
            id = hz6d_guest_id,
            block_trace_guest_id = [],
            block_trace_guest_ip = [];
        for (var i = 0; i < block_trace_guest_id.length; i++)
        {
          if (id == block_trace_guest_id[i] && id != '') return true;
        }
        
        for(var i = 0; i < block_trace_guest_ip.length; i++)
        {
          if (ip == block_trace_guest_ip[i] && ip != '') return true;
        }
        return false;
      })();
      // 取消轨迹采集锁定
			hz6d_block_trace_over = true;

			if(hz6d_guest_id!="" && hz6d_guest_id>0){
				if(hz6d_cus_web_msg_gids.indexOf(hz6d_guest_id)>=0){
					var url = "http://www3.53kf.com/lword_reply.php?company_id=70697378&guest_id="+hz6d_guest_id;
					//hz6d_createScript("hz6d_lword_reply", url);
				}
			}
		}
	}

	function hz6d_cus_web_msg_open(){
		var openurl = "http://www3.53kf.com/webCompany.php?arg=xinjingying&style=1&kflist=off&kf=&zdkf_type=1&language=cn&charset=utf-8&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=http%3A%2F%2Fwww.xjy.cn%2Fceping%2FReport%2F%23main&keyword=http%3A%2F%2Fwww.xjy.cn%2Fceping%2FTst%2FQuestion%2Findex%2Fcid%2F3&brief=&logo=&question=";
		try{
			window.open(openurl,"_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
		}catch(e){}
	}

	hz6d_get_guest_id_timer = setTimeout("hz6d_get_guest_id()", 500);  var openurl_minkh = "http://www3.53kf.com/webClientMin.php?company_id=70697378&style=1&kflist=off&kf=&zdkf_type=1&language=cn&charset=utf-8&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=http%3A%2F%2Fwww.xjy.cn%2Fceping%2FReport%2F%23main&keyword=http%3A%2F%2Fwww.xjy.cn%2Fceping%2FTst%2FQuestion%2Findex%2Fcid%2F3&brief=&logo=&question=";
  var minkh_params = "&language=cn&charset=utf-8&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=http%3A%2F%2Fwww.xjy.cn%2Fceping%2FReport%2F%23main&keyword=http%3A%2F%2Fwww.xjy.cn%2Fceping%2FTst%2FQuestion%2Findex%2Fcid%2F3&brief=&logo=&question=&tfrom=3";
  function hz6d_insertAfter(newEl, targetEl)
  {
    var parentEl = targetEl.parentNode;
    if(parentEl.lastChild == targetEl)
    {
      return parentEl.appendChild(newEl);
    }else
    {
      return parentEl.insertBefore(newEl,targetEl.nextSibling);
    }
  }
  function hz6d_creElm(o, t, a, loc) {
    loc = loc || 0;
    var d = document, db = document.body;
    var b = d.createElement(t || 'div');
    for (var p in o) {
        p == 'style' ? b[p].cssText = o[p] : b[p] = o[p]
    }
    if (loc == 0) return (a || db).insertBefore(b, (a || db).firstChild);
    else return hz6d_insertAfter(b,(a || db).lastChild);
  }
  var create_flp_jquery_timer = window.setInterval(function(){
		if (!document.getElementById('hz6d_flp_jquery')) {
      hz6d_creElm({
        id: 'hz6d_flp_jquery',
        src: 'http://www3.53kf.com/minkh/js/jquery-1.4.2.flp.js?20121127002',
        charset: "utf-8",
        type: 'text/javascript'
      },'script', document.body, 1);
			clearInterval(create_flp_jquery_timer);
		}
  },500);
 
  var create_minkh_js_timer = setInterval(function(){
    if (!document.getElementById('hz6d_minkh_js') && typeof window.FLP !== 'undefined') {
      hz6d_creElm({
        id: 'hz6d_minkh_js',
        src: 'http://www3.53kf.com/minkh.php?company_id=70697378&domain_name=xinjingying&kflist=off&kf=&zdkf_type=1&style_id=1&guest_id=' + hz6d_guest_id,
        charset: "utf-8",
        type: 'text/javascript'
      },'script');
      clearInterval(create_minkh_js_timer);
    }
  },500);
  

