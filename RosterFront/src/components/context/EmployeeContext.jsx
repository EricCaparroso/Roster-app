import { createContext, useContext, useState, useEffect } from 'react';
import TutorialService from '../../service/tutorial.service';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const fetchEmployees = async (search = '') => {
    setIsSearching(true);
    try {
      const { data } = search 
        ? await TutorialService.axiosGetByName(search)
        : await TutorialService.axiosGetAll();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
      setEmployees([]);
    } finally {
      setIsSearching(false);
    }
  };

  const deleteEmployee = async (id) => {
    if (window.confirm('¿Seguro que quiere eliminar al empleado?')) {
      try {
        await TutorialService.axiosDelete(id);
        setEmployees(prev => prev.filter(emp => emp.id !== id));
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  const getEmployeeById = async (id) => {
    try {
      const { data } = await TutorialService.axiosGetAllById(id);
      setCurrentEmployee(data);
      return data;
    } catch (error) {
      console.error('Error fetching employee:', error);
      return null;
    }
  };

  const updateEmployee = async (id, data) => {
    try {
      await TutorialService.axiosUpdate(id, data);
      setEmployees(prev => 
        prev.map(emp => emp.id === id ? { ...emp, ...data } : emp)
      );
      return true;
    } catch (error) {
      console.error('Error updating employee:', error);
      return false;
    }
  };

  const createEmployee = async (data) => {
    try {
      const response = await TutorialService.axiosCreate(data);
      setEmployees(prev => [...prev, response.data]);
      return true;
    } catch (error) {
      console.error('Error creating employee:', error);
      return false;
    }
  };

  const calculateAge = (dateString) => {
    if (!dateString) return 'N/A';
    const birthDate = new Date(dateString);
    if (isNaN(birthDate)) return 'N/A';
    
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        searchTerm,
        setSearchTerm,
        isSearching,
        currentEmployee,
        editMode,
        setEditMode,
        fetchEmployees,
        deleteEmployee,
        getEmployeeById,
        updateEmployee,
        createEmployee,
        calculateAge
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);