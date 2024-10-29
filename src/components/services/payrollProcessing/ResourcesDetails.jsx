import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesPEO1 from "../../../assets/images/ServicesPEO1.jpg";
import ServicesPEO2 from "../../../assets/images/ServicesPEO2.jpg";
import ServicesPEO3 from "../../../assets/images/ServicesPEO3.jpg";
import "./ResourcesDetails.css";

export default function ResourcesDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const peoResources = [
    {
      id: 0,
      img: ServicesPEO1,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "The Complete Handbook of Executive Search in India: Examining the Economic and Cultural Effects of Poor Hiring"
      ),
      text: t(
        "Overview Finding and keeping top executive talent is essential for the competitive corporate environment of today."
      ),
    },
    {
      id: 1,
      img: ServicesPEO2,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "Using PEO/ s to Manage Remote Teams in India: Crucial Tools and Strategies"
      ),
      text: t(
        "Overview In the era of digital change and globalization, the capacity to efficiently lead remote teams."
      ),
    },
    {
      id: 2,
      img: ServicesPEO3,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "Strategic Executive Search Services for Leading Companies in India"
      ),
      text: t(
        "Finding the proper people to run your company in the highly competitive business world of today is more."
      ),
    },
  ];

  const resource = peoResources.find((item) => item.id === parseInt(id));

  if (!resource) {
    return <p>{t("Resource not found")}</p>;
  }

  return (
    <div className="resource-details">
      <div className="resource-details-card">
        <img src={resource.img} alt={resource.title} className="resource-img" />
        <h2>{resource.title}</h2>
        <p>{resource.text}</p>
        <div className="resource-extra-info">
        </div>
        <button onClick={() => navigate(-1)} className="back-button">
        {t("Back to Resources")}
      </button>
      </div>
    </div>
  );
}





















