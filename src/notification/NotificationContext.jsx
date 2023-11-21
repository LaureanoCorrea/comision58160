import { useState, createContext, useContext } from "react";

const Notification = ({ notificationData }) => {
  const notificationStyle = {
    position: "absolute",
    textAlign: "center",
    top: 100,
    right: 50,
    backgroundColor: notificationData.type === "success" ? "green" : "red",
    color: "white",
    padding: "10px 20px 10px 20px",
    borderRadius: 10,
    zIndex: `1000`,
  };

  return (
    <div style={notificationStyle}>
      <h4>{notificationData.type === "success" ? "Éxito" : "Error"}</h4>
      <p>{notificationData.text}</p>
    </div>
  );
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationData, setNotificationData] = useState({
    text: "",
    type: "success",
  });

  const setNotification = (type, text) => {
    setNotificationData({
      text,
      type,
    });

    setTimeout(() => {
      setNotificationData({
        text: "",
        type: "success",
      });
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {notificationData.text && (
        <Notification notificationData={notificationData} />
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);