import axios from "axios"

export async function apiHandler(url) {
    try {
        const response = await axios.get(url)
        if (response && response.data) {
            const results = response.data.results
            const modifiedResult = results.map(element => ({
                firstName: element.name.first,
                lastName: element.name.last,
            }))
            return modifiedResult
        }
    } catch (err) {
        console.log('err apiHandler ', err.message)
    }
}