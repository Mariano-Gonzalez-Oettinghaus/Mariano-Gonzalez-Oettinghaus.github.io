
//sin terminar formulario en progreso

function validarDatos(){
    window.event.preventDefault()
     
    if (document.form.nombre.value=="" ) {
        alert("Campo nombre es obligatorio")  
        document.form.nombre.focus()
    
    }else if (document.form.email.value=="") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus() 

    }else if (document.form.asunto.value=="" ) {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus() 

    }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length <= 50 ){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
        document.form.mensaje.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    }
   
}


const getDayNumber = (janFirstDayNumber, yearDayNumber) => {
    let day = ((janFirstDayNumber + yearDayNumber - 1) % 7);
    day = (day === 0) ? "domingo" : (day === 1) ? "Lunes" : (day === 2) ? "Martes" : (day === 3) ? "Miércoles" : (day === 4) ? "Jueves" : (day === 5) ? "Viernes" : "Sabado";
    return day
}