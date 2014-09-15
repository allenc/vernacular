var languages = [
	["af","Afrikaans"],
	["sq","Albanian"],
	["ar","Arabic"],
	["az","Azerbaijani"],
	["eu","Basque"],
	["bn","Bengali"],
	["be","Belarusian"],
	["bg","Bulgarian"],
	["ca","Catalan"],
	["zh-CN","Chinese Simplified"],
	["zh-TW","Chinese Traditional"],
	["hr","Croatian"],
	["cs","Czech"],
	["da","Danish"],
	["nl","Dutch"],
	["en","English"],
	["eo","Esperanto"],
	["et","Estonian"],
	["tl","Filipino"],
	["fi","Finnish"],
	["fr","French"],
	["gl","Galiian"],
	["ka","Georgian"],
	["de","German"],
	["el","Greek"],
	["gu","Gujarati"],
	["ht","Haitian Creole"],
	["iw","Hebrew"],
	["hi","Hindi"],
	["hu","Hungarian"],
	["is","Icelandic"],
	["id","Indonesian"],
	["ga","Irish"],
	["it","Italian"],
	["ja","Japanese"],
	["kn","Kannada"],
	["ko","Korean"],
	["la","Latin"],
	["lv","Latvian"],
	["lt","Lithuanian"],
	["mk","Macedonian"],
	["ms","Malay"],
	["mt","Maltese"],
	["no","Norwegian"],
	["fa","Persian"],
	["pl","Polish"],
	["pt","Portuguese"],
	["ro","Romanian"],
	["ru","Russian"],
	["sr","Serbian"],
	["sk","Slovak"],
	["sl","Slovenian"],
	["es","Spanish"],
	["sw","Swahili"],
	["sv","Swedish"],
	["ta","Tamil"],
	["te","Telugu"],
	["th","Thai"],
	["tr","Turkish"],
	["uk","Ukrainian"],
	["ur","Urdu"],
	["vi","Vietnamese"],
	["cy","Welsh"],
	["yi","Yiddish"],
];

var printLang = function() {
	var oldHTML = document.getElementById("languages-select").innerHTML;
	var divider = 5;
	var col = Math.floor(languages.length / divider) + 1;
	var width = document.getElementById("content").offsetWidth / divider;
	var html = '<table align="center" width=100% id="table" style="margin-bottom:25px">\n<tr>';

	for (var i = 0; i < languages.length / divider; i++) {
		if (i > 0) html = html + '</tr\n<tr>';
		for (var j = 0; j < divider; j++) {
			if (i + j*col < languages.length) {
				html += '<td align="center" width="' + width + '" style="text-align:left"><input type="checkbox" name="language" value="'
						+ languages[i + j*col][0] + '"> ' + languages[i + j*col][1] + '</td>\n';
			} else {
				html += '<td width="' + width + '" style="text-align:left"></td>';
			}
		}
	}
	html += '</tr>\n</table>\n' + oldHTML;
	document.getElementById("languages-select").innerHTML = html;
	document.getElementById("table").style.marginLeft = width/4.5 + "px";
};

var sendQueryLang = function(check) {
    var values = [];
    var value = "";
    for (i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
        	value = new Array(2);
        	value[0] = languages[indexOf2D(check[i].value,languages)][1];
        	value[1] = languages[indexOf2D(check[i].value,languages)][0];
        	console.log(check[i].value);
            values.push(value);
        }
    }
    return values;
};

var sendQueryProf = function(check) {
    for (i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            return check[i].value;
        }
    }
    return null;
};

var printButtons = function(selection) {
	var html = "";
	for (var i = 0; i < selection.length; i++) {
		html += '<a href="list_classes.html?language='+ selection[i][1] +'"><button type="button" class="btn btn-default btn-lg" style="margin-bottom:15px">Chat in ' + selection[i][0] + ' &gt;&gt;</button></a><br>\n';
	}
	document.getElementById("chat-select").innerHTML = html;
};

/* Returns the index of the first array where the desired array is. */
var indexOf2D = function(value,array) {
	var i = 0;
	while (i < array.length)
	{
		if (array[i][0] === value) {
			return i;
		}
		i++;
	}
	return -1;
};