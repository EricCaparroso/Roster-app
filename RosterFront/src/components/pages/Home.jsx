import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TutorialService from "../../service/tutorial.service";
import Footer from "../pagecomponents/Footer";
import Header from "../pagecomponents/Header";
import Banner from "../pagecomponents/Banner";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    const retrieveEmployees = async () => {
      try {
        const data = await TutorialService.axiosGetAll();
        console.log("Data fetched:", data);
        setEmployees(data.data);
        setAllEmployees(data.data); 
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    retrieveEmployees();
  }, []);

  const handleSearchChange = (e) => {
    const target = e.target.value;
    setSearchTerm(target);
  };
  const calculateAge = (birthDate) => {
    if (!birthDate) return "Fecha no válida"; // Manejo de casos de fecha no disponible
  
    // Convertir el formato de la fecha si es necesario
    const normalizedDate = birthDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');

    const birth = new Date(normalizedDate);
  
    if (isNaN(birth)) return "Fecha no válida"; // Manejo de fechas inválidas
  
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
  
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    return age;
  };
  
  
  const retrieveByTarget = async () => {
    if (!searchTerm.trim()) {
      // Si el campo de búsqueda está vacío, mostramos todos
      setEmployees(allEmployees);
      return;
    }

    setIsSearching(true);
    try {
      const data = await TutorialService.axiosGetByName(searchTerm);
      setEmployees(data.data || []);
    } catch (error) {
      console.error("Error searching employees:", error);
      setEmployees([]);
    } finally {
      setIsSearching(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      retrieveByTarget();
    }
  };
  const deleteEmployee = async (id) => {
    if (window.confirm(`¿Seguro que quiere eliminar al empleado?`)) {
      try {
        await TutorialService.axiosDelete(id);
        setEmployees(employees.filter((employee) => employee.id !== id));
        // También actualizamos la lista completa
        setAllEmployees(allEmployees.filter((employee) => employee.id !== id));
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };
  

  return (
    <div className="home">
      <div className="title-container">
      <Banner></Banner>
      </div>
      <div className="subtitle">
        <Link className="subtitle-btn" to={`/plantilla/new`}>
          Nuevo empleado
        </Link>
        <input
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          value={searchTerm}
          className="subtitle-search"
          placeholder="Introduce el nombre del empleado"
        />
        <i
          onClick={retrieveByTarget}
          className="fa-solid fa-magnifying-glass icon-search"
          style={{ cursor: "pointer" }}
        />
        {isSearching && <span>Buscando...</span>}
      </div>
      <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Dni</td>
            <td>Nss</td>
            <td>Fecha Nacimiento</td>
            <td>Años</td>
            <td>Fecha Alta</td>
            <td>Años de Alta</td>
            <td>Categoria</td>
            <td>Actividad</td>
            <td>Isla</td>
            <td>Zona</td>
            <td>145</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map(
              ({
                id,
                fullname,
                nif,
                nss,
                birth,
                indate,
                phone,
                category,
                activity,
                location,
                zone,
                model145,
              }) => (
                <tr key={id}>
                  <td>{fullname}</td>
                  <td>{nif}</td>
                  <td>{nss}</td>
                  <td>{birth}</td>
                  <td>{birth?calculateAge(birth) : "Fecha no disponible"}</td>
                  <td>{indate}</td>
                  <td>{calculateAge(indate)>1?calculateAge(indate)+" años" : "1 año"}</td>
                  <td>{phone}</td>
                  <td>{category}</td>
                  <td>{activity}</td>
                  <td>{location}</td>
                  <td>{zone == 1 ? <i class="fa-solid fa-circle-check tick"></i> :<i class="fa-solid fa-circle-xmark cross"></i>}</td>   
                  <td className="actions">
                    <Link
                      to={`/employee/${id}`}
                      state={{ from: "details" }}
                      className="btn btn-primary mr-2"
                    >
                      Detalles
                    </Link>
                    <Link
                      to={`/employee/${id}`}
                      state={{ from: "edit" }}
                      className="btn btn-succes mr-2"
                    >
                      Editar..
                    </Link>
                    <button
                      onClick={() => deleteEmployee(id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="12" className="text-center">
                {isSearching ? "Buscando..." : "No se encontraron empleados"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      
    </div>
  );
};
export default Home;
