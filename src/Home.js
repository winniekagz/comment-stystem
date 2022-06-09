import React, { useState } from 'react';
import CommentList from './components/CommentList';
import Navbar from './components/Navbar';
import AddComment from './components/AddComment';

const Home = () => {
    const [comments,setComments]=useState({})
   
    const socket = new WebSocket('ws://localhost:5000/comment');
   


socket.onopen = function(e) {
    console.log("[open] Connection established");
 
    socket.send("successful connection");
  };

  socket.onmessage = function(event) {
      console.log("message event",event)
      const message=event.data
      const incomingData=JSON.stringify(message)
      setComments(incomingData)
      console.log("incoming data",incomingData)
  
    }
    const  state=({
       comment:{},
        actions:socket
    })
    const handleUpdate=(childData)=>{
        setComments(oldArray=>[...oldArray,childData])
      }
    console.log("state",comments)
    return (
        <div>
      <Navbar/>

            <section>
                <div class="container">
                    <div class="row" style={{display:"flex",flexDirection:"row"}}>
                        <div class="col-6"><CommentList ParentCallBack={handleUpdate}  {...state}/></div>
                       <div class="col-6"><AddComment {...state}/></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
