var bandas = 0;
let ganancia_antenas = [];
let potencia_antenas = [];

function InspectorMarlon(){
    var altura = document.getElementById('Alt').value.trim();
    var alturaCentro = document.getElementById('AltC').value.trim();
    var potencia = document.getElementById('Pot').value.trim();
    var ganancia = document.getElementById('Gan').value.trim();
    var frecuencia = document.getElementById('fr').value.trim();
    var downtild = document.getElementById('Dwt').value.trim();

    if (altura === '' || alturaCentro === '' || potencia === '' || ganancia === '' || frecuencia === '' || downtild === '') {
        alert('Por favor, complete todos los campos requeridos.');
        return false;
    } else {
        MarlonGod();
    }
}

function MarlonGod(){

    var distancia_min_PG;
    var frecuencia_valor_span;
    var pire_valor_span;
    var distancia_min_n;
    var altura = document.getElementById('Alt').value;
    var alturaCentro = document.getElementById('AltC').value;
    var instalacion = document.getElementById('instalacion').value;
    var banda_antena = document.getElementById('TipoBandas').value;
    var frecuencia = document.getElementById('fr').value; 
    var DwtG = document.getElementById('Dwt').value;

    var pire_antena = PIRE(1);
    var pire_antena_W=PIRE(2);

    var alturaCentro_Persona=parseInt(alturaCentro)-2;
    var conforme;
    var dPG;
    var dOP;

    if (instalacion == "si"){

        if(pire_antena<=40){//PIRE MENOR A 40 dbm
            if(altura < 2.2){
    
                pire_valor_span = document.getElementById('pire_valor1');
                pire_valor_span.textContent = pire_antena;
    
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.Pm40am2').classList.remove('hidden');
    
                conforme = false;
            }else{
    
                pire_valor_span = document.getElementById('pire_valor2');
                pire_valor_span.textContent = pire_antena;
    
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.Pm40aM2').classList.remove('hidden');
                conforme = true;
            }
            dPG=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,1);
            dOP=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,2);
            
        }else if(pire_antena<=50 ){//PIRE MENOR A 50 dbm
    
            if(altura < 2.5){
    
                pire_valor_span = document.getElementById('pire_valor3');
                pire_valor_span.textContent = pire_antena;
    
                conforme = false;
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.Pm50am25').classList.remove('hidden')
            }else if(frecuencia<1500){
                frecuencia_valor_span = document.getElementById('frecuencia_valor1');
                frecuencia_valor_span.textContent = frecuencia;
                pire_valor_span = document.getElementById('pire_valor4');
                pire_valor_span.textContent = pire_antena;
    
                distancia_min_PG=2;
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.Pm50aM25fm15').classList.remove('hidden')
            }else{
                frecuencia_valor_span = document.getElementById('frecuencia_valor2');
                frecuencia_valor_span.textContent = frecuencia;
                pire_valor_span = document.getElementById('pire_valor5');
                pire_valor_span.textContent = pire_antena;
    
                distancia_min_PG=1;
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.Pm50aM25fM15').classList.remove('hidden')
            }
    
            dPG=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,1);
            dOP=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,2);
        
        }else{//PIRE mayor a 50 dbm
    
                dPG=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,1);
                dOP=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,2);
            
        }

    } else {

        var existe_antena = document.getElementById("antena_cerca").value;
        if (existe_antena == "no"){

            if(pire_antena<=40){//PIRE MENOR A 40 dbm
                if(altura < 2.2){
        
                    pire_valor_span = document.getElementById('pire_valor1');
                    pire_valor_span.textContent = pire_antena;
        
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm40am2').classList.remove('hidden');
        
                    conforme = false;
                }else{
        
                    pire_valor_span = document.getElementById('pire_valor2');
                    pire_valor_span.textContent = pire_antena;
        
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm40aM2').classList.remove('hidden');
                    conforme = true;
                }
                dPG=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,1);
                dOP=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,2);
                
            }else if(pire_antena<=50 ){//PIRE MENOR A 50 dbm
        
                if(altura < 2.5){
        
                    pire_valor_span = document.getElementById('pire_valor3');
                    pire_valor_span.textContent = pire_antena;
        
                    conforme = false;
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm50am25').classList.remove('hidden')
                }else if(frecuencia<1500){
                    frecuencia_valor_span = document.getElementById('frecuencia_valor1');
                    frecuencia_valor_span.textContent = frecuencia;
                    pire_valor_span = document.getElementById('pire_valor4');
                    pire_valor_span.textContent = pire_antena;
        
                    distancia_min_PG=2;
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm50aM25fm15').classList.remove('hidden')
                }else{
                    frecuencia_valor_span = document.getElementById('frecuencia_valor2');
                    frecuencia_valor_span.textContent = frecuencia;
                    pire_valor_span = document.getElementById('pire_valor5');
                    pire_valor_span.textContent = pire_antena;
        
                    distancia_min_PG=1;
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm50aM25fM15').classList.remove('hidden')
                }
        
                dPG=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,1);
                dOP=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,2);
            
            }else{//PIRE mayor a 50 dbm
        
                    dPG=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,1);
                    dOP=determinar_dm(banda_antena,frecuencia,alturaCentro_Persona,DwtG,pire_antena_W,2);
                
            }
    
        } else {
            var antena_watts = document.getElementById("pire_antenajena_w").value;
            var antena_metros = document.getElementById("distancia_antena").value;
            if (antena_watts > 10 && frecuencia < 1500 && antena_metros > 10 && pire_antena >= 40) { //Esta bien, se puede poner
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.se_puede_10m').classList.remove('hidden');
            } else if (antena_watts > 10 && frecuencia >= 1500 && antena_metros > 5){ //Esta bien, se puede poner
                
            } else if (antena_watts > 10 && antena_metros > 2){ //Esta bien, se puede poner

            } else { //No se puede poner

            }
        }
    }
}

function determinar_dm(tipo_banda, frecuencia, alturaCentro_Persona, downtild,pire_antena_W,tipo){

    // var distancia_min_PG;
    var s;
    var Hb;
    var DwtR;
    var DmAPG;
    var DmAOP;
    var mDHPG;
    var mDHOP;

    if(tipo_banda=="Unica"){

        if(pire_antena_W>100){

            
            if(frecuencia>=0.1 && frecuencia <=30){
                s=1;

            }else if(frecuencia>30 && frecuencia <=400){
                s=2;

            }else if(frecuencia>400 && frecuencia <=2000){
                s=frecuencia/200;

            }else if(frecuencia>2000 && frecuencia <=300000){
                s= 10;
            }
            //distancia delimita zona al publico general - cambiar a Watts
            mDHPG= Math.sqrt((pire_antena_W/(4*Math.PI*s)));
            mDHOP=0;
            //ire_valor_span = document.getElementById('D');

            //Downtilt en radianes
            DwtR= radianes(downtild);

            //Altura en la que debe estar la parte mas baja radiante
            //de la antena, sino, comparar con la altura ingresada
            Hb=Math.max(DwtR*Math.tan(DwtR), 3.5);

            alert("Minima distancia a la antena para publico general : " + mDHPG.toFixed(2) + "metros\n")
            
            ///////////////////////////////////////////////////////////////

        }

    }else if(tipo_banda=="DiferenteIMT"){
        if(frecuencia>=30 && frecuencia<400){

            DmAPG=0.319*Math.sqrt(pire_antena_W);///ESTA    
            DmAOP=0.143*Math.sqrt(pire_antena_W);

        }else if(frecuencia>=400 && frecuencia<2000){

            DmAPG=6.38*Math.sqrt(pire_antena_W/frecuencia);
            DmAOP=2.92*Math.sqrt(pire_antena_W/frecuencia);

        }else if(frecuencia>=2000 && frecuencia<300000){

            DmAPG=0.143*Math.sqrt(pire_antena_W);
            DmAOP=0.0638*Math.sqrt(pire_antena_W);
        }
        
        mDHPG=Math.sqrt((Math.pow(DmAPG,2))-(Math.pow(alturaCentro_Persona,2)));
        mDHOP=Math.sqrt( (Math.pow(DmAOP,2))-(Math.pow(alturaCentro_Persona,2)));
        
    }

    if(tipo == 1){  //retornar distancia minima publico general
        alert( 
        "Minima distancia a la antena para publico general : " + DmAPG.toFixed(2) + "metros\n" +
        "La distancia minima ocupacional : " + DmAOP.toFixed(2) + "metros\n" +
        "La distancia minima horizontal a la estructura : " + mDHPG.toFixed(2) + " metros\n" +
        "La distancia minima ocupacional a la estructura : : " + mDHOP.toFixed(2) + " metros")
          
        return mDHPG;        

    } else if(tipo == 2){   //retornar distancia minima ocupacional
        
        return mDHOP;
        
    }
}

function PIRE (unidad){
    var modelo_antena = document.getElementById('TipoAnt').value;
    var potencia_W = document.getElementById('Pot').value; //Watts
    var ganancia_dbm = document.getElementById('Gan').value; //dBm
    
    //var ganancia_W= Math.pow(10, (ganancia_dbm/10))*0.001; Pasar dBm a Watts


    var potencia_dbm = 10*Math.log10(potencia_W/0.001);
    var piredbm = parseInt(potencia_dbm) + parseInt(ganancia_dbm);

    if(modelo_antena == "AAS"){
        var pireW_at = (Math.pow(10, (piredbm/10))*0.001) * 0.25;
        var pire_prueba = dbm_a_w(piredbm) * 0.25;

    }else{
        var pireW_at = (Math.pow(10, (piredbm/10))*0.001) * 0.32;
    }

    pire_dbm = w_a_dbm(pireW_at);
    
    if (unidad == 1){

        alert('Profe Marlon, aqui los resultados que comprueban el procedimiento, segun los datos que ingresaste : \n\n' +

        'Convirtiendo los Watts a dBm serian : ' + potencia_dbm.toFixed(1) + '\n' +
        'Junto con la ganancia equivale a un PIRE de : ' + piredbm + '\n\n' +
    
        'Teniendo en cuenta el tipo de antena ' + modelo_antena + ' este debe tener un producto de reduccion por lo tanto :\n\n' +
    
        'El PIRE con la atenuacion en Watts seria : ' + pire_prueba.toFixed(3) + ' \n( . a la derecha son decimales)\n'+
        'El PIRE con la atenuacion en dBm seria : ' + pire_dbm);

        return pire_dbm;
    } if (unidad == 2){
        return pireW_at;
    } else {
        return error('Mala unidad');
    }
}

function radianes(resultado){    
    resultado *= (Math.PI/180);
    return resultado;
}

function w_a_dbm(w){
    resultado = 10*Math.log10(w/0.001).toFixed(2);
    return resultado;
}

function dbm_a_w(dbm){
    resultado = (Math.pow(10, (dbm/10))*0.001);
    return resultado;
}

//Funciones de otras funcionalidades
function mostrarInputsAdicionales() {
    var instalacion = document.getElementById('instalacion').value;
    var inputsAdicionalesDiv = document.getElementById('inputsAdicionales');

    // Limpiar el div antes de agregar nuevos inputs
    inputsAdicionalesDiv.innerHTML = "";

    if (instalacion === "no") {
        // Agregar input para preguntar si hay alguna antena cerca
        var antenaCercaDiv = document.createElement("div");
        antenaCercaDiv.classList.add("form-group");
        antenaCercaDiv.innerHTML = `
            <label class="mx-5" for="antena_cerca">¿En un rango de 10 metros hay alguna antena cerca?</label>
            <select class="form-control w-14" id="antena_cerca" name="antena_cerca" onchange="preguntar_distancia()">
                <option value="no">No</option>  
                <option value="si">Si</option>
            </select>

            <div id="input_cerca" class="form-group py-2"></div>
        `;
        inputsAdicionalesDiv.appendChild(antenaCercaDiv);
    } else {
        // Limpiar el div en caso de que la opción sea "si"
        inputsAdicionalesDiv.innerHTML = "";
    }
}

function preguntar_distancia() {
    var antenaCerca = document.getElementById('antena_cerca').value;
    var inputAdicional = document.getElementById('input_cerca');

    inputAdicional.innerHTML = ""; // Nombre de la variable corregido

    if (antenaCerca === "si") {
        var antenaCercaDiv = document.createElement("div");
        antenaCercaDiv.classList.add("form-group");
        antenaCercaDiv.innerHTML = `
            <label class="mx-5" for="distancia_antena">¿A cuántos metros? : </label>
            <input type="number" class="form-control w-28" id="distancia_antena" name="distancia_antena" placeholder="Metros" />

            <label class="mx-5" for="pire_antenajena_w">PIRE : </label>
            <input type="number" class="form-control w-28" id="pire_antenajena_w" name="pire_antenajena_w" placeholder="Watts" />
        `;
        inputAdicional.appendChild(antenaCercaDiv); // Nombre de la variable corregido
    } 
}