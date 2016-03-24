var labelHeight = 16;
var borderColor = "#0079bc";
var changeSpeed = "0.5s";

var radiochoice = document.getElementsByClassName("radio-choice");
var checkboxchoice = document.getElementsByClassName("checkbox-choice");
var checkboxchoiceall = document.getElementsByClassName("checkbox-choice-all")[0];

for (var i = radiochoice.length - 1; i >= 0; i--) {
	radiochoice[i].setAttribute("onclick","clickradio(this)");
	radiochoice[i].style.margin = 0;
	radiochoice[i].style.display = "none";
	radiochoice[i].parentNode.style.height = labelHeight + "px";
	radiochoice[i].parentNode.style.position = "relative";
	radiochoice[i].previousSibling.style.height = 0.8*labelHeight + "px";
	radiochoice[i].previousSibling.style.width = 0.8*labelHeight + "px";
	radiochoice[i].previousSibling.style.display = "inline-block";
	radiochoice[i].previousSibling.style.position = "relative";
	radiochoice[i].previousSibling.style.borderRadius = "50%";
	radiochoice[i].previousSibling.style.transition = "box-shadow " + changeSpeed;
	if(radiochoice[i].checked == true){
		radiochoice[i].previousSibling.style.boxShadow = "inset 0 0 0 4px " + borderColor;
	}else{
		radiochoice[i].previousSibling.style.boxShadow = "inset 0 0 0 3px " + borderColor;
	}
}

for (var i = checkboxchoice.length - 1; i >= 0; i--) {
	checkboxchoice[i].setAttribute("onclick","clickcheckbox(this)");
	checkboxchoice[i].style.display = "none";
	checkboxchoice[i].style.margin = 0;
	checkboxchoice[i].parentNode.style.height = labelHeight + "px";
	checkboxchoice[i].parentNode.style.position = "relative";
	checkboxchoice[i].previousSibling.style.height = 0.8*labelHeight + "px";
	checkboxchoice[i].previousSibling.style.width = 0.8*labelHeight + "px";
	checkboxchoice[i].previousSibling.style.display = "inline-block";
	checkboxchoice[i].previousSibling.style.position = "relative";
	checkboxchoice[i].previousSibling.style.transition = "box-shadow " + changeSpeed;
	if(checkboxchoice[i].checked == true){
		checkboxchoice[i].previousSibling.style.boxShadow = "inset 0 0 0 4px " + borderColor;
	}else{
		checkboxchoice[i].previousSibling.style.boxShadow = "inset 0 0 0 3px " + borderColor;
	}
}

checkboxchoiceall.setAttribute("onclick","clickcheckboxall(this)");
checkboxchoiceall.style.display = "none";
checkboxchoiceall.style.margin = 0;
checkboxchoiceall.parentNode.style.height = labelHeight + "px";
checkboxchoiceall.parentNode.style.position = "relative";
checkboxchoiceall.previousSibling.style.height = 0.8*labelHeight + "px";
checkboxchoiceall.previousSibling.style.width = 0.8*labelHeight + "px";
checkboxchoiceall.previousSibling.style.display = "inline-block";
checkboxchoiceall.previousSibling.style.position = "relative";
checkboxchoiceall.previousSibling.style.transition = "box-shadow " + changeSpeed;
checkboxchoiceall.previousSibling.style.boxShadow = "inset 0 0 0 3px " + borderColor;

function clickradio(obj){
	for (var i = radiochoice.length - 1; i >= 0; i--) {
		radiochoice[i].checked = false;
		radiochoice[i].previousSibling.style.boxShadow = "inset 0 0 0 3px " + borderColor;
	}
	obj.checked = true;
	obj.previousSibling.style.boxShadow = "inset 0 0 0 4px " + borderColor;
}

function clickcheckbox(obj){
	if(obj.checked == true){
		obj.previousSibling.style.boxShadow = "inset 0 0 0 4px " + borderColor;
	}else{
		obj.previousSibling.style.boxShadow = "inset 0 0 0 3px " + borderColor;
	}
}

function clickcheckboxall(obj){
	var flag;
	if(checkboxchoiceall.checked == true){
		flag = true;
		checkboxchoiceall.previousSibling.style.boxShadow = "inset 0 0 0 4px " + borderColor;
	}else{
		flag = false;
		checkboxchoiceall.previousSibling.style.boxShadow = "inset 0 0 0 3px " + borderColor;
	}
	for (var i = checkboxchoice.length - 1; i >= 0; i--) {
		checkboxchoice[i].checked = flag;
		if(flag){
			checkboxchoice[i].previousSibling.style.boxShadow = "inset 0 0 0 4px " + borderColor;
		}else{
			checkboxchoice[i].previousSibling.style.boxShadow = "inset 0 0 0 3px " + borderColor;
		}
	}
}