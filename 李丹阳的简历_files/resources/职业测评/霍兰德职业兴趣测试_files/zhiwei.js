var whereZW = new Array(); 
function comefromZW(loca,locacity){
	this.loca = loca;
	this.locacity = locacity;
} 
/*
	whereZW[0]= new comefromZW("请选择","请选择");
	whereZW[1]= new comefromZW("销售","|全部|销售总监|销售经理|区域销售经理|销售主管|销售工程师|销售代表|销售助理|医药销售代表|电话销售|渠道/分销管理|渠道/分销专员|经销商|客户经理/主管|客户代表|其他");
	whereZW[2] = new comefromZW("市场/市场拓展/公关","|全部|市场总监/经理/主管|市场营销经理/主管|市场营销专员/助理|市场策划/企划|市场调研与分析|市场专员/市场助理|市场拓展|公关经理/主管|公关专员|媒介经理/主管|媒介专员/媒介购买|促销督导|产品.品牌经理/产品.品牌主管|产品/品牌专员|会务专员|其他"); 
	whereZW[3] = new comefromZW("商务/采购/贸易","|全部|商务经理/主管|商务专员/助理|采购经理/主管|采购专员/助理|外贸.贸易经理/外贸.贸易主管|外贸/贸易专员|业务跟单|报关员|其他"); 
	whereZW[4] = new comefromZW("计算机软、硬件/互联网/IT","|全部|首席技术官CTO/首席信息官CIO|技术总监/经理|高级软件工程师|软件工程师|高级硬件工程师|硬件工程师|软件测试|硬件测试|网站运营管理|系统管理员|网络管理员|互联网软件开发工程师|网络工程师|网络与信息安全工程师|信息技术经理/主管|信息技术专员|网页设计/制作|网站编辑|游戏设计/开发|技术支持/维护经理|技术支持/维护工程师|质量工程师|系统工程师|系统分析师/架构师|数据库开发工程师|数据库管理员|EPR技术/开发应用|研发工程师|项目经理/主管|产品经理/主管|语音/视频/图形|其他"); 
	whereZW[5] = new comefromZW("电子/半导体/仪表仪器","|全部|电子/电气工程师|电子元器件工程师|电路工程师/技术员|电池/电源开发|半导体技术|无线电工程师|机电工程师|FAE现场应用工程师|自动化工程师|产品工艺/规划/制程工程师|家用电器/数码产品研发|仪器/仪表/计量|其他");

	whereZW[6] = new comefromZW("通信技术","|全部|通信技术工程师|有线传输工程师|无线通信工程师|电信交换工程师|数据通信工程师|移动通信工程师|电信网络工程师|通信电源工程师|其他"); 

	whereZW[7] = new comefromZW("客户服务/技术支持","|全部|客户服务总监|客户服务经理/主管|客服服务专员/助理|客户咨询热线/呼叫中心人员|客户协调|售前/售后技术支持管理|售前/售后技术支持工程师|其他"); 
	whereZW[8] = new comefromZW("行政/后勤","|全部|行政总监|行政经理/主管/办公室主任|行政专员/助理|经理助理/秘书/文员|前台/总机/接待|图书/资料/档案管理|后勤|其他"); 
	whereZW[9] = new comefromZW("人力资源 ","|全部|人力资源总监|人力资源经理/主管|人力资源专员/助理|招聘经理/主管|招聘专员/助理|培训经理/主管|培训专员/助理/培训师|薪酬福利/绩效考核/员工关系|猎头顾问/助理|其他"); 
	whereZW[10] = new comefromZW("高级管理","|全部|首席执行官CEO/总裁/总经理|首席技术官CTO/首席信息官CIO|首席运营官COO|首席财务官CFO|副总裁/副总经理|分公司/分支机构/办事处经理|总裁助理/总经理助理|合伙人|总监|其他"); 
	whereZW[11] = new comefromZW("生产/加工/制造","|全部|工厂厂长/副厂长|项目经理/主管|项目工程师|成产主管/督导/组长|生产经理/车间主任|质量管理|设备管理|化验/检验|仓库物料|采购管理|产品开发/技术或工艺|维修工程师|工业工程师|制造工程师|其他"); 
	whereZW[12] = new comefromZW("质控/安检","|全部|质量管理/测试经理(QA/QC经理)|质量管理/测试主管(QA/QC主管)|质量管理/测试工程师(QA/QC工程师)|质量检验员/测试员|认证工程师/审核员|供应商/采购设备与材料质量管理|安全管理|其他"); 
	whereZW[13] = new comefromZW("工程机械","|全部|工程机械经理|工程机械主管|机械工程师|机械设计师|机械制图员|技术文档工程师|其他"); 
	whereZW[14] = new comefromZW("技工","|全部|汽车修理工/机修工|电工/电焊工/铆焊工|钳工/钣工|车床/磨床/铣床/冲床工|空调工/电梯工/锅炉工|铲车/叉车工|水工/木工/油漆工|模具工|普工|其他"); 
	whereZW[15] = new comefromZW("财会/审计/统计","|全部|首席财务官CFO|财务总监|财务经理|财务主管/总账主管|财务分析经理/主管|财务分析员|财务/会计助理|财务/出纳员|会计经理/主管|会计|审计经理/主管|审计专员/助理|统计员|税务经理/主管|税务专员/助理|成本经理/主管|其他"); 
	whereZW[16] = new comefromZW("金融/银行/保险/证券/投资","|全部|融资总监|融资经理/融资主管/专员|风险管理/控制/稽查|信贷管理/资信评估|银行经理/主任|银行会计/柜员|保险代理/经纪人|保险精算/产品研发|核保理赔|储备经理人|证券总监/部门经理|证券/期货/外汇经纪人|外汇交易/基金/国债经理人|投资/理财顾问|客户经理/主管|客户服务|其他"); 
	whereZW[17] = new comefromZW("建筑/房地产/装修/物业","|全部|土建工程管理/项目经理|高级建筑工程师/总工|工程监理/质量工程师|建筑师/土建工程师|结构工程师|给排水工程/暖通/制冷工程|造价师/预算师|施工员|房地产开发/策划/评估|房地产中介/交易|城市规划/景观设计|室内外装潢设计|物业经理/主管|物业管理专员/助理|物业招商/租赁/租售|物业维修|其他"); 
	whereZW[18] = new comefromZW("交通/仓储/物流","|全部|运输经理/主管|调度员|快递员/速递员|司机|仓库经理/主管|仓库管理员|物流经理/主管|物流专员/助理|海运/空运操作人员|其他"); 
	whereZW[19] = new comefromZW("普通劳动力/家政服务","|全部|保安保洁|家政人员|普工|其他");
	whereZW[20] = new comefromZW("零售业","|全部|店长/卖场经理|店员/营业员/导购员|收银员|理货员/陈列员|兼职店员|促销专员/导购|其它");
	whereZW[21] = new comefromZW("教育/培训","|全部|教授/讲师/助教|教师|教学/教务管理人员|教育产品开发|家教|教练|幼教|其它");
	whereZW[22] = new comefromZW("咨询/顾问","|全部|咨询总监|咨询经理/主管|咨询员|培训师|专业顾问|情报信息分析|其它");
	whereZW[23] = new comefromZW("学术/科研","|全部|科研管理人员|科研人员|其它");
	whereZW[24] = new comefromZW("法律","|全部|法律部经理/主任|律师/律师助理|法律顾问|法务人员|产权/专利顾问/专业代理|其它");
	whereZW[25] = new comefromZW("美术/设计/创意","|全部|设计管理人员|创意指导/总监|美术编辑/美术设计|平面设计|产品/包装设计|多媒体/动画设计|工艺品/珠宝设计|家具设计|服装设计|展示/装潢设计|其它");
	whereZW[26] = new comefromZW("编辑/文案/传媒/影视/新闻","|全部|总编/副总编/主编|编辑/作家/撰稿人|文案/策划|艺术/设计|排版设计/完稿|校对/录入|出版/印刷/发行|导演/编导/影视制作|摄影师/记者|主持人/演员/模特/配音|经纪人|后期制作/音效师|化妆师/造型师/服装/道具|其它");
	whereZW[27] = new comefromZW("酒店/餐饮/旅游/娱乐","|全部|酒店管理|娱乐或餐饮管理|大堂经理/领班|前厅接待/礼仪/迎宾|厨师|调酒师|营养师|导游/票务|服务业|保安|其它");
	whereZW[28] = new comefromZW("化工","|全部|化工工程师|化学制剂研发|化学操作|化学分析|化学技术|其它");
	whereZW[29] = new comefromZW("能源/矿产/地质勘查 ","|全部|石油天然气技术人员|电力工程师/技术员|空调/热能工程师|核力/火力工程师|智能大厦/综合布线/弱电|地质勘查|其它");
	whereZW[30] = new comefromZW("医疗/护理/保健/美容","|全部|医疗管理人员|医生/医师|心理医生|药库主任/药剂师|护士/护理人员|医药质检|医药代表|针灸推拿|健身教练|美容师/整形师|宠物护理/兽医|其它");
	whereZW[31] = new comefromZW("生物/制药/医疗器械","|全部|生物工程/生物制药|药品生产/质量管理|临床研究/协调|医药研发/药品注册|医疗器械推广|医药代表|其它");
	whereZW[32] = new comefromZW("翻译（口译与笔译）","|全部|英语类|日语类|德语类|法语类|俄语类|韩语类|其它语种类");
	whereZW[33] = new comefromZW("公务员","|全部|公务员|其它");
	whereZW[34] = new comefromZW("环境科学/环保","|全部|环境管理/保护|环境工程技术/园林景区|环保技术|其它");
	whereZW[35] = new comefromZW("农/林/牧/渔业","|全部|农/林/牧/渔业|其它");
	whereZW[36] = new comefromZW("兼职/临时/培训生/储备干部","|全部|兼职/临时|培训生|储备干部|其它");
	whereZW[37] = new comefromZW("在校学生","|全部|应届毕业生|非应届毕业生/实习生|其他"); 
	whereZW[38] = new comefromZW("其他","|全部|其它"); */

	whereZW[0]= new comefromZW("请选择");
	whereZW[1]= new comefromZW("销售");
	whereZW[2] = new comefromZW("市场/市场拓展/公关"); 
	whereZW[3] = new comefromZW("商务/采购/贸易"); 
	whereZW[4] = new comefromZW("计算机软、硬件/互联网/IT"); 
	whereZW[5] = new comefromZW("电子/半导体/仪表仪器");

	whereZW[6] = new comefromZW("通信技术"); 

	whereZW[7] = new comefromZW("客户服务/技术支持"); 
	whereZW[8] = new comefromZW("行政/后勤"); 
	whereZW[9] = new comefromZW("人力资源 "); 
	whereZW[10] = new comefromZW("高级管理"); 
	whereZW[11] = new comefromZW("生产/加工/制造"); 
	whereZW[12] = new comefromZW("质控/安检"); 
	whereZW[13] = new comefromZW("工程机械"); 
	whereZW[14] = new comefromZW("技工"); 
	whereZW[15] = new comefromZW("财会/审计/统计"); 
	whereZW[16] = new comefromZW("金融/银行/保险/证券/投资"); 
	whereZW[17] = new comefromZW("建筑/房地产/装修/物业"); 
	whereZW[18] = new comefromZW("交通/仓储/物流"); 
	whereZW[19] = new comefromZW("普通劳动力/家政服务");
	whereZW[20] = new comefromZW("零售业");
	whereZW[21] = new comefromZW("教育/培训");
	whereZW[22] = new comefromZW("咨询/顾问");
	whereZW[23] = new comefromZW("学术/科研");
	whereZW[24] = new comefromZW("法律");
	whereZW[25] = new comefromZW("美术/设计/创意");
	whereZW[26] = new comefromZW("编辑/文案/传媒/影视/新闻");
	whereZW[27] = new comefromZW("酒店/餐饮/旅游/娱乐");
	whereZW[28] = new comefromZW("化工");
	whereZW[29] = new comefromZW("能源/矿产/地质勘查");
	whereZW[30] = new comefromZW("医疗/护理/保健/美容");
	whereZW[31] = new comefromZW("生物/制药/医疗器械");
	whereZW[32] = new comefromZW("翻译（口译与笔译）");
	whereZW[33] = new comefromZW("公务员");
	whereZW[34] = new comefromZW("环境科学/环保");
	whereZW[35] = new comefromZW("农/林/牧/渔业");
	whereZW[36] = new comefromZW("兼职/临时/培训生/储备干部");
	whereZW[37] = new comefromZW("在校学生"); 
	whereZW[38] = new comefromZW("其他");


function $$ZW(p){
	return document.getElementById(p);
}

function selectZW() {
	with($$ZW('zhiwei1')) {
		var loca2 = options[selectedIndex].value; 
	}
	for(i = 0;i < whereZW.length;i ++) {
		if (whereZW[i].loca == loca2) {
			loca3 = (whereZW[i].locacity).split("|");
			for(j = 0;j < loca3.length;j++) {
				with($$ZW('zhiwei2')) {
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

function selectZhiWei() {
	with($$ZW('zhiwei1')) {
		var loca2 = options[selectedIndex].value;
	}
	for(i = 0;i < whereZW.length;i ++) {
		if (whereZW[i].loca == loca2) {
			loca3 = (whereZW[i].locacity).split("|");
			for(j = 0;j < loca3.length;j++) {
				with($$ZW('zhiwei2')) {
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

function initZW(city,area) {
	with($$ZW('zhiwei1')) {
		length = whereZW.length;
		for(k=0;k<whereZW.length;k++) {
			options[k].text = whereZW[k].loca;
			options[k].value = whereZW[k].loca;
		}
		options[selectedIndex].text = whereZW[0].loca;
		options[selectedIndex].value = whereZW[0].loca;
	}

	with($$ZW('zhiwei2')) {
		loca3 = (whereZW[0].locacity).split("|");
		length = loca3.length;
		for(l=0;l<length;l++) {
			options[l].text = loca3[l];
			options[l].value = loca3[l];
		}
		options[selectedIndex].text = loca3[0];
		options[selectedIndex].value = loca3[0];
	}

	if(city.length<=0) return;

	for(i = 0;i < whereZW.length;i++){
		//alert(whereZW.length);
		if(whereZW[i].loca==city){
			$$ZW('zhiwei1').options[i].selected=true;
			loca4 = (whereZW[i].locacity).split("|");
			flag=false;
			for(j=0;j<loca4.length;j++){
				//添加至city下拉中
				with($$ZW('zhiwei2')) {length = loca4.length; options[j].text = loca4[j]; options[j].value = loca4[j];}
				if(area.length>0){if(loca4[j]==area){$$ZW('zhiwei2').options[j].selected=true;flag=true;}}
			}
			if(!flag&&$$ZW('zhiwei2').options.length>=1){$$ZW('zhiwei2').selectedIndex=1;}
		}
	}
}

