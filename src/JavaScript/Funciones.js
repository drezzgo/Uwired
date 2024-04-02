function captura() {
    var nombreTitular = document.getElementById('nombre_titular').value;
    var paraQueSeUsa = document.getElementById('TipoE').value;
    var tipoDeArea = document.getElementById('TipoA').value;
    var latitud = document.getElementById('Lat').value;
    var longitud = document.getElementById('Long').value;
    var altura = document.getElementById('Alt').value;
    var potencia = document.getElementById('Pot').value;
    var ganancia = document.getElementById('Gan').value;
    var frecuencia = document.getElementById('fr').value;

    alert('Datos capturados:\n' +
          'Nombre del titular: ' + nombreTitular + '\n' +
          'Para qué se usa la estación: ' + paraQueSeUsa + '\n' +
          'Tipo de área: ' + tipoDeArea + '\n' +
          'Latitud: ' + latitud + '\n' +
          'Longitud: ' + longitud + '\n' +
          'Altura: ' + altura + '\n' +
          'Potencia: ' + potencia + '\n' +
          'Ganancia: ' + ganancia + '\n' +
          'Frecuencia (MHz): ' + frecuencia);
}