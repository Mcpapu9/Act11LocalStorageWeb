class ResiduoRPBI {
    constructor(area, tipo, peso) {
        this.area = area;
        this.tipo = tipo; // 'punzocortante' o 'patologico'
        this.peso = Number(peso);
    }
}

const inputArea = document.getElementById('areaHosp');
const selectTipo = document.getElementById('tipoRPBI');
const inputPeso = document.getElementById('pesoKg');
const btnAgregarResiduo = document.getElementById('btnAgregarResiduo');
const listaResiduos = document.getElementById('listaResiduos');
const totPunzoSpan = document.getElementById('totPunzo');
const totPatoSpan = document.getElementById('totPato');

function obtenerResiduos() {
    return JSON.parse(localStorage.getItem('residuosRPBI')) || [];
}

function guardarResiduos(residuos) {
    localStorage.setItem('residuosRPBI', JSON.stringify(residuos));
}

function renderizarResiduos() {
    const residuos = obtenerResiduos();
    listaResiduos.innerHTML = '';
    
    let acumuladoPunzo = 0;
    let acumuladoPato = 0;

    residuos.forEach(r => {
        if (r.tipo === 'punzocortante') {
            acumuladoPunzo += r.peso;
        } else if (r.tipo === 'patologico') {
            acumuladoPato += r.peso;
        }

        const badgeColor = r.tipo === 'punzocortante' ? 'bg-danger' : 'bg-warning text-dark';
        const tipoTexto = r.tipo === 'punzocortante' ? 'Punzocortante (Rojo)' : 'Patológico (Amarillo)';

        const item = document.createElement('li');
        item.className = 'list-group-item d-flex justify-content-between align-items-center';
        item.innerHTML = `
            <div>
                <strong>Área:</strong> ${r.area} 
                <span class="badge ${badgeColor} ms-2">${tipoTexto}</span>
            </div>
            <span class="fw-bold">${r.peso} kg</span>
        `;
        listaResiduos.appendChild(item);
    });

    // Reflejar totales en las insignias de resumen
    totPunzoSpan.textContent = acumuladoPunzo.toFixed(1);
    totPatoSpan.textContent = acumuladoPato.toFixed(1);
}

btnAgregarResiduo.addEventListener('click', () => {
    const area = inputArea.value.trim();
    const tipo = selectTipo.value;
    const peso = inputPeso.value;

    if (area === '' || peso === '' || Number(peso) <= 0) {
        alert('Por favor, ingresa un área válida y un peso mayor a 0.');
        return;
    }

    const nuevoResiduo = new ResiduoRPBI(area, tipo, peso);
    const residuos = obtenerResiduos();
    residuos.push(nuevoResiduo);
    guardarResiduos(residuos);

    renderizarResiduos();
    inputArea.value = '';
    inputPeso.value = '';
    inputArea.focus();
});

document.addEventListener('DOMContentLoaded', renderizarResiduos);