import React from "react";
import "../style/About.css"
const About = () => {

        return (
            <div className="about-container">
                <h1 className="about-heading">
                    Application de gestion des comptes
                </h1>
                <p className="about-text">
                    Les applications au sein de Lydec partagent un modèle de sécurité commun pour la gestion des comptes, des profils et des droits des utilisateurs. Ce modèle s'appuie sur l'Active Directory (AD) pour l'authentification et gère les autorisations via des tables au niveau d'Informix.
    
                    Actuellement, la gestion des comptes et des profils implique l'utilisation de scripts SQL ainsi que des vérifications manuelles dans l'AD par les équipes de la Direction des Systèmes d'Information (DSI).
    
                    Pour répondre à ce besoin, nous avons entrepris le développement d'une application web dédiée à la gestion de ce modèle de sécurité. L'objectif principal est d'automatiser la création et la mise à jour de ce modèle pour l'ensemble des applications Lydec.
    
                    Cette application intègre plusieurs modules clés :
                    <h3>Gestion des Applications</h3>  Permet d'ajouter, de modifier et de filtrer les applications métier de Lydec.
                    <h3>Gestion des Actions</h3> Offre la possibilité d'ajouter et de modifier les actions unitaires sur les applications.
                    <h3> Gestion des Profils</h3>  Permet de créer, de modifier et d'associer des actions aux profils logiques.
                    <h3>Gestion des Utilisateurs</h3> Facilite l'ajout, la modification et la vérification des utilisateurs ainsi que l'attribution de profils.
                    <br/>
                    En développant cette application, nous visons à simplifier et à automatiser le processus complexe de gestion des comptes, des profils et des droits au sein de Lydec. Cela renforcera la sécurité, améliorera l'efficacité opérationnelle et offrira une solution centralisée pour une gestion plus transparente et efficace.
                </p>
            </div>
        );
    };
export default About;
