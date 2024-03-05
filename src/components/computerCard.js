import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ComputerCard({ computer, onDelete }) {
    
    const containerStyle = {
        border: '1px solid #ddd', 
        borderRadius: '15px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        padding: '20px', 
        marginBottom: '20px', 
        maxWidth: '300px', 
        margin: '10px', 
        backgroundColor: '#fff', 
    };

    const handleDeleteClick = () => {
        onDelete(computer.id);
    };

    const clock = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    } 

    function getTimeDifferenceFromLastUpdate(lastUpdate) {
        const now = new Date();
        const lastUpdateDate = new Date(lastUpdate);
        const differenceInMilliseconds = now - lastUpdateDate;
        const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
        const differenceInMinutes = Math.floor(differenceInSeconds / 60);
        const differenceInHours = Math.floor(differenceInMinutes / 60);
        const differenceInDays = Math.floor(differenceInHours / 24);
    
        if (differenceInDays > 0) {
            return `${differenceInDays} day(s) ago`;
        } else if (differenceInHours > 0) {
            return `${differenceInHours} hour(s) ago`;
        } else if (differenceInMinutes > 0) {
            return `${differenceInMinutes} minute(s) ago`;
        } else {
            return `${differenceInSeconds} second(s) ago`;
        }
    }

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
                        <p><b>Used From Total: ({((computer.disk_total/5000)*100).toFixed(2)}% From 5TB) </b></p>
                        <p><b>Time passed from last update:</b> {getTimeDifferenceFromLastUpdate(computer.last_update)}</p>
                        <Button variant="danger" onClick={handleDeleteClick}>Eliminar</Button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ComputerCard;
