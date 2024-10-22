import React from "react";
import anime from "animejs/lib/anime.es.js";
import Navbar from "../../common/Navbar";

import me from '../../../assets/me.png'
import { Grid } from "@mui/material";
import Sidebar from "../../common/Sidebar/Sidebar";

const Home = () => {

  return (
   <>
    <Navbar/>
    <div className="slide">
      <h1>I'm Keith</h1> 
      <h1>I like making stuff</h1>
      <img src={me} alt="" width={"400px"}/>
    </div>
    <div className="slide aboutme">

    </div>
    <div className="slide projects">

    </div>
    <div className="slide contact">

    </div>      

   </>
  );
};

export default Home;
