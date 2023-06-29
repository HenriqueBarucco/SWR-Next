import useSWR from "swr";

export function useFetch(url, options) {
    const { data, error, isLoading } = useSWR(
        url,
        async (url) => {
            const response = await fetch(url);
            const data = await response.json();

            return data;
        },
        options
    );

    return { data, error, isLoading };
}
