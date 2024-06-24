import React from "react";
import './Popup.css'

const Popup = ({ ad, onClose }) => {
  return (
    <div className="dialog-box">
      <div className="dialog-box-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Advertisement Details</h2>

        <p><strong>Advertisement ID:</strong> {ad.adverisementId}</p>
        <p><strong>Ad Type:</strong> {ad.adType}</p>
        <p><strong>Description:</strong> {ad.description}</p>
        {/* <p><strong>URL:</strong> {ad.url}</p> */}
        <p><strong>Name:</strong> {ad.name}</p>
      </div>
    </div>
  );
};

export default Popup;
