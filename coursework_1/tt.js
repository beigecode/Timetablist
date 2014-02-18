$(function(){
	$('#fixedDetails').hide();
	$('#getModule').click(function(){
	$('td').empty();	
		$.getJSON('https://tracker.napier.ac.uk/timetable/cw.pl',
			{module:$('#module').val()},
			function(r){
				$('#moduleCode').text(r.SITS_MOD_CODE);
				$('#moduleName').text(r.SITS_MOD_NAME);
				$('#moduleLeader').text(r.SITS_MOD_LEADER);
				$('#credit').text(r.SITS_MOD_CRDT);
				var schoolname = r.SITS_DPT_CODE;
             
           

                 for(var i=0;i<r.events.length;i++){        // adds event to the timetable
          $('#'+r.events[i].slot).html(r.SITS_MOD_NAME + '<br>' + r.events[i].type + '<br>' + r.events[i].rooms	)
        }

		
		var url='https://tracker.napier.ac.uk/timetable/cw.pl?action=list';
$(function(){
  $.getJSON(url,{module:$('#module').val()},
      function(d){
        $('#school').text(d.school[schoolname].name);
      }
  )
})


		})
		$('#fixedDetails').show(2000);
	})
});



	

  /*/  
               $('#'+r.events[0].slot).text('event0')   //add event to the timetable
               $('#'+r.events[1].slot).text('event1')
            /*/