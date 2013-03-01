// meeting-meter.js
var MeetingMeter = MeetingMeter || {};

MeetingMeter.options = MeetingMeter.options || {
	update_interval_seconds: 60,
	nominal_salary: 0.75
};

MeetingMeter.timerId = MeetingMeter.timerId || 0;
MeetingMeter.duration = MeetingMeter.duration || 0;

MeetingMeter.start_meeting = function () {
	var selected_number_of_people = $(".pick_how_many_people").val();
	var minutely_cost = selected_number_of_people * MeetingMeter.options.nominal_salary * MeetingMeter.options.update_interval_seconds / 60;
	MeetingMeter.duration = 0;
	MeetingMeter.timerId = setInterval(function() { MeetingMeter.timer(minutely_cost);},1000);
	var d = new Date();
	var t = d.toLocaleTimeString();

	$("#meeting_start_time").html(t);
	$("#cost_per_minute").html("$" + minutely_cost.toFixed(2).toString());
	$("#cost_per_hour").html("$" + (minutely_cost * 60).toFixed(2).toString());


};

MeetingMeter.pause_meeting = function () {
	clearInterval(MeetingMeter.timerId);
};

MeetingMeter.reset_meeting = function () {
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
	$("#current_cost").html("$" + (MeetingMeter.duration * cost).toFixed(2));

};
