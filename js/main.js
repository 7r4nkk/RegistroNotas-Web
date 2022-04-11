var alumnoLista = [];

function addAlumnoToSystem(anombre, aapellido, anota, anotab, anotac){
    var newAlumno = {
        nombre : anombre,
        apellido : aapellido,
        nota : anota,
        notab : anotab,
        notac : anotac,
        notafinal : ((parseFloat(anota)+parseFloat(anotab)+parseFloat(anotac))/3)
    };
    console.log(newAlumno);
    alumnoLista.push(newAlumno);
    localStorageAlumnoLista(alumnoLista);
}
function getAlumnoLista(){
    var storedList = localStorage.getItem('localAlumnoLista')
    if(storedList == null){
        alumnoLista = [];
    }else{
        alumnoLista = JSON.parse(storedList);
    }
    return alumnoLista;
}
function localStorageAlumnoLista(alist){
    localStorage.setItem('localAlumnoLista', JSON.stringify(alist))
}

document.querySelector("#btnSaveAlumno").addEventListener('click', saveAlumno);
drawTablaAlumnos();
function saveAlumno(){
    var sNombre = document.querySelector('#nombreAlumno').value;
        if(sNombre == ""){
            return;
        }
        sApellido = document.querySelector('#apellidoAlumno').value;
        if(sApellido == ""){
            return;
        }
        sNota = document.querySelector('#notaAlumno').value;
        if(sNota == ""){
            return;
        }
        sNotab = document.querySelector('#notabAlumno').value;
        if(sNotab == ""){
            return;
        }
        sNotac = document.querySelector('#notacAlumno').value;
        if(sNotac == ""){
            return;
        }
        sNotafinal = ((parseFloat(sNota)+parseFloat(sNotab)+parseFloat(sNotac))/3)
    
    addAlumnoToSystem(sNombre, sApellido, sNota, sNotab, sNotac, sNotafinal);
    drawTablaAlumnos();
    
}
function drawTablaAlumnos(){
    var list = getAlumnoLista(),
        tbody = document.querySelector("#tablaAlumnos tbody");
    
    tbody.innerHTML = "";

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i);
            nombreCell = row.insertCell(0),
            apellidoCell = row.insertCell(1),
            notaCell = row.insertCell(2),
            notabCell = row.insertCell(3),
            notacCell = row.insertCell(4),
            notafinalCell = row.insertCell(5);
        
            nombreCell.innerHTML = list[i].nombre;
            apellidoCell.innerHTML = list[i].apellido;
            notaCell.innerHTML = list[i].nota;
            notabCell.innerHTML = list[i].notab;
            notacCell.innerHTML = list[i].notac;
            notafinalCell.innerHTML = list[i].notafinal;

        tbody.appendChild(row);
    }
}
