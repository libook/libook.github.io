//检测用户名
function checkUserName(){
	
	var user = $('#name').val();
	if(user ==''){
		$('#UserNameMessage').html('姓名不能为空').css("color","red");
		return 0;	
	}else if(!/^[a-zA-Z\u4e00-\u9fa5]+$/.test(user)){
		$('#UserNameMessage').html('姓名格式不正确').css("color","red");
	}else{
		$('#UserNameMessage').html('姓名格式正确').css("color","green");
		return 1;
	}
	
}

//检测邮箱
function checkEmail(){
	var email = $('#email').val();

		if(email ==''){
		$('#EmailMessage').html('邮箱不能为空').css("color","red");
			return 0;				
		}else if(!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email)){
			$('#EmailMessage').html('邮箱格式不正确').css("color","red");
			return 0;					
		}else{
			$('#EmailMessage').html('邮箱格式正确').css("color","green");	
			return 1;
		}
	
	
}

//检测手机
function checkPhone(){
	var phone = $('#phone').val();
	var	mobileRe=/^(13|15|18)(\d){9}?/;
	
	if(phone == ''){
		$('#PhoneMessage').html('请&nbsp;&nbsp;&nbsp;填&nbsp;&nbsp;&nbsp;写');
		$('#PhoneMessage').css({"color":'red'});
		return 0;
	}else if(!mobileRe.test(phone) || phone.length != 11){
		$('#PhoneMessage').html('手机号码格式有误');
		$('#PhoneMessage').css({"color":'red'});
		return 0;
	}else{
		$('#PhoneMessage').html('手机号码格式正确');
		$('#PhoneMessage').css({"color":'green'});
		return 1;
	}
}


//检测性别
function checkSex(){
	var sex = $('input[name="sex"]:checked').val()
	//alert(sex);
	//var sex = document.getElementById(obj);
	
	//var is_check = document.getElementById('sexMessage');
	if(sex == undefined){
		$('#sexMessage').html('请&nbsp;&nbsp;&nbsp;选&nbsp;&nbsp;&nbsp;择');
		$('#sexMessage').css({"color":'red'});
		return 0;
	}else{
		$('#sexMessage').html('已&nbsp;&nbsp;&nbsp;选&nbsp;&nbsp;&nbsp;择');
		$('#sexMessage').css({"color":'green'});
		return 1;
	}
}

//检测工作年限
function checkYear(){
	var year = $('#year').val();
	//alert(year);
	//var is_check = document.getElementById('yearMessage');
	
	if(year == '0'){
		$('#yearMessage').html('x');
		$('#yearMessage').css({"color":'red'});
		return 0;
	}else{
		$('#yearMessage').html('ok');
		$('#yearMessage').css({"color":'green'});
		return 1;
	}
	
}


//检测行业
function checkTrade(){
	var trade = $('#province').val();
	//alert(trade);
	//var hangye = $('#hangye').val();
	//alert(hangye);
	
	//var is_check = document.getElementById('TradeMessage');
	if(trade == "请选择"){
		$('#TradeMessage').html('x');
		$('#TradeMessage').css({"color":'red'});
		return 0;
	}else{
		
		$('#TradeMessage').html('ok');
		$('#TradeMessage').css({"color":'green'});
		return 1;
	}
}

//检测职位
function checkPosition(){
	var position = $('#zhiwei1').val();
	//alert(position);
	//var zhiwei = $('#zhiwei2').val();
	//alert(zhiwei);
	
	//var is_check = document.getElementById('positionMessage');
	if(position == "请选择"){
		$('#positionMessage').html('x');
		$('#positionMessage').css({"color":'red'});
		return 0;
	}else{
		
		$('#positionMessage').html('ok');
		$('#positionMessage').css({"color":'green'});
		return 1;
	}
}

//检查常住地
function checkAdd(){
	var province = $('#s_province').val();
	//alert(province);
	var city = $('#s_city').val();
	//alert(city);
	//var county = $('#s_county').val();
	//alert(county);
	//var is_check = document.getElementById('addMessage');
	if((province && city) == "请选择"){
		$('#addMessage').html('x');
		$('#addMessage').css({"color":'red'});
		return 0;
	}else{
		
		$('#addMessage').html('ok');
		$('#addMessage').css({"color":'green'});
		return 1;
	}
}

//打印结果
function iFrameHeight() { 
	var ifm= document.getElementById("iframepage"); 
	var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument; 
	if(ifm != null && subWeb != null) { 
		ifm.height = subWeb.body.scrollHeight; 
	} 
} 
