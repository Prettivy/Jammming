import TrackList from '../TrackList/TrackList'
import './Playlist.css'


const Playlist = ({playlistTracks,removeTrack})=>{
    const isRemoval = true
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            {/* <!-- Add a TrackList component --> */
            // <TrackList />
            }
            <TrackList tracks={playlistTracks} log='playlist' isRemoval={isRemoval} removeTrack={removeTrack}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>  
    )
}

export default Playlist