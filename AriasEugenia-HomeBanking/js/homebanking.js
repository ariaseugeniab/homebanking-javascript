//Declaración de variables

var nombreUsuario = "Mario Santos";
var saldoCuenta = 5000;
var limiteExtraccion = 500;
var servicioAgua = 350;
var servicioTel = 425;
var servicioLuz = 210;
var servicioInternet = 570;
var servicioElegido ;
var nombreServicio = "";
var saldoAnterior;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = 4567;
var codigoIngresado = prompt("Ingrese el código de seguridad de su cuenta");

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(dinero) {
    return saldoCuenta += dinero;
}

function restarDinero(dinero) {
    return saldoCuenta -= dinero;
}   

function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese el nuevo límite de extracción"));
    limiteExtraccion = nuevoLimite
    if (isNaN(nuevoLimite)) {
        return;
    } else {
        alert("Su nuevo límite de extracción es: $" + nuevoLimite);
    actualizarLimiteEnPantalla();
    }
}

function extraerDinero() {
    var MontoExtraer = parseInt(prompt("Ingrese el monto a extraer"));
    if (isNaN(MontoExtraer)) {
        return;
    }

    var saldoAnterior = saldoCuenta;

    if (MontoExtraer > saldoAnterior) {
        alert("Su saldo no es suficiente para extraer esa la cantidad de dinero");
    } 
    else if (limiteExtraccion < MontoExtraer) {
        alert("El monto a extraer supera su límite de extracción")
    }

    else if ((MontoExtraer % 100) != 0) {
        alert("El monto a extraer debe ser en billetes de 100")
    }

    else {
        alert("Has extraído: $" + MontoExtraer + "\n Saldo anterior: $" + saldoAnterior + "\n Saldo actual: $"+ (restarDinero(MontoExtraer)));
        actualizarSaldoEnPantalla();
    }
}

function depositarDinero() {
    var MontoDepositar = parseInt (prompt("Ingrese el monto a depositar"));
    if (isNaN(MontoDepositar)) {
        return;
    }

    var saldoAnterior = saldoCuenta;

    alert("Has depositado: $" + MontoDepositar + "\n Saldo anterior: $" + saldoAnterior + "\n Saldo actual: $"+ (sumarDinero(MontoDepositar)));
    actualizarSaldoEnPantalla();
}

function descontarSaldoServicio (servicioElegido) {
    var saldoAnterior = saldoCuenta;
    confirm("Usted ha seleccionado pagar: " + nombreServicio + "\n Valor: $" + servicioElegido);

    if (servicioElegido > saldoCuenta) {
        alert("Su saldo no es suficiente para abonar este servicio")
    } else {
        alert("Usted ha abonado: "+ nombreServicio + "\n Saldo anterior: $" + saldoAnterior + "\n Dinero descontado: $" + servicioElegido + "\n Saldo actual: $"+ (restarDinero(servicioElegido)));
        actualizarSaldoEnPantalla();
    }
}

function pagarServicio() {

    var servicioElegido = parseInt(prompt("Ingrese el número que corresponda al servicio que desea pagar: \n 1. Agua \n 2. Luz \n 3. Internet \n 4. Teléfono"));

    if (isNaN(servicioElegido)) {
        return;
    } 
        
    switch (servicioElegido) {
        case 1: 
        nombreServicio = "Servicio Agua";
        descontarSaldoServicio (servicioAgua);
        break;

        case 2:  
        nombreServicio = "Servicio Luz";
        descontarSaldoServicio (servicioLuz);
        break ;

        case 3: 
        nombreServicio = "Servicio Internet";
        descontarSaldoServicio (servicioInternet);
        break;

        case 4: 
        nombreServicio = "Servicio Teléfono";
        descontarSaldoServicio (servicioTel);
        break;

        default:  
        alert("No se ha encontrado el servicio seleccionado nro: " + servicioElegido)
    
    }
}

function transferirDinero() {
    var montoTransferir = parseInt(prompt("Ingrese el monto a transferir"));
    
     if (isNaN(montoTransferir)) {
      return;
    } 
    
    var saldoAnterior = saldoCuenta;

    if (montoTransferir > saldoAnterior) {
        alert("Su saldo no es suficiente para realizar la transferencia");
        return;
    } else {
        var cuentaIngresada = parseInt(prompt("Ingrese el número de cuenta al que desee transferir el dinero")) 
    }

    switch (cuentaIngresada) {
        case cuentaAmiga1: 
            restarDinero(montoTransferir);
            actualizarSaldoEnPantalla();
            break;
        
        case cuentaAmiga2:
            restarDinero(montoTransferir);
            actualizarSaldoEnPantalla();
            break;
        
        default:
            alert("Error: Solo puede transferirse dinero a una cuenta amiga")
            return;
    }
        
    return alert("Se han transferido: $" + montoTransferir + "\n Cuenta destino: " + cuentaIngresada) 

}

function iniciarSesion() {
    if (isNaN(codigoIngresado)) {
        alert("El valor ingresado no es un número");
      return;

    } else if (codigoIngresado == codigoSeguridad) {
        alert("Bienvenido/a " + nombreUsuario + "! \nYa puedes comenzar a realizar operaciones")
        return;

    } else {
        alert("El código de seguridad es incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        return (saldoCuenta = 0);            
    }
}

iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}