import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://10.52.32.193:3000'); // Replace with your IP

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('chat message', ({ user, text }) => {
      setChat(prev => [...prev, { user, text }]);
    });

    return () => socket.off('chat message');
  }, []);

  const handleLogin = () => {
    if (username.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('chat message', { user: username, text: message });
      setMessage('');
    }
  };

  if (!isLoggedIn) {
    return (
      <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
        <Text style={{ marginBottom: 10 }}>Enter a username:</Text>
        <TextInput
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <FlatList
        data={chat}
        renderItem={({ item }) => (
          <Text><Text style={{ fontWeight: 'bold' }}>{item.user}: </Text>{item.text}</Text>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}
