$(document).ready(function () {
    $('#region-dakhla,#region-laayoun,#region-guelmim,#region-souss,#region-deraa,#region-marrakech,#region-benimellal,#region-oriental,#region-casa,#region-fes,#region-rabat,#region-tanger').hover(function () {
        debugger;
        var regionName = $(this).data('name');
        var regionElement = $(this).attr('id');
        showRegionInfo(regionElement,regionName);
    }, function () {
        var regionElement = $(this).attr('id');
        hideRegionInfo(regionElement);
    });
    // Function to display region info on hover
    function showRegionInfo(regionElement,regionName) {
        $('#'+regionElement).css('fill', '#003700');
        $('#region-info').html("");
        $('#region-info').append(regionName);
        $('#region-info').show();
    }



    // Function to hide region info on mouseout
    function hideRegionInfo(regionElement) {
        debugger;

        if(regionElement==="region-dakhla")
        {
            $('#'+regionElement).css('fill', '#cecece');

        }else if(regionElement==="region-laayoun")
        {
            $('#'+regionElement).css('fill', '#c3c3c3');
        }
        else if(regionElement==="region-guelmim")
        {
            $('#'+regionElement).css('fill', '#e5e5e5');
        }
        else if(regionElement==="region-deraa")
        {
            $('#'+regionElement).css('fill', '#ffffff');
        }
        else if(regionElement==="region-marrakech")
        {
            $('#'+regionElement).css('fill', '#e9e9e9');
        }
        else if(regionElement==="region-benimellal")
        {
            $('#'+regionElement).css('fill', '#e8e8e8');
        }
        else if(regionElement==="region-oriental")
        {
            $('#'+regionElement).css('fill', '#ffffff');
        }
        else if(regionElement==="region-casa")
        {
            $('#'+regionElement).css('fill', '#e7e7e7');
        }
        else if(regionElement==="region-fes")
        {
            $('#'+regionElement).css('fill', '#d9d8d8');
        }
        else if(regionElement==="region-rabat")
        {
            $('#'+regionElement).css('fill', '#cecece');
        }
        else
        {
            $('#'+regionElement).css('fill', '#e5e5e5');
        }
        $('#region-info').hide();
    }

    // Add hover events for each region
});