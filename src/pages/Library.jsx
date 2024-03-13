import React, { useState } from 'react';
import './Library.css'; // Import CSS file for styling

const Library = () => {
  // State for form fields
  const [formFields, setFormFields] = useState({
    itemType: '',
    broadSubject: '',
  });

  // State for available items
  const [availableItems, setAvailableItems] = useState([]);

  // Function to handle form field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Function to handle search
  const handleSearch = () => {
    // Perform search logic here
    // For demonstration, we'll filter available items based on form fields
    const filteredItems = [
      { bookNo: 1, title: 'Book 1', author: 'Author 1', language: 'English' },
      { bookNo: 2, title: 'Book 2', author: 'Author 2', language: 'English' },
      { bookNo: 3, title: 'Book 3', author: 'Author 3', language: 'English' },
    ];
    setAvailableItems(filteredItems);
  };

  return (
    <div className="reservation-container">
      <h2>Reservation</h2>
      <div className='res-div'>
      <form className="reservation-form">
        <div>
          <label htmlFor="itemType">Item Type:</label>
          
          <select id="itemType" value={formFields.itemType} onChange={handleFieldChange}>
          <option value="">Select type</option>
                        <option value="">Book</option>
                        <option value="">Magzine</option>
                        {/* Add options for degrees */}
                    </select>
        </div>
        <div>
          <label htmlFor="broadSubject">Broad Subject:</label>
          <select id="broadSubject" value={formFields.broadSubject} onChange={handleFieldChange}>
          <option value="">Select Subject</option>
                        <option value="">Agriculture</option>
                        <option value="">Information Technology</option>
                        {/* Add options for degrees */}
                    </select>
        </div>
        
      </form>
      <button type="button" className='btn-library' onClick={handleSearch}>Search</button>
      {/* Table of available items */}
      {availableItems.length > 0 && (
        <div className='available-items'>
        <h3>Available items : </h3>
        <table className="available-items-table">
          <thead>
            <tr>
              <th>Book No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {availableItems.map((item, index) => (
              <tr key={index}>
                <td>{item.bookNo}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.language}</td>
                <td><button>Action</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      </div>
    </div>
  );
};

export default Library;
