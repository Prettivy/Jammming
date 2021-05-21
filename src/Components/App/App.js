
import './App.css';
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchResults  from '../SearchResults/SearchResults'
import { useState } from 'react'
import Playlist from '../Playlist/Playlist'
import {Spotify} from '../../util/Spotify'


function App() {
  // Track Object pour test
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


  // Application State
  const [playlistTracks,setPlaylistTracks] = useState([])
  const [searchResults,setSearchResults] = useState(trackObj)
  const [playlistName,setPlaylistName] = useState('My Playlist')
  
  // Ajouter une chanson
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

  // Enlever une chance
  const removeTrack = (track)=>{
    const playlist = playlistTracks.filter(trackElement =>{
      if(track.id!==trackElement.id){
        return trackElement
      }
    })
    setPlaylistTracks(playlist)
  }

  // Changer le nom de la playlist
  const updatePlaylistName = (name)=>{
      setPlaylistName(name)
  }

    // Sauvegarder la playlist
  const savePlaylist = ()=>{
    // A modifier plus tard
    const trackURIs = playlistTracks.map(track=>track.uri)
    Spotify.savePlaylist(playlistName,trackURIs)
    setPlaylistName('New Playlist')
    setPlaylistTracks([])
  }

  const search = (search)=>{
    const result = Spotify.search(search)
    setSearchResults(result)
    console.log('SearchResult: ',searchResults)
  }
  // Cette étape n'a pas été demandé mais c'est pour tester le fonctionnement de l'api
  Spotify.getAccessToken()

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */
        // Spotify.asyncCall()
        }
          <SearchBar onSearch={search}/>
        <div className="App-playlist">
          {/* {<!-- Add a SearchResults component -->} 
          Voir si je dois passer le set ou searchResult directement*/}
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          {/* {<!-- Add a Playlist component -->} */}
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} removeTrack={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
