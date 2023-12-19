import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaExclamationCircle } from 'react-icons/fa';


const UpdateAction = () => {
  
  const back = useNavigate();
  const GoBack = () => {
    back(-1); 
  };

  const { actId } = useParams();

  const [action, setAction] = useState({
    
    actBsecurise: '',
    actLib: '',
    actLb: '',
  });

  const {
    actBsecurise,
    actLib,
    actLb,
    
  } = action;

  const [errors, setErrors] = useState({
    actBsecurise: false,
    actLib: false,
    actLb: false,
  });

  const handleInputChange = (e) => {
    setAction({ ...action, [e.target.name]: e.target.value });
    
      
  };

  useEffect(() => {
    loadAction();
  }, [actId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
      const newErrors = {};
      for (const field in action) {
        if (typeof action[field] === 'string' && action[field].trim() === '') {
          newErrors[field] = true;
          valid = false;
        }
      }
       
      if (!valid) {
        setErrors(newErrors);
        return;
      }
  
    await axios.put(`http://localhost:8080/action/${actId}`, action);
    GoBack();
    setErrors({});
  };

  const loadAction = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/action/${actId}`);
      setAction(response.data);
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
      <h2 className='form-title'>Update Action</h2>
      <form onSubmit={handleSubmit}>
        
      <div className={`input-container ${errors.actBsecurise ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="actBsecurise"
            value={actBsecurise}
            onChange={handleInputChange}
            placeholder="Action Bsecurise"
          />
          {errors.actBsecurise && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        


<div className={`input-container ${errors.actLib ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="actLib"
    value={actLib}
    onChange={handleInputChange}
    placeholder="Action Lib"
  />
  {errors.actLib && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.actLb ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="actLb"
    value={actLb}
    onChange={handleInputChange}
    placeholder="Action Lb"
  />
  {errors.actLb && (
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
export default UpdateAction
