import React, { useEffect, useState } from 'react';
import { fetchComputers } from './services/api'; // Asegúrate de tener esta función en tu archivo api.js
import ComputerCard from './components/computerCard.js'; // Importa tu componente ComputerCard

const ComputersList = () => {
  const [computers, setComputers] = useState([]);


  const [totalDisk, setTotalDisk] = useState(0);
  const [totalDiskUsed, setTotalDiskUsed] = useState(0);
  const [totalDiskFree, setTotalDiskFree] = useState(0);


  const clockStyle = {
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '10px',
    display: 'inline-block',
    margin: '10px',
  };

  const clock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }



  useEffect(() => {
    const loadComputers = async () => {
      // Calcular totales
      let diskTotalSum = 0;
      let diskUsedSum = 0;
      let diskFreeSum = 0;
      
      try {

        const data = await fetchComputers();
        data.forEach(computer => {
          diskTotalSum += computer.disk_total;
          diskUsedSum += computer.disk_used;
          diskFreeSum += computer.disk_free;
        });
        setTotalDisk(diskTotalSum);
        setTotalDiskUsed(diskUsedSum);
        setTotalDiskFree(diskFreeSum);
        setComputers(data);
      } catch (error) {
        console.error("Failed to fetch computers:", error);
      }
    };

    loadComputers();
  }, []);

  return (
    <div>
      <div style={clockStyle}>
        {clock()}
      </div>

      <div>
        <p>Total Disk: {totalDisk} GB</p>
        <p>Total Disk Used: {totalDiskUsed} GB</p>
        <p>Total Disk Free: {totalDiskFree} GB</p>
      </div>

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
