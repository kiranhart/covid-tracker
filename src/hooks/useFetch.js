import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(url);
            setData(data);
        };

        fetchData();
    }, [url]);

    return data;
};

export default useFetch;
