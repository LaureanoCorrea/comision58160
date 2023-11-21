import { useState } from "react";
import "./Form.css";

const FormForCheckout = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [areEmailsMatching, setAreEmailsMatching] = useState(true);

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail (false);
      return;
    }

    if (email !== confirmEmail) {
      setAreEmailsMatching(false);
      return;
    }

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
            className={`Input ${isValidEmail ? "" : "invalid"}`}
            type="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
              setIsValidEmail(true);
            }}
            />
        </label>
        <label className="Label">
          Confirmar Email
          <input
            className={`Input ${areEmailsMatching ? "" : "invalid"}`}
            type="email"
            value={confirmEmail}
            onChange={({ target }) => {
              setConfirmEmail(target.value);
              setAreEmailsMatching(true);
            }}
          />
        </label>
        {!isValidEmail && (
          <p className="errorText">Por favor, ingresa un correo electrónico válido.</p>
        )}
        {!areEmailsMatching && (
          <p className="errorText">Los correos electrónicos no coinciden. Por favor, verifica.</p>
        )}
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