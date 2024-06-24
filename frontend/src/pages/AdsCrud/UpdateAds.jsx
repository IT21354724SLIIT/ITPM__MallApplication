import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateAds() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        adverisementId: "",
        name: "",
        adType: "",
        description: "",
        url: "",
    });

    useEffect(() => {
        // Fetch advertisement details based on ID
        axios.get(`http://localhost:4000/advertisement/${id}`)
            .then(response => {
                console.log(response.data); // Log response data
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching advertisement details:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // Update advertisement details
            await axios.put(`http://localhost:4000/advertisement/${id}`, formData);
            window.alert("Advertisement updated successfully!");
            // Navigate to /advertisements
            window.location.href = "/AdsTable";
        } catch (error) {
            console.error('Error updating advertisement:', error);
        }
    };

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="bg-white rounded p-3" style={{ width: "60vw", height: "43vw" }}>
                <form onSubmit={handleUpdate}>
                    <h2>Update Advertisement</h2>
                    <br />
                    <div className='mb-2'>
                        <label htmlFor="adverisementId" style={{ marginBottom: '0.5rem' }}>Advertisement ID</label>
                        <input 
                            type="text" 
                            placeholder="Enter the type" 
                            className="form-control" 
                            id="adverisementId" 
                            name="adverisementId" 
                            required 
                            value={formData.adverisementId} 
                            onChange={handleInputChange} 
                            disabled // Disable input field
                        />
                    </div>
                    <br />
                    <div className='mb-2'>
                        <label htmlFor="adType" style={{ marginBottom: '0.5rem' }}>Advertisement Type</label>
                        <input 
                            type="text" 
                            placeholder="Enter the type" 
                            className="form-control" 
                            id="adType" 
                            name="adType" 
                            required 
                            value={formData.adType} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <br />
                    <div className='mb-2'>
                        <label htmlFor="description" style={{ marginBottom: '0.5rem' }}>Advertisement Description</label>
                        <input 
                            type="text" 
                            placeholder="Add the description" 
                            className="form-control" 
                            id="description" 
                            name="description" 
                            required 
                            maxLength={100} 
                            value={formData.description} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <br />
                    <div className='mb-2'>
                        <label htmlFor="url" style={{ marginBottom: '0.5rem' }}>Advertisement Image</label><br/>
                        {formData.url && (
                            <img src={formData.url} alt="Selected" style={{ maxWidth: "100%", marginTop: "1rem" }} />
                        )}
                    </div>
                    <br />
                    <div className='mb-2'>
                        <label htmlFor="name" style={{ marginBottom: '0.5rem' }}>Shop Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter the shop name" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <br />
                    <button className="btn btn-success" type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateAds;
