import React from "react";
import { Link } from "react-router-dom";
import utilisateur from "../images/utilisateur.png";
import action from "../images/action.png";
import profile from "../images/profile.png";
import app from "../images/application.png";
import "../style/Home.css"

const Card =({ title, image, linkTo }) => {
    return (
        <Link to={linkTo} className="card-link">
            <div className="card">
                <h2>{title}</h2>
                <img className="image" src={image} alt={title} />
            </div>
        </Link>
    );
};
const Home = () => {
    return(
        <div className="home ">
        
        <Card
            title="Action"
            image={action}
            linkTo="/action"
        />
        <Card
            title="Application"
            image={app}
            linkTo="/application"
        />
    
        
        <Card
            title="Utilisateur"
            image={utilisateur}
            linkTo="/utilisateur"
        />
        <Card
            title="Profile"
            image={profile}
            linkTo="/profile"
        />
        
    </div>
            

    );
};
export default Home;