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
            ? "A Secitex (Semana de Ciência, Tecnologia e Extensão do IFRN) é um evento que reúne estudantes, servidores e a comunidade para promover a integração através de pesquisas, inovações, apresentações científicas, oficinas e atividades culturais."
            : "O laboratório de manutenção do Instituto Federal do Rio Grande do Norte (IFRN) - Campus Macau é um espaço essencial para o suporte técnico, combinando atividades práticas de ensino e o reparo de equipamentos da instituição."}
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