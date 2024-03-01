import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ComputerCard({ computer }) {
    
    const containerStyle = {
        border: '1px solid #ddd', // Borde gris claro
        borderRadius: '15px', // Bordes redondeados
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
        padding: '20px', // Espaciado interno
        marginBottom: '20px', // Espaciado exterior inferior
        maxWidth: '300px', // Ancho máximo del contenedor
        margin: '10px', // Margen para evitar que los elementos estén demasiado juntos
        backgroundColor: '#fff', // Fondo blanco para el contraste con la sombra
      };

      const serverTotal = 5000;

    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Body>
                    <Card.Text>
                         <div style={containerStyle}>

                            <p><b>Departamento:</b> {computer.department_name}</p>
                            <p><b>IP:</b> {computer.ip_address}</p>
                            <p><b>Disk Total:</b> {computer.disk_total} GB</p>
                            <p><b>Disk Used:</b> {computer.disk_used} GB ({((computer.disk_used / computer.disk_total) * 100).toFixed(2)}%)</p>
                            <p><b>Disk Free: </b>{computer.disk_free} GB</p>
                            <p><b>Main Process ID: </b>{computer.main_process_id}</p>
                            <p><b>Memory RAM: </b>{computer.memory_ram} GB</p>
                            <p><b>Last Update: </b>{new Date(computer.last_update).toLocaleString()}</p>
                            <p><b>Used From Total: ({((computer.disk_total/serverTotal)*100).toFixed(2)}%) </b></p>
                        </div>
                    </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default ComputerCard;



