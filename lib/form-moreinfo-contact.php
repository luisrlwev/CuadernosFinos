<?php
// error_reporting(E_ERROR | E_PARSE);
$nombrefc = $_POST['Nombre'];
$emailfc = $_POST['Email'];
$telefonofc = $_POST['Telefono'];
$productofc = $_POST['Producto'];
$mensajefc = $_POST['Mensaje'];

/* VERIFICAMOS SI EL USUARIO ACEPTO LOS TERMINOS Y CONDICIONES ASI COMO EL AVISO DE PRIVACIDAD */    
if(!empty($nombrefc) && !empty($productofc) && !empty($emailfc) && !empty($telefonofc) && !empty($mensajefc)){
        // $to  = $_POST['email'];
        $to = 'mariloly.anta@gmail.com, contacto@cuadernosfinos.com, dolores.anta@cuadernosfinos.com, ramon.anta@cuadernosfinos.com, ingrid@wisewsisolutions.com, daniel.villena@wisewsisolutions.com, '.$emailfc;
        
        // subject
        $subject = 'Contacto Cuadernos Finos';
        // message
        $message = '
        <html>
        <head>
        <meta charset="utf-8">
        <title>Contacto Cuadernos Finos</title>
        </head>
        <body>
        <img src="https://cuadernosfinos.com/images/headermail.jpg" style="max-width:1024px; margin:0 auto;">
        <p>
        Hemos recibido su mensaje con los siguientes datos:
        <br><br>
        <strong>Nombre:</strong> '.$nombrefc.'<br><br>
        <strong>Email:</strong> '.$emailfc.'<br><br>
        <strong>Tel&eacute;fono:</strong> '.$telefonofc.'<br><br>
        <strong>Producto:</strong> '.$productofc.'<br><br>
        <strong>Mensaje:</strong> '.$mensajefc.'<br><br>
        En breve uno de nuestros asesores lo contactará.<br>
        Cuadernos finos S.A. de C.V.<br>
        55 5579 7855<br><br>
        Primera Cerrada de San Francisco #26,<br> 
        Col. San Francisco Xicaltongo,<br>
        CDMX, C.P. 08230, Alcaldía Iztacalco.
        <a href="https://www.cuadernosfinos.com" target="_blank">www.cuadernosfinos.com</a>
        </p>
        </body>
        </html>
        ';

        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

        // Additional headers
        $headers .= 'From: Contacto Cuadernos Finos<contacto@cuadernosfinos.com>' . "\r\n";

        $success = mail($to, $subject, $message, $headers);
        if (!$success) {
            echo "0";
        }else{
        echo "1";
        }
}
else{
    echo "0";
}
?>