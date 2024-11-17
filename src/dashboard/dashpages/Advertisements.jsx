// src/dashboard/dashpages/Advertisements.jsx
import React, { useState } from 'react';

function Advertisements() {
  const [ads, setAds] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage({ file, imageUrl });
    }
  };

  // Add advertisement
  const handleAddAd = () => {
    if (selectedImage) {
      setAds([...ads, selectedImage]);
      setSelectedImage(null);
    }
  };

  // Delete advertisement
  const handleDeleteAd = (index) => {
    setAds(ads.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Manage Advertisements</h1>

      {/* Upload Section */}
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddAd}
          disabled={!selectedImage}
          className={`px-4 py-2 rounded text-white ${selectedImage ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Add Advertisement
        </button>
      </div>

      {/* Preview Selected Image */}
      {selectedImage && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Selected Image Preview:</h2>
          <img src={selectedImage.imageUrl} alt="Selected" className="mt-2 w-48 h-48 object-cover rounded shadow" />
        </div>
      )}

      {/* Advertisement Gallery */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Uploaded Advertisements</h2>
        {ads.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ads.map((ad, index) => (
              <div key={index} className="relative group">
                <img src={ad.imageUrl} alt={`Advertisement ${index + 1}`} className="w-full h-40 object-cover rounded shadow" />
                <button
                  onClick={() => handleDeleteAd(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No advertisements uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default Advertisements;
