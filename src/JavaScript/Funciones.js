var bandas = 0;
let ganancia_antenas = [];
let potencia_antenas = [];

function MarlonGod(){
    var altura = document.getElementById('Alt').value;
    var alturaCentro = document.getElementById('AltC').value;
    var banda_antena = document.getElementById('TipoBandas').value;
    var frecuencia = document.getElementById('fr').value;
    var DwtG = document.getElementById('Dwt').value;
    var pire_antena = PIRE();

    var alturaCentro_Persona=parseInt(alturaCentro)-2;
    var conforme;
    var distancia_min_PG;
    var s;
    var Hb;
    var DwtR;
    var DmAPG;
    var DmAOP;
    var mDHPG;
    var mDHOP;
/*    
    Simbologia de los textos
    
    - m : menor
    - M : Mayor
    - p : PIRE
    - a : Altura
    - f : Frecuencia

    Se compone de 3 partes que se repiten a favor de las caracteristicas importantes de los datos:

    Primer parte | Referencia |  -  Segunda parte | Relacion |  -  Tercer parte | Valor |  -  i.. parte (dependiendo de si 
                                                                                              necesita mayor caracterizacion)

    Ejemplo : |p|m|40|a|m|2| corresponderia a |PIRE| menor que | 40 | altura | mayor que | 2 | 
*/    

    if(pire_antena<=40){//PIRE MENOR A 40 dbm
        if(altura < 2.2){
            document.querySelector('.logo').style.display = 'none';
            document.querySelector('.Pm40am2').classList.remove('hidden');
            conforme = false;
        }else{
            document.querySelector('.logo').style.display = 'none';
            document.querySelector('.Pm40aM2').classList.remove('hidden');
            conforme = true;
        }
        
    }else if(pire_antena<=50 ){//PIRE MENOR A 50 dbm

        if(altura < 2.5){
            conforme = false;
            document.querySelector('.logo').style.display = 'none';
            document.querySelector('.Pm50am25').classList.remove('hidden')
        }else if(frecuencia<1500){
            distancia_min_PG=2;
            document.querySelector('.logo').style.display = 'none';
            document.querySelector('.Pm50aM25fm15').classList.remove('hidden')
        }else{
            distancia_min_PG=1;
            document.querySelector('.logo').style.display = 'none';
            document.querySelector('.Pm50aM25fM15').classList.remove('hidden')
        }

    
    }else{//PIRE mayor a 50 dbm

        if(banda_antena=="Unica"){

            if(frecuencia>=0.1 && frecuencia <=30){
                 s=1;

            }else if(frecuencia>30 && frecuencia <=400){
                 s=2;

            }else if(frecuencia>400 && frecuencia <=2000){
                 s=frecuencia/200;

            }else if(frecuencia>2000 && frecuencia <=300000){
                 s= 10;
            }
            distancia_min_PG= Math.sqrt((pire_antena/(4*Math.PI*s)));//distancia delimita zona obj 
            DwtR=DwtG*(Math.PI/180);//Downtilt en radianes
            Hb=Math.max(DwtR*Math.tan(DwtR/*Math.PI / 15*/), 3.5); //es la altura en la que debe estar la parte mas baja radiante de la antena, sino, comparar con la altura ingresada

        }else if(banda_antena=="Multibanda"){
            
        }else if(banda_antena=="DiferenteIMT"){
            if(frecuencia>=30 && frecuencia<400){

                DmAPG=0.319*Math.sqrt(pire_antena);
                DmAOP=0.143*Math.sqrt(pire_antena);

            }else if(frecuencia>=400 && frecuencia<2000){

                DmAPG=6.38*Math.sqrt(pire_antena/frecuencia);
                DmAOP=2.92*Math.sqrt(pire_antena/frecuencia);

            }else if(frecuencia>=2000 && frecuencia<300000){

                DmAPG=0.143*Math.sqrt(pire_antena);
                DmAOP=0.0638*Math.sqrt(pire_antena);
            }
            
            mDHPG=math.sqrt((math.pow(DmAPG,2))-(math.pow(alturaCentro_Persona,2)));
            mDHOP=math.sqrt( (math.pow(DmAOP,2))-(math.pow(alturaCentro_Persona,2)));



              
        }
       
    }
    
}

function mostrarCamposAdicionales() {
    var tipoBandas = document.getElementById("TipoBandas").value;
    var camposAdicionalesContainer = document.getElementById("camposAdicionales");
  
    // Limpiar el contenedor antes de agregar nuevos campos
    camposAdicionalesContainer.innerHTML = "";
  
    if (tipoBandas === "Multibanda") {
      var numBandas = prompt("Por favor, ingrese el número de bandas adicionales de la antena");
      bandas = parseInt(numBandas);

      for (var i = 0; i < numBandas; i++){
        potencia_antenas.push(prompt("Ingresa la potencia de la antena " + (i+2) + " en dBm"))
        ganancia_antenas.push(prompt("Ingresa la ganancia de la antena " + (i+2) + " en W"));
      }

      for (var i = 0; i < numBandas; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = "potencia_W_antena" + (i+2)
        input.className = "form-control rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 my-5 mt-2";
        input.placeholder = "Potencia de la banda " + (i + 2) + " (W)";
        camposAdicionalesContainer.appendChild(input);

        var input = document.createElement("input");
        input.type = "text";
        input.id = "ganancia_dbm_antena" + (i+2)
        input.className = "form-control rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 my-5 mt-2";
        input.placeholder = "Ganancia de la banda " + (i + 2) + " (dBm)";
        camposAdicionalesContainer.appendChild(input);

      }
    }
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

function PIRE_MultiBanda (potencias, ganancias){
    var modelo_antena = document.getElementById('TipoAnt').value;
    let PIREs = [];
    // Verificar si ambos parámetros son arrays
    if (!Array.isArray(potencias) || !Array.isArray(ganancias)){
        console.error('No ingresaron datos.');
        return;
    }
    
    // Verificar si ambos arrays tienen la misma longitud
    if (array1.length !== array2.length) {
        console.error('Faltaron datos por determinar.');
        return;
    }

    for(var i = 0; i < bandas;  i++){
        if(modelo_antena == "AAS"){
            PIREs.push((w_a_dbm(parseInt.potencia_antenas[i])+parseInt.ganancia_antenas[i])*0.25);
        }else{
            PIREs.push((w_a_dbm(parseInt.potencia_antenas[i])+parseInt.ganancia_antenas[i])*0.32);
        }


        PIREs.push(w_a_dbm(parseInt.potencia_antenas[i])+parseInt.ganancia_antenas[i]);
    }
}

function w_a_dbm(w){
    resultado = 10*Math.log10(w/0.001).toFixed(2);
}

function dbm_a_w(dbm){
    resultado = (Math.pow(10, (dbm/10))*0.001);
    return dbm;
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