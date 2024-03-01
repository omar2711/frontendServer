import axios from 'axios';

// Configura la URL base de todas las llamadas a la API
const API_BASE_URL = 'http://localhost:8000/api/'; // Ajusta esto según la URL de tu API

// Configura una instancia de axios
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Función para obtener todas las computadoras
export const fetchComputers = async () => {
  try {
    const response = await axiosInstance.get('computers/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para obtener una computadora específica por ID
export const fetchComputerById = async (id) => {
  try {
    const response = await axiosInstance.get(`computers/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para crear una nueva computadora
export const createComputer = async (computerData) => {
  try {
    const response = await axiosInstance.post('computers/', computerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para actualizar una computadora
export const updateComputer = async (id, computerData) => {
  try {
    const response = await axiosInstance.put(`computers/${id}/`, computerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para eliminar una computadora
export const deleteComputer = async (id) => {
  try {
    const response = await axiosInstance.delete(`computers/${id}/`);
    return response.data; // O simplemente return; si no esperas una respuesta
  } catch (error) {
    throw error;
  }
};
