$(document).on('ready page:load', function() {
	$(function() {
    // Set date
		var currentDate = new Date()
		var day = currentDate.getDate()
		var month = currentDate.getMonth() + 1
		var year = currentDate.getFullYear()
		$("#todaysdate").append("<b>" + day + "/" + month + "/" + year + "</b>")

		// Generate table
		Papa.parse("data/daily_hiestorage_stats.csv", {
			download: true,
			header: true,
			complete: function(results) {
				console.log("Remote file parsed!", results.data);
				$.each(results.data, function(i, el) {
					var row = $("<tr/>");
					// row.append($("<td/>").text(i));
					$.each(el, function(j, cell) {
						if (cell !== "")
							row.append($("<td/>").text(cell));
					});
					$("#hiestorage_stats tbody").append(row);
				});
			}
		});
	});
});
