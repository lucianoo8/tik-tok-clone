import React, { useState, useEffect } from 'react';
import Video from './Video';
import db from './firebase';
import './App.css';

function App() {

  const [ videos, setVideos ] = useState([]);
  useEffect(() => {
         //  if no include dependancies Fire once whene the componemnt load but never after and when ever video chnage

       db.collection('videos').onSnapshot(snapshot => (
         setVideos(snapshot.docs.map(doc => doc.data()))
       ))
      }, [] )

  return (
    
    <div className="app"> 
      <div className="app__videos">
        
        { videos.map(
          ( {  url, channel, description, song, likes, messages,shares }) => (
             
             <Video 
             url = {url}
             channel = {channel}
             description = {description}
             song = {song}
             likes = {likes}
             messages ={messages}
             shares = {shares}
              />
          )
        )}

      </div> 
    </div>
  );
}

export default App;
