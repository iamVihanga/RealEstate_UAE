import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '7a92d9e49bmshf7b508f3663f75bp1f2253jsneaa9766c5331',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}
