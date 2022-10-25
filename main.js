import {series} from './series.js';
let tableBody = document.getElementById('infoTabla');

cargarDatosTabla(series);
promedioSeasons(series);
function cargarDatosTabla(series) {
    series.forEach(se => {
        let trE = document.createElement("tr");
        trE.innerHTML = `<td>${se.id}</td>
        <td><a href="${se.link}">${se.name}</a></td>
        <td>${se.channel}</td>
        <td>${se.seasons}</td>`;
        tableBody.appendChild(trE);
    });
}

function promedioSeasons(series) {
    let avg=0;
    let cs=0;
    let ct=0;
    series.forEach(se => {
        cs+=1;
        ct+=se.seasons;
    });
    avg=ct/cs;
    document.getElementById("lineaAVG").innerHTML="Seasons average:"+avg;
}
