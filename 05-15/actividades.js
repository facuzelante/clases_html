const nave={
    tipo:"Espacial",
    pais:"Argentina",
    tripulantes:["juan","pedro","pancho","jorge","ivan"],
    cantidaddetripulantes:6,
    estado:"Usada",
    despegar:function() {
        console.log("¡Todo listo para el despegue! Oh no ... ¡algo se rompió!");
        alert("¡BOOOOOOM!");
        //Nota: El desperfecto fue rápidamente reparado y la tripulación está sana y salva.
    }
}

nave.despegar();