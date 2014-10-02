var sales = $(".sales");
var sales__details = $(".sales__details");

var buttonClickHandler = function (){
	var currentState = sales__details.attr("data-state");

	if(currentState == "active") {
		sales__details.attr("data-state", "inactive");

	} else{
		sales__details.attr("data-state", "active");
	}
};

sales.on ("click", buttonClickHandler);





var sales2 = $(".sales2");
var sales__details2 = $(".sales__details2");

var buttonClickHandler = function (){
	var currentState = sales__details2.attr("data-state");

	if(currentState == "active") {
		sales__details2.attr("data-state", "inactive");

	} else{
		sales__details2.attr("data-state", "active");
	}
};

sales2.on ("click", buttonClickHandler);
