$(function() {
	$.extend(WorkoutLog, {
		profile: {
			userProfiles: [],

			create: function() {

				var prof = {
						firstName: $("#prof-firstName").val(),
						lastName: $("#prof-lastName").val(),
						age: $("#prof-age").val(),
						weight: $("#prof-weight").val(),
						height: $("#prof-height").val()
				};
				console.log(prof);
				var postData = { profile: prof };
				var profileCreate = $.ajax({

					type: "POST",
					url: WorkoutLog.API_BASE + "profile",
					data: JSON.stringify(postData),
					contentType: "application/json"
				});

				profileCreate.done(function(data) {
						WorkoutLog.profile.userProfiles.push(data.definition);
						$("#prof-firstname").val("");
						$("#prof-lastname").val("");
						$("#prof-age").val("");
						$("#prof-weight").val("");
						$("#prof-height").val("");
				});
			}
		}
	});

					// bindings
		$("#prof-save").on("click", WorkoutLog.profile.create);
});