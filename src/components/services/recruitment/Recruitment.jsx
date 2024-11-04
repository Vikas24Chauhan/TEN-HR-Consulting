import React, { useState } from "react";
import "./Recruitment.css";
import { useNavigate } from "react-router-dom";

const Recruitment = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    company: "",
    inquiryReason: "",
  });

  // Button Click Handlers
  const handleApplyTalentClick = () => {
    navigate("/applyTalent");
  };

  const handleUploadCVClick = () => {
    navigate("/applyTalent");
  };
  const navigateToDetails = (id) => {
    navigate(`/resources_Re/${id}`);
  };

  const handleMoreResourcesClick = () => {
    navigate("/resources");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false); // Close form on submit
  };

  const ScheduleForm = () => (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Schedule Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex space-x-2">
            <input
              type="text"
              name="countryCode"
              placeholder="Country Code"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="w-1/3 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-2/3 p-2 border rounded"
              required
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="inquiryReason"
            placeholder="Reason for Inquiry"
            value={formData.inquiryReason}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500"
          >
            Submit Enquiry
          </button>
        </form>
        <button
          className="absolute top-2 right-2 text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </div>
    </div>
  );

  return (
    <section>
      {/* Top Section - Hiring Top Talent */}
      <div className="services-recruitment-container">
        <div className="services-recruitment-content">
          <h3 className="services-recruitment-heading">
            Find Your Perfect Match
          </h3>
          <h1 className="services-recruitment-title">
            Hire India’s Best Talent
          </h1>
          <p className="services-recruitment-description">
            Take advantage of India’s diverse talent pool without the burden of
            setting up a local entity. Our streamlined EOR services allow you to
            onboard top professionals in India quickly and efficiently, ensuring
            compliance with all local laws while you focus on driving business
            growth.
          </p>
          <div className="services-recruitment-buttons">
            <button
              className="services-schedule-button"
              onClick={() => setIsOpen(true)}
            >
              Schedule Now →
            </button>
            <button
              className="services-apply-button"
              onClick={handleApplyTalentClick}
            >
              Apply As Talent →
            </button>
          </div>
        </div>
        <div className="services-recruitment-image">
          <img
            src="https://recruitindo.com/wp-content/uploads/2023/12/hiring.png"
            alt="Hiring top talent"
          />
        </div>
      </div>

      {/* Schedule Form */}
      {isOpen && <ScheduleForm />}

      {/* Recruitment Procedure Section */}
      <div className="services-procedure-container">
        <h2 className="services-procedure-title">Recruitment Procedure</h2>
        <div className="services-procedure-steps">
          {/* Step 1 */}
          <div className="services-step">
            <div className="services-step-icon">1</div>
            <div className="services-step-content">
              <h3>Tap into Our Extensive Network</h3>
              <p>
                We leverage our vast network of industry contacts and
                connections to identify exceptional candidates tailored to your
                needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="services-step">
            <div className="services-step-icon">2</div>
            <div className="services-step-content">
              <h3>Thorough Candidate Evaluation</h3>
              <p>
                Each candidate undergoes a comprehensive evaluation process to
                match their skills and experiences with your specific
                requirements.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="services-step">
            <div className="services-step-icon">3</div>
            <div className="services-step-content">
              <h3>Cultural Fit Assessment</h3>
              <p>
                We conduct in-depth interviews to assess candidates not only for
                their skills but also for their alignment with your company
                culture.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="services-step">
            <div className="services-step-icon">4</div>
            <div className="services-step-content">
              <h3>Client Collaboration</h3>
              <p>
                We present the top candidates to you, facilitating a
                collaborative interview process to ensure the best fit.
              </p>{" "}
            </div>
          </div>

          {/* Step 5 */}
          <div className="services-step">
            <div className="services-step-icon">5</div>
            <div className="services-step-content">
              <h3>Offer Management</h3>
              <p>
                Once you've selected your preferred candidates, we assist in
                extending job offers and managing negotiations to secure top
                talent.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="services-step">
            <div className="services-step-icon">6</div>
            <div className="services-step-content">
              <h3>Streamlined Onboarding</h3>
              <p>
                Our dedicated team ensures that new hires have a seamless
                onboarding experience, helping them integrate quickly and
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Services Pricing Section */}

      <div className="services-pricing-container">
        <div className="services-pricing-content">
          <h3 className="services-pricing">OUR SERVICES</h3>
          <h2 className="services-pricing-title">
            Exclusive Recruitment Plans
          </h2>
          <p className="services-pricing-description">
            We offer tailored recruitment solutions to match your company's
            specific needs. Our pricing ranges from 15-20% of annual
            compensation, covering bonuses but excluding equity packages.
          </p>
          <p className="services-pricing-description">
            By partnering with us, you ensure access to top-tier candidates,
            seamless hiring processes, and ongoing support from our expert
            recruiters.
          </p>
          <button className="services-get-started-button">Get Started</button>
          <button
            className="services-upload-cv-button"
            onClick={handleUploadCVClick}
          >
            Upload CV
          </button>
        </div>
        <div className="services-pricing-details">
          <h3>What’s Included in Our Packages:</h3>
          <ul>
            <li>Personalized Candidate Screening</li>
            <li>Comprehensive CV Review</li>
            <li>In-depth Background and Reference Checks</li>
            <li>Ongoing Recruiter Assistance</li>
            <li>Post-hire Support and Consultation</li>
          </ul>
          <div className="services-annual-compensation-note">
            <p>
              1) Note: Annual compensation includes base salary, bonuses, and
              the 13-month THR (Religious Festive Allowance) as applicable.
            </p>
            <p>
              2) Additional benefits, such as healthcare, retirement
              contributions, and other allowances, are not included in the
              stated percentage but can be negotiated separately. This ensures
              flexibility to meet both employer and candidate expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Resources and Articles Section */}
      <div className="resources-articles-section">
        <h3 className="resources-heading">Resources</h3>
        <h2 className="resources-title">Explore Our Insights & Guides</h2>
        <div className="articles-container"
          onClick={() => navigateToDetails(ele.id)}> 
          {/*above one needs to corrected */}
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/financial-benefits-1024x688.jpeg"
              alt="Talent Acquisition Guide"
              className="article-image"
            />
            <h3 className="article-title">
              Maximizing Talent Acquisition in india: A Comprehensive Guide
            </h3>
            <p className="article-description">
              Learn key strategies for acquiring top talent in india, from
              recruitment tips to navigating local hiring practices.
            </p>
          </div>
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/Peo-tech-company-1024x683.jpeg"
              alt="HR Compliance"
              className="article-image"
            />
            <h3 className="article-title">
              Ensuring HR Compliance in india: What You Need to Know
            </h3>
            <p className="article-description">
              Discover the essential steps businesses must take to remain
              compliant with india's labor laws and regulations.
            </p>
          </div>
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/peo-provider-1024x683.jpeg"
              alt="Hiring in Southeast Asia"
              className="article-image"
            />
            <h3 className="article-title">
              The Future of Hiring in Southeast Asia: Trends and Predictions
            </h3>
            <p className="article-description">
              Stay ahead of the curve with insights into the future trends
              shaping the hiring landscape across Southeast Asia.
            </p>
          </div>
        </div>

        <div className="more-resources-button-container">
          <button
            className="more-resources-button"
            onClick={handleMoreResourcesClick}
          >
            More Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
