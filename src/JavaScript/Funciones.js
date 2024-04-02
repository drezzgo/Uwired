function Marlon2(){
    var altura = document.getElementById('Alt').value;
    var conforme;
    var pire_antena = PIRE();
    var frecuencia = document.getElementById('fr').value;
    var distancia_min_PG;
   
    if(pire_antena<=40){//PIRE MENOR A 40 dbm
        if(altura < 2.2){
            conforme = false;
        }else{
            conforme = true;
        }
        
    }else if(pire_antena<=50 ){//PIRE MENOR A 50 dbm

        if(altura < 2.5){
            conforme = false;
        }else{
            conforme = true;
        }

        if(frecuencia<1500){

            distancia_min_PG=2;

        }else{
            distancia_min_PG=1;
        }

        

    }else{//PIRE mayor a 50 dbm

        
    }

}


function captura() {
    var nombreTitular = document.getElementById('nombre_titular').value;
    var paraQueSeUsa = document.getElementById('TipoE').value;
    var tipoDeArea = document.getElementById('TipoA').value;
    var latitud = document.getElementById('Lat').value;
    var longitud = document.getElementById('Long').value;
    var altura = document.getElementById('Alt').value;
    var modelo_antena = document.getElementById('TipoAnt').value;
    var banda_antena = document.getElementById('TipoBandas').value;
    var potencia = document.getElementById('Pot').value;
    var ganancia = document.getElementById('Gan').value;
    var frecuencia = document.getElementById('fr').value;
    var inclinacion = document.getElementById('ic').value;
    var acimud = document.getElementById('ac').value;

    alert('Datos capturados:\n' +
          'Nombre del titular: ' + nombreTitular + '\n' +
          'Para qué se usa la estación: ' + paraQueSeUsa + '\n' +
          'Tipo de área: ' + tipoDeArea + '\n' +
          'Latitud: ' + latitud + '\n' +
          'Longitud: ' + longitud + '\n' +
          'Altura: ' + altura + '\n' +
          'Tipo de Antena: ' + antena + '\n' +
          'Potencia: ' + potencia + '\n' +
          'Ganancia: ' + ganancia + '\n' +
          'Frecuencia (MHz): ' + frecuencia);
    
          document.querySelector('.logo').style.display = 'none';
          document.querySelector('.texto').classList.remove('hidden');
}

function PIRE (){
    var modelo_antena = document.getElementById('TipoAnt').value;
    var potencia_W = document.getElementById('Pot').value; //Watts
    var ganancia_dbm = document.getElementById('Gan').value; //dBm
    
    //var ganancia_W= Math.pow(10, (ganancia_dbm/10))*0.001; Pasar dBm a Watts

    var potencia_dbm = 10*Math.log10(potencia_W/0.001);
    var piredbm = parseInt(potencia_dbm) + parseInt(ganancia_dbm);

    if(modelo_antena == "AAS"){
        var pireW_at = (Math.pow(10, (piredbm/10))*0.001) * 0.25;
    
    }else{
        var pireW_at = (Math.pow(10, (piredbm/10))*0.001) * 0.32;
    }

    pire_dbm_at = 10*Math.log10(pireW_at/0.001).toFixed(2);

    alert('Resultado conversion : ' + potencia_dbm + '\n' +
    'Tipo de antena : ' + modelo_antena + '\n' +
    'PIRE NORMAL : ' + piredbm + '\n' +
    'Resultado PIRE en W con atenuacion ' + pireW_at + '\n'+
    'Resultado PIRE en dbm con atenuacion ' + pire_dbm_at + '\n');

    return pire_dbm_at;
}

