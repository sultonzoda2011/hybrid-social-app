import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/config'; // Adjust the import based on your Firebase config file
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ id: string; text: string; user: string }[]>([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
            const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as any;
            setMessages(messagesData);
        });

        return () => unsubscribe();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            await addDoc(collection(db, 'messages'), {
                text: newMessage,
                user: 'User', // Replace with actual user data
                createdAt: new Date(),
            });
            setNewMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map(message => (
                    <div key={message.id} className="message">
                        <strong>{message.user}: </strong>{message.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;