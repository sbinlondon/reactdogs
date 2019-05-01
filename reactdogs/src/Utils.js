export default {
    callDogApi: function(breed){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/random?query=${breed}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
            .then(result => {
                return result.json()
            })
        }
}