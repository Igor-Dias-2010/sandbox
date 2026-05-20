'use client'
import Navbar from "../navbar"
import confetti from "canvas-confetti"

export default function Confetti() {
    function soltarConfeti(){
        confetti({
            particleCount: 1000,
            spread: 120,
            origin: {y: 0.6}
        })
    }
    return(
        <div className="main">
            <Navbar />
            <h1>Gerador de confeti</h1>
            <button onClick={soltarConfeti} className="botao">Confeti</button>
        </div>
    )
}