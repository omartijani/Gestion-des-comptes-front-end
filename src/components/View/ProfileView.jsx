import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaBackward, FaPlus, FaTrashAlt, FaEdit,FaEye } from "react-icons/fa";
import '../../style/view.css';

export default function ViewProfile() {
  const { profNum } = useParams();
  const [act, setAct] = useState("");
  const [profile, setProfile] = useState({
    profNum: '',
    profNom: '',
    actions: []
  });
  const [action, setAction] = useState({
    actId: '',
    actBsecurise: '',
    actLib: '',
    actLb: '',
    apps: []
  });

  const deleteById = async (profNum) => {
    try {
      await axios.delete(`http://localhost:8080/prfl/${profNum}`);
      GoBack();
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };
  const deleteByIdv = async (actId) => {
    try {
        await axios.delete(`http://localhost:8080/prfl/${profNum}/actions/${actId}`);
        loadProfile();
    } catch (error) {
        console.error("Error deleting action:", error);
    }
};

  const back = useNavigate()
  const GoBack = () => {
    back(-1);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const addActiontoProfile = async () => {
    const result = await axios.get(`http://localhost:8080/action/${act}`);
    setAction(result.data);
    await axios.post(`http://localhost:8080/prfl/${profNum}/addAction`, action);
    loadProfile();
  }

  const loadProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/prfl/${profNum}`);
      setProfile(response.data);
    } catch (error) {
      console.error("Error loading app:", error);
    }
  };

  return (
    <div className="view-container">
      <div className="view-content">
        <div className="viewcard">
          <h2 className="view-title">
            Profile Details
            <Link to={`/updateProfile/${profile.profNum}`}>
              <FaEdit className="edit-icon" />
            </Link>
            <FaTrashAlt className="trash-icon" onClick={() => deleteById(profile.profNum)} />
          </h2>
          <div className="viewlists">
            <div className="viewheader">
              <ul className="appview">
                <li className="list-group-item">
                  <b>profile number:</b> {profile.profNum}
                </li>
                <li className="list-group-item">
                  <b>profile nom:</b> {profile.profNom}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="viewcard">
          <div className="link-title">
            <h4>Actions:</h4>
            <input
              type="text"
              placeholder="Add by id"
              value={act}
              onChange={(e) => setAct(e.target.value)}
            />
            <FaPlus className="icont" onClick={() => addActiontoProfile(act)} />
          </div>
          <ul className="viewlists">
            {profile.actions.map((action) => (
              <li className="lli" key={action.actId}>
                 {action.actId} <div><Link to={`/viewAction/${action.actId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateAction/${action.actId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteByIdv(action.actId)}/></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="viewcard">
          <h4 className="tp">Applications:</h4>
          <div className="viewlists">
            {profile.actions.map((action) => (
              <ul className="appview" key={action.actId}>
                <li className="lli">
                 {action.apps.appId}<div><Link to={`/viewApp/${action.apps.appId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateApp/${action.apps.appId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link></div>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <FaBackward className="back-icon" onClick={GoBack} />
      </div>
    </div>
  );
}