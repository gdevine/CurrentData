$(document).on('ready page:load', function() {
	$(function() {
		Papa.parse("data/hiev_usage_stats.csv", {
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
					$("#results tbody").append(row);
				});
			}
		});
	});
});
