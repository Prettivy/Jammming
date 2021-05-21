import TrackList from '../TrackList/TrackList'
import './Playlist.css'


const Playlist = ({playlistTracks,removeTrack,onNameChange,onSave})=>{
    const handleNameChange = event =>{
        onNameChange(event.target.value)
    }
    const isRemoval = true
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            {/* <!-- Add a TrackList component --> */
            // <TrackList />
            }
            <TrackList tracks={playlistTracks} log='playlist' isRemoval={isRemoval} removeTrack={removeTrack}/>
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>  
    )
}

export default Playlist