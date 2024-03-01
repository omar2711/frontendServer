import React, { useEffect, useState } from 'react';
import { fetchComputers } from './services/api'; // Asegúrate de tener esta función en tu archivo api.js
import ComputerCard from './components/computerCard.js'; // Importa tu componente ComputerCard

const ComputersList = () => {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    const loadComputers = async () => {
      try {
        const data = await fetchComputers();
        setComputers(data);
      } catch (error) {
        console.error("Failed to fetch computers:", error);
      }
    };

    loadComputers();
  }, []);

  return (
    <div>
      <h2>Lista de Computadoras</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {computers.map(computer => (
          <ComputerCard key={computer.id} computer={computer} />
        ))}
      </div>

    </div>
  );
};

export default ComputersList;
