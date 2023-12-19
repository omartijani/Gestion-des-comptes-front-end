import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaBackward, FaPlus, FaTrashAlt, FaEdit,FaEye } from "react-icons/fa";
import '../../style/view.css';

export default function ViewUtilisateur() {
  const { login } = useParams();
  const [prfl, setPrfl] = useState("");
  const [utilisateur, setUtilisateur] = useState({
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

 

  const deleteById = async (login) => {
    try {
        await axios.delete(`http://localhost:8080/utilisateur/${login}`);
        GoBack();
    } catch (error) {
        console.error("Error deleting utilisateur:", error);
    }
};

  const deleteByIdv = async (profNum) => {
    try {
        await axios.delete(`http://localhost:8080/utilisateur/${login}/removeProfile/${profNum}`);
        loadUtilisateur();
    } catch (error) {
        console.error("Error deleting action:", error);
    }
};

  const back = useNavigate()
  const GoBack = () => {
    back(-1);
  };

  useEffect(() => {
    loadUtilisateur();
  }, []);

  const addProfileToUtilisateur = async () => {
    await axios.post(`http://localhost:8080/utilisateur/${login}/addProfile/${prfl}`);
    loadUtilisateur();
    setPrfl("");
    
  }

  const loadUtilisateur = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/utilisateur/${login}`);
      setUtilisateur(response.data);
    } catch (error) {
      console.error("Error loading app:", error);
    }
  };

  return (
    <div className="view-container">
      <div className="view-content">
        <div className="viewcard">
          <h2 className="view-title">
            Utilisateur Details
            <Link to={`/updateUtilisateur/${utilisateur.login}`}>
              <FaEdit className="edit-icon" />
            </Link>
            <FaTrashAlt className="trash-icon" onClick={() => deleteById(utilisateur.login)} />
          </h2>
          <div className="viewlists">
            <div className="viewheader">
            <ul className="appview">
                    <li className="list-group-item">
                    <b>Login:</b> {utilisateur.login}
                    </li>
                    <li className="list-group-item">
                    <b>Matr:</b> {utilisateur.matr}
                    </li>
                    <li className="list-group-item">
                    <b>Password (Webs):</b> {utilisateur.passwdWebs}
                    </li>
                    <li className="list-group-item">
                    <b>Webs Pass Clé:</b> {utilisateur.websPassCle}
                    </li>
                    <li className="list-group-item">
                    <b>Agc Code:</b> {utilisateur.agcCode}
                    </li>
                    <li className="list-group-item">
                    <b>Site Approv:</b> {utilisateur.siteApprov}
                    </li>
                    <li className="list-group-item">
                    <b>User Fix:</b> {utilisateur.userFix}
                    </li>
                    <li className="list-group-item">
                    <b>Password (Fix):</b> {utilisateur.passwdFix}
                    </li>
                    <li className="list-group-item">
                    <b>Ifx Pass Clé:</b> {utilisateur.ifxPassCle}
                    </li>
                    <li className="list-group-item">
                    <b>Cltsa Valide:</b> {utilisateur.cltsaValide}
                    </li>
                    <li className="list-group-item">
                    <b>User AD:</b> {utilisateur.userAd}
                    </li>
                    <li className="list-group-item">
                    <b>Password AD:</b> {utilisateur.passwdAd}
                    </li>
                </ul>
            </div>
          </div>
        </div>

        <div className="viewcard">
            <div className="link-title">
            <h4>Profiles:</h4>
            <input
                                          type="text"
                                          placeholder="Add by id"
                                          value={prfl}
                                          onChange={(e) => setPrfl(e.target.value)}
                                      />
         
                 <FaPlus className="icont" onClick={ () => addProfileToUtilisateur(prfl)} />
            
            </div>
            <ul className="viewlists">
              {utilisateur.profiles.map((profile) => (
                <li key={profile.profNum} className="lli">{profile.profNum} <div><Link to={`/viewProfile/${profile.profNum}`}>
                <FaEye className="eye-icon" />
                </Link>
                    
                    <Link to={`/updateProfile/${profile.profNum}`}>
                                    <FaEdit className="edit-icon" />
                </Link>
            <FaTrashAlt className="trash-icon" onClick={() => deleteByIdv(profile.profNum)}/>
            </div>
            </li>
              ))}
            </ul>
            
          </div>
           <div className="viewcard">
          <h4 className="tp">Actions :</h4>
          {utilisateur.profiles.map((profile) => (
          <ul key={profile.profNum}  className="viewlists">
            {profile.actions.map((action) => (
              <li className="lli" key={action.actId}>
                 {action.actId} <div><Link to={`/viewAction/${action.actId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateAction/${action.actId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                               </div>
              </li>
            ))}
          </ul>
          ))}
        </div>  

          <div className="viewcard">
          <h4 className="tp">Applications:</h4>
          <div className="viewlists">
          {utilisateur.profiles.map((profile) => (
          <ul key={profile.profNum}  className="viewlists">
            {profile.actions.map((action) => (
              <li className="lli" key={action.actId}>
                 {action.apps.appId}<div><Link to={`/viewApp/${action.apps.appId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateApp/${action.apps.appId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link></div>
                </li>
            ))}
              </ul>
            ))}
          </div>
        </div>  

        <FaBackward className="back-icon" onClick={GoBack} />
      </div>
    </div>
  );
}