import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./main";
import { Route } from "react-router-dom";
import Petitions from "./petitions";
import Donate from "./donate";
import Support from "./support";
import Protest from "./protest";
import Educate from "./educate";
import Resources from "./resources";

function App() {


  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/petitions">
        <Petitions />
      </Route>
      <Route path="/donate">
        <Donate />
      </Route>
      <Route path="/support">
        <Support />
      </Route>
      <Route path="/protest">
        <Protest />
      </Route>
      <Route path="/educate">
        <Educate />
      </Route>
      <Route path="/resources">
        <Resources />
      </Route>
      <div className="mainFooterDiv">
        <h6 className="mainFooter">created using React by <a className="mainFooterLink" href="https://www.instagram.com/jynmun/">@jynmun</a></h6>
      </div>
    </>
  );
}

export default App;
