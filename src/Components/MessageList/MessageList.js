import React from 'react';
import Messageitem from './MessageItem/MessageItem';
import './MessageList.css';

export default function MessageList({messages, toggleLike}) {
    
    const messagesJsx= messages.map(messages =>
        <MessageItem message={message} key={message.id} toggleLike={toggleLike} />);
       return (
        <>
            <h4>Message List</h4>
            <ul>{messagesJsx}</ul>
        </>
    );
}