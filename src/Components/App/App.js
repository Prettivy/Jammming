
import './App.css';
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchResults  from '../SearchResults/SearchResults'
import { useState } from 'react'
import Playlist from '../Playlist/Playlist'


function App() {
  // Track Object
  const trackObj = [{
    name: 'TestObject',
    artist: 'TestArtist',
    album: 'TheTest',
    id: 0,
  },{
    name: 'TestObject2',
    artist: 'TestArtist2',
    album: 'TheTest2',
    id: 1,
  }]
  const playlistName = 'Test'
  const [playlistTracks,setPlaylistTracks] = useState([])
  const [searchResults,setSearchResult] = useState(trackObj)
  
  const addTrack = (track)=>{
    if(playlistTracks.length===0){
      setPlaylistTracks([track])
      return
    }
    for (let element of playlistTracks) {
        if(element.id===track.id){
          return
        }
      }
    setPlaylistTracks(previous=>[...previous,track])
  }

  const removeTrack = (track)=>{
    const playlist = playlistTracks.filter(trackElement =>{
      if(track.id!==trackElement.id){
        return trackElement
      }
    })
    setPlaylistTracks(playlist)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
          <SearchBar/>
        <div className="App-playlist">
          {/* {<!-- Add a SearchResults component -->} 
          Voir si je dois passer le set ou searchResult directement*/}
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          {/* {<!-- Add a Playlist component -->} */}
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} removeTrack={removeTrack}/>
        </div>
      </div>
    </div>
  );
}

export default App;
