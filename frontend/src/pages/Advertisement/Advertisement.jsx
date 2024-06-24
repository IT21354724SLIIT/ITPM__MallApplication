import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsEye } from "react-icons/bs"; // Import the eye icon from react-icons library
import Popup from "./Popup";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AdContainer({ ad, onClick }) {
    return (
        <div>
            
        <div className="ad-container" style={{ border: "3px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <img src={ad.ImageBase64} alt="Advertisement" style={{ maxWidth: "500px", maxHeight: "500px" }} />
            <h4>{ad.name}</h4>
            <p>{ad.description}</p>
            <p>{ad.adType}</p>
            <button className="btn btn-custom" onClick={() => onClick(ad)}><BsEye /></button>
            </div>
            
        </div>
    );
}

function Ads() {
    const [ads, setAds] = useState([]);
    const [selectedAd, setSelectedAd] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/advertisement')
            .then(response => {
                console.log(response.data); // Log response data
                setAds(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleAdClick = (ad) => {
        setSelectedAd(ad);
    };

    const handleClosePopup = () => {
        setSelectedAd(null);
    };

    return (
        <div>
            <Navbar />
        <div className="container mt-5">
            <div className="row">
                {ads.map((ad, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <AdContainer ad={ad} onClick={handleAdClick} />
                    </div>
                ))}
            </div>
            {selectedAd && <Popup ad={selectedAd} onClose={handleClosePopup} />}
        </div>
        <Footer />
        </div>
       
    )
}

export default Ads;
