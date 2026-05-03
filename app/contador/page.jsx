'use client'

import { useState } from "react"
import { RefreshIcon } from "./icons"
import Navbar from "../navbar"

export default function Contador() {
    const [number, setNumber] = useState(0)
    const numberClass =
        number > 0 ? 'positivo' :
            number < 0 ? 'negativo' :
                ""
    return (
        <div>
            <Navbar />
            <h1>Contador</h1>
            <p className={`number ${numberClass}`}>{number}</p>
            <div className="page-contador">
                <button onClick={() => setNumber(number - 1)}>-1</button>
                <button onClick={() => setNumber(0)}><RefreshIcon size={20} /></button>
                <button onClick={() => setNumber(number + 1)}>+1</button>
            </div>
        </div>
    )
}