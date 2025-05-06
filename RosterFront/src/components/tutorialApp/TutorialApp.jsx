import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import NewOrder from "../pages/NewOrder";
import { useEffect, useState } from "react";
import TutorialService from "../../service/tutorial.service";
import Footer from "../pagecomponents/Footer";
import Wave from "../pagecomponents/Wave";
const TutorialApp = () => {
  const [employees, setEmployees] = useState([]);

  // Carga inicial de datos
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await TutorialService.axiosGetAll();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} setEmployees={setEmployees} />}
        />
        <Route path="/employee/:id" element={<Details />} />
        <Route path="/employee/:name" element={<Details />} />
        <Route path="/plantilla/new" element={<NewOrder />} />
      </Routes>
      <Wave></Wave>
    <Footer></Footer>
    </div>
      
  );
};

export default TutorialApp;
