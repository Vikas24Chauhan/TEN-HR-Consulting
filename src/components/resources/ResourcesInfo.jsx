import { useNavigate, useParams } from "react-router-dom";
import { cardLists } from "../../assets/data/cardLists";
import { useTranslation } from "react-i18next";

const ResourcesInfo = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const resource = cardLists.find((item) => item.id === parseInt(id));

  if (!resource) {
    return <p>{t("Resource not found")}</p>;
  }
  return (
    <>
      <div className="resource-details">
        <div className="resource-details-card">
          <img
            src={resource.img}
            alt={resource.title}
            className="resource-img"
          />
          <h2>{resource.title}</h2>
          <p>{resource.text}</p>

          <div className="resource-extra-info">
            <h2>Introduction</h2>
            <p> {resource.introduction}</p>
            <h2>{resource.title2}</h2>
            <p>{resource.para}</p>
            <p> {resource.subPare}</p>
            <h2>Conclusion</h2>
            <p> {resource.conclusion}</p>
          </div>
          <br />
          <button onClick={() => navigate(-1)} className="back-button">
            {t("Back to Resources")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ResourcesInfo;
