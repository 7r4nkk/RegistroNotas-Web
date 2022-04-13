'use strict';
const btnSaveAlumno = document.querySelector("#btnSaveAlumno");

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#formulario [required]');
    let error = false;
    for(let i = 0; i< inputs_requeridos.length; i++){
        if(inputs_requeridos[i].value == ""){
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        }if(inputs_requeridos[i].value > 10){
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        }else{
            inputs_requeridos[i].classList.remove('input-error')
        }
    }

    return error;
};

let obtener_datos = () =>{
    let error = validar();

    if(error){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Los datos ingresados del alumno no son validos',
            showConfirmButton: false,
            timer: 2000
        })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Alumno registrado correctamente',
            showConfirmButton: false,
            timer: 2000
        })
    }
};

btnSaveAlumno.addEventListener('click', obtener_datos);