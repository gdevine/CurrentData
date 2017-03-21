$(document).on('ready page:load', function() {
	$.getJSON('data/hiev_stats.json', function(data) {
	    var summary="";
	    summary+="<p> <span class='font_18'>" + data.hiev_stats.date_generated + "</span></p>";
	    summary+="<p> <span class='font_22'>" + data.hiev_stats.total_files + "</span> files in total </p>";
	    summary+="<p> <span class='font_22'>" + data.hiev_stats.last_day_files + "</span> files uploaded in the last day </p>";


	    // Loop through each file type and grab file type stats
	    var file_type_data = data.hiev_stats.types;
	    var file_type_summaries="";
	    for (var i in file_type_data) {
	    	  file_type_summaries += "<tr>";
	    	  file_type_summaries += "<td>" + file_type_data[i].type + "</td>";
	        file_type_summaries += "<td>" + file_type_data[i].total_files + "</td>";
	        file_type_summaries += "<td>" + file_type_data[i].last_day_files + "</td>";
	    	  file_type_summaries += "</tr>";
	    }


	    // Loop through each facility and grab facility summary stats
	    var fac_data = data.hiev_stats.facilities;
	    var facility_summaries="";
	    for (var i in fac_data) {
	    	  facility_summaries += "<tr>";
	    	  facility_summaries += "<td>" + fac_data[i].name + "</td>";
	        facility_summaries += "<td>" + fac_data[i].total_files + "</td>";
	        facility_summaries += "<td>" + fac_data[i].last_day_files + "</td>";
	    	  facility_summaries += "</tr>";
	    }

	    // Loop through each facility and grab facility detail stats
      var facility_detail="";
	    for (var i in fac_data) {
	    	  facility_detail += "<h4 class='pink_writing topspace20'>" + fac_data[i].name + "</h4>";
	        facility_detail += "<p> <span class='font_22'>" + fac_data[i].total_files + "</span> files in total </p>";
	        facility_detail += "<p> <span class='font_22'>" + fac_data[i].last_day_files + "</span> files uploaded in the last day </p>";

	        // Loop through each facility experiment and grab experiment detail stats
	        facility_detail += "<p class='topspace20 center'>By experiment </p>";
	        facility_detail += "<table class='table table-striped table-hover table-bordered'><thead><th>Experiment ID</th><th>Experiment Name</th><th>Total files</th><th>Uploaded in last day</th></thead><tbody>";
	        var exp_data = data.hiev_stats.facilities[i].experiments;
	        for (var j in exp_data) {
	    	    facility_detail += "<tr>";
	    	    facility_detail += "<td>" + exp_data[j].id + "</td>";
	          facility_detail += "<td>" + exp_data[j].name + "</td>";
	          facility_detail += "<td>" + exp_data[j].total_files + "</td>";
	          facility_detail += "<td>" + exp_data[j].last_day_files + "</td>";
	    	    facility_detail += "<tr/>";
	        }
	    	  facility_detail += "</tbody></table>";

	    	  // Loop through each facility file type and grab file type detail stats
	        facility_detail += "<p class='topspace20 center'>By file type </p>";
	        facility_detail += "<table class='table table-striped table-hover table-bordered'><thead><th>File Type</th><th>Total files</th><th>Uploaded in last day</th></thead><tbody>";
	        var file_type_data = data.hiev_stats.facilities[i].Types;
	        for (var j in file_type_data) {
	    	    facility_detail += "<tr>";
	          facility_detail += "<td>" + file_type_data[j].type + "</td>";
	          facility_detail += "<td>" + file_type_data[j].total_files + "</td>";
	          facility_detail += "<td>" + file_type_data[j].last_day_files + "</td>";
	    	    facility_detail += "<tr/>";
	        }
	    	  facility_detail += "</tbody></table>";
	    }


	    document.getElementById("summary").innerHTML=summary;
	    document.getElementById("facility_summaries").innerHTML=facility_summaries;
	    document.getElementById("file_type_summaries").innerHTML=file_type_summaries;
	    document.getElementById("facility_detail").innerHTML=facility_detail;
	});
});
