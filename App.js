import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/navbar';
import MyCard from './components/myCard';
import {getMatches} from './api/Api';

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches)
        console.log(data.matches);
      })
      .catch(error=>alert("could not load data"));
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Typography variant="h3" style={{marginTop:20}}>
        Welcome to my Live Score App
      </Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {matches.map((match) => (
          <Fragment key={match.unique_id}>
            {match.type === "Twenty20" ? (<MyCard key={match.unique_id} match={match}/>) : ("")}
          </Fragment>
        ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
