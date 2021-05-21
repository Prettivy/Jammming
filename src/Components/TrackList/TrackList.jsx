import './TrackList.css'
import Track from '../Track/Track'

const TrackList = ({tracks,onAdd,log,isRemoval,removeTrack})=>{
    return(
        <div className="TrackList">
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            { console.log(log)}            
            {
                tracks.map(track=>{
                console.log('trackList map',track)
                return (
                    <Track key={track.id} track={track} onAdd={onAdd} isRemoval={isRemoval} removeTrack={removeTrack}/>
                )
            })}
        </div>
    )
}

export default TrackList