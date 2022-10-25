import { Serie } from "./Serie.js";
import { series } from "./series.js";

let tableBody: HTMLElement = document.getElementById('infoTabla')!;

cargarDatosTabla(series);

 
function cargarDatosTabla(series:Serie[]):void{
    series.forEach(se=>{
        let trE=document.createElement("tr");
        trE.innerHTML=`<td>${se.id}</td>
        <td>${se.name}</td>
        <td>${se.channel}</td>
        <td>${se.seasons}</td>`;
        console.log(se.id)
        tableBody.appendChild(trE);
    });
  }

function promedioSeasons(series:Serie[]):void{

}    
   