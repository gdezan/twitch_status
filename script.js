$(document).ready(function() {
	var displayName = ["freecodecamp", "streamerhouse", "shroud"]
	for (var i=0; i<displayName.length; i++){
		var api = "https://wind-bow.glitch.me/twitch-api/channels/"+displayName[i];
		$.ajax({
			type: 'GET',
			url: api,
			datatype: "json",
			success: function(data){
				$("#streamers").append("<li class=\"stream\"><img class=\"logo\" src=\""+data.logo+"\"><span class=\"stream_name\">"+data.display_name+"</span></li>");
		}
	});
	}
});