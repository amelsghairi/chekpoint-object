import React from 'react'
import Image from './Amel.jpg';


class App extends React.Component {

  render(){
    this.data={
      photo:Image,
      Name:{firstName:"", lastName:""},
      profileLinkFB:"https://www.facebook.com",
      profileLinkLinkedIn:"https://www.linkedin.com"
    }
    return(
 
      <div className="App">
      <img src={this.data.photo} alt='hi' />
     
      <button
       onClick={()=>{
     window.location=this.data.profileLinkFB
    }}> My facebook </button>
  
      <button
       onClick={()=>{
       window.location = this.data.profileLinkLinkedIn }}> My liknedIN </button>
                         </div>
       
    )
  }
}



    


export default App;
