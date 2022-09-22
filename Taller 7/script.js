$(document).ready(ini_evento);
function ini_evento() {
    fill_departamento();
    $("#departamento").change(fill_municipio);
}

function fill_departamento() {
    fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let jsonregion = json;
            let departamentos = [];
            let html = '<option value="">Seleccione...</option>';
            jsonregion.forEach(element => {
                departamentos.push(element.departamento)
            });
            sinRepetidos = departamentos.unique();
            sinRepetidos.sort();
            sinRepetidos.forEach(element => {
                html += '<option>' + element + '</option>';
            });
            document.getElementById('departamento').innerHTML = html;
        });
}

function fill_municipio() {
    let select = document.getElementById('departamento');
    let departamento = select.options[select.selectedIndex].value;
    fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
        .then(response => response.json())
        .then(json => {
            let jsonregion = json;
            let municipios = [];
            let html = '';
            jsonregion.forEach(element => {
                if (element.departamento == departamento) {
                    municipios.push(element.municipio);
                }
            });
            municipios.sort();
            municipios.forEach(element => {
                html += '<option>' + element + '</option>';
            });
            document.getElementById('municipio').innerHTML = html;
        });
}

Array.prototype.unique = function (a) {
    return function () { return this.filter(a) }
}(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
});
