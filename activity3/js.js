const generate = document.getElementById('generate');
const rows = document.getElementsByName('rows')[0];
const columns = document.getElementsByName('columns')[0];
const container = document.getElementById('table-container');

generate.onclick = (event) => {
	event.preventDefault(); // prevents normal flow
    
  let newTable= "<table> <tr>";
  
  //check for values
  if(container.innerHTML) {
     var opcion=confirm("Desea eliminar la tabla");

     
     if(opcion==true){
         //variables are reset
        container.querySelectorAll(".row").forEach(container.removeChild);
         document.getElementsByName('columns')[0].value='';
         document.getElementsByName('rows')[0].value='';
         newTable='';
         container.innerHTML="";
         
     }
     //if it is canceled it does nothing
     if (opcion==false){
        return;
     }
      
  } 

   //the columns are created 
   for (let c = 0; c < columns.value; c++) {
        newTable+="<td style='width: 100px;text-align: right;'>"+'Column' + ' ' + c + "</td>"; 
    }

    //variable files
    let f=0;

    newTable+="</tr>";
    //the files are created
    while(f<rows.value){
        
        newTable+="<tr>";

        for(let i=0;i<columns.value; i++){

            newTable+="<td style='width: 100px;text-align: right;'>"+
                'File: ' + f + ' ' + 'col: '+ i + "</td>"; 
        }
        
        newTable+="</tr>";

        f++;
        
    }
       
      newTable+="</table>";
      //the table is added to the element
      document.getElementById('table-container').innerHTML = newTable;
  
}