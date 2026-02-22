import React, { useEffect } from 'react';
import './About.css';

const LandingPage = ({ onNavigate }) => {
  useEffect(() => {
    // Animate letters on component mount
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = '1';
        letter.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  const handleBloodDonation = () => {
    alert('Blood donation feature coming soon!');
  };

  const handlePrescriptionReader = () => {
    alert('AI-Powered Prescription Reader coming soon!');
  };

  return (
    <div className="container">
      {/* Title / Animation Section */}
      <div className="animated-section-wrapper" id="title-container">
        <div className="title-container">
          <h1 className="title">
            <span className="letter">D</span>
            <span className="letter">i</span>
            <span className="letter">a</span>
            <span className="letter">g</span>
            <span className="letter">n</span>
            <span className="letter">o</span>
            <span className="letter">L</span>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">s</span>
            <span className="letter">🩺</span>
          </h1>
          <p className="tagline">Diagnosis Through a Lens — Scans Analyzed by AI</p>
          <div className="container-buttons">
            <button className="primary-btn" onClick={handleBloodDonation}>
              🩸Find or Donate Blood
            </button>
            <button className="secondary-btn" onClick={handlePrescriptionReader}>
              AI-Powered Prescription Reader
            </button>
          </div>
        </div>
      </div>

      {/* Info Section / Features */}
      <div id="info-section">
        <div className="feature-wrapper">
          <div className="feature-content">
            <h1 className="section-heading">See Beyond the Scan</h1>
            <p>
              "Empowering diagnosis with AI-driven clarity and confidence", We help 
              doctors and patients make better decisions by using AI to clearly 
              understand medical scans and reports.
            </p>
          </div>

          <div id="main-sections" className="navigation-section">
            <div id="feature1" className="section">
              <h2>Multi-Modal Analysis</h2>
              <i className="fa-solid fa-dna"></i>
              <p>Combine image + text (scan + prescription) for deeper AI insights.</p>
            </div>

            <div id="feature2" className="section">
              <h2>AI Symptom Checker</h2>
              <i className="fa-solid fa-brain"></i>
              <p>Let users describe symptoms via text or voice, then show potential causes.</p>
            </div>

            <div id="feature3" className="section">
              <h2>Report Summariser</h2>
              <i className="fa-solid fa-file"></i>
              <p>Convert clinical terms into simple language for non-medical users.</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="Working">
          <div className="content">
            <h1 className="heading">How it works?</h1>
            <p>DiagnoLens 🩺 started with analysing scans. Follow these steps to move forward:</p>

            <div className="steps">
              <div className="step">
                <div className="step-icon">1</div>
                <h3>Create Your Profile</h3>
                <p>
                  Sign up and fill in your skills, interests, availability, and preferred 
                  location for diagnosis.
                </p>
              </div>

              <div className="step">
                <div className="step-icon">2</div>
                <h3>Upload Scans</h3>
                <p>
                  Upload your medical scans (X-Ray, CT, MRI) securely to get AI-based analysis.
                </p>
              </div>

              <div className="step">
                <div className="step-icon">3</div>
                <h3>Get AI Report</h3>
                <p>
                  Receive summarized and structured medical reports with risk insights and 
                  doctor suggestions.
                </p>
              </div>

              <div className="step">
                <div className="step-icon">4</div>
                <h3>Track & Share</h3>
                <p>
                  Track your reports and share them securely with healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
