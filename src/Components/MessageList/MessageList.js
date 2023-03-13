import React from 'react';

export default function MessageList({messages}) {
    const messagesJsx= messages.map(messages => (
        <li key ={messages.id}><strong>{messages.name}:</strong>{messages.messages}</li>
    ))
    return (
        <>
            <h4>Message List</h4>
            <ul>{messagesJsx}</ul>
        </>
    );
}