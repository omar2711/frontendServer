import socket
import psutil  # Necesitarás instalar psutil usando pip
from datetime import datetime
 
client_start_time = datetime.now()
 
# Initialize timer variables
start_time = datetime.now()
 
def get_elapsed_time():
    elapsed_time = datetime.now() - start_time
    return elapsed_time.total_seconds()
 
def get_ram_info():
    ram = psutil.virtual_memory()
    ram_total = ram.total
    return ram_total
 
def get_ip_address():
    ip_address = socket.gethostbyname(socket.gethostname())
    return ip_address
 
# Add the connection time to the disk_space_info string
connection_time = client_start_time.isoformat()
 
def get_disk_space():
    disk = psutil.disk_usage('/')
    total_space = disk.total
    used_space = disk.used
    free_space = disk.free
    usage_percentage = round((used_space / total_space) * 100, 1)
    return f"Total: {total_space} bytes, Usado: {used_space} bytes, Libre: {free_space} bytes, Porcentaje de uso: {usage_percentage}"
 
def send_disk_space():
    # Configuración del servidor
    host = '192.168.14.7'
    port = 8080
 
    try:
        # Crear socket TCP/IP
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client_socket.connect((host, port))
 
        # Enviar el nombre del departamento del cliente
        department_name = "La Paz"  # Cambia esto por el nombre del departamento correspondiente
        client_socket.send(department_name.encode('utf-8'))
 
        # Recibir una confirmación del servidor (opcional)
        confirmation = client_socket.recv(1024).decode('utf-8')
        print("Confirmación del servidor:", confirmation)
 
        ram_info = get_ram_info()
        ip_address = get_ip_address()
 
        # Enviar información del espacio en disco del cliente
        disk_space_info = get_disk_space()
        # disk_space_info['usage_percentage'] = round((disk_space_info['used_space'] / disk_space_info['total_space']) * 100, 1)
        disk_space_info += f", Connection Time: {connection_time}, RAM Total: {ram_info} bytes, IP Address: {ip_address}"
 
        client_socket.send(disk_space_info.encode('utf-8'))
 
        while True:
            elapsed_time = get_elapsed_time()
            client_socket.send(f"Elapsed Time: {elapsed_time} seconds".encode('utf-8'))
 
        # Cerrar la conexión con el servidor
        client_socket.close()
 
    except Exception as e:
        print(f"Error: {e}")
 
if __name__ == '__main__':
    send_disk_space()