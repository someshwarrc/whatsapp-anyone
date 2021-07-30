import "./App.css";
import codes from "./CountryCodes.js";
import WhatsAppLogo from "./WhatsApp_Logo.png";
import React from "react";

function App() {
  const names = Object.keys(codes);
  const [name, setName] = React.useState(names[0]);
  const [phone, setPhone] = React.useState("");
  const redirect = (e, extension, number) => {
    e.preventDefault();
    e.stopPropagation();

    const baseUrl = "http://wa.me/";

    if (number.length !== 0)
      window.location.href = baseUrl + "+" + extension + number;
  };
  return (
    <div className={"container"}>
      <img src={WhatsAppLogo} width="200" alt="whatsapp logo" />
      <div className="header-text">
        Fed up with <span className="decorate">saving</span> the phone number
        everytime you want to WhatsApp someone?
      </div>
      <div className="header-text">
        Well you <span className="decorate">don't</span> need to save any
        numbers anymore!
      </div>
      <div className="head-text">
        Whatsapp <span className="decorate">without</span> saving numbers
      </div>
      <form
        onSubmit={(e) => redirect(e, codes[name], phone)}
        className={"form-wrapper"}
      >
        <label htmlFor="country">Select Country</label>
        <select
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={"name"}
          id="country"
        >
          {names.map((name) => (
            <option value={name} key={name + `${Math.random() * 1000}`}>
              {name}
            </option>
          ))}
        </select>
        <div className={"code-number"}>
          <input
            type="text"
            name="extension"
            value={`+${codes[name]}`}
            id="ext"
            disabled
          />
          <input
            type="text"
            name="phone_number"
            id="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter number without extension.."
          />
        </div>
        <button>
          <img
            src="https://www.freepnglogos.com/uploads/paper-plane-png/paper-plane-paper-planes-aircraft-send-image-pixabay-5.png"
            width="64"
            alt="Whatsapp number!"
          />
        </button>
      </form>
    </div>
  );
}

export default App;
