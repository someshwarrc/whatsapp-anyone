import "./App.css";
import codes from "./CountryCodes.js";
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
      <div>
        Fed up with <span className="decorate">saving</span> the phone number
        everytime you want to WhatsApp someone?
      </div>
      <p>
        Well you <span className="decorate">don't</span> need to save anymore!
      </p>
      <form
        onSubmit={(e) => redirect(e, codes[name], phone)}
        className={"form-wrapper"}
      >
        <label htmlFor="country">Country</label>
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
        <button>WHATSAPP NOW</button>
      </form>
    </div>
  );
}

export default App;
