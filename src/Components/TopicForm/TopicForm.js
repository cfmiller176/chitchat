import React from 'react';
import './TopicForm.css';

export default function TopicForm() {
    return (
        <>
            <h4>Topic form </h4>
            <form action="#" method="GET" className="form">
                <div className="form-row">
                <label for="name-field"className="form-label">Name:</label>
                <input id="name-field" type="text" name="name" required />
                
            </div>
            <div className="form-row">
                <label for="message-field" className="form-label">Message:</label>
                <textarea id="message-field" name="message" required></textarea>
                
            </div>
            <div className="form-row">
                <button type="submit">Send</button>

            </div>

            </form>
        </>
    );

}
