$(function(){
	$('#fixedDetails').hide(); // hides the module description table on page load
	
	$('#getModule').click(function(){
	$('td').empty(); // clears the all the table cells from previous data
		$.getJSON('https://tracker.napier.ac.uk/timetable/cw.pl',
			{module:$('#module').val()},
			function(r){ //populates the module description table with JSON data
				$('#moduleCode').text(r.SITS_MOD_CODE);
				$('#moduleName').text(r.SITS_MOD_NAME);
				$('#moduleLeader').text(r.SITS_MOD_LEADER);
				$('#credit').text(r.SITS_MOD_CRDT);
				var schoolname = r.SITS_DPT_CODE;

                 for(var i=0;i<r.events.length;i++){        // adds module events to the timetable
          $('#'+r.events[i].slot).html('<b>' + r.SITS_MOD_NAME + '</b>' + '<br>' + r.events[i].type + '<br>' + r.events[i].rooms	)
        }

		
		var url='https://tracker.napier.ac.uk/timetable/cw.pl?action=list';
$(function(){
  $.getJSON(url,{module:$('#module').val()},
      function(d){ // replaces school code with its name
        $('#school').text(d.school[schoolname].name);
      }
  )
})


		})
		$('#fixedDetails').show(2000); // an animation effect for the module description table
	})
});
