"use client";
import Navbar from "../navbar";
import Link from "next/link";

export default function BotaoFugitivo() {
  function fugir(e) {
    const btn = e.target;

    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.left = x + "px";
    btn.style.top = y + "px";
  }
  return (
    <div className="main">
      <Navbar />
      <h1>Botão impossível</h1>
      <p>Clique nesse botão</p>
      <button
        className="botao"
        onPointerEnter={fugir}
        style={{ position: "relative", transition: "0.1s" }}
      >
        Me clique
      </button>
      <Link href={"/botao-fugitivo/desistir"}>Desistir</Link>
    </div>
  );
}
