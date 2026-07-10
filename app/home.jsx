import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Sandbox</h1>
            <div className="links">
                <Link href={"/contador"}>
                    <button>Contador</button>
                </Link>
                <Link href={"/gerar-confeti"}>
                    <button>Gerador de confeti</button>
                </Link>
                <Link href={"/botao-fugitivo"}>
                    <button>Botão impossível</button>
                </Link>
                <Link href={"/comandos"}>
                    <button>Comandos</button>
                </Link>
            </div>
        </div>
    );
}
