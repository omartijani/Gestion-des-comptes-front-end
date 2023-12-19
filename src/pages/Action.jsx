import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt,FaEye,FaEdit,FaPlus, FaSearch } from "react-icons/fa";
import "../style/FindAll.css";
import { Link } from "react-router-dom";

function Action() {
    const [actions, setActions] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        loadActions();
    }, []);

    const loadActions = async () => {
            const result = await axios.get("http://localhost:8080/action");
            setActions(result.data);
            setSearchResult(null);
    };
    const searchById = async () => {
        if (searchId.trim() === "") {
            loadActions(); 
        }

        else {
            const result = await axios.get(`http://localhost:8080/action/${searchId}`);
            setSearchResult(result.data);
        
        }
    };
    const deleteById = async (actId) => {
        try {
            await axios.delete(`http://localhost:8080/action/${actId}`);
            loadActions();
        } catch (error) {
            console.error("Error deleting action:", error);
        }
    };

    return (
        <div className="findall-container">
            <table className="findall-table">
                <thead>
                    <tr className="title-row">
                        <th colSpan="5">
                            <div className="title-content">
                                <h1>Actions</h1>
                                <div className="search-input">
                                    <input
                                        type="text"
                                        placeholder="Find by id"
                                        value={searchId}
                                        onChange={(e) => setSearchId(e.target.value)}
                                        
                                    />
                                    <FaSearch className="search-icon" onClick={searchById}/>
                                </div>
                                <Link to="/addAction" className="add">
                                         <FaPlus className="icont" />
                                    </Link>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>Action ID</th>
                        <th>Secured</th>
                        <th>Label</th>
                        <th>Description</th>
                        <th>Application</th>
                    </tr>
                </thead>
                <tbody>
                {searchResult ? (
                    <tr key={searchResult.actId} className="entity-row">
                    <td>{searchResult.actId}</td>
                    <td>{searchResult.actBsecurise}</td>
                    <td>{searchResult.actLib}</td>
                    <td>{searchResult.actLb}</td>
                    <td>
                        <FaEye className="eye-icon" />
                        <Link to={`/updateAction/${searchResult.actId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                        <FaTrashAlt className="trash-icon"onClick={() => deleteById(searchResult.actId)} />
                </td>
                </tr>
                ):(
                    actions.map(action => (
                        <tr key={action.actId} className="entity-row">
                            <td>{action.actId}</td>
                            <td>{action.actBsecurise}</td>
                            <td>{action.actLib}</td>
                            <td>{action.actLb}</td>
                            <td>{action.apps.appId}</td>
                            <td>
                            <Link to={`/viewAction/${action.actId}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateAction/${action.actId}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteById(action.actId)}/>
                        </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );
}

export default Action;
