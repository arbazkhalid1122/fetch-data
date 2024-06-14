import axios from 'axios';

async function fetchData(url, method, payload) {
    const toLowerCase = method.toLowerCase();
    try {
        let response;
        if (toLowerCase === 'get') {
            response = await axios.get(url);
        } else if (toLowerCase === 'post') {
            response = await axios.post(url, payload);
        } else if (toLowerCase === 'put') {
            response = await axios.put(url, payload);
        } else if (toLowerCase === 'delete') {
            response = await axios.delete(url);
        } else {
            throw new Error(`Unsupported method: ${method}`);
        }
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from ${url} using ${method}: ${error.message || error}`);
    }
}

export default fetchData;


