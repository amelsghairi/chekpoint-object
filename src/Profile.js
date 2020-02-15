import React from 'react'
export function Profile(props){
    return(
       <div>
     <img src={data.photo} />
   
    <button
     onSimpleClick={()=>{
   window.location= data.profileLinkFB
  }}> My facebook </button>

    <button
     onSimpleClick={()=>{
     window.location = data.profileLinkLinkedIn }}> My liknedIN </button>
</div>
               );
   
    }
