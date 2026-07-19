import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        {" - "}
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <p>
          {notice.id === 1
            ? " A Semana de Ciência, Tecnologia e Extensão (Secitex) é o maior evento acadêmico-científico e cultural do Instituto Federal do Rio Grande do Norte (IFRN) Realizada a cada dois anos, a Secitex reúne estudantes, servidores e a comunidade externa em um espaço de integração e troca de saberes, promovendo atividades que valorizam o ensino, a pesquisa, a extensão e a inovação. Com uma programação diversificada, o evento inclui apresentações de trabalhos científicos, oficinas, minicursos, palestras, mostras tecnológicas, atividades culturais e muito mais.A Secitex é também um momento para destacar o protagonismo estudantil e fortalecer o vínculo entre o IFRN e a sociedade, evidenciando o impacto social, científico e cultural das ações desenvolvidas pelo Instituto. Além de acompanhar os temas da Semana Nacional de Ciência e Tecnologia, a Secitex busca inspirar criatividade, colaboração e desenvolvimento sustentável, conectando pessoas, ideias e futuros possíveis.."
            : "A rotina de Manutenção nos Laboratórios de Informática do IFRN funciona em duas frentes: o aprendizado dos alunos e o cuidado com as máquinas do próprio instituto. Os estudantes de tecnologia aprendem na prática a consertar computadores, formatar sistemas e organizar redes dentro desses espaços.Por ter dezenas de salas com computadores espalhadas por seus vários campi, o IFRN mantém uma estrutura rígida de preservação. Isso envolve desde a limpeza preventiva dos equipamentos até projetos sociais que recuperam computadores antigos da instituição para doar à comunidade."}
        </p>
      )}

      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>

        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Ocultar detalhes" : "Exibir detalhes"}
        </button>

        <button onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;