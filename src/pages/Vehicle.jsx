import React, { useState } from 'react';
import './Vehicle.css'; 

const Vehicle = () => {
  // State for form fields
  const [formFields, setFormFields] = useState({
    companyName: '',
    vehicleName: '',
    vehicleNo: '',
    vehicleRegCity: '',
    modelNo: '',
    engineNo: '',
    chassisNo: '',
    vehicleColor: '',
    mobileNo: '',
    currentAddress: '',
    vehicleImage: null,
  });

  // Function to handle form field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormFields({ ...formFields, vehicleImage: file });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formFields);
  };

  return (
    <div className="registration-container">
      <h2>Vehicle Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-column">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={formFields.companyName} onChange={handleFieldChange} />

          <label htmlFor="vehicleName">Vehicle Name:</label>
          <input type="text" id="vehicleName" name="vehicleName" value={formFields.vehicleName} onChange={handleFieldChange} />

          {/* Add more form fields here */}
        </div>
        <div className="form-column">
          <label htmlFor="vehicleImage">Browse Vehicle Image:</label>
          <input type="file" id="vehicleImage" name="vehicleImage" onChange={handleImageUpload} />

          {/* Display image preview */}
          {formFields.vehicleImage && (
            <img src={URL.createObjectURL(formFields.vehicleImage)} alt="Vehicle" className="vehicle-image-preview" />
          )}
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default Vehicle;
