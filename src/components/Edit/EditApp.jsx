import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaExclamationCircle } from 'react-icons/fa';

export default function UpdateApp() {
  

  const { appId } = useParams();

  const [app, setApp] = useState({
    appDomaine: "",
    appVersion: "",
    appHelp: "",
    appAuteur: "",
    appCreation: "",
    appModifcation: "",
    appOuverte: "",
    appDatFermeture: "",
    appTypMsg: "",
    appLibMsg: "",
    appLb: "",
  });

  const {
    appDomaine,
    appVersion,
    appHelp,
    appAuteur,
    appCreation,
    appModifcation,
    appOuverte,
    appDatFermeture,
    appTypMsg,
    appLibMsg,
    appLb,
    
  } = app;

  const [errors, setErrors] = useState({
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

  const handleInputChange = (e) => {
    setApp({ ...app, [e.target.name]: e.target.value });
    
      
  };
  const back = useNavigate();
  const GoBack = () => {
    back(-1); 
  };

  useEffect(() => {
    loadApp();
  }, [appId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
      const newErrors = {};
      for (const field in app) {
        if (app[field].trim() === '') {
          newErrors[field] = true;
          valid = false;
        }
      }
       
      if (!valid) {
        setErrors(newErrors);
        return;
      }
  
    await axios.put(`http://localhost:8080/apps/${appId}`, app);
    GoBack();
    setErrors({});
  };
  const handleCancel = () => {
    GoBack(); 
};

  const loadApp = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/apps/${appId}`);
      setApp(response.data);
    } catch (error) {
      console.error("Error fetching app data:", error.response?.status, error.response?.data);
    }
  };

  return (
    <div className="add-application-form">
        <div className='form-container'>
      <h2 className='form-title'>Update Application</h2>
      <form onSubmit={handleSubmit}>
        
        <div className={`input-container ${errors.appDomaine ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="appDomaine"
            value={appDomaine}
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
            value={appVersion}
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
    value={appHelp}
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
    value={appAuteur}
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
    value={appCreation}
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
    value={appModifcation}
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
    value={appOuverte}
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
    value={appDatFermeture}
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
    value={appTypMsg}
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
    value={appLibMsg}
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
    value={appLb}
    onChange={handleInputChange}
    placeholder="Label"
  />
  {errors.appLb && (
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
