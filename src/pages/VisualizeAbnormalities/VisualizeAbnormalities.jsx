import React, { useState, useRef, useEffect } from 'react';
import './VisualizeAbnormalities.css';

const VisualizeAbnormalities = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [fileName, setFileName] = useState('');
  
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const fullText = "AI Analysis Complete: Two abnormal regions detected. Region 1 shows potential irregularity in the upper left quadrant. Region 2 indicates possible density variation in the lower right area. Recommendation: Consult with a specialist for detailed evaluation.";

  // Typing effect for AI output
  useEffect(() => {
    if (isAnalyzed) {
      let index = 0;
      setTypingText('');
      
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypingText(prev => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [isAnalyzed]);

  // Handle file selection and preview
  const previewScan = (event) => {
    const file = event.target.files[0];
    
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG or PNG).');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should not exceed 5MB.');
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    setIsAnalyzed(false);
    setTypingText('');

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Setup canvas when image loads
  useEffect(() => {
    if (previewUrl && imageRef.current && canvasRef.current) {
      const img = imageRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      img.onload = () => {
        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      };
    }
  }, [previewUrl]);

  // Analyze scan and highlight abnormalities
  const analyzeScan = () => {
    if (!previewUrl) {
      alert('Please upload a scan image first.');
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (canvas.width === 0 || canvas.height === 0) {
      alert('Please wait for the image to load completely.');
      return;
    }

    // Clear previous highlights
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw red rectangles to highlight abnormal areas
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.85)';
    ctx.lineWidth = 4;

    // Simulate abnormality detection (replace with actual AI logic)
    const rect1 = {
      x: canvas.width * 0.2,
      y: canvas.height * 0.3,
      width: 120,
      height: 80
    };

    const rect2 = {
      x: canvas.width * 0.55,
      y: canvas.height * 0.5,
      width: 100,
      height: 70
    };

    // Draw rectangles
    ctx.strokeRect(rect1.x, rect1.y, rect1.width, rect1.height);
    ctx.strokeRect(rect2.x, rect2.y, rect2.width, rect2.height);

    setIsAnalyzed(true);
  };

  return (
    <section id="visualize-section" className="visualize-wrapper">
      <h2 className="section-heading">Visualize Abnormalities</h2>
      <p className="section-subtitle">
        Upload a scan to view AI-highlighted abnormal regions.
      </p>

      <div className="visualize-content">
        {/* Upload Box */}
        <div className="upload-box">
          <label htmlFor="scanFile" className="custom-upload">
            <i className="fas fa-upload"></i> Upload Scan Image
            <input
              type="file"
              id="scanFile"
              accept=".jpg,.jpeg,.png"
              onChange={previewScan}
              style={{ display: 'none' }}
            />
          </label>
          
          <i className="fa-solid fa-notes-medical"></i>
          
          {fileName && <p className="file-name">Selected: {fileName}</p>}
          
          <p className="note">Supported formats: JPG, PNG (Max 5MB)</p>
          
          <button 
            className="analyze-btn" 
            onClick={analyzeScan}
            disabled={!previewUrl}
          >
            Analyze & Highlight
          </button>
        </div>

        {/* Scan Preview Box with Canvas Overlay */}
        <div className="scan-preview-box">
          <h2>Scan Preview:</h2>
          <div className="scan-container">
            {previewUrl ? (
              <>
                <img
                  ref={imageRef}
                  id="scanPreview"
                  src={previewUrl}
                  alt="Uploaded Scan"
                />
                <canvas ref={canvasRef} id="highlightCanvas"></canvas>
              </>
            ) : (
              <div className="placeholder-preview">
                <i className="fas fa-image"></i>
                <p>No scan uploaded yet</p>
              </div>
            )}
          </div>

          {/* Floating Doctor Image */}
          <div className="floating-doctor">
            <img src="/image3.png" alt="Doctor Image" />
          </div>
        </div>
      </div>

      {/* AI Output Box */}
      <div className="ai-output-box" id="ai-output-box">
        <h2>Description For Highlighted Area:</h2>
        <div id="output-content">
          <p id="typing-placeholder" className="placeholder-text">
            {typingText || 'Upload and analyze a scan to see AI-generated insights...'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisualizeAbnormalities;
