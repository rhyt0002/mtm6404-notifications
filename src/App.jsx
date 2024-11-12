import { useState } from 'react';
import notificationsData from './notifications';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  // Handle clearing individual notification
  const clearNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  // Handle clearing all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>{notifications.length} notifications remaining</p>
      <button className="clear-all-btn" onClick={clearAllNotifications}>
        Clear All Notifications
      </button>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <div className="notification-content">
              <h3>{notification.name}</h3>
              <p>{notification.message}</p>
            </div>
            <button className="clear-btn" onClick={() => clearNotification(notification.id)}>
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
