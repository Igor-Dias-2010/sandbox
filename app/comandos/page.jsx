"use client";

import { Play } from "lucide-react";
import Navbar from "../navbar";
import { useState } from "react";

export default function Comandos() {
    const [input, setInput] = useState("");
    const [mensagem, setMensagem] = useState("");
    const handleIputChange = (e) => setInput(e.target.value);
    const handleEnterToExecute = (e) => {
        if (e.key === "Enter") {
            executarComando();
        }
    };

    const comandos = {
        "clear-efcts": {
            descricao: "Limpa todos os temas.",
            executar: () => {
                document.body.className = "";
            },
        },
        "hacker-thm": {
            descricao: "Ativa o tema hacker.",
            executar: () => {
                document.body.className = "hacker-theme";
            },
        },

        "dark-thm": {
            descricao: "Ativa o tema escuro.",
            executar: () => {
                document.body.className = "dark-theme";
            },
        },
    };

    function executarComando() {
        const comando = input.trim();
        if (comando === "--help") {
            const ajuda = Object.entries(comandos)
                .map(([nome, dados]) => `${nome} - ${dados.descricao}`)
                .join("\n");

            setMensagem(ajuda);
            setInput("");
            return;
        }
        if (comandos[comando]) {
            setMensagem("");
            comandos[comando].executar();
        } else {
            setMensagem("Comando inexistente.");
        }
        setInput("");
    }
    return (
        <div>
            <Navbar />
            <h1>Comandos</h1>
            <p>Digite --help para ver todos os comandos</p>
            <div className="page-comandos">
                <input
                    type="text"
                    placeholder="Digite um comando..."
                    value={input}
                    onChange={handleIputChange}
                    onKeyDown={handleEnterToExecute}
                />
                <button onClick={executarComando}>
                    <Play size={20} />
                </button>
            </div>
            <pre>{mensagem}</pre>
        </div>
    );
}
