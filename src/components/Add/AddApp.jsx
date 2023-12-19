import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import "../../style/Add.css"
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddApplication = () => {
    const navigate = useNavigate();
  
    const [appInfo, setAppInfo] = useState({
      appId: '',
      appDomaine: '',
      appVersion: '',
      appHelp: '',
      appAuteur: '',
      appCreation: '',
      appModifcation: '',
      appOuverte: '',
      appDatFermeture: '',
      appTypMsg: '',
      appLibMsg: '',
      appLb: '',
    });
  
    const [errors, setErrors] = useState({
      appId: false,
      appDomaine: false,
      appVersion: false,
      appHelp: false,
      appAuteur: false,
      appCreation: false,
      appModifcation: false,
      appOuverte: false,
      appDatFermeture: false,
      appTypMsg: false,
      appLibMsg: false,
      appLb: false,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setAppInfo((prevInfo) => ({
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
  
      // Validate input fields
      let valid = true;
      const newErrors = {};
      for (const field in appInfo) {
        if (appInfo[field].trim() === '') {
          newErrors[field] = true;
          valid = false;
        }
      }
       
      if (!valid) {
        setErrors(newErrors);
        return;
      }
  
      await axios.post("http://localhost:8080/apps",appInfo)
      navigate('/application');
    
      setAppInfo({
        appId: '',
        appDomaine: '',
        appVersion: '',
        appHelp: '',
        appAuteur: '',
        appCreation: '',
        appModifcation: '',
        appOuverte: '',
        appDatFermeture: '',
        appTypMsg: '',
        appLibMsg: '',
        appLb: '',
      });
      setErrors({});
    };
  
    const handleCancel = () => {
        navigate('/application'); 
    };

  return (
    <div className="add-application-form">
        <div className='form-container'>
      <h2 className='form-title'>Add Application</h2>
      <form onSubmit={handleSubmit}>
        <div className={`input-container ${errors.appId ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="appId"
            value={appInfo.appId}
            onChange={handleInputChange}
            placeholder="App ID"
          />
          {errors.appId && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.appDomaine ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="appDomaine"
            value={appInfo.appDomaine}
            onChange={handleInputChange}
            placeholder="Domain"
          />
          {errors.appDomaine && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.appVersion ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="appVersion"
            value={appInfo.appVersion}
            onChange={handleInputChange}
            placeholder="Version"
          />
          {errors.appVersion && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.appHelp ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appHelp"
    value={appInfo.appHelp}
    onChange={handleInputChange}
    placeholder="Help"
  />
  {errors.appHelp && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appAuteur ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appAuteur"
    value={appInfo.appAuteur}
    onChange={handleInputChange}
    placeholder="Author"
  />
  {errors.appAuteur && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appCreation ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appCreation"
    value={appInfo.appCreation}
    onChange={handleInputChange}
    placeholder="Creation Date"
  />
  {errors.appCreation && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appModifcation ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appModifcation"
    value={appInfo.appModifcation}
    onChange={handleInputChange}
    placeholder="Modification Date"
  />
  {errors.appModifcation && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appOuverte ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appOuverte"
    value={appInfo.appOuverte}
    onChange={handleInputChange}
    placeholder="Opened"
  />
  {errors.appOuverte && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appDatFermeture ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appDatFermeture"
    value={appInfo.appDatFermeture}
    onChange={handleInputChange}
    placeholder="Closure Date"
  />
  {errors.appDatFermeture && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appTypMsg ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appTypMsg"
    value={appInfo.appTypMsg}
    onChange={handleInputChange}
    placeholder="Message Type"
  />
  {errors.appTypMsg && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appLibMsg ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appLibMsg"
    value={appInfo.appLibMsg}
    onChange={handleInputChange}
    placeholder="Message"
  />
  {errors.appLibMsg && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.appLb ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="appLb"
    value={appInfo.appLb}
    onChange={handleInputChange}
    placeholder="Label"
  />
  {errors.appLb && (
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

export default AddApplication;
