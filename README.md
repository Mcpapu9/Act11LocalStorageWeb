# ⚡ Actividad 11 — Sistemas de Misión Crítica & Automatización Web

Una suite transaccional de alta disponibilidad orientada al cliente, limpia, fluida y diseñada con rigor arquitectónico. Desarrollada con **JavaScript Moderno (ES6+)**, **Programación Orientada a Objetos (POO)** y **Bootstrap 5**, diseñada para solventar fallas operativas en sectores clave (Salud, Manufactura Textil y Bioseguridad) con persistencia local en el navegador mediante `LocalStorage`.

### Tecnologías usadas
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

### Control de versiones
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Características del Sistema

- 🏥 **Triage Médico Automatizado:** Clasificación clínica de urgencias en tiempo real por saturación de oxígeno y frecuencia cardíaca con niveles de riesgo dinámicos (`Rojo`, `Amarillo`, `Verde`).

- 💧 **Monitoreo de Huella Hídrica:** Cálculo de impacto ambiental en planta de teñido textil según el tipo de fibra (Algodón vs. Poliéster) con acumulación global de litros consumidos.

- ❄️ **Cadena de Frío para Biológicos:** Logística de control térmico para vacunas con validación estricta de rangos óptimos y estados comprometidos.

- ✂️ **Auditoría de Mermas de Corte:** Evaluación de defectos en rollos textiles con cálculo porcentual de desperdicio y validaciones preventivas de integridad de datos.

- ☣️ **Control de Residuos RPBI:** Manifiesto de desechos biológico-infecciosos con segregación de pesos por categoría (`Punzocortantes` y `Patológicos`) reflejados en insignias en tiempo real.

- 💾 **Persistencia Transaccional (`LocalStorage`):** Motor de almacenamiento local integrado mediante serialización JSON (`JSON.stringify` / `JSON.parse`) para garantizar cero pérdida de datos ante recargas de sesión.


---

## 🛠️ Tecnologías y Arquitectura

- **Lenguaje:** JavaScript (ES6+ Classes, Arrow Functions, Array Methods)

- **UI & Estilos:** Bootstrap 5 (CDN), Componentes Dinámicos (`Cards`, `Tables`, `Badges`, `List Groups`)

- **Persistencia:** Web Storage API (`localStorage`)

- **Patrón de Diseño:** POO con modelado estricto de entidades (`Paciente`, `LoteTela`, `LecturaBiologica`, `RolloAuditado`, `ResiduoRPBI`)

- **Entorno:** Ejecución nativa en el navegador web (Client-side rendering)


---

## 📂 Estructura del Proyecto

El repositorio mantiene una arquitectura modular basada en un dashboard centralizado y subproyectos independientes:

```text
Actividad_11/
│
├── index.html                  # Dashboard / Menú principal de navegación
│
├── proyecto-1-triage/          # Sistema de Triage Rápido en Urgencias
│   ├── index.html
│   └── js/
│       └── app.js              # Lógica, clases y LocalStorage de Triage
│
├── proyecto-2-hidrica/         # Calculadora de Huella Hídrica en Teñido
│   ├── index.html
│   └── js/
│       └── app.js
│
├── proyecto-3-frio/            # Monitor de Cadena de Frío para Biológicos
│   ├── index.html
│   └── js/
│       └── app.js
│
├── proyecto-4-mermas/          # Auditoría de Mermas en Corte Textil
│   ├── index.html
│   └── js/
│       └── app.js
│
└── proyecto-5-rpbi/            # Manifiesto de Residuos RPBI
    ├── index.html
    └── js/
        └── app.js
```

## ⚙️ Configuración y Requisitos del Entorno

Para ejecutar este portafolio de sistemas en tu equipo local:

- **Navegador Web Moderno:** Google Chrome, Mozilla Firefox, Microsoft Edge o Brave (con soporte para ES6 y LocalStorage habilitado).

- **Editor de Código:** Visual Studio Code (recomendado con la extensión Live Server).

- **Control de Versiones:** Git instalado en el sistema.

---

## 📥 Pasos para clonar y ejecutar:

- **Clonar el repositorio:**
```bash
  git clone [https://github.com/Mcpapu9/Act11LocalStorageWeb.git](https://github.com/Mcpapu9/Act11LocalStorageWeb.git)
```

- **Abrir el entorno:**
Abre la carpeta del repositorio clonado en tu editor de código de preferencia (ej. VS Code).

- **Ejecutar el sistema:**
Abre el archivo principal index.html ubicado en la raíz del proyecto directamente en tu navegador web, o utiliza la extensión Live Server para desplegar el servidor local y navegar interactivos por los 5 sistemas industriales y médicos.
