function getAQI(callback) {
	console.log("get aqi");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var list = JSON.parse(this.responseText);
			callback(list);
		}
	};
	xhttp.open("GET", "http://opendata2.epa.gov.tw/AQI.json", true);
	xhttp.send();
}

function embed(tag, value) {
	return "<" + tag + ">" + value + "</" + tag + ">";
}

function toNumber(value) {
	var result = Number(value);
	if (result) {
		return result;
	}
	return "--"
}
