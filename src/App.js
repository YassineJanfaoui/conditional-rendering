import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import photo from "./photo.png";
import yahya from "./yahyabouhlel.jpg"
import amine from "./aminebouhlel.jpg"
import Box from './components/box';
import Box2 from './components/box2';

class App extends Component {
  render() {
    return (

      <div>
        <p className="equipe">Notre équipe</p>  <br/>
        <div className="boxes">
        <div style={{marginLeft:"25px"}}>
        <img src={yahya} className="photos"/>
          <Box style2={{color : "grey",fontSize:"1.2em"}}  name='Yahya bouhlel' des="Founder" desc="CEO" gender="male" /> 
          </div>  
          <div> 
          <img src={amine} className="photos"/>    
          <Box style2={{color : "grey",fontSize:"1.2em"}}   name='Amine Bouhlel' des="Founder" desc="COO" gender="male" />        
          </div> 
          <div>
          <img src={photo} className="photos"/>
          <Box style2={{color : "grey",fontSize:"1.2em"}}   name='Arsslen Idadi' des="Software Engineer" desc="Part Time Prg. Manager" gender="male" />
          </div>
          <div style={{marginRight:"25px"}}>
          <img src={photo} className="photos"/>
          <Box style2={{color : "grey",fontSize:"1.2em"}}   name='Sameh Ghanmi' des="Full Time Program Manager" gender="male" />
          </div>
          </div>
      </div>

    );
  }
}

export default App;
