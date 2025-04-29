import React, { useState } from 'react';
import Webcam from "react-webcam";

const Densityx = () => {
  const videoConstraints = {
    facingMode: "user"
  };

  // State to store the uploaded image
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // For drag-and-drop styling

  // Handle image upload (via input or drag-and-drop)
  const handleImageUpload = (file) => {
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file.');
        return;
      }
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB.');
        return;
      }
      // Create a URL for the image and update state
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  // Handle file input change
  const handleInputChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file);
  };

  // Handle drag-and-drop events
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    handleImageUpload(file);
  };

  // Clear the uploaded image
  const handleClearImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage); // Free memory
    }
    setUploadedImage(null);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 md:p-8'>
      {/* Title */}
      <p
        className='text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 sm:mb-8'
        style={{ fontFamily: 'Hubot Sans, sans-serif' }}
      >
        DensityX
      </p>

      {/* Main Content: Row on desktop, Column on mobile */}
      <div className='w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-8'>
        {/* Webcam Section */}
        <div className='w-full md:w-1/2'>
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className='w-full rounded-xl shadow-lg border-2 border-gray-700'
          />
        </div>

        {/* Image Upload Section */}
        <div className='w-full md:w-1/2 flex flex-col items-center gap-4'>
          {/* Buttons (Upload and Clear) */}
          <div className='flex flex-row gap-3'>
            <label
              htmlFor="image-upload"
              className='text-white font-medium cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-600 transition shadow-md'
            >
              Upload Image
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
              className='hidden'
            />
            {uploadedImage && (
              <button
                onClick={handleClearImage}
                className='text-white font-medium bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-xl hover:from-red-700 hover:to-red-600 transition shadow-md'
              >
                Clear Image
              </button>
            )}
          </div>

          {/* Drag-and-Drop Area with Uploaded Image */}
          <div
            className={`w-full h-64 sm:h-72 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-300 transition shadow-sm ${
              isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className='w-full h-full object-contain rounded-xl p-2'
              />
            ) : (
              <p className='text-center text-sm sm:text-base'>
                {isDragging ? 'Drop the image here' : 'Drag & drop an image here'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Densityx;