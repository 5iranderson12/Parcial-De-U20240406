<! -- PORFAVOR ABRIR EN CARPETA HTML --><! -- Anderson Saul Maravilla -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Presupuesto Familiar</title>
</head>
<body>
    <h1>Calculadora de Presupuesto Familiar</h1>

    <form id="formularioPresupuesto">
        <label for="ingreso">Ingreso Mensual:</label>
        <input type="number" id="ingreso" required><br><br>

        <label for="vivienda">Gasto en Vivienda:</label>
        <input type="number" id="vivienda" required><br><br>

        <label for="alimentos">Gasto en Alimentos:</label>
        <input type="number" id="alimentos" required><br><br>

        <label for="transporte">Gasto en Transporte:</label>
        <input type="number" id="transporte" required><br><br>

        <label for="entretenimiento">Gasto en Entretenimiento:</label>
        <input type="number" id="entretenimiento" required><br><br>

        <button type="submit">Calcular Presupuesto</button>
    </form>

    <p id="resultado"></p>

    <script>
        // Obtener el formulario y añadir el evento de submit
        document.getElementById('formularioPresupuesto').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener los valores ingresados por el usuario
            let ingresoMensual = parseFloat(document.getElementById('ingreso').value);
            let gastoVivienda = parseFloat(document.getElementById('vivienda').value);
            let gastoAlimentos = parseFloat(document.getElementById('alimentos').value);
            let gastoTransporte = parseFloat(document.getElementById('transporte').value);
            let gastoEntretenimiento = parseFloat(document.getElementById('entretenimiento').value);

            // Crear el array de gastos
            let gastosMensuales = [
                { categoria: "Vivienda", valor: gastoVivienda },
                { categoria: "Alimentos", valor: gastoAlimentos },
                { categoria: "Transporte", valor: gastoTransporte },
                { categoria: "Entretenimiento", valor: gastoEntretenimiento }
            ];

            // Calcular el gasto total
            let totalGastos = 0;
            for (let i = 0; i < gastosMensuales.length; i++) {
                totalGastos += gastosMensuales[i].valor;
            }

            // Comparar gastos con ingreso mensual y mostrar el resultado
            let resultadoTexto = "";
            if (totalGastos < ingresoMensual) {
                let ahorro = ingresoMensual - totalGastos;
                resultadoTexto = `El presupuesto está equilibrado y tienes un ahorro de: $${ahorro}`;
            } else if (totalGastos === ingresoMensual) {
                resultadoTexto = "El presupuesto está equilibrado y no tienes ahorros.";
            } else {
                let deficit = totalGastos - ingresoMensual;
                resultadoTexto = `El presupuesto está excedido. Te faltan $${deficit} para cubrir los gastos.`;
            }

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = resultadoTexto;
        });
    </script>
</body>
</html>
