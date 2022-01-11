import { useState } from "react";
import "./ButtonView.css";

export default function ButtonView() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Enter Somthing");
      return;
    }

    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: email }),
    };
    fetch(`http://34.202.162.23:8000/api/`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="row">
      <input
        type="Text"
        value={email}
        className="Email-Address"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button type="button" onClick={handleSubmit} className="Buttton">
        Contact Me
      </button>
    </div>
  );
}
