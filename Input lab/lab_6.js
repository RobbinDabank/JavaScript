function bal(){
	var res = '';
	var elements = document.forms.laba.children;
	for(i = 0 ; i<elements.length ; i ++){
		if( elements[i].type == "text"){
			res += elements[i].value +' ';
		}
	}
	alert(res);
}
var button = document.getElementById('button');
button.addEventListener("click", bal)