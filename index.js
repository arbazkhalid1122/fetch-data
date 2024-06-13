const axios = require('axios');

/**
 * Fetches data from the provided URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} - A promise that resolves to the data.
 */
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
}

module.exports = fetchData;
