import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import TutorialService from "../../service/tutorial.service";
import Footer from "../pagecomponents/Footer";
import Header from "../pagecomponents/Header";
import Banner from "../pagecomponents/Banner";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const [employee, setEmployee] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  // Efecto para manejar el modo de edición
  useEffect(() => {
    if (location.state?.from === "edit") {
      setEditMode(true);
    }
  }, [location]);

  // Efecto para cargar los datos del empleado
  useEffect(() => {
    const retrieveEmployee = async () => {
      try {
        const { data } = await TutorialService.axiosGetAllById(id);
        console.log(data)
        setEmployee(data);
        // Inicializar formData con los datos del empleado
        setFormData(data);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    if (id) retrieveEmployee();
  }, [id]);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejar cambio de archivo (foto)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          photoURL: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await TutorialService.axiosUpdate(id, formData);
      setEmployee(formData);
      window.alert("Empleado Actualizado Correctamente");
      setEditMode(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <>
    
      <div>
        <Banner></Banner>
        {employee ? (
          <div className="card mt-3">
            <div className="card-header">
              <h3>
                {editMode ? "Actualizar detalles" : "Detalles del Empleado"}
              </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <table className="table">
                  <tbody>
                    <tr>
                      <td rowSpan="12">
                        <img
                          src={
                            formData.photoURL || "ruta_a_la_foto_predeterminada"
                          }
                          alt="Foto del Empleado"
                          className="img-fluid"
                        />
                        {editMode && (
                          <input
                            type="file"
                            className="form-control mt-2"
                            onChange={handleFileChange}
                          />
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Nombre:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                            type="text"
                            className="form-control"
                            name="fullname"
                            value={formData.fullname || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.fullname
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Dni:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                            type="text"
                            className="form-control"
                            name="nif"
                            value={formData.nif || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.nif
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Años:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                            type="date"
                            className="form-control"
                            name="birth"
                            value={formData.birth || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.birth
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Fecha de Alta:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                            type="date"
                            className="form-control"
                            name="update"
                            value={formData.indate || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.indate
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Categoría:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={formData.phone || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.phone
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Teléfono:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                                                      className="form-select"
                            name="category"
                            value={formData.category || ""}
                            onChange={handleInputChange}
                          >
                           
                          </input>
                        ) : (
                          formData.category
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Número de SC:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                            type="text"
                            className="form-control"
                            name="nss"
                            value={formData.nss || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.nss
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Zona:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <select
                            className="form-select"
                            name="location"
                            value={formData.location || ""}
                            onChange={handleInputChange}
                          >
                            <option value="Tenerife">Tenerife</option>
                            <option value="Gran Canaria">Gran Canaria</option>
                            <option value="Lanzarote">Lanzarote</option>
                            <option value="Lanzarote">Fuerteventura</option>
                            <option value="Gomera">La Gomera</option>
                            <option value="La Palma">La Palma</option>
                          </select>
                        ) : (
                          formData.location
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>145:</strong>
                      </td>
                      <td>
                     
                        {editMode ? (
                          <input
                            type="text"
                            className="form-control"
                            name="zone"
                            value={formData.zone || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.zone
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Isla:</strong>
                      </td>
                      <td>
                        {editMode ? (
                          <input
                            type="text"
                            className="form-control"
                            name="activity"
                            value={formData.activity || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          formData.activity
                        )}
                      </td>
                    </tr>

                    {editMode && (
                      <tr>
                        <td>Acciones:</td>
                        <td colSpan="2" className="text-end">
                          <button
                            type="submit"
                            className="btn btn-success me-2"
                          >
                            Guardar
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setEditMode(false)}
                          >
                            Cancelar
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </form>
              <Link to="/" className="btn btn-secondary">
                Volver
              </Link>
            </div>
          </div>
        ) : (
          <p>Cargando datos del empleado...</p>
        )}
      </div>
  
    </>
  );
};

export default Details;
