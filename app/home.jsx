import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Sandbox</h1>
            <div className="links">
                <button>
                    <Link href={'/contador'}>Contador</Link>
                </button>
                <button>
                    <Link href={'/gerar-confeti'}>Gerador de confeti</Link>
                </button>
            </div>
        </div>
    )
}