$(document).ready(function() {
	var displayName = ["freecodecamp", "streamerhouse", "shroud"]
	displayName.forEach(function(name){
		var channelApi = "https://wind-bow.glitch.me/twitch-api/channels/"+name;
		var streamApi = "https://wind-bow.glitch.me/twitch-api/streams/"+name;
		var stream = '';
		var html = '';
		$.getJSON(streamApi, function(data){
			data3 = data;
			if (data.stream ===  null) {
				stream = "Offline";
				status = "offline"
			} else {
				stream = "Playing "+data3.stream.game+" - "+data3.stream.viewers+" viewers";
				status = "online"
			}
		});
		$.getJSON(channelApi,function(data2){
			channel = data2;
			console.log(stream);
			html = "<a href=\"http://twitch.tv/"+name+"\" target=\"blank\"><div class=\"row container "+status+" stream2\"><div class=\"col-3 logo_div\"><img class=\"logo\" src=\""+
				channel.logo+"\"></div><div class=\"col-9 stream_div\"><h4>"+
				channel.display_name+"<br><span class=\"stream_status\">"+
				stream+"</span></h4></div></div></a>";
			$("#streamers").append(html);
		});
	});
	$("#left_status").click(function(){
		$(".online").show();
		$(".offline").show();
	});
	$("#middle_status").click(function(){
		$(".online").show();
		$(".offline").hide();
	});
	$("#right_status").click(function(){
		$(".offline").show();
		$(".online").hide();
	});
});