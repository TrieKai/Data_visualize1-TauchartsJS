$.getJSON('easygo_data.json', function (data) {
	console.log(data)
	var townName = [];
	var workKind = [];
	var obj = [];
	
	for (i in data) {
		var count = 0;
		for (j in townName){
			if (data[i].TOWN_NAME == townName[j]){
				count = count + 1;
			}
		}
		if (count == 0){
			townName.push(data[i].TOWN_NAME);
		}
	}
	console.log(townName)
	
	for (i in data) {
		var count = 0;
		for (j in workKind){
			if (data[i].WORK_KIND == workKind[j]){
				count = count + 1;
			}
		}
		if (count == 0){
			workKind.push(data[i].WORK_KIND);
		}
	}
	console.log(workKind)
	
	for (a in townName){
		for (b in workKind){
			samCount = 0;
			for (c in data){
				if (townName[a] == data[c].TOWN_NAME && workKind[b] == data[c].WORK_KIND){
				samCount = samCount + 1;
				}
			}
			obj.push({
				town: townName[a],
				工作種類: workKind[b],
				count: samCount
			});
		}
	}
	console.log(obj)
	//KEYVALUE可以塞2個以上
	var chart = new tauCharts.Chart({
		guide: {
		  x: {label:'鄉鎮市'},  // custom label for X axis
		  y: {label:'數量'},    // custom label for Y axis
		  padding: {b:40,l:40,t:10,r:10},   // chart paddings
		},
		data: obj,
		type: 'bar',           
		x: "town",
		y: 'count',
		color: '工作種類',
		plugins: [
			tauCharts.api.plugins.get('legend')(),
			tauCharts.api.plugins.get('tooltip')({
        })
		],
	});
	chart.renderTo('#bar');
})
