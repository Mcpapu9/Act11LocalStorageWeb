class LoteTela {
    constructor(fibra, kilos) {
        this.fibra = fibra;
        this.kilos = Number(kilos);
        this.aguaConsumida = this.calcularAgua();
    }

    calcularAgua() {
        if (this.fibra === 'algodon') {
            return this.kilos * 10000;
        } else if (this.fibra === 'poliester') {
            return this.kilos * 300;
        }
        return 0;
    }
}

const selectFibra = document.getElementById('tipoFibra');
const inputKilos = document.getElementById('kilosTela');
const btnCalcular = document.getElementById('btnCalcular');
const aguaTotalSpan = document.getElementById('aguaTotal');
const historialLotes = document.getElementById('historialLotes');

function obtenerLotes() {
    return JSON.parse(localStorage.getItem('lotesTextil')) || [];
}

function guardarLotes(lotes) {
    localStorage.setItem('lotesTextil', JSON.stringify(lotes));
}

function renderizarLotes() {
    const lotes = obtenerLotes();
    historialLotes.innerHTML = '';
    let totalAgua = 0;

    lotes.forEach(l => {
        totalAgua += l.aguaConsumida;
        
        const item = document.createElement('li');
        item.className = 'list-group-item bg-dark text-white d-flex justify-content-between align-items-center border-secondary';
        item.innerHTML = `
            <div>
                <span class="fw-bold text-capitalize">${l.fibra}</span> - ${l.kilos} kg
            </div>
            <span class="badge bg-info text-dark fs-6">${l.aguaConsumida.toLocaleString()} Litros</span>
        `;
        historialLotes.appendChild(item);
    });

    aguaTotalSpan.textContent = totalAgua.toLocaleString();
}

btnCalcular.addEventListener('click', () => {
    const fibra = selectFibra.value;
    const kilos = inputKilos.value;

    if (kilos === '' || Number(kilos) <= 0) {
        alert('Por favor, ingresa una cantidad válida de kilogramos.');
        return;
    }

    const nuevoLote = new LoteTela(fibra, kilos);
    const lotes = obtenerLotes();
    lotes.push(nuevoLote);
    guardarLotes(lotes);

    renderizarLotes();
    inputKilos.value = '';
});

document.addEventListener('DOMContentLoaded', renderizarLotes);