// services/websocketService.js
class WebSocketService {
    constructor() {
        this.ws = null;
    }

    connect(url) {
        this.ws = new WebSocket(url);
        this.ws.onopen = () => console.log("WebSocket Connected");
        this.ws.onmessage = (e) => console.log("Message from server: ", e.data);
        this.ws.onerror = (e) => console.error("WebSocket error: ", e);
        this.ws.onclose = () => console.log("WebSocket connection closed");
    }

    sendMessage(message) {
        if (this.ws) {
            this.ws.send(JSON.stringify(message));
        }
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

export default new WebSocketService();
