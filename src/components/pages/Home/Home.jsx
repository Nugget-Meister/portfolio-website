import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import Navbar from "../../common/Navbar";
import Button from '@mui/material/Button';
import me from '../../../assets/me.png'


const Home = () => {

  return (
   <>
    <Navbar/>
      <h1>Hi I'm Keith</h1>
        
      <Button variant="contained">About Me</Button>
      <Button variant="contained">Projects</Button><br />
      <Button variant="contained">Contact Me</Button>
      <img src={me} alt="" width={"400px"}/>

   </>
  );
};

export default Home;
