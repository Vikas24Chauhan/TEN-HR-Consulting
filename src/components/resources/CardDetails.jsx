// import React from "react";
// import { useParams } from "react-router-dom";
// import { cardLists } from "../../assets/data/cardLists";
// import { useTranslation } from "react-i18next";

// const CardDetails = () => {
//   const { t } = useTranslation();
//   const { cardId } = useParams();

//   const card = cardLists.find((_, index) => index === parseInt(cardId));

//   if (!card) return <div>{t("Card not found")}</div>;

//   return (
//     <div className="card-details">
//       <h1>{t(card.title)}</h1>
//       <img src={card.img} alt={t(card.title)} />
//       <p>{t(card.text)}</p>
//       <button>{t(card.resources)}</button>
//     </div>
//   );
// };

// export default CardDetails;
