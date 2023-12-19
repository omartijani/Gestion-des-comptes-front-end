import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import{FaBackward,FaPlus,FaTrashAlt,FaEdit,FaEye} from "react-icons/fa";
import '../../style/view.css';



export default function ViewApp() {
  const [app, setApp] = useState({
    appId: "",
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
    appLb: ""
  });
  const deleteByIdv = async (actId) => {
    try {
        await axios.delete(`http://localhost:8080/action/${actId}`);
        loadApp();
    } catch (error) {
        console.error("Error deleting action:", error);
    }
};
  
  
  const [linkedActions, setLinkedActions] = useState([]);

  const { appId } = useParams();
  const back = useNavigate();
  const GoBack = () => {
    back(-1); 
  };

  useEffect(() => {
    loadApp();
  }, );

  const loadApp = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/apps/${appId}`);
      setApp(response.data);

      const actionsResponse = await axios.get(
        `http://localhost:8080/apps/${appId}/actions`
      );
      setLinkedActions(actionsResponse.data);
    } catch (error) {
      console.error("Error loading app:", error);
    }
  };
  const deleteById = async (appId) => {
    try {
        await axios.delete(`http://localhost:8080/apps/${appId}`);
        GoBack();
    } catch (error) {
        console.error("Error deleting app:", error);
    }
};

  return (
    <div className="view-container">
      <div className="view-content">
        <div className="viewcard">
          <h2 className="view-title">Application Details <Link to={`/updateApp/${app.appId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteById(app.appId)} /></h2>

          <div className="viewlists">
            
                
                <ul className="appview">
                    <li className="list-group-item">
                    <b>appId:</b> {app.appId}
                    </li>
                    <li className="list-group-item">
                    <b>Domain:</b> {app.appDomaine}
                    </li>
                    <li className="list-group-item">
                    <b>Version:</b> {app.appVersion}
                    </li>
                    <li className="list-group-item">
                    <b>Help:</b> {app.appHelp}
                    </li>
                    <li className="list-group-item">
                    <b>Author:</b> {app.appAuteur}
                    </li>
                    <li className="list-group-item">
                    <b>Creation Date:</b> {app.appCreation}
                    </li>
                    <li className="list-group-item">
                    <b>Modification Date:</b> {app.appModifcation}
                    </li>
                    <li className="list-group-item">
                    <b>Is Open:</b> {app.appOuverte}
                    </li>
                    <li className="list-group-item">
                    <b>Closure Date:</b> {app.appDatFermeture}
                    </li>
                    <li className="list-group-item">
                    <b>Type of Message:</b> {app.appTypMsg}
                    </li>
                    <li className="list-group-item">
                    <b>Message Description:</b> {app.appLibMsg}
                    </li>
                    <li className="list-group-item">
                    <b>Label:</b> {app.appLb}
                    </li>
                </ul>
                
             
            </div>
          </div>

          <div className="viewcard">
            <div className="link-title">
            <h4>Actions:</h4>
            <Link to={`/addactionapp/${app.appId}`} className="add">
                 <FaPlus className="icont" />
            </Link>
            </div>
            <ul className="viewlists">
              {linkedActions.map((action) => (
                <li key={action.actId} className="lli">{action.actId}<div><Link to={`/viewAction/${action.actId}`}>
                <FaEye className="eye-icon" />
                </Link> <Link to={`/updateAction/${action.actId}`}>
                <FaEdit className="edit-icon" />
            </Link>
            <FaTrashAlt className="trash-icon" onClick={() => deleteByIdv(action.actId)}/></div></li>
              ))}
            </ul>
          </div>

          
            <FaBackward className="back-icon"onClick={GoBack}/>
          
        </div>
      </div>

  );
}