import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button onClick={onClick}
    style={{ 
      color: "#fff",
      border: "1px, solid, white",
      borderRadius: "30px",
      padding: "1em", 
      margin: "1em", 
      textAlign: "center"
}}
    >{text}</button>
  );
}