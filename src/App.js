import { useEffect, useState } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    tg?.ready();

    const telegramUser = tg?.initDataUnsafe.user;

    if (telegramUser) {
      setUser(telegramUser);
    }


  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">

      <p>
        Hi {user.username ? user.username : user.first_name}
      </p>
      Your ID: {user.id}!
      <button onClick={onClose}>
        working soon...
      </button>
    </div>
  );
}

export default App;
