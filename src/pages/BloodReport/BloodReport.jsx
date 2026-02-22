import React, { useState } from 'react';
import './BloodReport.css';

const BloodReport = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleOCR = () => {
    if (!selectedFile) {
      alert('Please select a blood report file first!');
      return;
    }
    alert(`Analyzing ${fileName}... OCR processing will be implemented.`);
  };

  return (
    <section id="ocr-section" className="ocr-wrapper">
      <div className="ocr-inner-container">
        <h2 className="section-heading1">Blood Report Reader via OCR</h2>
        <p className="section-subtitle1">
          Upload scanned or digital reports to extract and analyze key medical data.
        </p>

        <div className="scan-card1">
          <i className="fas fa-tint scan-icon"></i>
          <h3>Blood Report (OCR)</h3>
          <p>Upload a photo or scanned copy of your blood report for AI-based analysis.</p>

          <label htmlFor="ocrFile" className="custom-file-upload">
            <i className="fas fa-file-upload"></i> Choose Blood Report File
            <input
              type="file"
              id="ocrFile"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>

          {fileName && <p className="file-name">Selected: {fileName}</p>}

          <button className="scan-upload-btn" onClick={handleOCR}>
            Analyze Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default BloodReport;
