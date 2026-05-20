"use client";

export default function Desistir() {
  const mensagens = [
    "Achou que ia ser fácil assim? KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
    "Você continua tentando? KKKKKKKKKKKKKKKKKKKK",
    "Vai tentar por quanto tempo mais? Eu tenho o dia todo, agora você eu não tenho certeza.",
    "Desista!",
    "Dizem que a persistência é essencial, né? Pois é, mas a sua ao insisitir em apertar esse botão não vai levar a lugar nenhum",
    "Tudo bem. Pode ficar aí pelo tempo que quiser. Desisto.",
    "Poxa, você não desiste mesmo, né? Que pena",
    "Pode desistir já",
    "Tá me entediandooooooooo",
    "Você não tem nada melhor pra fazer ao invés de ficar tentando apertar um botão? Sei lá, estudar, trabalhar ou qualquer coisa?",
    "PARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "Desiste, você não vai conseguir nada aqui",
    "Desiste, é melhor pra você",
    "ME. DEIXA. EM. PAZ!",
  ];
  function fugir(e) {
    const btn = e.target;

    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.left = x + "px";
    btn.style.top = y + "px";

    const mensagemAleatoria =
      mensagens[Math.floor(Math.random() * mensagens.length)];
    setTimeout(() => {
      alert(mensagemAleatoria);
    }, 100);
  }
  return (
    <div>
      <h1>Já desistiu?</h1>
      <p>
        Não se preocupe, o botão foi feito para não ser clicável, caso não tenha
        percebido.
      </p>
      <p>Mas você ainda pode tentar outros jogos:</p>
      <button
        className="botao"
        onPointerEnter={fugir}
        style={{
          textDecoration: "underline",
          position: "relative",
          transition: "0.1s",
        }}
      >
        Ver mais jogos
      </button>
    </div>
  );
}
