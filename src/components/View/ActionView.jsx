import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import{FaBackward,FaPlus,FaTrashAlt,FaEdit,FaEye} from "react-icons/fa";
import '../../style/view.css';


export default function ViewAction() {
    const [action, setAction] = useState({
        actId: '',
        actBsecurise: '',
        actLib: '',
        actLb: '',
        apps:[]
      });
      const deleteByIdv = async (profNum) => {
        try {
            await axios.delete(`http://localhost:8080/prfl/${profNum}/actions/${actId}`);
            loadAction();
        } catch (error) {
            console.error("Error deleting action:", error);
        }
    };
    const deleteById = async (actId) => {
      try {
          await axios.delete(`http://localhost:8080/action/${actId}`);
          GoBack();
      } catch (error) {
          console.error("Error deleting action:", error);
      }
  };
  
  const [linkedProfiles, setLinkedProfiles] = useState([]);
  
  const { actId } = useParams();
  const[prfl, setPrfl]=useState(" ");
  const back = useNavigate()
  const GoBack = () => {
    back(-1); 
  };
  useEffect(() => {
    loadAction();
  }, );
  const addPrfltoAction = async ()=>{
    
    await axios.post(`http://localhost:8080/prfl/${prfl}/addAction`,action)
    loadAction();
  }

  const loadAction = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/action/${actId}`);
      setAction(response.data);

      const profilessResponse = await axios.get(
        `http://localhost:8080/action/${actId}/profiles`
      );
      
      setLinkedProfiles(profilessResponse.data);
    } catch (error) {
      console.error("Error loading app:", error);
    }
  };

  return (
    <div className="view-container">
      <div className="view-content">
        <div className="viewcard">
          <h2 className="view-title">Action Details  <Link to={`/updateAction/${action.actId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteById(action.actId)} /></h2>

          <div className="viewlists">
            
          <ul className="appview">
                    <li className="list-group-item">
                    <b>action Id:</b> {action.actId}
                    </li>
                    <li className="list-group-item">
                    <b>action Bsecurise:</b> {action.actBsecurise}
                    </li>
                    <li className="list-group-item">
                    <b>action lib:</b> {action.actLib}
                    </li>
                    <li className="list-group-item">
                    <b>action lb:</b> {action.actLb}
                    </li>
                   
                </ul>
             
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
         
                 <FaPlus className="icont" onClick={ () => addPrfltoAction(prfl)} />
            
            </div>
            <ul className="viewlists">
              {linkedProfiles.map((profile) => (
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
          <h4 className="tp">Application :<div><Link to={`/viewApp/${action.apps.appId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateApp/${action.apps.appId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link></div></h4>
          

          <div className="viewlists">
            
                
                <ul className="appview">
                    <li className="list-group-item">
                    <b>appId:</b> {action.apps.appId}
                    </li>
                    <li className="list-group-item">
                    <b>Domain:</b> {action.apps.appDomaine}
                    </li>
                    <li className="list-group-item">
                    <b>Version:</b> {action.apps.appVersion}
                    </li>
                    <li className="list-group-item">
                    <b>Help:</b> {action.apps.appHelp}
                    </li>
                    <li className="list-group-item">
                    <b>Author:</b> {action.apps.appAuteur}
                    </li>
                    <li className="list-group-item">
                    <b>Creation Date:</b> {action.apps.appCreation}
                    </li>
                    <li className="list-group-item">
                    <b>Modification Date:</b> {action.apps.appModifcation}
                    </li>
                    <li className="list-group-item">
                    <b>Is Open:</b> {action.apps.appOuverte}
                    </li>
                    <li className="list-group-item">
                    <b>Closure Date:</b> {action.apps.appDatFermeture}
                    </li>
                    <li className="list-group-item">
                    <b>Type of Message:</b> {action.apps.appTypMsg}
                    </li>
                    <li className="list-group-item">
                    <b>Message Description:</b> {action.apps.appLibMsg}
                    </li>
                    <li className="list-group-item">
                    <b>Label:</b> {action.apps.appLb}
                    </li>
                </ul>
                
             
            </div>
          </div>
          <FaBackward className="back-icon"onClick={GoBack}/>
        </div>
      </div>

  );
}