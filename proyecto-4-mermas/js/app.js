class RolloAuditado {
    constructor(idRollo, mtsTotales, mtsDefecto) {
        this.idRollo = idRollo;
        this.mtsTotales = Number(mtsTotales);
        this.mtsDefecto = Number(mtsDefecto);
        this.porcentajeMerma = this.calcularMerma();
        this.estadoCalidad = this.evaluarCalidad();
    }

    calcularMerma() {
        if (this.mtsTotales === 0) return 0;
        return ((this.mtsDefecto / this.mtsTotales) * 100).toFixed(2);
    }

    evaluarCalidad() {
        if (this.porcentajeMerma > 10) {
            return "Rechazado (Alta Merma)";
        } else if (this.porcentajeMerma > 5) {
            return "Revisión Requerida";
        } else {
            return "Aprobado (Estándar)";
        }
    }
}

const inputIdRollo = document.getElementById('idRollo');
const inputMtsTotales = document.getElementById('mtsTotales');
const inputMtsDefecto = document.getElementById('mtsDefecto');
const btnAuditar = document.getElementById('btnAuditar');
const tablaMermas = document.getElementById('tablaMermas');

function obtenerAuditorias() {
    return JSON.parse(localStorage.getItem('auditoriasMermas')) || [];
}

function guardarAuditorias(auditorias) {
    localStorage.setItem('auditoriasMermas', JSON.stringify(auditorias));
}

function renderizarAuditorias() {
    const auditorias = obtenerAuditorias();
    tablaMermas.innerHTML = '';

    auditorias.forEach(a => {
        let claseBadge = 'bg-success';
        if (a.porcentajeMerma > 10) {
            claseBadge = 'bg-danger';
        } else if (a.porcentajeMerma > 5) {
            claseBadge = 'bg-warning text-dark';
        }

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${a.idRollo}</td>
            <td>${a.mtsTotales} m</td>
            <td>${a.porcentajeMerma}%</td>
            <td><span class="badge ${claseBadge}">${a.estadoCalidad}</span></td>
        `;
        tablaMermas.appendChild(fila);
    });
}

btnAuditar.addEventListener('click', () => {
    const idRollo = inputIdRollo.value.trim();
    const mtsTotales = Number(inputMtsTotales.value);
    const mtsDefecto = Number(inputMtsDefecto.value);

    if (idRollo === '' || isNaN(mtsTotales) || isNaN(mtsDefecto)) {
        alert('Por favor, completa correctamente todos los campos.');
        return;
    }

    // Validación preventiva solicitada
    if (mtsDefecto > mtsTotales) {
        alert('Error: Los metros con defecto no pueden ser mayores a los metros totales del rollo.');
        return;
    }

    const nuevaAuditoria = new RolloAuditado(idRollo, mtsTotales, mtsDefecto);
    const auditorias = obtenerAuditorias();
    auditorias.push(nuevaAuditoria);
    guardarAuditorias(auditorias);

    renderizarAuditorias();
    inputIdRollo.value = '';
    inputMtsTotales.value = '';
    inputMtsDefecto.value = '';
    inputIdRollo.focus();
});

document.addEventListener('DOMContentLoaded', renderizarAuditorias);