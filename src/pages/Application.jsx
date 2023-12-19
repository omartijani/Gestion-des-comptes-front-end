import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt,FaEye,FaEdit,FaPlus, FaSearch } from "react-icons/fa";
import "../style/FindAll.css";
import { Link } from "react-router-dom";

function Application() {
    const [apps, setApps] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        loadApps();
    }, []);

    const loadApps = async () => {
        
            const result = await axios.get("http://localhost:8080/apps");
            setApps(result.data);
            setSearchResult(null);
        
    };
    const searchById = async () => {
        if (searchId.trim() === "") {
            loadApps(); 
        }

        else {
            const result = await axios.get(`http://localhost:8080/apps/${searchId}`);
            setSearchResult(result.data);
        
        }
    };
    const deleteById = async (appId) => {
        try {
            await axios.delete(`http://localhost:8080/apps/${appId}`);
            loadApps();
        } catch (error) {
            console.error("Error deleting app:", error);
        }
    };



    return (
        <div className="findall-container">
            <table className="findall-table">
                <thead>
                    <tr className="title-row">
                        <th colSpan="12">
                            <div className="title-content">
                                <h1>Applications</h1>
                                <div className="search-input">
                                    <input
                                        type="text"
                                        placeholder="Find by id"
                                        value={searchId}
                                        onChange={(e) => setSearchId(e.target.value)}
                                    />
                                     <FaSearch className="search-icon" onClick={searchById} /> 
                                </div>
                                    <Link to="/addApp" className="add">
                                         <FaPlus className="icont" />
                                    </Link>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>App ID</th>
                        <th>Domain</th>
                        <th>Version</th>
                        <th>Help</th>
                        <th>Author</th>
                        <th>Creation Date</th>
                        <th>Modification Date</th>
                        <th>Opened</th>
                        <th>Closure Date</th>
                        <th>Message Type</th>
                        <th>Message</th>
                        <th>Label</th>
                    </tr>
                </thead>
                <tbody>
                {searchResult ? (
                        <tr key={searchResult.appId} className="entity-row">
                            <td>{searchResult.appId}</td>
                            <td>{searchResult.appDomaine}</td>
                            <td>{searchResult.appVersion}</td>
                            <td>{searchResult.appHelp}</td>
                            <td>{searchResult.appAuteur}</td>
                            <td>{searchResult.appCreation}</td>
                            <td>{searchResult.appModifcation}</td>
                            <td>{searchResult.appOuverte}</td>
                            <td>{searchResult.appDatFermeture}</td>
                            <td>{searchResult.appTypMsg}</td>
                            <td>{searchResult.appLibMsg}</td>
                            <td>{searchResult.appLb}</td>
                            <td>
                                <Link to={`/viewApp/${searchResult.appId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateApp/${searchResult.appId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteById(searchResult.appId)} />
                            </td>
                        </tr>
                    ) : (
                   apps.map(app => (
                    <tr key={app.appId} className="entity-row">
                        <td>{app.appId}</td>
                        <td>{app.appDomaine}</td>
                        <td>{app.appVersion}</td>
                        <td>{app.appHelp}</td>
                        <td>{app.appAuteur}</td>
                        <td>{app.appCreation}</td>
                        <td>{app.appModifcation}</td>
                        <td>{app.appOuverte}</td>
                        <td>{app.appDatFermeture}</td>
                        <td>{app.appTypMsg}</td>
                        <td>{app.appLibMsg}</td>
                        <td>{app.appLb}</td>
                        <td>
                        <Link to={`/viewApp/${app.appId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateApp/${app.appId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteById(app.appId)} />
                        </td>
                    </tr>
                )))}
                </tbody>
            </table>
        </div>
    );
}

export default Application;
