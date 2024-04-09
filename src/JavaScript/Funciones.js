var bandas = 0;
var contador = 0;
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
        Valorant();
    }
}

function Valorant(){
    //Datos que brinda el formulario
    var instalacion = document.getElementById('instalacion').value;
    var frecuencia = document.getElementById('fr').value; 
    var altura = document.getElementById('Alt').value;
    var alturaCentro = document.getElementById('AltC').value;
    var banda_antena = document.getElementById('TipoBandas').value;
    var frecuencia = document.getElementById('fr').value; 
    var Pire_ajena;
    //declarar variables para labels 
    var Dmin_span; //DistanciaSpan
    var Necesita_Medicion; //NecesitaMedicion

    //Variables que usamos para imprimir
    var distancia_minima_horizontal_PG;
    var distancia_minima_horizontal_OC;

    var pire_antena = PIRE(1);
    var pire_antena_W=PIRE(2);

    var alturaCentro_Persona=parseInt(alturaCentro)-2;
    var alturaCentro_Persona_span = document.getElementById("altura");
    alturaCentro_Persona_span.textContent = alturaCentro_Persona + " metros.";
    
    //Valores que se sacan de una operacion
    var pire_antena = PIRE(1);
    
    if (instalacion == "si"){ // HECHO - No importa, se efectua normal
        
        if(pire_antena<=40){ // HECHO - Si es menor o igual a 40 dBm, solo importa su altura
            ///////////////////////////////////////////////
            //////////////PIRE MENOR A 40 dbm//////////////
            //////////////////////////////////////////////

                distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
                distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
                if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                    alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n\n" +
                    "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n\n" +  
                    "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );
                } else {
                    alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n\n" +
                    "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n\n" +  
                    "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );
                }
                
                if(altura < 2.2){ // HECHO - Si la altura es menor de 2.2, esta mal
                    pire_valor_span = document.getElementById('pire_valor1');
                    pire_valor_span.textContent = pire_antena;
                    
                    Necesita_Medicion4 = document.getElementById('necesita_medicion1');
                    Necesita_senalizacion4 = document.getElementById('necesita_senalizacion1');
                    distancia_ocupacional4 = document.getElementById('distancias1');
                    
                    if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                        Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                        Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                        distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                    }else{
                        Necesita_Medicion4.textContent="No requiere de hacer medicion";
                    Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                    }
                    
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm40am2').classList.remove('hidden');
                
                }else{ // HECHO - Si no es menor, es porque esta bien entonces se evalua
                    pire_valor_span = document.getElementById('pire_valor1_2');
                    pire_valor_span.textContent = pire_antena;

                    Necesita_Medicion4 = document.getElementById('necesita_medicion1_2');
                    Necesita_senalizacion4 = document.getElementById('necesita_senalizacion1_2');
                    distancia_ocupacional4 = document.getElementById('distancias1_2');
                    
                    if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                        Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                        Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                        distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                    }else{
                        Necesita_Medicion4.textContent="No requiere de hacer medicion";
                    Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                    }
    
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm40aM2').classList.remove('hidden');
                    
                }

        } else if ( pire_antena <= 50){ // HECHO - Si es menor a 50 dBm, importa altura y frecuencia
                
                distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
                distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
                if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                    alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n\n" +
                    "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n\n" +  
                    "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" ); 
                }

                if(altura < 2.5){ // HECHO - Si la altura es menor a 2.5, esta mal
                    pire_valor_span = document.getElementById('pire_valor3');
                    pire_valor_span.textContent = pire_antena;
                    Necesita_Medicion4 = document.getElementById('necesita_medicion2');
                    Necesita_senalizacion4 = document.getElementById('necesita_senalizacion2');
                    distancia_ocupacional4 = document.getElementById('distancias2');
                    
                    if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                        Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                        Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                        distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                    }else{
                        Necesita_Medicion4.textContent="No requiere de hacer medicion";
                    Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                    }
                    
                    conforme = false;
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm50am25').classList.remove('hidden')
    
                }else if( frecuencia < 1500){// Si es mayor, se evalua si Frec. es menor que 1500 mHz
                    frecuencia_valor_span = document.getElementById('frecuencia_valor1');
                    frecuencia_valor_span.textContent = frecuencia;
                    pire_valor_span = document.getElementById('pire_valor4');
                    pire_valor_span.textContent = pire_antena;
                    
                    Necesita_Medicion4 = document.getElementById('necesita_medicion2_1');
                    Necesita_senalizacion4 = document.getElementById('necesita_senalizacion2_1');
                    distancia_ocupacional4 = document.getElementById('distancias2_1');
                    
                    if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                        Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                        Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                        distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                    }else{
                        Necesita_Medicion4.textContent="No requiere de hacer medicion";
                    Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                    }

                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm50aM25fm15').classList.remove('hidden')
    
                }else{// Si no es menor, es mayor o igual a 1500 mHZ
                    frecuencia_valor_span = document.getElementById('frecuencia_valor2');
                    frecuencia_valor_span.textContent = frecuencia;
                    pire_valor_span = document.getElementById('pire_valor5');
                    pire_valor_span.textContent = pire_antena;

                    Necesita_Medicion4 = document.getElementById('necesita_medicion2_2');
                        Necesita_senalizacion4 = document.getElementById('necesita_senalizacion2_2');
                        distancia_ocupacional4 = document.getElementById('distancias2_2');
                        
                        if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                            Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                        }else{
                            Necesita_Medicion4.textContent="No requiere de hacer medicion";
                        Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }
        
                    distancia_min_PG=1;
                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.Pm50aM25fM15').classList.remove('hidden')
                }
                        
        }else if(pire_antena<=53){ // HECHO - si es menor a 53 dBm, hasta este punto no es necesario medir
            distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
            distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
            if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n\n" +
                "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n\n" +  
                "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );    
            }

            Necesita_Medicion4 = document.getElementById('necesita_medicion3');
            Necesita_senalizacion4 = document.getElementById('necesita_senalizacion3');
            distancia_ocupacional4 = document.getElementById('distancias3');
                        
            if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
             }else{
                Necesita_Medicion4.textContent="No requiere de hacer medicion";
                Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }
            
            Dmin_span = document.getElementById('Dmin');
            Dmin_span.textContent = distancia_minima_horizontal_PG.toFixed(2);
            document.querySelector('.logo').style.display = 'none';
            document.querySelector('.PM50TAu53').classList.remove('hidden')
            
        } else { // HECHO - Al ser mayor a 53dBm, es necesario medir         
            distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
            distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
            if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n" +
                "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n" +  
                "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" ); 
            } 
            
            Necesita_Medicion4 = document.getElementById('necesita_medicion4');
            Necesita_senalizacion4 = document.getElementById('necesita_senalizacion4');
            distancia_ocupacional4 = document.getElementById('distancias4');
                        
            if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
            }else{
                 Necesita_Medicion4.textContent="No requiere de hacer medicion";
                 Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                }


            Dmin_span = document.getElementById('Dmin');
            Dmin_span.textContent = distancia_minima_horizontal_PG.toFixed(2);
            document.querySelector('.logo').style.display = 'none';
            document.querySelector('.PM50TAu').classList.remove('hidden')
        }

    } else { //  HECHO - Importa saber, si hay antenas

        var existe_antena = document.getElementById("antena_cerca").value; 
        if(existe_antena=="no"){ // HECHO - Si no hay antenas es lo mismo que si ya estuviera instalada, no importa
        
            if(pire_antena<=40){ // HECHO - Si es menor o igual a 40 dBm, solo importa su altura
                ///////////////////////////////////////////////
                //////////////PIRE MENOR A 40 dbm//////////////
                //////////////////////////////////////////////
    
                    distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
                    distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
                    if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                        alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n\n" +
                        "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n\n" +  
                        "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );
                    }
                    
                    if(altura < 2.2){ // HECHO - Si la altura es menor de 2.2, esta mal
                        pire_valor_span = document.getElementById('pire_valor1');
                        pire_valor_span.textContent = pire_antena;
                        
                        Necesita_Medicion4 = document.getElementById('necesita_medicion1');
                        Necesita_senalizacion4 = document.getElementById('necesita_senalizacion1');
                        distancia_ocupacional4 = document.getElementById('distancias1');
                        
                        if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                            Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                        }else{
                            Necesita_Medicion4.textContent="No requiere de hacer medicion";
                        Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }
                        
                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.Pm40am2').classList.remove('hidden');
                    
                    }else{ // HECHO - Si no es menor, es porque esta bien entonces se evalua
                        pire_valor_span = document.getElementById('pire_valor2_2');
                        pire_valor_span.textContent = pire_antena;
    
                        Necesita_Medicion4 = document.getElementById('necesita_medicion1_2');
                        Necesita_senalizacion4 = document.getElementById('necesita_senalizacion1_2');
                        distancia_ocupacional4 = document.getElementById('distancias1_2');
                        
                        if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                            Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                        }else{
                            Necesita_Medicion4.textContent="No requiere de hacer medicion";
                        Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }
        
                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.Pm40aM2').classList.remove('hidden');
                        
                    }
    
            } else if ( pire_antena <= 50){ // HECHO - Si es menor a 50 dBm, importa altura y frecuencia
                    
                    distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
                    distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
                    if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                        alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n\n" +
                        "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n\n" +  
                        "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" ); 
                    }
    
                    if(altura < 2.5){ // HECHO - Si la altura es menor a 2.5, esta mal
                        pire_valor_span = document.getElementById('pire_valor3');
                        pire_valor_span.textContent = pire_antena;
                        Necesita_Medicion4 = document.getElementById('necesita_medicion2');
                        Necesita_senalizacion4 = document.getElementById('necesita_senalizacion2');
                        distancia_ocupacional4 = document.getElementById('distancias2');
                        
                        if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                            Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                        }else{
                            Necesita_Medicion4.textContent="No requiere de hacer medicion";
                        Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }
                        
                        conforme = false;
                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.Pm50am25').classList.remove('hidden')
        
                    }else if( frecuencia < 1500){// Si es mayor, se evalua si Frec. es menor que 1500 mHz
                        frecuencia_valor_span = document.getElementById('frecuencia_valor1');
                        frecuencia_valor_span.textContent = frecuencia;
                        pire_valor_span = document.getElementById('pire_valor4');
                        pire_valor_span.textContent = pire_antena;
                        
                        Necesita_Medicion4 = document.getElementById('necesita_medicion2_1');
                        Necesita_senalizacion4 = document.getElementById('necesita_senalizacion2_1');
                        distancia_ocupacional4 = document.getElementById('distancias2_1');
                        
                        if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                            Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                        }else{
                            Necesita_Medicion4.textContent="No requiere de hacer medicion";
                        Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }
    
                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.Pm50aM25fm15').classList.remove('hidden')
        
                    }else{// Si no es menor, es mayor o igual a 1500 mHZ
                        frecuencia_valor_span = document.getElementById('frecuencia_valor2');
                        frecuencia_valor_span.textContent = frecuencia;
                        pire_valor_span = document.getElementById('pire_valor5');
                        pire_valor_span.textContent = pire_antena;
    
                        Necesita_Medicion4 = document.getElementById('necesita_medicion2_2');
                            Necesita_senalizacion4 = document.getElementById('necesita_senalizacion2_2');
                            distancia_ocupacional4 = document.getElementById('distancias2_2');
                            
                            if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                                Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                                Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                                distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                            }else{
                                Necesita_Medicion4.textContent="No requiere de hacer medicion";
                            Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                            }
            
                        distancia_min_PG=1;
                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.Pm50aM25fM15').classList.remove('hidden')
                    }
                            
            }else if(pire_antena<=53){ // HECHO - si es menor a 53 dBm, hasta este punto no es necesario medir
                distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
                distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
                if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                    alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n\n" +
                    "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n\n" +  
                    "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );    
                }
    
                Necesita_Medicion4 = document.getElementById('necesita_medicion3');
                Necesita_senalizacion4 = document.getElementById('necesita_senalizacion3');
                distancia_ocupacional4 = document.getElementById('distancias3');
                            
                if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                    Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                    Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                    distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                 }else{
                    Necesita_Medicion4.textContent="No requiere de hacer medicion";
                    Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                            }
                
                Dmin_span = document.getElementById('Dmin');
                Dmin_span.textContent = distancia_minima_horizontal_PG.toFixed(2);
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.PM50TAu53').classList.remove('hidden')
                
            } else { // HECHO - Al ser mayor a 53dBm, es necesario medir         
                distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); //Imprimir la distancia
                distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2); //Imprimir la distancia
                if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                    alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n" +
                    "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n" +  
                    "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" ); 
                } 
                
                Necesita_Medicion4 = document.getElementById('necesita_medicion4');
                Necesita_senalizacion4 = document.getElementById('necesita_senalizacion4');
                distancia_ocupacional4 = document.getElementById('distancias4');
                            
                if (distancia_minima_horizontal_PG > 0 || distancia_minima_horizontal_OC > 0){
                    Necesita_Medicion4.textContent="Requiere de hacer mediciones";
                    Necesita_senalizacion4.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                    distancia_ocupacional4.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                }else{
                     Necesita_Medicion4.textContent="No requiere de hacer medicion";
                     Necesita_senalizacion4.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                    }
    
    
                Dmin_span = document.getElementById('Dmin');
                Dmin_span.textContent = distancia_minima_horizontal_PG.toFixed(2);
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.PM50TAu').classList.remove('hidden')
            }
         
        } else { // HECHO -Depende el PIRE es importante saber o no, las otras antenas
            var antenajena_watts = document.getElementById("pire_antenajena_w").value;
            var antenajena_metros = document.getElementById("distancia_antena").value;
            var antenajena_frecuencia = document.getElementById("frecuencia_antenajena").value;
            distancia_minima_horizontal_PG = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 1); 
            distancia_minima_horizontal_OC = determinar_dm(banda_antena, frecuencia, alturaCentro_Persona, pire_antena_W, 2)//Imprimir la distancia

            if(pire_antena <= 50 && pire_antena>40){ // HECHO - pire menor a 50, vale verga
                
                if(antenajena_watts>10){
                     // Si el PIRE es mayor a 10 W importa que la distancia sea mayor a 10 m


                    if(antenajena_metros > 10 &&  antenajena_frecuencia < 1500){ //Se puede instalar
                        respuesta.textContent = "la resolucion establece que las antenas cercanas si son menores de 1500 mHz pueden estar a un maximo de 10 metros desde la base de la estructura"
                        //Falta hacer label de todo bien, se puede instalar porque :
                        
                        respuesta = document.getElementById('respuesta5');
                        Necesita_Medicion=document.getElementById('necesita_medicion5');
                        Necesita_senalizacion=document.getElementById('necesita_senalizacion5');
                        distancia_ocupacional = document.getElementById('distancias5');
                        
                        if (distancia_minima_horizontal_PG >0 || distancia_minima_horizontal_OC > 0){
                            Necesita_Medicion.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                            
                        } else {
                            Necesita_Medicion.textContent="No requiere de hacer medicion";
                            Necesita_senalizacion.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                            
                        }

                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.antejanena_sepuede').classList.remove('hidden')

                    } else if(antenajena_metros > 5 &&  antenajena_frecuencia > 1500){ // se puede instalar pero a 5 metros
                        
                        respuesta = document.getElementById('respuesta6');
                        Necesita_Medicion=document.getElementById('necesita_medicion6');
                        Necesita_senalizacion=document.getElementById('necesita_senalizacion6');
                        distancia_ocupacional = document.getElementById('distancias6');
                        respuesta.textContent = "la resolucion establece que las antenas cercanas si son mayores de 1500 mHz pueden estar a un maximo de 5 metros desde la base de la estructura"
                                
                        if (distancia_minima_horizontal_PG >0 || distancia_minima_horizontal_OC > 0){
                            alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n" +
                             "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n" +  
                             "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );
                            Necesita_Medicion.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                            
                        } else {
                            Necesita_Medicion.textContent="No requiere de hacer medicion";
                            Necesita_senalizacion.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }

                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.antejanena_sepuede_5M').classList.remove('hidden')

                    } else { //No se puede instalar pa, te falta 
                        Necesita_Medicion3 = document.getElementById('necesita_medicion7');
                        Necesita_senalizacion3 = document.getElementById('necesita_senalizacion7');
                        distancia_ocupacional3 = document.getElementById('distancias7');
                        Pire_ajena=document.getElementById('PIRE_AJENA');
                        Pire_ajena.textContent=antenajena_watts;
                        distanciaM_100= document.getElementById('DISTANCIA_100');
                        distanciaM_100.textContent=distancia_minima_horizontal_PG;
                        respuesta = document.getElementById('respuesta7');
                        respuesta.textContent = "la resolucion establece que NO puede instalar la estacion de radiofrecuencia dado que hay antenas muy cercanas en su rango de frecuencia"
                        
                                
                        if (distancia_minima_horizontal_PG >0 || distancia_minima_horizontal_OC > 0){
                            alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n" +
                             "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n" +  
                             "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );
                            Necesita_Medicion3.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion3.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional3.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                            
                        } else {
                            Necesita_Medicion3.textContent="No requiere de hacer medicion";
                            Necesita_senalizacion3.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }

                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.antenajena_nosepuede').classList.remove('hidden')
                    }                   
                }
                                
            }else if(pire_antena>50) { // HECHO -Si es mayor a 50, 

                if(antenajena_watts>100 && (antenajena_metros<=distancia_minima_horizontal_PG)){// HECHO -
                    
                    Necesita_Medicion3 = document.getElementById('necesita_medicion8');
                    Necesita_senalizacion3 = document.getElementById('necesita_senalizacion8');
                    distancia_ocupacional3 = document.getElementById('distancias8');
                    Pire_ajena=document.getElementById('PIRE_AJENA1');
                    Pire_ajena.textContent=antenajena_watts;
                    distanciaM_100= document.getElementById('DISTANCIA_100_1');
                    distanciaM_100.textContent=distancia_minima_horizontal_PG;
                    respuesta = document.getElementById('respuesta8');
                    respuesta.textContent = "la resolucion establece que NO puede instalar la estacion de radiofrecuencia dado que hay antenas muy cercanas en su rango de frecuencia"
                        
                            
                    if (distancia_minima_horizontal_PG >0 || distancia_minima_horizontal_OC > 0){
                        alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n" +
                             "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n" +  
                             "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );
                        Necesita_Medicion3.textContent="Requiere de hacer mediciones";
                        Necesita_senalizacion3.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                        distancia_ocupacional3.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                        
                    } else {
                        Necesita_Medicion3.textContent="No requiere de hacer medicion";
                        Necesita_senalizacion3.textContent = "No Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                    }

                    document.querySelector('.logo').style.display = 'none';
                    document.querySelector('.antenajena_nosepuede_M50').classList.remove('hidden')
                    

                }else{// HECHO - si se puede poner 

                    Necesita_Medicion=document.getElementById('necesita_medicion9');
                    Necesita_senalizacion=document.getElementById('necesita_senalizacion9');
                    distancia_ocupacional = document.getElementById('distancias9');
                    respuesta = document.getElementById('respuesta9');

                    respuesta.textContent = "la resolucion establece que NO puede instalar la estacion de radiofrecuencia dado que hay antenas muy cercanas en su rango de frecuencia"
                                   
                        if (distancia_minima_horizontal_PG >0 || distancia_minima_horizontal_OC > 0){
                            alert("La distancia minima horizontal a la estructura publico general : " + distancia_minima_horizontal_PG.toFixed(2) + " m\n" +
                             "La distancia minima horizontal ocupacional a la estructura : " + distancia_minima_horizontal_OC.toFixed(2) + " m\n" +  
                             "Por lo tanto en esa distancia apartir de la estructura de la antena se debe señalizar los respectivos limites se debe señalizar" );
                            Necesita_Medicion.textContent="Requiere de hacer mediciones";
                            Necesita_senalizacion.textContent = "Requiere de establecer una señalizacion correspondiente a la distancia minima poblacional y ocupacional"
                            distancia_ocupacional.textContent = "La distancia ocupacional corresponderia a " + distancia_minima_horizontal_OC.toFixed(2) + " metros, para publico general corresponde a " + distancia_minima_horizontal_PG.toFixed(2) + " metros";
                            
                        } else {
                            Necesita_Medicion.textContent="No requiere de hacer medicion";
                            Necesita_senalizacion.textContent = "No requiere de establecer una señalizacion correspondiente a la distancia minima poblacional ni ocupacional"
                        }

                        document.querySelector('.logo').style.display = 'none';
                        document.querySelector('.antejanena_sepuede_M50').classList.remove('hidden')
                }
            } 
        }   
    }
}

function determinar_dm(tipo_banda, frecuencia, alturaCentro_Persona,pire_antena_W, tipo ){

    // var distancia_min_PG;
    var s;
    var DmAPG;
    var DmAOP;
    var mDHPG;
    var mDHOP;

    //Variables de Gráfico en Bandas Diferentes a IMT
    var rAPG_span = document.getElementById("rAPG");
    var rAOP_span = document.getElementById("rAOP");

    var mDHPG_span = document.getElementById("mDHPG");
    var mDHOP_span = document.getElementById("mDHOP");

    var mDHPG_BU_span = document.getElementById("mDHPG_unica");

    var rAPG;
    var rAOP;

    if(tipo_banda=="Unica"){

        ocultarGrafico();
        mostrarBU();
        
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

        rAPG = mDHPG;

        if(isNaN(mDHPG)) {
            mDHPG_BU_span.textContent = "No presenta distancia mínima.";
        } else {
            mDHPG_BU_span.textContent = mDHPG.toFixed(2)  + " metros.";
        }

    }else if(tipo_banda=="DiferenteIMT"){
        ocultarBU();
        mostrarGrafico();

        if(frecuencia>=30 && frecuencia<400){

            DmAPG=0.319*Math.sqrt(pire_antena_W);///ESTA    
            DmAOP=0.143*Math.sqrt(pire_antena_W);

            rAPG = DmAPG;
            rAOP = DmAOP;

            rAPG_span.textContent = rAPG.toFixed(2)  + " metros.";
            rAOP_span.textContent = rAOP.toFixed(2)  + " metros.";

        }else if(frecuencia>=400 && frecuencia<2000){

            DmAPG=6.38*Math.sqrt(pire_antena_W/frecuencia);
            DmAOP=2.92*Math.sqrt(pire_antena_W/frecuencia);

            rAPG = DmAPG;
            rAOP = DmAOP;

            rAPG_span.textContent = rAPG.toFixed(2) + " metros.";
            rAOP_span.textContent = rAOP.toFixed(2)  + " metros.";

        }else if(frecuencia>=2000 && frecuencia<300000){

            DmAPG=0.143*Math.sqrt(pire_antena_W);
            DmAOP=0.0638*Math.sqrt(pire_antena_W);

            rAPG = DmAPG;
            rAOP = DmAOP;

            rAPG_span.textContent = rAPG.toFixed(2)  + " metros.";
            rAOP_span.textContent = rAOP.toFixed(2)  + " metros.";
        }
        
        mDHPG=Math.sqrt((Math.pow(DmAPG,2))-(Math.pow(alturaCentro_Persona,2)));
        mDHOP=Math.sqrt( (Math.pow(DmAOP,2))-(Math.pow(alturaCentro_Persona,2)));

        if(isNaN(mDHPG)) {
            mDHPG_span.textContent = "No presenta distancia mínima.";
            mDHOP_span.textContent = "No presenta distancia mínima.";
        } else {
            mDHPG_span.textContent = mDHPG.toFixed(2)  + " metros.";
            mDHOP_span.textContent = mDHOP.toFixed(2)  + " metros.";
        }
    }

    if(tipo == 1){  //retornar distancia minima publico general en horizontal
        return mDHPG;
        
    } else if(tipo == 2){   //retornar distancia minima ocupacional en horizontal
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

            <label class="mx-5" for="frecuencia_antenajena">Frecuencia : </label>
            <input type="number" class="form-control w-28" id="frecuencia_antenajena" name="frecuencia_antenajena" placeholder="mHz" />
        `;
        inputAdicional.appendChild(antenaCercaDiv); // Nombre de la variable corregido
    } 
}

function recargarPagina() {
    // Utiliza la función location.reload() para recargar la página
    location.reload();

}

function mostrarGrafico() {
    document.getElementById('grafico').style.display = 'block';
}

function ocultarGrafico() {
    document.getElementById('grafico').style.display = 'none';
}

function mostrarBU() {
    document.getElementById('banda_unica').style.display = 'block';
}

function ocultarBU() {
    document.getElementById('banda_unica').style.display = 'none';
}