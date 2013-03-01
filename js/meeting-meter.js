// meeting-meter.js
var MeetingMeter = MeetingMeter || {};

MeetingMeter.options = MeetingMeter.options || {
	update_interval_seconds: 60,
	nominal_salary: 0.75
};

MeetingMeter.timerId = MeetingMeter.timerId || 0;
MeetingMeter.duration = MeetingMeter.duration || 0;
MeetingMeter.meetingCost = MeetingMeter.meetingCost || 0;
MeetingMeter.initialStart = MeetingMeter.initialStart || true;
MeetingMeter.meetingStarted = MeetingMeter.meetingStarted || false;

MeetingMeter.start_meeting = function () {
	if (!MeetingMeter.meetingStarted) {
		MeetingMeter.meetingStarted = true;
		var selected_number_of_people = $(".pick_how_many_people").val();
		var minutely_cost = selected_number_of_people * MeetingMeter.options.nominal_salary * MeetingMeter.options.update_interval_seconds / 60;
		MeetingMeter.timerId = setInterval(function() { MeetingMeter.timer(minutely_cost);},60000);
		if (MeetingMeter.initialStart) {
			var d = new Date();
			var t = d.toLocaleTimeString();
			$("#meeting_start_time").html(t);
		}

		
		$("#cost_per_minute").html("$" + minutely_cost.toFixed(2).toString());
		$("#cost_per_hour").html("$" + (minutely_cost * 60).toFixed(2).toString());
	}
};

MeetingMeter.pause_meeting = function () {
	MeetingMeter.initialStart = false;
	MeetingMeter.meetingStarted = false;
	clearInterval(MeetingMeter.timerId);
};

MeetingMeter.reset_meeting = function () {
	MeetingMeter.duration = 0;
	MeetingMeter.meetingCost = 0;
	MeetingMeter.initialStart = true;
	MeetingMeter.meetingStarted = false;
	$("#meeting_start_time").html("");
	$("#cost_per_minute").html("");
	$("#cost_per_hour").html("");
	$("#current_cost").html("");
	clearInterval(MeetingMeter.timerId);
};

MeetingMeter._event_bindings = function () {
	$("#start_meeting_button").live("click", function () {
		MeetingMeter.start_meeting();
	});

	$("#pause_meeting_button").live("click", function () {
		MeetingMeter.pause_meeting();
	});

	$("#reset_meeting_button").live("click", function () {
		MeetingMeter.reset_meeting();
	});
}();

MeetingMeter.timer = function (cost) {
	MeetingMeter.duration += 1;
	MeetingMeter.meetingCost += cost;
	$("#current_cost").html("$" + (MeetingMeter.meetingCost).toFixed(2));
};
