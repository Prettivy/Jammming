
import './SearchBar.css'

const SearchBar = ({onSearch})=>{
    const search = (t)=>{
        console.log(t)
        onSearch(t)
    }
    const handleTermChange = event=>{
        search(event.target.value)
    }
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className="SearchButton" >SEARCH</button>
        </div>
    )
}

export default SearchBar