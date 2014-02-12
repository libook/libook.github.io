var where = new Array(); 
function comefrom(loca,locacity){
	this.loca = loca;
	this.locacity = locacity;
} 
/*
	where[0]= new comefrom("请选择","请选择");
	where[1]= new comefrom("高新技术","|全部|互联网/电子商务|计算机(软件/硬件/网络/安全)|IT咨询与系统继承|通讯/电信(设备/运营)|移动增值服务|游戏|半导体|生物科技|纳米技术|国防|其它");
	where[2] = new comefrom("人事招聘","|全部|猎头与招聘服务|企业内人事/招聘|其它"); 
	where[3] = new comefrom("广告公关","|全部|广告|公关|市场推广|其它"); 
	where[4] = new comefrom("企业服务","|全部|管理咨询|市场调研|职业培训|会展服务|其它"); 
	where[5] = new comefrom("媒体","|全部|广播电视|报纸杂志|出版/杂志|网络媒体|媒体制作|其它"); 
	where[6] = new comefrom("文化艺术","|全部|影视戏剧|工艺美术|表演艺术|音乐|文学|摄影|博物馆/文化机构|其它"); 
	where[7] = new comefrom("法律","|全部|法律|其它"); 
	where[8] = new comefrom("金融财务","|全部|风险投资/私人投资|投资银行|银行|保险|理财与财务服务|金融|会计/审计/税务|证券/基金|其它"); 
	where[9] = new comefrom("餐饮/旅游/娱乐/体育","|全部|休闲娱乐|运动/体育|旅游业|餐饮业|休闲设施与服务|酒店/旅馆|其它"); 
	where[10] = new comefrom("服务业","|全部|中介服务(房地产/留学…)|翻译|家政服务|租赁服务|其它"); 
	where[11] = new comefrom("教育/科研","|全部|幼儿教育|中小学教育|高等教育|成人教育|远程教育/E-learning|科研机构|其它");
	where[12] = new comefrom("培训/咨询","|全部|其它");
	where[13] = new comefrom("消费品","|全部|服装服饰|体育用品|烟草业|食品加工|酒制品/饮料|家电/电器|日用品|家具|零售业|批发业|进出口|珠宝|办公设备/用品|其它"); 
	where[14] = new comefrom("房地产/建筑/装潢","|全部|房地产|建筑设计/工程|建材|室内设计/装潢|其它"); 
	where[15] = new comefrom("医疗保健","|全部|心理咨询|医院|制药|兽医|医疗保健服务|医疗设备|其它"); 
	where[16] = new comefrom("运输物流","|全部|物流/供应链|运输/汽运/铁路/水运|仓储服务|航空客运/货运|邮政/包裹/零担货运|客运及城市公共交通|其它"); 
	where[17] = new comefrom("制造加工业","|全部|航空航天|汽车及零配件|化工|电力/电气|石油/能源|纺织品|机械/机电/重工业制造|工业自动化/仪器仪表|采掘冶炼|其它"); 
	where[18] = new comefrom("农林牧渔业","|全部|农业|林业|畜牧业|渔业|其它"); 
	where[19] = new comefrom("政府及公共事业机构","|全部|政府/司法/军事机构|公共事业机构|其它"); 
	where[20] = new comefrom("非盈利机构/协会/社团","|全部|非盈利机构|慈善机构|协会/学会|社团/俱乐部|其它");
	where[21] = new comefrom("在校学生","|全部|在校学生"); 
	where[22] = new comefrom("其他","|全部|其它"); 
*/
	where[0]= new comefrom("请选择");
	where[1]= new comefrom("高新技术");
	where[2] = new comefrom("人事招聘"); 
	where[3] = new comefrom("广告公关"); 
	where[4] = new comefrom("企业服务"); 
	where[5] = new comefrom("媒体"); 
	where[6] = new comefrom("文化艺术"); 
	where[7] = new comefrom("法律"); 
	where[8] = new comefrom("金融财务"); 
	where[9] = new comefrom("餐饮/旅游/娱乐/体育"); 
	where[10] = new comefrom("服务业"); 
	where[11] = new comefrom("教育/科研");
	where[12] = new comefrom("培训/咨询");
	where[13] = new comefrom("消费品"); 
	where[14] = new comefrom("房地产/建筑/装潢"); 
	where[15] = new comefrom("医疗保健"); 
	where[16] = new comefrom("运输物流"); 
	where[17] = new comefrom("制造加工业"); 
	where[18] = new comefrom("农林牧渔业"); 
	where[19] = new comefrom("政府及公共事业机构"); 
	where[20] = new comefrom("非盈利机构/协会/社团");
	where[21] = new comefrom("在校学生"); 
	where[22] = new comefrom("其他");
	
function $$(p){
	return document.getElementById(p);
}

function selectH() {
	with($$('province')) {
		var loca2 = options[selectedIndex].value; 
	}
	for(i = 0;i < where.length;i ++) {
		if (where[i].loca == loca2) {
			loca3 = (where[i].locacity).split("|");
			for(j = 0;j < loca3.length;j++) {
				with($$('hangye')) {
					length = loca3.length;
					options[j].text = loca3[j];
					options[j].value = loca3[j];
					var loca4=options[selectedIndex].value;
					
					if(length>1){
						selectedIndex=1;
					}
				}
			}
			break;
		}
	}
}

function selectHangYe() {
	with($$('province')) {
		var loca2 = options[selectedIndex].value;
	}
	for(i = 0;i < where.length;i ++) {
		if (where[i].loca == loca2) {
			loca3 = (where[i].locacity).split("|");
			for(j = 0;j < loca3.length;j++) {
				with($$('hangye')) {
					length = loca3.length;
					options[j].text = loca3[j];
					options[j].value = loca3[j];
					var loca4=options[selectedIndex].value;
				}
			}
			break;
		}
	}
}

function init(city,area) {
	with($$('province')) {
		length = where.length;
		for(k=0;k<where.length;k++) {
			options[k].text = where[k].loca;
			options[k].value = where[k].loca;
		}
		options[selectedIndex].text = where[0].loca;
		options[selectedIndex].value = where[0].loca;
	}

	with($$('hangye')) {
		loca3 = (where[0].locacity).split("|");
		length = loca3.length;
		for(l=0;l<length;l++) {
			options[l].text = loca3[l];
			options[l].value = loca3[l];
		}
		options[selectedIndex].text = loca3[0];
		options[selectedIndex].value = loca3[0];
	}

	if(city.length<=0) return;

	for(i = 0;i < where.length;i++){
		//alert(where.length);
		if(where[i].loca==city){
			$$('province').options[i].selected=true;
			loca4 = (where[i].locacity).split("|");
			flag=false;
			for(j=0;j<loca4.length;j++){
				//添加至city下拉中
				with($$('hangye')) {length = loca4.length; options[j].text = loca4[j]; options[j].value = loca4[j];}
				if(area.length>0){if(loca4[j]==area){$$('hangye').options[j].selected=true;flag=true;}}
			}
			if(!flag&&$$('hangye').options.length>=1){$$('hangye').selectedIndex=1;}
		}
	}
}

