import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured }) {
  return (
    // <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <article className={`notice-card ${notice.featured && "featured"}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        -
        <span>Data: {notice.date}</span>
      </div>
      <div className="notice-actions">
        {/* Exibir uma descrição completa do evento. Se ativo, texto do botão = "Fechar Detalhes". */}
        <button className="details">
          Exibir Detalhes
        </button>
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>
        {/* Excluir o evento da lista */}
        <button>
          Excluir
        </button>
      </div>

    </article>
  );
}

export default NoticeCard;