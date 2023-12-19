import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import "../../style/Add.css"
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddAction = () => {
  const navigate = useNavigate();

  const [actionInfo, setActionInfo] = useState({
    actId: '',
    actBsecurise: '',
    actLib: '',
    actLb: '',
  });

  const [errors, setErrors] = useState({
    appId: false,
    actId: false,
    actBsecurise: false,
    actLib: false,
    actLb: false,
  });

  const [appId, setAppId] = useState(''); // Separate state for appId

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'appId') {
      setAppId(value); 
        setErrors((prevErrors) => ({
          ...prevErrors,
          appId: false,
        }));
      
    } else {
      setActionInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let valid = true;
    const newErrors = {};
    if (appId.trim() === '') {
      newErrors.appId = true;
    }
    for (const field in actionInfo) {
      if (actionInfo[field].trim() === '') {
        newErrors[field] = true;
        valid = false;
      }
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    await axios.post(`http://localhost:8080/action/${appId}`, actionInfo); // Include appId in URL
    navigate('/action');
    setAppId('')
    setActionInfo({
      actId: '',
      actBsecurise: '',
      actLib: '',
      actLb: '',
    });
    setErrors({});
  };

  const handleCancel = () => {
    navigate('/action');
  };

  return (
    <div className="add-application-form">
        <div className='form-container'>
      <h2 className='form-title'>Add Action</h2>
      <form onSubmit={handleSubmit}>
        <div className={`input-container ${errors.appId ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="appId"
            value={actionInfo.appId}
            onChange={handleInputChange}
            placeholder="App ID"
          />
          {errors.appId && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.actId ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="actId"
            value={actionInfo.actId}
            onChange={handleInputChange}
            placeholder="Action id"
          />
          {errors.actId && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.actBsecurise ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="actBsecurise"
            value={actionInfo.actBsecurise}
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
    value={actionInfo.actLib}
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
    value={actionInfo.actLb}
    onChange={handleInputChange}
    placeholder="Action Lb"
  />
  {errors.actLb && (
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

export default AddAction;
