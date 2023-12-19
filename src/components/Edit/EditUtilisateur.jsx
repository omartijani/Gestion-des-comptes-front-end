import React, { useState,useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import "../../style/Add.css"
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';


const UpdateUtilisateur = () => {
    const {login} = useParams();
    
    const back = useNavigate();
    const GoBack = () => {
        back(-1); 
    };
    useEffect(() => {
        loadUtilisateur();
      }, [login]);
    const [utilisateur, setUtilisateur] = useState({
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
    });
  
    const [errors, setErrors] = useState({
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
  
    const handleInputChange = (e) => {
        setUtilisateur({ ...utilisateur, [e.target.name]: e.target.value });
        
          
      };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      let valid = true;
      const newErrors = {};
      for (const field in utilisateur) {
        if (typeof utilisateur[field] === 'string' && utilisateur[field].trim() === '') {
          newErrors[field] = true;
          valid = false;
        }
      }
  
      if (!valid) {
        setErrors(newErrors);
        return;
      }
      
  
      await axios.put(`http://localhost:8080/utilisateur/${login}`, utilisateur);
      GoBack();
      setErrors({});
    };
    const loadUtilisateur = async () => {
        try {
            
          const response = await axios.get(`http://localhost:8080/utilisateur/${login}`);
          setUtilisateur(response.data);
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
      <h2 className='form-title'>Update Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div className={`input-container ${errors.login? 'error' : ''}`}>
          <input className='inpt'
            type="text"
            name="login"
            value={utilisateur.login}
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
            value={utilisateur.matr}
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
            value={utilisateur.passwdWebs}
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
    value={utilisateur.websPassCle}
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
    value={utilisateur.agcCode}
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
    value={utilisateur.siteApprov}
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
    value={utilisateur.userFix}
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
    value={utilisateur.passwdFix}
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
    value={utilisateur.ifxPassCle}
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
    value={utilisateur.cltsaValide}

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
    value={utilisateur.userAd}
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
    value={utilisateur.passwdAd}
    onChange={handleInputChange}
    placeholder="password Ad"
  />
  {errors.passwdAd && (
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
};

export default UpdateUtilisateur;
