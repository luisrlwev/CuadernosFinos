$("#enviarcontacto").click(function () {

    var nombrefc = $("#Nombre").val();
    var emailfc = $("#Email").val();
    var telefonofc = $("#Telefono").val();
    var productofc = $("#Producto").val();
    var mensajefc = $("#Mensaje").val();
    var aceptoAPfc = $("#checkAp").is(":checked"); // 🔥 CORREGIDO

    if (
        nombrefc !== "" &&
        emailfc !== "" &&
        telefonofc !== "" &&
        productofc !== "" &&
        mensajefc !== "" &&
        aceptoAPfc
    ) {

        grecaptcha.ready(function () {
            grecaptcha.execute("6Lf82BAsAAAAAJbHC0M6n5RrkJxXOz1BaMmOw8_7", { action: "submit" })
                .then(function (token) {
                    $("#token-captcha").val(token);

                    $.ajax({
                        type: "POST",
                        url: "lib/form-moreinfo-contact.php",
                        data: $("#formMoreInfoCuadernos").serialize(),
                        success: function (response) {
                            console.log(response);

                            if (response == 1) {
                                $('#formMoreInfoCuadernos')[0].reset();
                                Swal.fire(
                                    'Muchas Gracias',
                                    'Hemos recibido su mensaje.',
                                    'success'
                                );
                            }
                        }
                    });
                });
        });

    } else {
        Swal.fire(
            'Campos incompletos',
            'Por favor llene todos los campos requeridos.',
            'error'
        );
    }

});