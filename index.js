import fetchData from 'api-handler-for-you';

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return await response.data;
    } catch (error) {
        throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
}

export default fetchData;
