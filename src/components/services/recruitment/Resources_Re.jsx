import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesPEO1 from "../../../assets/images/recrument_1.webp";
import ServicesPEO2 from "../../../assets/images/recrument_2.webp";
import ServicesPEO3 from "../../../assets/images/recrument_3.webp";
import "./Resources_Re.css";

export default function Resources_Re() {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();

    const peoResources = [
        {
            id: 0,
            img: ServicesPEO1,
            title: t(
                "Maximizing Talent Acquisition in india: A Comprehensive Guide"
            ),
            text: t(
                "Learn key strategies for acquiring top talent in india, from recruitment tips to navigating local hiring practices."
            ),
        },
        {
            id: 1,
            img: ServicesPEO2,
            title: t(
                "Ensuring HR Compliance in india: What You Need to Know"
            ),
            text: t(
                "Discover the essential steps businesses must take to remain compliant with india's labor laws and regulations."
            ),
        },
        {
            id: 2,
            img: ServicesPEO3,

            title: t(
                "The Future of Hiring in Southeast Asia: Trends and Predictions"
            ),
            text: t(
                "Stay ahead of the curve with insights into the future trends shaping the hiring landscape across Southeast Asia."
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





















