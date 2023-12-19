import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaExclamationCircle } from 'react-icons/fa';


const UpdateProfile = () => {
  const back = useNavigate();
  const GoBack = () => {
    back(-1); 
  };

  const { profNum } = useParams();

  const [profile, setProfile] = useState({
    
    profNom:"",
  });

  const {
    profNom,
    
  } = profile;

  const [errors, setErrors] = useState({
    profNom: false,
    
  });

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    
      
  };

  useEffect(() => {
    loadProfile();
  }, [profNum]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
      const newErrors = {};
      for (const field in profile) {
        if (typeof profile[field] === 'string' && profile[field].trim() === '') {
          newErrors[field] = true;
          valid = false;
        }
      }
       
      if (!valid) {
        setErrors(newErrors);
        return;
      }
  
    await axios.put(`http://localhost:8080/prfl/${profNum}`, profile);
    GoBack();
    setErrors({});
  };

  const loadProfile = async () => {
    try {
        
      const response = await axios.get(`http://localhost:8080/prfl/${profNum}`);
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching app data:", error.response?.status, error.response?.data);
    }
  };
  const handleCancel = () => {
    GoBack();
};

  return (
    <div className="add-application-form">
        <div className='form-container'>
      <h2 className='form-title'>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        
      <div className={`input-container ${errors.profNom ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="profNom"
            value={profNom}
            onChange={handleInputChange}
            placeholder="Profile Nom"
          />
          {errors.profNom && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>

            <button className="submit-button"type="submit">Update</button>
                <button 
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >Cancel</button>
            
          </form>
        </div>
      </div>

  );
}
export default UpdateProfile