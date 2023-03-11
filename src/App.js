import React from 'react';
import TopicForm from './Components/TopicForm/TopicForm';
import MessageList from './Components/MessageList/MessageList';
import './App.css';

function App() {
  const[messages, setMessages]= React.useState([
    {
      name: 'Player 1',
      message: 'I am ready.',
      id: 1
    },

    {
      name: 'Player 2',
      message: 'I am not ready yet',
      id : 2
    }
  ]);
  function addItem(name, message) {
    console.log('ADD ITEM', name, message);
    setMessages(oldMessages => {
      const newMessages = structuredClone(oldMessages);
    });

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chit Chat App 
        </p>
      </header>
      <main>
          <TopicForm addItem={addItem} />
          <MessageList messages={messages} />
        </main>
        <footer>Footer</footer>
    </div>
  );
}

export default App;
