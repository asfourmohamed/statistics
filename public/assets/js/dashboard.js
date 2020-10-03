

$(document).ready(function(){
    $('#dropdowns').cascadingDropdown({
        selectBoxes: [
            {
                selector: '.step1'
            },
            {
                selector: '.step2'
            },
            {
                selector: '.step3',
                requires: ['.step1', '.step2'],
                requireAll: true,
                source: function(request, response) {
                    $.getJSON('/compagne', request, function(data) {
                        console.log(data)
                        response($.map(data, function(item, index) {
                            return {
                                label: item.label,
                                value: item.value,
                                selected: index == 0 // set to true to mark it as the selected item
                            };
                        }));
                    });
                }
            }
        ],
        onChange: function(event, dropdownData) {
            // do stuff
            // dropdownData is an object with values from all the dropdowns in this group
        },
        onReady: function(event, dropdownData) {
            // do stuff
        }
    });

    jQuery(function($){
        $(document).ajaxSend(function() {
            $("#overlay").fadeIn(300);　
        });
            
        $('#compagne').change(function(){
            if (!$('#compagne').is(':disabled')) {
                console.log($("#compagne").val())
                $.post( "compagne", { compagneID: $("#compagne").val() }, function() {
                })
                .done(function(data) {
                    $("#rapport").attr("src",data.url)
                })
                .fail(function() {
                    alert( "HTTP ERROR 500" );
                })
                .always(function() {
                    setTimeout(function(){
                        $("#overlay").fadeOut(300);
                    },500);
                });

                $.ajax({
                    type: 'POST',
                    success: function(data){
                        console.log(data);
                    }
                }).done(function() {
                });
            }
        });	
    });
});

  