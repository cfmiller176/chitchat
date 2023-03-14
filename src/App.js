import React from 'react';
import TopicForm from './Components/TopicForm/TopicForm';
import MessageList from './Components/MessageList/MessageList';
import './App.css';

function App() {
  const [messages, setMessages]= React.useState([
    {
      name:  'Player 1',
      messages:' I am ready.',
      liked: false,
      id: 1
    },

    {
      name: 'Player 2',
      messages: ' I am not ready yet',
      liked: false,
      id : 2
    }
  ]);
  function addItem(name, message) {
    setMessages(oldMessages => {
      const newMessages = structuredClone(oldMessages);
      newMessages.push({
        name,
        message,
        liked: false,
        id: new Date ().getTime()

      });
      return newMessages;
    });
  }

    function toggleLike (id) {
      setMessages(oldMessages => {
        const newMessages = structuredClone(oldMessages);
        const toggledItem = newMessages.find(message => message.id === id);
        toggledItem.liked = !toggledItem.liked;
        return newMessages;
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
          <MessageList messages={messages} toggleLike={toggleLike} />
        </main>
        <footer>Footer</footer>
    </div>
  );
}

export default App;
