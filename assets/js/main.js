$(document).ready(function () {
	(function ($) {
		$.getUrlParam = function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null)
				return decodeURIComponent(r[2]);
			return null;
		}
	})(jQuery);
	var show = $.getUrlParam("category");
	if (show == undefined) {
	//	$(".main-content").html("<h1>hello</h1>");

	} else if (show == null) {
	//	$(".main-content").html("<h1>null</h1>");
	}
	console.log(show);
});
