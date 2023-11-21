import { useState } from "react";
import "./Form.css";

const FormForCheckout = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      phone,
    };

    onConfirm(userData);
  };

  return (
    <div className="containerForm">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre
          <input
            className="Input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="Label">
          Phone
          <input
            className="Input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="Label">
          Email
          <input
            className="Input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div>
          <button type="submit" className="button">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormForCheckout;
