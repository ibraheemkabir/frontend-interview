import { useEffect, useRef, useState } from "react";

export const useGetApplications = (page=1, limit=5) => {
    const cache = useRef({});
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const url = `http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`;

    const fetchData = async () => {
        setStatus('fetching');

        if (cache.current[url]) {
            const data = cache.current[url];
            setData(data);
            setStatus('fetched');
        } else {
            const response = await fetch(url);
            let resData = await response.json();

            if (page > 1) {
                resData = data.concat(resData)
            }

            cache.current[url] = resData;
            setData(resData);
            setStatus('fetched');
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return { status, data, fetchData };
};