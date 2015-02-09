$(".btn-action" ).click(function(e) {
var app = $(this).data("app");
var action = $(this).data("action");

//alert(app + action);


	jQuery.ajax({
		url : '/publisher/api/lifecycle/'+ action +'/mobileapp/' + app,
		type : "PUT",
		async : "false",		
		contentType : "application/json",
     	dataType : "json"			
	});
	
	$( document ).ajaxComplete(function() {
		 location.reload();
	});

 e.stopPropagation();
});



$( ".tab-button" ).click(function() {
	
	var status = $(this).data("status");
	
	$( ".app-row" ).each(function( index ) {
		$(this).css("display", "none");		
		var appRowStatus = $(this).data("status");
		if(status == "All"){
			$(this).css("display", "table-row");
		}else if(status == appRowStatus){
			$(this).css("display", "table-row");
		}
	});
	

});

$( ".btn-view-app" ).click(function(e) {


    // alert($(this).data("id"));
    //alert($(this).data("category") );
    if($(this).data("category") === "webapp"){
        var url =$(this).data("url");
    }else {
        if ($(this).data("url") == 'undefined') {
            if ($(this).data("category") === "android") {
                var url = "https://play.google.com/store/apps/details?id=" + $(this).data("package");
            } else if ($(this).data("category") === "ios") {
                {
                    var url = "https://itunes.apple.com/en/app/id" + $(this).data("appid");
                }

            }

        }else{
            var url = window.location.protocol + "//" + window.location.host + $(this).data("url");
        }
    }
	$("#appModalAppURL").attr("href", url);
    $("#appModalAppURL").html(url);
    updateQRCode(url);
    
    $("#appModal").modal('show');
	e.stopPropagation();
	

});



function updateQRCode(text) {

        var element = document.getElementById("qrcode");
    
        

        var bodyElement = document.body;
        if(element.lastChild)
          element.replaceChild(showQRCode(text), element.lastChild);
        else
          element.appendChild(showQRCode(text));

      }