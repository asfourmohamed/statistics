function addSubUserFunction() {
	event.preventDefault(); //prevent default action 
    $.post( "/admin/new_sub_user", $( "#addSubUserForm" ).serialize() )
    .done(function(res) {
        if (res.status == 200) {
            $("#MessageCode").text("Succés");
            $("#mesageText").text(res.message) 
            $('#messageModel').modal('toggle');
            setTimeout(function() {
                location.reload(true);
            }, 2000)
        }
        else {
            $("#MessageCode").text("Erreur");
            $("#mesageText").text(res.message) 
            $('#messageModel').modal('toggle');
        }
    })
    .fail(function(){
        $("#MessageCode").text("Erreur");
        $("#mesageText").text("Serveur distant injoignable") 
        $('#messageModel').modal('toggle');
    })
    .always(function() {
        //location.reload(true);
      });
}

function deleteUserFunction() {
	event.preventDefault(); //prevent default action 
    $.post( "/admin/delete_user", $( "#deleteUserForm" ).serialize() )
    .done(function(res) {
        if (res.status == 200) {
            $("#MessageCode").text("Succés");
            $("#mesageText").text(res.message) 
            $('#messageModel').modal('toggle');
            setTimeout(function() {
                location.reload(true);
            }, 2000)
        }
        else {
            $("#MessageCode").text("Erreur");
            $("#mesageText").text(res.message) 
            $('#messageModel').modal('toggle');
        }
    })
    .fail(function(){
        $("#MessageCode").text("Erreur");
        $("#mesageText").text("Serveur distant injoignable") 
        $('#messageModel').modal('toggle');
    })
    .always(function() {
        //location.reload(true);
      });
}


function editsubUserFormFunction() {
	event.preventDefault(); //prevent default action 
    $.post( "/admin/edit_user", $( "#editsubUserForm" ).serialize() )
    .done(function(res) {
        if (res.status == 200) {
            $("#MessageCode").text("Succés");
            $("#mesageText").text(res.message) 
            $('#messageModel').modal('toggle');
            setTimeout(function() {
                location.reload(true);
            }, 2000)
        }
        else {
            $("#MessageCode").text("Erreur");
            $("#mesageText").text(res.message) 
            $('#messageModel').modal('toggle');
        }
    })
    .fail(function(){
        $("#MessageCode").text("Erreur");
        $("#mesageText").text("Serveur distant injoignable") 
        $('#messageModel').modal('toggle');
    })
    .always(function() {
        //location.reload(true);
      });
}

// function editsubUserFormFunction(event) {
//     event.preventDefault(); //prevent default action 
//     $.post( "/admin/edit_user", $( "#editsubUserForm" ).serialize() )
//     .done(function(res) {
//         if (res.status == 200) {
//             $("#MessageCode").text("Succés");
//             $("#mesageText").text(res.message) 
//             $('#messageModel').modal('toggle');
//             setTimeout(function() {
//                 location.reload(true);
//             }, 2000)
//         }
//         else {
//             $("#MessageCode").text("Erreur");
//             $("#mesageText").text(res.message) 
//             $('#messageModel').modal('toggle');
//         }
//     })
//     .fail(function(){
//         $("#MessageCode").text("Erreur");
//         $("#mesageText").text("Serveur distant injoignable") 
//         $('#messageModel').modal('toggle');
//     })
//     .always(function() {
//         //location.reload(true);
//       });
// }



$(document).ready( function () {
    $('#table_id').DataTable();
    $(".deleteSubUser").click(function(event) {
        var login = $(this).closest('tr').find('td:eq(0)').text();
        var password = $(this).closest('tr').find('td:eq(1)').text();
        var service = $(this).closest('tr').find('td:eq(2)').text();
        //a = $(this).parent().parent();
        $("#userLogin").val(login);
        $("#userPassword").val(password);
        $("#userService").val(service);
    })
    $(".editSubUser").click(function(event) {
        var login = $(this).closest('tr').find('td:eq(0)').text();
        var password = $(this).closest('tr').find('td:eq(1)').text();
        var service = $(this).closest('tr').find('td:eq(2)').text();
        var balance = $(this).closest('tr').find('td:eq(3)').text();
        var signature = $(this).closest('tr').find('td:eq(4)').text();
        var status = $(this).closest('tr').find('td:eq(4)').hasClass( "foo" ) ? "Activer": "Desactiver";
        signature = signature.split(";")
        //a = $(this).parent().parent();
        $("#editSub_UserLoginOld").val(login);
        $("#editSub_UserPasswordOld").val(password);
        $("#editSub_UserLogin").val(login);
        $("#editSub_UserPassword").val(password);
        $("#editSub_UserService").val(service);
        $("#editSub_UserBalance").val(balance);
        $("#editSub_UserService").val(service);
        $("#editSub_UserStatus").val(status);
    })
    $("#editSub_UserStatus").change(function(){
        if ($(this).val() == 'Ignorer') {
            $("#editSub_UserBalance").attr("readonly","readonly");
        }
        else {
            $("#editSub_UserBalance").removeAttr("readonly");;
        }
        console.log($(this).val())
      });
})