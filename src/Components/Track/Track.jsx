import './Track.css'

const Track = ({track,onAdd,isRemoval, removeTrack})=>{
    const addTrack = ()=>{
        onAdd(track)
    }
    const removeTheTrack = ()=>{
        removeTrack(track)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p> {track.artist}  |  {track.album} </p>
            </div>
            {
                <button className="Track-action" onClick={isRemoval ? removeTheTrack : addTrack}> {isRemoval ? "-": "+"} </button>
            }
        </div>
    )
}

export default Track