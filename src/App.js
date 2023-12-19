import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './pages/Home.jsx';
import Action from './pages/Action.jsx';
import Profile from './pages/Profile.jsx';
import Application from './pages/Application.jsx';
import Utilisateur from './pages/Utilisateur.jsx';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import AddApplication from './components/Add/AddApp';
import AddAction from './components/Add/AddAction';
import AddProfile from './components/Add/AddProfile';
import AddUtilisateur from './components/Add/AddUtilisateur';
import EditApplication from'./components/Edit/EditApp';
import EditAction from './components/Edit/EditAction'
import ViewApp from './components/View/ApplicationView';
import AddActionFromApp from './components/Add/AddActionFrmApp';
import ViewAction from './components/View/ActionView';
import UpdateProfile from './components/Edit/EditProfile';
import UpdateUtilisateur from './components/Edit/EditUtilisateur';
import ViewProfile from './components/View/ProfileView';
import ViewUtilisateur from './components/View/UtilisateurView';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Navbar />
        <main>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/action" element={<Action />} />
            <Route path="/application" element={<Application />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/utilisateur" element={<Utilisateur />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path='/addApp' element={<AddApplication/>}/>
            <Route path='/addaction' element={<AddAction/>}/>
            <Route path='/addprofile' element={<AddProfile/>}/>
            <Route path='/addutilisateur' element={<AddUtilisateur/>}/>
            <Route path="/updateApp/:appId" element={<EditApplication/>} />
            <Route path="/updateAction/:actId" element={<EditAction/>} />
            <Route path="/viewApp/:appId" element={<ViewApp />} />
            <Route path='/addactionapp/:appId' element={<AddActionFromApp/>}/>
            <Route path="/viewAction/:actId" element={<ViewAction />} />
            <Route path='/updateProfile/:profNum' element={<UpdateProfile/>}/>
            <Route path='/updateUtilisateur/:login' element={<UpdateUtilisateur/>}/>
            <Route path="/viewProfile/:profNum" element={<ViewProfile />} />
            <Route path="/viewUtilisateur/:login" element={<ViewUtilisateur />} />
            


          </Routes>
        </main>
          
      </div>
      
      </div>
        <Footer />
      
      
    </BrowserRouter>
  );
};



export default App;
