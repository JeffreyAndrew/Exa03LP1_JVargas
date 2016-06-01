$(document).ready(function () {
    $("#boton").click(function () {
        var usuario = $("#nombre").val();
        var clave = $("#apellidos").val();
        var datos = 'user=' + nom + '&pass=' + apel;
        $.ajax({
            method: "POST",
            url: "prueba.php",
            data: datos,
            cache: false,
            success: function (result) {
                $("#texto").html(result);
            }
        });
        return false;
    });

});

