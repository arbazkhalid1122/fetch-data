import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface FetchDataParams {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    payload?: any;
    token?: string;
}

async function fetchData({url, method, payload, token}: FetchDataParams): Promise<any> {
    const toLowerCase = method.toLowerCase();
    const config: AxiosRequestConfig = {
        headers: {}
    };

    if (token) {
        config.headers = {
            'Authorization': `Bearer ${token}`
        };
    }

    try {
        let response: AxiosResponse;
        switch (toLowerCase) {
            case 'get':
                response = await axios.get(url, config);
                break;
            case 'post':
                response = await axios.post(url, payload, config);
                break;
            case 'put':
                response = await axios.put(url, payload, config);
                break;
            case 'delete':
                response = await axios.delete(url, config);
                break;
            default:
                throw new Error(`Unsupported method: ${method}`);
        }
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching data from ${url} using ${method}: ${error.message || error}`);
    }
}

export default fetchData;
