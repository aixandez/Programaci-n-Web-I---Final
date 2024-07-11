function calcularCosto() {
    var precio = parseFloat(document.getElementById('precio').value);
    var cantidad = parseInt(document.getElementById('cantidad').value);

    if (!isNaN(precio) && !isNaN(cantidad) && cantidad > 0) {
        var costoTotal = precio * cantidad;
        document.getElementById('resultado').innerText = 'Precio total: $' + costoTotal.toFixed(2);
    } else {
        document.getElementById('resultado').innerText = 'Por favor, ingresa los números correctamente.';
    }
}
