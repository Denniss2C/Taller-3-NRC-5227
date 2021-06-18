
var personas = ['Dennis','Juan'];

function imprimirPersonas(){
    let tbl = document.getElementById('tblPersonas');
    /*
    let table = document.getElementById('tblPersonas');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.append(personas);
    tr.append(td);
    table.append(tr);*/
    //document.getElementById('tblPersonas').append(table);
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = personas;
        tr.append(td);

    tbl.append(tr);

}

function imprimirNuevo(nuevo){
    document.getElementById('tblNuevo').innerText = nuevo;
}

function popPersonas(){
    var eliminado = personas.pop();
    imprimirPersonas();
}
function shiftPersonas(){
    var eliminado = personas.shift();
    imprimirPersonas();
}

function pushPersonas(){
    var input = document.getElementById('txtNombre');
    var nombre = input.value;
    var numero_elementos = personas.push(nombre);   
    console.log("# de elementos en el arreglo => " + numero_elementos);
    input.value = "";
    imprimirPersonas();
}

function slicePersonas(){
    var strInicio = document.getElementById('txtInicio').value;
    var strFin = document.getElementById('txtFinal').value;
    var intInicio = parseInt(strInicio);
    var intFin = parseInt(strFin);
    var nuevoArregloPersonas = personas.slice(intInicio, intFin);
    imprimirNuevo(nuevoArregloPersonas);
    imprimirPersonas();
}







