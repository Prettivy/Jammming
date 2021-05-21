import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

const SearchResults = ({searchResults,onAdd})=>{
    const isRemoval = false
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <TrackList tracks={searchResults} onAdd={onAdd} log='search' isRemoval={isRemoval}/>
        </div>
    )
}

export default SearchResults