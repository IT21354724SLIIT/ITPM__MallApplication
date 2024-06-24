import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jsPDF } from "jspdf";
import { autoTable } from 'jspdf-autotable';
import Sidebar from "../../components/SlideBar/Sidebar";

function Ads() {
    const [ads, setAds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [reportType, setReportType] = useState(null);

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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/advertisement/${id}`);
            setAds(ads.filter(ad => ad._id !== id)); // Update state to remove the deleted advertisement
            console.log("Advertisement deleted successfully!");
            window.alert("Advertisement deleted successfully!"); // Display alert message
        } catch (error) {
            console.error('Error deleting advertisement:', error);
        }
    };

    const handleGenerateReport = (type) => {
        console.log("Generating report of type:", type);
        setReportType(type);
        setShowModal(true);
    };
    
    const handleGeneratePDF = () => {
        const doc = new jsPDF();
        doc.text("Advertisement Report", 10, 10);
    
        const headers = ['Advertisement ID', 'Ad Type', 'Description', 'Image', 'Name'];
        const data = ads.map(ad => {
            return [
                ad.adverisementId, 
                ad.adType, 
                ad.description, 
                ad.ImageBase64, // Changed from ad.url to ad.ImageBase64
                ad.name
            ];
        });
    
        // Calculate the width of each column
        const columnWidths = headers.map(header => doc.getStringUnitWidth(header) * 5); // Adjust multiplier as needed
    
        
        doc.autoTable({
            head: [headers],
            body: data,
            startY: 20,
            margin: { top: 20 },
            columnStyles: {
                0: { cellWidth: columnWidths[0] }, // Set column width for Advertisement ID
                1: { cellWidth: columnWidths[1] }, // Set column width for Ad Type
                2: { cellWidth: columnWidths[2] }, // Set column width for Description
                3: { cellWidth: columnWidths[3]* 6 }, // Set column width for Image
                4: { cellWidth: columnWidths[4]* 2 },
            },
            didDrawCell: (data) => {
                // Adjust styling if needed
            }
        });
    
        doc.save('advertisement.pdf');
        setShowModal(false);
    };
    
    

    return (
        <div>
            <Sidebar />
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div className="bg-white rounded p-3" style={{ width: "60vw", height: "43vw", marginRight: "50px" }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link to="/CreateAds" className="btn btn-success">Add Advertisement</Link>
                        <button className="btn btn-primary" onClick={() => handleGeneratePDF()}>Generate Report</button>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th style={{ whiteSpace: "nowrap" }}>Advertisement ID</th>
                                <th style={{ whiteSpace: "nowrap" }}>Advertisement Type</th>
                                <th style={{ whiteSpace: "nowrap" }}>Description</th>
                                <th style={{ whiteSpace: "nowrap" }}>Image </th>
                                <th style={{ whiteSpace: "nowrap" }}>Shop Name</th>
                                <th style={{ whiteSpace: "nowrap" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ads.map((ad, index) => (
                                <tr key={index}>
                                    <td style={{ whiteSpace: "nowrap" }}>{ad.adverisementId}</td>
                                    <td style={{ whiteSpace: "nowrap" }}>{ad.adType}</td>
                                    <td style={{ whiteSpace: "nowrap" }}>{ad.description}</td>
                                    <td style={{ whiteSpace: "nowrap" }}>
                                        <img src={ad.ImageBase64} alt="Advertisement" style={{ maxWidth: "50px", maxHeight: "50px" }} />
                                    </td>
                                    <td style={{ whiteSpace: "nowrap" }}>{ad.name}</td>
                                    <td style={{ whiteSpace: "nowrap", display: "flex", gap: "0.5rem" }}>
                                    <Link to={`/UpdateAds/${ad._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={() => handleDelete(ad._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
                                <h3>Generate Report</h3>
                                <div className="options">
                                    <button onClick={handleGenerateCSV}>Generate CSV</button>
                                    <button onClick={handleGeneratePDF}>Generate PDF</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Ads;
