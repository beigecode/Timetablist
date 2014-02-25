$(function () {
    $('#fixedDetails').hide(); // hides the module description table on page load

    var url = 'https://tracker.napier.ac.uk/timetable/cw.pl?action=list';

    $.getJSON(url, function (g) {
        for (var i = 0; i < g.module.SET.length; i++) {
            $('<option/>', { text: g.module.SET[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.PSY.length; i++) {
            $('<option/>', { text: g.module.PSY[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.SCA.length; i++) {
            $('<option/>', { text: g.module.SCA[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.ADN.length; i++) {
            $('<option/>', { text: g.module.ADN[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.VET.length; i++) {
            $('<option/>', { text: g.module.VET[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.HLT.length; i++) {
            $('<option/>', { text: g.module.HLT[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.SOE.length; i++) {
            $('<option/>', { text: g.module.SOE[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.CHN.length; i++) {
            $('<option/>', { text: g.module.CHN[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.IMD.length; i++) {
            $('<option/>', { text: g.module.IMD[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.SSC.length; i++) {
            $('<option/>', { text: g.module.SSC[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.HSS.length; i++) {
            $('<option/>', { text: g.module.HSS[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.BSV.length; i++) {
            $('<option/>', { text: g.module.BSV[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.CLP.length; i++) {
            $('<option/>', { text: g.module.CLP[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.HRM.length; i++) {
            $('<option/>', { text: g.module.HRM[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.Law.length; i++) {
            $('<option/>', { text: g.module.Law[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.CRG.length; i++) {
            $('<option/>', { text: g.module.CRG[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.ENV.length; i++) {
            $('<option/>', { text: g.module.ENV[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.CSN.length; i++) {
            $('<option/>', { text: g.module.CSN[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.ELE.length; i++) {
            $('<option/>', { text: g.module.ELE[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.SOC.length; i++) {
            $('<option/>', { text: g.module.SOC[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.CPT.length; i++) {
            $('<option/>', { text: g.module.CPT[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.NMS.length; i++) {
            $('<option/>', { text: g.module.NMS[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.LNG.length; i++) {
            $('<option/>', { text: g.module.LNG[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.SES.length; i++) {
            $('<option/>', { text: g.module.SES[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.MUS.length; i++) {
            $('<option/>', { text: g.module.MUS[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.LDN.length; i++) {
            $('<option/>', { text: g.module.LDN[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.CTR.length; i++) {
            $('<option/>', { text: g.module.CTR[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.BMS.length; i++) {
            $('<option/>', { text: g.module.BMS[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.LMD.length; i++) {
            $('<option/>', { text: g.module.LMD[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.INF.length; i++) {
            $('<option/>', { text: g.module.INF[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.ACC.length; i++) {
            $('<option/>', { text: g.module.ACC[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.MEC.length; i++) {
            $('<option/>', { text: g.module.MEC[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.HRB.length; i++) {
            $('<option/>', { text: g.module.HRB[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.TSM.length; i++) {
            $('<option/>', { text: g.module.TSM[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.MID.length; i++) {
            $('<option/>', { text: g.module.MID[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.FIN.length; i++) {
            $('<option/>', { text: g.module.FIN[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.ENT.length; i++) {
            $('<option/>', { text: g.module.ENT[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.JAC.length; i++) {
            $('<option/>', { text: g.module.JAC[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.NUR.length; i++) {
            $('<option/>', { text: g.module.NUR[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.MHN.length; i++) {
            $('<option/>', { text: g.module.MHN[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.MKT.length; i++) {
            $('<option/>', { text: g.module.MKT[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.DES.length; i++) {
            $('<option/>', { text: g.module.DES[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.MIC.length; i++) {
            $('<option/>', { text: g.module.MIC[i] })
            .appendTo($('#listofmodules'));
        }
        for (var i = 0; i < g.module.LAW.length; i++) {
            $('<option/>', { text: g.module.LAW[i] })
            .appendTo($('#listofmodules'));
        }
    });

    $('#listofmodules').change(function () {
        $('#module').val($(this).find(":selected").text().substring(0, 8)); // additional feature: pastes the selected module from the dropdown menu to the search bar (without the module name)
    });


    $('#getModule').click(function () {
        $('#listofmodulesrelated').empty(); // clears the list of related modules
        $('td').empty(); // clears the all the table cells from previous data
        $.getJSON('https://tracker.napier.ac.uk/timetable/cw.pl',
        { module: $('#module').val() },
        function (r) { //populates the module description table with JSON data
            $('#moduleCode').text(r.SITS_MOD_CODE);
            $('#moduleName').text(r.SITS_MOD_NAME);
            $('#moduleLeader').text(r.SITS_MOD_LEADER);
            $('#credit').text(r.SITS_MOD_CRDT);


            for (var i = 0; i < r.events.length; i++) {        // adds module events to the timetable
                $('#' + r.events[i].slot).html('<b>' + r.SITS_MOD_NAME + '</b>' + '<br>' + r.events[i].type + '<br>' + r.events[i].rooms)
            };



            $.getJSON(url, { module: $('#module').val() },
 function (d) { // replaces school code with its name
     $('#school').text(d.school[r.SITS_DPT_CODE].name);
 });

            var urlrelated = 'https://tracker.napier.ac.uk/timetable/cw.pl?action=related';
            $.getJSON(urlrelated, { module: $('#module').val() }, function (p) {
                for (var i = 0; i < p.alsotaking.length; i++) {
                    $('<option/>', { text: p.alsotaking[i][0] + " : " + p.alsotaking[i][1] }) // shows the list of related modules
                    .appendTo($('#listofmodulesrelated'));
                }
            });

            $('#listofmodulesrelated').change(function () {
                $('#module').val($(this).find(":selected").text().substring(0, 8)); // additional feature: pastes the selected related module id from the dropdown menu to the search bar (without the module name)+
            });



        });
        $('#fixedDetails').show(2000); // an animation effect for the module description table
    });
});
