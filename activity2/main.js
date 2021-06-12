
/****************AJAX ******************/
/*function cargarJSON() {
 
    // Creo el objeto que hara la llamada
    let llamada = new XMLHttpRequest();
 
    // Ruta de donde esta el fichero
    let url = "employees.json";
 
    // Indico que debo hacer cuando reciba una respuesta
    llamada.onreadystatechange = function () {
        // Si todo esta bien
        if (this.readyState == 4 && this.status == 200) {
 
            // Parseo la informacion y la muestro
            let datos = JSON.parse(this.responseText);
            createTable(datos);
            jQuer()

           
        }
    }
    console.log('peticion');
    // Abro la llamada o peticion
    llamada.open("GET", url, true);
    // lanzo la peticion
    llamada.send();
 
}*/


/**********************AJAX + JQUERY ***********************/

function jQuer(){

  $(document).ready(function(){
    $('#getEmployees').on('click',function(){
        //var user_id = $('#user_id').val();

        $.ajax({
            type:'POST',
            url:'employees.json',
            dataType: "json",
            data:{},
            success:function(data){
              if(data){
                createTable(data)
              }
             
            }
        });
    });
});




}

function createTable(datos){
    
  
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
     
    
     // Crea las columnas de la tabla
      var columnTitle = document.createElement("tr");
    
      var id = document.createElement("th");
      var textId = document.createTextNode('ID');
      id.appendChild(textId);
      columnTitle.appendChild(id);
      var nane = document.createElement("th");
      var textName = document.createTextNode('Nombre');
      nane.appendChild(textName);
      columnTitle.appendChild(nane);

      var departament = document.createElement("th");
      var textDepartament = document.createTextNode('Departamento');
      departament.appendChild(textDepartament);
      columnTitle.appendChild(departament);
        

      // agrega la column al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(columnTitle);
    


    // Crea las celdas
    for (var i = 0; i < datos.length; i++) {
     // Crea las columnas de la tabla
    var columnTitle = document.createElement("tr");
      
        var id = document.createElement("td");
        var textId = document.createTextNode(datos[i].id);
        id.appendChild(textId);
        columnTitle.appendChild(id);
        var nane = document.createElement("td");
        var textName = document.createTextNode(datos[i].name);
        nane.appendChild(textName);
        columnTitle.appendChild(nane);
        var department = document.createElement("td");
        var textDepartment = document.createTextNode(datos[i].department);
        department.appendChild(textDepartment);
        columnTitle.appendChild(department);

      // agrega la column al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(columnTitle);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");

}


function createTable2(datos){
  
}
window.onload = jQuer;
