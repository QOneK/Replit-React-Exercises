import React from "react";
import './Hello.css'
import Button from "./components/Button";
import Header from "./components/Header";
import Subtitle from "./components/Subtitle";

function Hello() {
  return (
    <div className = "App">
      <Button />
      <Header />
      <Subtitle/>
    </div>
  );
}

export default Hello;

//https://replit.com/@cohort0/11A-Hello-Components-Solution-KyuhwanKim#src/components/Subtitle.css