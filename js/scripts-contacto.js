$( "#enviarcontacto" ).click(function() {
    var nombrefc = $("#Nombre").val();
    var emailfc = $("#Email").val();
    var telefonofc = $("#Telefono").val();
    var productofc = $("#Producto").val();
    var mensajefc = $("#Mensaje").val();
    var aceptoAPfc = $("#checkAp").val();
 
    if(nombrefc  != "" && telefonofc != "" && emailfc  != "" && productofc != "" && mensajefc != "" && aceptoAPfc !== null){
          $.ajax({
             type:"POST",
             url:"lib/form-moreinfo-contact.php",
             data:$("#formMoreInfoCuadernos").serialize(),//only input
             success: function(response){
                console.log(response);
                if (response == 1){
                $('#formMoreInfoCuadernos')[0].reset();
                Swal.fire(
                   'Muchas Gracias',
                   'Hemos recibido su mensaje.',
                   'success'
                 )
                }
             }
          });
 
    }
    else{
       Swal.fire(
          'Lo sentimos',
          'Por favor llene todos los campos requeridos.',
          'warning'
        )
    }
    
  });