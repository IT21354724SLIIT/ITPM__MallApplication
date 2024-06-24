import React, { useState, useRef } from "react";
import axios from "axios";

const CreateAds = () => {
  const [formData, setFormData] = useState({
    adverisementId: "",
    name: "",
    adType: "",
    description: "",
    ImageBase64: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim() && name !== "ImageBase64") {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          ImageBase64: reader.result, // Set base64 encoded image
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData({
  //       ...formData,
  //       ImageBase64: ImageBase64.createObjectImageBase64(file),
  //     });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        await axios.post("http://localhost:4000/advertisement", formData);
        window.alert("Advertisement created successfully!");
        setSuccessMessage("Advertisement created successfully!");
        setFormData({
          adverisementId: "",
          name: "",
          adType: "",
          description: "",
          ImageBase64: "",
        });
        window.location.href = "/AdsTable"; // Navigate to advertisement page
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate each field
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === "string" && !value.trim() && key !== "ImageBase64") {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
        isValid = false;
      }
    }

    setErrors(errors);
    return isValid;
  };

  const handleFolderIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="bg-white rounded p-3" style={{ width: "60vw", height: "43vw" }}>
        <form onSubmit={handleSubmit}>
          <h2>Create New Advertisement</h2>
          <br />
          <div className="mb-2">
            <label htmlFor="adverisementId" style={{ marginBottom: "0.5rem" }}>
              Advertisement ID
            </label>
            <input
              type="text"
              placeholder="Enter Advertisement ID"
              className="form-control"
              id="adverisementId"
              name="adverisementId"
              required
              value={formData.adverisementId}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="mb-2">
            <label htmlFor="adType" style={{ marginBottom: "0.5rem" }}>
              Advertisement Type
            </label>
            <input
              type="text"
              placeholder="Enter Advertisement Type "
              className="form-control"
              id="adType"
              name="adType"
              required
              value={formData.adType}
              onChange={handleChange}
            />
          </div>
          <br />
          
          <div className="mb-2">
            <label htmlFor="description" style={{ marginBottom: "0.5rem" }}>
              Description
            </label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              id="description"
              name="description"
              required
              maxLength={100}
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="mb-2">
            <label htmlFor="name" style={{ marginBottom: "0.5rem" }}>
              Shop Name
            </label>
            <input
              type="text"
              placeholder="Enter Shop Name"
              className="form-control"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="mb-2">
            <label htmlFor="ImageBase64" style={{ marginBottom: "0.5rem" }}>
              Advertisement Image
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              onBlur={handleBlur}
              className="form-control"
              accept="image/*"
            />
            {formData.ImageBase64 && (
              <img
                src={formData.ImageBase64}
                alt="Selected"
                style={{ maxWidth: "100%", marginTop: "1rem" }}
              />
            )}
          </div>
          <br />
          <button className="btn btn-success" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAds;
