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

    <Grid container spacing={2}>
      <Grid xs={10}>
        <div className="container">
          <h1>Hi I'm Keith</h1> 
          <img src={me} alt="" width={"400px"}/>
        </div>
      </Grid>
      <Grid xs={2}>
        <Sidebar />
      </Grid>
    </Grid>
        

   </>
  );
};

export default Home;
