const actividad =(tarea,duracion,callback)=>{
    setTimeout(()=>{
        callback(tarea);
    } , duracion)
    
    }
    actividad("1 levantarse", 5000,(tarea)=>{
        console.log("tarea:"+ tarea);
        actividad("2 Tender la cama", 3000,(tarea)=>{
            console.log("tarea:"+ tarea);
            actividad("3 bañarse", 3000,(tarea)=>{
                console.log("tarea:"+ tarea);
                actividad("4 tomar clase de paradigmas", 5000,(tarea)=>{
                    console.log("tarea:"+ tarea);
                    actividad("5 desayunar", 8000,(tarea)=>{
                        console.log("tarea:"+ tarea);
                        actividad("6 jugar videojuegos", 10000,(tarea)=>{
                            console.log("tarea:"+ tarea);
                        })
                    })
                })
            })
        })
    })