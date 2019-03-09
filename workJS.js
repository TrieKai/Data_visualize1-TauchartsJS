function sortByKey(array, key) {
	return array.sort(function(a, b) {
		var x = a[key]; var y = b[key];
		return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	});
}

$.getJSON('com_data.json', function (data) {
	var ratioArray = [];

	for (i = 1; i < data.length; i++){
		var ratio1 = (data[i].COUNT3/data[i].COUNT2)*100
		var ratio2 = (data[i].COUNT5/data[i].COUNT4)*100
		
		ratioArray.push({
			單位代號: data[i].APP_UNIT,
			單位名稱: data[i].UNIT2,
			未申報竣工率: ratio1,
			未提報竣工率: ratio2
		});
	}
	console.log(ratioArray)
		
	
	declare = sortByKey(ratioArray, '未申報竣工率').slice(0, 10);
	report = sortByKey(ratioArray, '未提報竣工率').slice(0, 10);
	console.log(declare)
	console.log(report)
	
	var chart = new tauCharts.Chart({
		guide: {
		  x: {label:'單位名稱'},  // custom label for X axis
		  y: {label:'比例'},    // custom label for Y axis
		  padding: {b:40,l:40,t:10,r:10},   // chart paddings
		},
		data: declare,
		type: 'bar',           
		x: "單位名稱",
		y: '未申報竣工率',
		--->//color: '工作種類',
		plugins: [
			tauCharts.api.plugins.get('legend')(),
			tauCharts.api.plugins.get('tooltip')({
        })
		],
	});
	chart.renderTo('#bar');
})
