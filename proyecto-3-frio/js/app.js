class LecturaBiologica {
    constructor(lote, temperatura) {
        this.lote = lote;
        this.temperatura = Number(temperatura);
        this.estado = this.evaluarEstado();
    }

    evaluarEstado() {
        if (this.temperatura < 2 || this.temperatura > 8) {
            return "COMPROMETIDO";
        } else {
            return "ÓPTIMO";
        }
    }
}

const inputLote = document.getElementById('loteVacuna');
const inputTemp = document.getElementById('tempActual');
const btnRegistrarTemp = document.getElementById('btnRegistrarTemp');
const gridLecturas = document.getElementById('gridLecturas');

function obtenerLecturas() {
    return JSON.parse(localStorage.getItem('lecturasFrio')) || [];
}

function guardarLecturas(lecturas) {
    localStorage.setItem('lecturasFrio', JSON.stringify(lecturas));
}

function renderizarLecturas() {
    const lecturas = obtenerLecturas();
    gridLecturas.innerHTML = '';

    lecturas.forEach(l => {
        const esComprometido = l.estado === "COMPROMETIDO";
        const claseBorde = esComprometido ? 'border-danger' : 'border-success';
        const claseBadge = esComprometido ? 'bg-danger' : 'bg-success';

        const col = document.createElement('div');
        col.className = 'col-md-6 mb-3';
        col.innerHTML = `
            <div class="card p-3 shadow-sm border-2 ${claseBorde}">
                <h5 class="card-title text-secondary">Lote: <span class="text-dark">${l.lote}</span></h5>
                <p class="card-text mb-1">Temp: <strong>${l.temperatura}°C</strong></p>
                <div>
                    <span class="badge ${claseBadge}">${l.estado}</span>
                </div>
            </div>
        `;
        gridLecturas.appendChild(col);
    });
}

btnRegistrarTemp.addEventListener('click', () => {
    const lote = inputLote.value.trim();
    const temperatura = inputTemp.value;

    if (lote === '' || temperatura === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const nuevaLectura = new LecturaBiologica(lote, temperatura);
    const lecturas = obtenerLecturas();
    lecturas.push(nuevaLectura);
    guardarLecturas(lecturas);

    renderizarLecturas();
    inputLote.value = '';
    inputTemp.value = '';
    inputLote.focus();
});

document.addEventListener('DOMContentLoaded', renderizarLecturas);