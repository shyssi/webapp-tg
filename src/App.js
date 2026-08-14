import { useEffect, useState } from 'react';
import './App.css';

const tg = window.Telegram?.WebApp;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    tg?.ready();

    const telegramUser = tg?.initDataUnsafe?.user;

    if (telegramUser) {
      setUser(telegramUser);
    }
  }, []);

  const onClose = () => {
    tg?.close();
  };

  if (!user) {
    return (
      <div className="App">
        <p>Открой приложение через Telegram</p>
      </div>
    );
  }

  return (
    <div className="App">
      <p>
        Hi {user.username ? `@${user.username}` : user.first_name}
      </p>

      <p>Your ID: {user.id}!</p>

      <button onClick={onClose}>
        working soon...
      </button>
    </div>
  );
}

export default App;
