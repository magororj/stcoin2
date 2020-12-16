import React from "react";

export default function Home() {
  return (
    <div className=" hero mb-3 p-3">
      <h1>StnCoins</h1>
      <h2>Take control of your coins.</h2>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Abrir Modal
      </button>
    </div>
  );
}
