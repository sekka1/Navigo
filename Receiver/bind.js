function bindInit() {
	console.log('initBind')
	setTimeout(function(){
		cAPI = new CloudAPI('fiasqrx5mli')
		cAPI.disq('th','cnn',null,onTh)
	},1000)
}

function onTh(data) {
	console.log(JSON.stringify(data))
}