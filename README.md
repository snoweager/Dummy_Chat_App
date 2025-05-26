# React Native Chat App 

A simple real-time chat application built using React Native and Socket.io, featuring a dummy login screen and instant messaging capability.

# Features

- Dummy login (username-based)
- Real-time messaging
- WebSocket communication using Socket.io
- Mobile-friendly UI built with React Native

# Requirements

Before getting started, make sure these are installed:

# 1. Node.js  
Install from: https://nodejs.org

# 2. Expo CLI  
Install globally:

```bash
npm install -g expo-cli
````

# 3. Expo Go App

Download on your mobile (Android/iOS):
[Expo Go - Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
[Expo Go - App Store](https://apps.apple.com/app/expo-go/id982107779)

# 4. Same Wi-Fi Network

Your phone and PC must be on the same local network.

---

# How I Built It (Step-by-Step)

1. Set up Node.js backend server with Socket.io

   * Created `server/index.js` with a basic WebSocket server.
   * Enabled CORS for client connections.

2. Initialized the React Native app with Expo

   * Ran `npx create-expo-app chat-app`
   * Installed dependencies:

     ```bash
     npm install socket.io-client
     ```

3. Created a simple login screen

   * Added a `LoginScreen.js` with username input and a "Join" button.

4. Built the chat interface

   * Created `ChatScreen.js` to show messages and input.
   * Messages update in real-time using Socket.io.

5. Connected mobile and server via socket

   * Set `const socket = io("http://YOUR_PC_LOCAL_IP:3000")` in `App.js`.
   * Made sure the phone and PC are on same Wi-Fi.

6. Tested using Expo Go

   * Ran `npm start`, scanned the QR code, and began chatting!

---

# Project Structure

```
chat-app/
├── App.js              # Entry point, manages screen navigation
├── LoginScreen.js      # Dummy login screen
├── ChatScreen.js       # Real-time chat UI
├── server/
│   └── index.js        # Socket.io backend
└── package.json
```

---

# Run the App

### Start the Server:

```bash
cd server
node index.js
```

# Run the Frontend:

```bash
npm start
```

Then, scan the QR code with Expo Go on your phone.

Make sure your backend IP in `App.js` is correct:

```js
const socket = io("http://<your-local-ip>:3000");
```

---

# Dummy Login

The login screen only asks for a username. This is just for simulating real-time chat with multiple clients.

---

# Built With

* React Native (Expo)
* Socket.io
* Node.js

---


# Getting Started

# Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A mobile device with the Expo Go app (Android/iOS)
- Both mobile and PC connected to the (same Wi-Fi network)

---

# 1. Clone the Repository

```bash
git clone https://github.com/snoweager/chat-app.git
cd chat-app
````

---

# 2. Install Dependencies

```bash
npm install
```

---

# 3. Start the Backend Server

```bash
cd server
node index.js
```

Note: Update the `socket` URL in `App.js` to your PC's local IP:

```js
const socket = io('http://YOUR_PC_LOCAL_IP:3000');
```

---

# 4. Run the React Native App

```bash
npm start
```

Use Expo to scan the QR code and open the app on your phone.

---

# Built With

* React Native (via Expo)
* Socket.io
* Node.js (for backend server)

---

# Screenshots

![Login Screen](screenshots/login.jpg)
![Chat Screen](screenshots/chat.jpg)

---

# Future Improvements

* Real authentication (JWT, Firebase)
* Chat persistence (MongoDB/Firebase)
* Private messaging
* Emojis / Media sharing

---

# License

This project is open source and free to use under the [MIT License](LICENSE).

---

# Acknowledgements

Built with using React Native and Socket.io

```
