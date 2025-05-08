Roster App - Employee Management System / Aplicación de Gestión de Empleados
Full-stack application for employee management with React frontend and Spring Boot backend
Aplicación full-stack para gestión de empleados con frontend React y backend Spring Boot

📚 Table of Contents / Índice
Features

Tech Stack

Installation

Usage

Screenshots

API Documentation

Contributing

License

Contact

🚀 Features / Características
Employee CRUD Operations
Crear, Leer, Actualizar y Eliminar empleados

Search Functionality
Búsqueda en tiempo real con autocompletado

Responsive UI
Interfaz adaptable a dispositivos móviles

Data Validation
Validación de formularios en frontend y backend

Real-time Updates
Actualización instantánea de cambios

💻 Tech Stack / Tecnologías Utilizadas
Layer/Capa	Technologies/Tecnologías
Frontend	React 18, Axios, CSS3, HTML5
Backend	Spring Boot 3, Spring Data JPA, Lombok
Database	MySQL 8, phpMyAdmin
DevOps	Docker, Docker Compose
Tools	Postman, Git, Maven, npm
⚙️ Installation / Instalación
bash
# Backend
mvn clean install
docker-compose up -d

# Frontend
cd frontend
npm install
npm start
🖥️ Usage / Uso
Search Employees: Type in search bar + click 🔍
Buscar empleados: Escribe en la barra + haz clic 🔍

Add New Employee: Click "+ Nuevo Empleado" ➡️ Complete form
Añadir empleado: Haz clic en "+ Nuevo Empleado" ➡️ Completa formulario

View Details: Click "Detalles" en la fila del empleado
Ver detalles: Haz clic en "Detalles" en la fila del empleado

Edit: Click "Editar" ➡️ Modify fields ➡️ Save
Editar: Haz clic en "Editar" ➡️ Modifica campos ➡️ Guardar

📸 Screenshots / Capturas
Home Page - Top Section / Página Inicial - Parte Superior
<img width="1440" alt="Captura de pantalla 2025-05-08 a las 19 03 17" src="https://github.com/user-attachments/assets/37434b06-5e23-419f-bb2a-742991193a20" />


Home Page - Table Section / Página Inicial - Tabla de Empleados
<img width="1440" alt="Captura de pantalla 2025-05-08 a las 19 03 29" src="https://github.com/user-attachments/assets/dabb9f4b-35fa-4577-a1a3-bf7f791ce75f" />


New Employee Form / Formulario Nuevo Empleado
<img width="1440" alt="Captura de pantalla 2025-05-08 a las 19 04 44" src="https://github.com/user-attachments/assets/731f8d78-2f1b-4e16-b82d-c2a8b075747c" />


Employee Details / Detalles de Empleado
<img width="1440" alt="Captura de pantalla 2025-05-08 a las 19 05 44" src="https://github.com/user-attachments/assets/8443653e-b7fb-472c-aba0-a8df418fd18b" />


Edit Employee / Editar Empleado
<img width="1440" alt="Captura de pantalla 2025-05-08 a las 19 06 02" src="https://github.com/user-attachments/assets/c697b637-d5e5-40ec-9913-f4adcc575164" />
<img width="1436" alt="Captura de pantalla 2025-05-08 a las 19 06 11" src="https://github.com/user-attachments/assets/a57b5186-99c5-408f-bb36-0460ea5dbdd4" />


📡 API Documentation / Documentación de la API
Method	Endpoint	Description
GET	/api/v1/employees	Get all employees
GET	api/v1/employee/{id}	Get employee by ID
GET	/api/v1/employees/by-name	Search employees by name
POST	/api/v1/employees	Create new employee
PUT	/api/v1/employees/{id}	Update employee
DELETE	/api/v1/employee/{id}	Delete employee





📜 License / Licencia
Distributed under the MIT License. See LICENSE for more information.
