import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID udmb7CGmzVLneGixrUAHxZ0P2dfY-POfrFpEwqqWZ8k'
    },
    params: {
      query: term
    }
  })

  return response.data.results
}

export default searchImages