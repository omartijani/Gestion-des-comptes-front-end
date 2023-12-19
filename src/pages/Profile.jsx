import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt,FaEye,FaEdit,FaPlus, FaSearch } from "react-icons/fa";
import "../style/FindAll.css";
import { Link } from "react-router-dom";

function Profile() {
    const [profiles, setProfiles] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        loadProfiles();
    }, []);

    const loadProfiles = async () => {
       
            const result = await axios.get("http://localhost:8080/prfl");
            setProfiles(result.data);
            setSearchResult(null);
            
        
    };
    const searchById = async () => {
        if (searchId.trim() === "") {
            loadProfiles(); 
        }

        else {
            const result = await axios.get(`http://localhost:8080/prfl/${searchId}`);
            setSearchResult(result.data);
        
        }
    };
    const deleteById = async (profNum) => {
        try {
            await axios.delete(`http://localhost:8080/prfl/${profNum}`);
            loadProfiles();
        } catch (error) {
            console.error("Error deleting profile:", error);
        }
    };

    return (
        <div className="findall-container">
            <table className="findall-table">
                <thead>
                    <tr className="title-row">
                        <th colSpan="2">
                            <div className="title-content">
                                <h1>Profiles</h1>
                                <div className="search-input">
                                    <input
                                        type="text"
                                        placeholder="Find by id"
                                        value={searchId}
                                        onChange={(e) => setSearchId(e.target.value)}
                                        
                                    />
                                    <FaSearch className="search-icon" onClick={searchById} />
                                </div>
                                <Link to="/addprofile" className="add">
                                         <FaPlus className="icont" />
                                    </Link>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>Profile Number</th>
                        <th>Profile Name</th>
                    </tr>
                </thead>
                <tbody>
                {searchResult ? (
                        <tr key={searchResult.profNum} className="entity-row">
                        <td>{searchResult.profNum}</td>
                        <td>{searchResult.profNom}</td>
                        <td>
                        <Link to={`/viewProfile/${searchResult.profNum}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                            <Link to={`/updateProfile/${searchResult.profNum}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                            <FaTrashAlt className="trash-icon" onClick={() => deleteById(searchResult.profNum)}  />
                        </td>
                    </tr>
                     ):(
                    profiles.map(profile => (
                        <tr key={profile.profNum} className="entity-row">
                            <td>{profile.profNum}</td>
                            <td>{profile.profNom}</td>
                            <td>
                            <Link to={`/viewProfile/${profile.profNum}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateProfile/${profile.profNum}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteById(profile.profNum)}  />
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );
}

export default Profile;
