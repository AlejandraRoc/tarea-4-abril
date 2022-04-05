export const getData = async (url) => {
    let listarApi = await axios.get(url)
    let {data} = listarApi
    console.loog (data)
    return data
}