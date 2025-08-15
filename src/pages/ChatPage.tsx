import React from 'react';
import Chat from '../components/Chat/Chat';
import Navbar from '../components/Shared/Navbar';

const ChatPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="chat-container">
                <Chat />
            </div>
        </div>
    );
};

export default ChatPage;