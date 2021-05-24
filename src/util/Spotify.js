const CLIENT_ID = 'f03c1febe43a4fd6986005b1342747b4'
const REDIRECT_URI = "http://localhost:3000/"

let accessToken


const Spotify = {
    getAccessToken(){
        console.log(accessToken ? true : false)
        if(accessToken){
            return accessToken
        }
        console.log(window.location.href)
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1]
            const expiresIn = expiresInMatch[1]
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/');
        }
        if(!accessToken && !accessTokenMatch){
            window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`
        }
    },
    search(search){
        let tracksArray = []
        fetch(`https://api.spotify.com/v1/search?type=track&q=${search}`,{
            headers:{Authorization: `Bearer ${accessToken}`}})
        .then(response=>response.json())
        .then(data=>{
            for(let track of data.tracks.items){
            tracksArray.push({
                id:track.id,
                name: track.name,
                artist: track.artists[0].name,
                album:track.album.name,
                uri: track.uri,
                })
            }
        })
        return tracksArray
    },
    savePlaylist(playlistName,trackURIs){
        // Vérification des arguments
        if(!playlistName || !trackURIs){
            return
        }
        // Variable qu'on va utiliser
        const accessTokenPlaylist = accessToken
        const headers = {Authorization: `Bearer ${accessTokenPlaylist}`}
        let user_id
        
        fetch('https://api.spotify.com/v1/me',{headers: headers})
        .then(response=>response.json())
        .then(data=>{
            user_id = data.id
            console.log(data)
            console.log('user ',user_id)
            return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`,{
                method:'POST',
                headers:headers,
                body:{
                    name : JSON.stringify(playlistName)
                }
            })
            .then(response=>response.json())
            .then(dataNext=>{
                console.log(dataNext)
                let playlistId = dataNext.id
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,{
                    method:'POST',
                    headers:headers,
                    body:{
                        uris: trackURIs
                    }
                }).then(response=>response.json())
                .then(data=>data.id)
            })
        
        
        })
        
    }

    
}



export {Spotify}