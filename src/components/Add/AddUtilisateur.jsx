import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import "../../style/Add.css"
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddUtilisateur = () => {
    const navigate = useNavigate();
  
    const [utilisateurInfo, setUtilisateurInfo] = useState({
      login: '',
      matr: '',
      passwdWebs: '',
      websPassCle: '',
      agcCode: '',
      siteApprov: '',
      userFix: '',
      passwdFix: '',
      ifxPassCle: '',
      cltsaValide: '',
      userAd: '',
      passwdAd: '',
      profiles: [] 
    });
  
    const [errors, setErrors] = useState({
      login: false,
      matr: false,
      passwdWebs: false,
      websPassCle: false,
      agcCode: false,
      siteApprov: false,
      userFix: false,
      passwdFix: false,
      ifxPassCle: false,
      cltsaValide: false,
      userAd: false,
      passwdAd: false,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUtilisateurInfo((prevInfo) => ({
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
      for (const field in utilisateurInfo) {
        if (field !== 'profiles' && utilisateurInfo[field].trim() === '') {
          newErrors[field] = true;
          valid = false;
        }
      }
  
      if (!valid) {
        setErrors(newErrors);
        return;
      }
      
  
      await axios.post("http://localhost:8080/utilisateur", utilisateurInfo);
      navigate('/utilisateur');
  
      setUtilisateurInfo({
        login: '',
        matr: '',
        passwdWebs: '',
        websPassCle: '',
        agcCode: '',
        siteApprov: '',
        userFix: '',
        passwdFix: '',
        ifxPassCle: '',
        cltsaValide: '',
        userAd: '',
        passwdAd: '',
        profiles: [] // Reset profiles to an empty array
      });
      setErrors({});
    };
  
  
    const handleCancel = () => {
        navigate('/utilisateur'); 
    };

  return (
    <div className="add-application-form">
        <div className='form-container'>
      <h2 className='form-title'>Add Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div className={`input-container ${errors.login? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="login"
            value={utilisateurInfo.login}
            onChange={handleInputChange}
            placeholder="Login"
          />
          {errors.login && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.matr ? 'error' : ''}`}>
          <input className='inpt'
            type="number"
            name="matr"
            value={utilisateurInfo.Matr}
            onChange={handleInputChange}
            placeholder="Matr"
          />
          {errors.matr && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.passwdWebs ? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="passwdWebs"
            value={utilisateurInfo.passwdWebs}
            onChange={handleInputChange}
            placeholder="password Webs"
          />
          {errors.passwdWebs && (
            <FaExclamationCircle className="error-icon" />
          )}
        </div>
        <div className={`input-container ${errors.websPassCle ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="websPassCle"
    value={utilisateurInfo.websPassCle}
    onChange={handleInputChange}
    placeholder="webs Pass Cle"
  />
  {errors.websPassCle && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.agcCode ? 'error' : ''}`}>
  <input className='inpt'
    type="number"
    name="agcCode"
    value={utilisateurInfo.agcCode}
    onChange={handleInputChange}
    placeholder="agcCode"
  />
  {errors.agcCode && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.siteApprov ? 'error' : ''}`}>
  <input className='inpt'
    type="number"
    name="siteApprov"
    value={utilisateurInfo.siteApprov}
    onChange={handleInputChange}
    placeholder="site Approv"
  />
  {errors.siteApprov && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.userFix ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="userFix"
    value={utilisateurInfo.userFix}
    onChange={handleInputChange}
    placeholder="user Fix"
  />
  {errors.userFix && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.passwdFix ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="passwdFix"
    value={utilisateurInfo.passwdFix}
    onChange={handleInputChange}
    placeholder="password Fix"
  />
  {errors.passwdFix && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.ifxPassCle ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="ifxPassCle"
    value={utilisateurInfo.ifxPassCle}
    onChange={handleInputChange}
    placeholder="ifxPassCle"
  />
  {errors.ifxPassCle && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.cltsaValide ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="cltsaValide"
    value={utilisateurInfo.cltsaValide}

    onChange={handleInputChange}
    placeholder="cltsa Valide"
  />
  {errors.cltsaValide && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.userAd ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="userAd"
    value={utilisateurInfo.userAd}
    onChange={handleInputChange}
    placeholder="user Ad"
  />
  {errors.userAd && (
    <FaExclamationCircle className="error-icon" />
  )}
</div>

<div className={`input-container ${errors.passwdAd ? 'error' : ''}`}>
  <input className='inpt'
    type="text"
    name="passwdAd"
    value={utilisateurInfo.passwdAd}
    onChange={handleInputChange}
    placeholder="password Ad"
  />
  {errors.passwdAd && (
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

export default AddUtilisateur;
