$(document).ready(function () {

	$(".drop-down").click(function() {
		var parent = $(this).parent();
		var ion = $(this).find(".ion");
		var content = parent.find(".drop-down-content").toggle(300);
		var attrClass = ion.attr("class");

		if(attrClass == "ion ion-arrow-down-b pull-right") {
			ion.attr("class", "ion ion-arrow-up-b pull-right");
		} else {
			ion.attr("class", "ion ion-arrow-down-b pull-right");
		}
	});

	$(".count-down").countdown("2017/08/17", function(event) {
		$(this).find(".day .number").html(event.strftime("%D"));
		$(this).find(".hours .number").html(event.strftime("%H"));
		$(this).find(".minutes .number").html(event.strftime("%M"));
		$(this).find(".seconds .number").html(event.strftime("%S"));
  	});

	$(".btn-copy").click(function () {
		$(this).html('<i class="ion ion-android-done"></i> Copied');
		$(this).css("background", "#27ae60");
		var _this = this;
		setTimeout(function () {
			$(_this).html('<i class="ion ion-ios-copy"></i> COPY');
			$(_this).css("background", "#3e466e");
		},500);
	});

	new Clipboard('.btn-copy');

	$("#timeline .box").each(function (key,val) {
		var height = $(val).height();
		$(val).find(".arrow").css("top", ((height / 2) - 20) + "px");
		$(val).find(".dot").css("top", ((height / 2) - 8) + "px")
	});

	$("#faq .question").click(function () {
		var parent = $(this).parent();
		var answer = parent.find(".answer");
		var height = answer.height();

		if(height == 0) {
			answer.css('padding', "10px 15px");
			answer.css('height', "auto");
			var newHeight = answer.height();
			newHeight = newHeight + 20;
			answer.css('height', "0px");
			answer.css('height', newHeight + 'px');
		} else {
			answer.css('padding', "0px");
			answer.css('height', "0px");
		}
	});

	$("[data-animate-delay]").each(function (key,val) {
		var delay = $(val).attr("data-animate-delay");
		delay = parseInt(delay);
		$(val).css("animation-delay", delay + "ms");
	});
});