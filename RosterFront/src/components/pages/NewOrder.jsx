import { useState } from "react";
import TutorialService from "../../service/tutorial.service";
import { Link } from "react-router-dom";
import Footer from "../pagecomponents/Footer";
import Header from "../pagecomponents/Header";
import Banner from "../pagecomponents/Banner";

const initialEmployee = {
  fullname: "",
  nif: "",
  birth: "",
  nss: "",
  update: "",
  category: "",
  phone: "",
  location: "",
  zone: "",
  activity: "",
};

const NewEmployee = () => {
  const [employee, setEmployee] = useState(initialEmployee);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
    console.log(employee);
  };

  const handleSubmit = async () => {
    try {
      if (employee.fullname.trim() === "") {
        window.alert("El campo nombre es obligatorio");
        return;
      }

      await TutorialService.axiosCreate(employee);
      console.log("Empleado añadido");
      window.alert("Empleado añadido");
      setEmployee(initialEmployee); // Resetear el formulario
    } catch (error) {
      console.error(
        "Error añadiendo al empleado:",
        error.response ? error.response.data : error
      );
      window.alert("Hubo un error al añadir al empleado");
    }
  };

  return (
    <>
      
      <Banner></Banner>
      <div className="title">Nuevo Empleado</div>
      <section>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Nombre: </label>
              </td>
              <td>
                <input
                  name="fullname"
                  value={employee.fullname}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Dni: </label>
              </td>
              <td>
                <input
                  name="nif"
                  value={employee.nif}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Fecha de Nacimiento: </label>
              </td>
              <td>
                <input
                  name="birth"
                  type="date"
                  value={employee.birth}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            
            <tr>
              <td>
                <label>Fecha de alta: </label>
              </td>
              <td>
                <input
                  name="update"
                  type="date"
                  value={employee.update}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Telefono: </label>
              </td>
              <td>
                <input
                  name="phone"
                  value={employee.phone}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Categoria: </label>
              </td>
              <td>
                <select
                  className="form-select"
                  name="category"
                  value={employee.category || ""}
                  onChange={handleChange}
                >
                  <option value="Conductor">Conductor</option>
                  <option value="Administración">Administración</option>
                  <option value="Repartidor">Repartidor</option>
                  <option value="Mecanico">Mecanico</option>
                  <option value="Ayudante">Ayudante de Mecanico</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Numero SC: </label>
              </td>
              <td>
                <input
                  name="nss"
                  value={employee.nss}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Isla: </label>
              </td>
              <td>
                <select
                  className="form-select"
                  name="location"
                  value={employee.location || ""}
                  onChange={handleChange}
                >
                  <option value="Tenerife">Tenerife</option>
                  <option value="Gran Canaria">Gran Canaria</option>
                  <option value="Lanzarote">Lanzarote</option>
                  <option value="Lanzarote">Fuerteventura</option>
                  <option value="Gomera">La Gomera</option>
                  <option value="La Palma">La Palma</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Zona: </label>
              </td>
              <td>
                <input
                  name="activity"
                  value={employee.zone}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Actividad: </label>
              </td>
              <td>
                <input
                  name="activity"
                  value={employee.activity}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="botones">
        <Link onClick={handleSubmit} to={"/"}>
          Crear
        </Link>
        <Link to={"/"}>Volver</Link>
      </section>
   
    </>
  );
};

export default NewEmployee;
