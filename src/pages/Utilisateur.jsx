import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt,FaEye,FaEdit,FaPlus, FaSearch } from "react-icons/fa";
import "../style/FindAll.css";
import { Link } from "react-router-dom";

function Utilisateur() {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        loadUtilisateurs();
    }, []);

    const loadUtilisateurs = async () => {
        const result = await axios.get("http://localhost:8080/utilisateur");
        setUtilisateurs(result.data);
        setSearchResult(null);
    };
    const searchById = async () => {
        if (searchId.trim() === "") {
            loadUtilisateurs(); 
        }

        else {
            const result = await axios.get(`http://localhost:8080/utilisateur/${searchId}`);
            setSearchResult(result.data);
        
        }
    };
    const deleteById = async (login) => {
        try {
            await axios.delete(`http://localhost:8080/utilisateur/${login}`);
            loadUtilisateurs();
        } catch (error) {
            console.error("Error deleting utilisateur:", error);
        }
    };

    return (
        <div className="findall-container">
            <table className="findall-table">
                <thead>
                    <tr className="title-row">
                        <th colSpan="12">
                            <div className="title-content">
                                <h1>Utilisateurs</h1>
                                <div className="search-input">
                                    <input
                                        type="text"
                                        placeholder="Find by id"
                                        value={searchId}
                                        onChange={(e) => setSearchId(e.target.value)}
                                        
                                    />
                                    <FaSearch className="search-icon" onClick={searchById} />
                                </div>
                                <Link to="/addutilisateur" className="add">
                                         <FaPlus className="icont" />
                                    </Link>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>Login</th>
                        <th>Matr</th>
                        <th>Password (Webs)</th>
                        <th>Webs Pass Clé</th>
                        <th>Agc Code</th>
                        <th>Site Approv</th>
                        <th>User Fix</th>
                        <th>Password (Fix)</th>
                        <th>Ifx Pass Clé</th>
                        <th>Cltsa Valide</th>
                        <th>User AD</th>
                        <th>Password AD</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult ? (
                        <tr key={searchResult.login} className="entity-row">
                        <td>{searchResult.login}</td>
                        <td>{searchResult.matr}</td>
                        <td>{searchResult.passwdWebs}</td>
                        <td>{searchResult.websPassCle}</td>
                        <td>{searchResult.agcCode}</td>
                        <td>{searchResult.siteApprov}</td>
                        <td>{searchResult.userFix}</td>
                        <td>{searchResult.passwdFix}</td>
                        <td>{searchResult.ifxPassCle}</td>
                        <td>{searchResult.cltsaValide}</td>
                        <td>{searchResult.userAd}</td>
                        <td>{searchResult.passwdAd}</td>
                        <td className="methods">
                        <Link to={`/viewUtilisateur/${searchResult.login}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                            <Link to={`/updateUtilisateur/${searchResult.login}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                            <FaTrashAlt className="trash-icon"  onClick={() => deleteById(searchResult.login)}/>
                        </td>
                    </tr>
                    ):(
                     utilisateurs.map(utilisateur => (
                        <tr key={utilisateur.login} className="entity-row">
                            <td>{utilisateur.login}</td>
                            <td>{utilisateur.matr}</td>
                            <td>{utilisateur.passwdWebs}</td>
                            <td>{utilisateur.websPassCle}</td>
                            <td>{utilisateur.agcCode}</td>
                            <td>{utilisateur.siteApprov}</td>
                            <td>{utilisateur.userFix}</td>
                            <td>{utilisateur.passwdFix}</td>
                            <td>{utilisateur.ifxPassCle}</td>
                            <td>{utilisateur.cltsaValide}</td>
                            <td>{utilisateur.userAd}</td>
                            <td>{utilisateur.passwdAd}</td>
                            <td className="methods">
                            <Link to={`/viewUtilisateur/${utilisateur.login}`}>
                                <FaEye className="eye-icon" />
                                </Link>
                                <Link to={`/updateUtilisateur/${utilisateur.login}`}>
                                    <FaEdit className="edit-icon" />
                                </Link>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteById(utilisateur.login)}/>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );
}

export default Utilisateur;
