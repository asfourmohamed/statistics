function addSubUserFunction() {
	event.preventDefault(); //prevent default action 
    $.post( "/superadmin/new_sub_user", $( "#addSubUserForm" ).serialize() )
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
    $.post( "/superadmin/delete_user", $( "#deleteUserForm" ).serialize() )
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

function editCompteFunction() {
	event.preventDefault(); //prevent default action 
    $.post( "/superadmin/edit_compte", $( "#editcompteForm" ).serialize() )
    .done(function(res) {
        if (res.status == 200) {
            $("#MessageCode").text("Succés");
            $("#mesageText").text(res.message) 
            $('#messageModel').modal('toggle');
            var compte = $("#compteEditFromCompany").val();
            console.log(compte)
            setTimeout(function() {
                location.href = '/superadmin/compte/'+compte;
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

function addCompteFunction() {
	event.preventDefault(); //prevent default action 
    $.post( "/superadmin/new_compte", $( "#addUserForm" ).serialize() )
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
    $.post( "/superadmin/edit_user", $( "#editsubUserForm" ).serialize() )
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
        console.log(signature)
        $("#editSub_UserLogin").val(login);
        $("#editSub_UserPassword").val(password);
        $("#editSub_UserService").val(service);
        $("#editSub_UserBalance").val(balance);
        $("#editSub_UserService").val(service);
        $("#editSub_UserStatus").val(status);
    })
})