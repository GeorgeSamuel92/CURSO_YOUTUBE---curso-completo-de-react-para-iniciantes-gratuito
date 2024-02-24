import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok)
                        throw Error(
                            'não possivel carregar os dados para esse recurso'
                        );
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsloading(false);
                    setIsError(false);
                    setError(false);
                })
                .catch((err) => {
                    setIsError(true);
                    setError(err);
                    setIsloading(true);
                    setData(null);
                });
        }, 1000);
    }, [url]);

    return { data, isError, isLoading, error };

}