import React from 'react';
import './ChooseScan.css';

const choosescan = () => {
  const handleUpload = (scanType) => {
    alert(`${scanType} upload feature coming soon!`);
  };

  return (
    <div id="choose-scan-section" className="choose-scan-wrapper">
      <h1 className="section-heading1">Choose Your Scan</h1>
      <p className="section-subtitle">
        Select the type of scan you'd like to upload and analyze
      </p>

      <div className="scan-grid">
        {/* X-Ray Card */}
        <div className="scan-card">
          <i className="fas fa-x-ray scan-icon"></i>
          <h3>X-Ray</h3>
          <p>Upload chest, dental, or limb X-rays for instant analysis.</p>
          <button className="scan-upload-btn" onClick={() => handleUpload('X-Ray')}>
            Upload X-Ray
          </button>
        </div>

        {/* MRI Card */}
        <div className="scan-card">
          <i className="fas fa-brain scan-icon"></i>
          <h3>MRI</h3>
          <p>Analyze brain, spine, or joint MRI scans with AI insights.</p>
          <button className="scan-upload-btn" onClick={() => handleUpload('MRI')}>
            Upload MRI
          </button>
        </div>

        {/* CT Scan Card */}
        <div className="scan-card">
          <i className="fas fa-heartbeat scan-icon"></i>
          <h3>CT Scan</h3>
          <p>Upload CT scans to detect abnormalities quickly.</p>
          <button className="scan-upload-btn" onClick={() => handleUpload('CT Scan')}>
            Upload CT Scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default choosescan;
