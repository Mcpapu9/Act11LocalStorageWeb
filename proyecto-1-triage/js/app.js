// 1. Definición de la clase Paciente
class Paciente {
    constructor(nombre, oxigeno, ritmo) {
        this.nombre = nombre;
        this.oxigeno = Number(oxigeno);
        this.ritmo = Number(ritmo);
        this.riesgo = this.calcularRiesgo();
    }

    // Lógica de control (if/else) solicitada para determinar el nivel de riesgo
    calcularRiesgo() {
        if (this.oxigeno < 90 || this.ritmo > 130) {
            return "Rojo (Crítico)";
        } else if (this.oxigeno >= 90 && this.oxigeno <= 94) {
            return "Amarillo (Urgente)";
        } else {
            return "Verde (Estable)";
        }
    }
}

// 2. Selección de elementos del DOM
const inputNombre = document.getElementById('nombreP');
const inputOxigeno = document.getElementById('oxigenoP');
const inputRitmo = document.getElementById('ritmoP');
const btnRegistrar = document.getElementById('btnRegistrar');
const listaPacientes = document.getElementById('listaPacientes');

// 3. Funciones de LocalStorage y Renderizado
function obtenerPacientes() {
    return JSON.parse(localStorage.getItem('pacientesTriage')) || [];
}

function guardarPacientes(pacientes) {
    localStorage.setItem('pacientesTriage', JSON.stringify(pacientes));
}

function renderizarPacientes() {
    const pacientes = obtenerPacientes();
    listaPacientes.innerHTML = ''; // Limpiar la tabla antes de pintar

    pacientes.forEach(p => {
        let claseBadge = '';
        // Asignar colores visuales de Bootstrap según el nivel de riesgo
        if (p.riesgo.includes("Rojo")) {
            claseBadge = 'bg-danger text-white';
        } else if (p.riesgo.includes("Amarillo")) {
            claseBadge = 'bg-warning text-dark';
        } else {
            claseBadge = 'bg-success text-white';
        }

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${p.nombre}</td>
            <td>${p.oxigeno}%</td>
            <td>${p.ritmo} lpm</td>
            <td><span class="badge ${claseBadge}">${p.riesgo}</span></td>
        `;
        listaPacientes.appendChild(fila);
    });
}

// 4. Event Listener para el botón de registro
btnRegistrar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const oxigeno = inputOxigeno.value;
    const ritmo = inputRitmo.value;

    // Validación básica para que no pasen campos vacíos
    if (nombre === '' || oxigeno === '' || ritmo === '') {
        alert('Por favor, completa todos los campos del paciente.');
        return;
    }

    // Crear la nueva instancia de Paciente (el cálculo de riesgo se hace automáticamente dentro)
    const nuevoPaciente = new Paciente(nombre, oxigeno, ritmo);

    // Obtener los anteriores, agregar el nuevo y guardar en LocalStorage
    const pacientes = obtenerPacientes();
    pacientes.push(nuevoPaciente);
    guardarPacientes(pacientes);

    // Actualizar la interfaz y limpiar los inputs
    renderizarPacientes();
    inputNombre.value = '';
    inputOxigeno.value = '';
    inputRitmo.value = '';
    inputNombre.focus();
});

// Cargar los registros guardados al recargar la página
document.addEventListener('DOMContentLoaded', renderizarPacientes);