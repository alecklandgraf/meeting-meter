// meeting-meter.js
var MeetingMeter = MeetingMeter || {};

MeetingMeter.options = MeetingMeter.options || {};
MeetingMeter.options.update_interval_seconds = 60;
MeetingMeter.options.nominal_salary = 0.75;

MeetingMeter.start_meeting = function () {
	var selected_number_of_people = $(".pick_how_many_people").val();
	var minutely_cost = selected_number_of_people * MeetingMeter.options.nominal_salary * MeetingMeter.options.update_interval_seconds / 60;
	$("#cost_per_minute").html(minutely_cost.toFixed(2).toString());
	$("#cost_per_hour").html((minutely_cost * 60).toFixed(2).toString());

};

$("#start_meeting_button").live("click", function () {
	MeetingMeter.start_meeting();
});
