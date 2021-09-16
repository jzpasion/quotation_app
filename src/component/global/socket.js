import socketio from "socket.io-client";

export const socket = socketio.connect("http://192.168.1.144:8080");