import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import "../../style/Add.css"
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddPRofile = () => {
    const navigate = useNavigate();
  
    const [profileInfo, setProfileInfo] = useState({
      profNum: '',
      profNom: '',
      
    });
  
    const [errors, setErrors] = useState({
      profNum: false,
      profNom: false,
      
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProfileInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
    
      let valid = true;
      const newErrors = {};
      for (const field in profileInfo) {
        if (profileInfo[field].trim() === '') {
          newErrors[field] = true;
          valid = false;
        }
      }
       
      if (!valid) {
        setErrors(newErrors);
        return;
      }
  
      await axios.post("http://localhost:8080/prfl",profileInfo)
      navigate('/profile');
    
      setProfileInfo({
        profNum: '',
        profNom: '',
        
      });
      setErrors({});
    };
  
    const handleCancel = () => {
        navigate('/profile'); 
    };

  return (
    <div className="add-application-form">
        <div className='form-container'>
      <h2 className='form-title'>Add Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={`input-container ${errors.profNum ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="profNum"
            value={profileInfo.profNum}
            onChange={handleInputChange}
            placeholder="profNum"
          />
          {errors.profNum && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.profNom ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="profNom"
            value={profileInfo.profNom}
            onChange={handleInputChange}
            placeholder="profNom"
          />
          {errors.profNom && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        

        <button className="submit-button"type="submit">Add</button>
        <button 
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >Cancel</button>
      </form>
    </div>
    </div>
  );
};

export default AddPRofile;
