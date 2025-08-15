export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}

export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: Date;
}