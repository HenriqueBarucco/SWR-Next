import { useFetch } from "@/hooks/useFetch";

/* const fetcher = async () => {
    const response = await fetch("http://localhost:1111/teste");
    const data = await response.json();
    return data;
}; */

export default function FixedUsers() {
    const { data } = useFetch("http://localhost:1111/teste");

    /* const { data, error, isLoading, isValidating } = useSWR("users", fetcher, {
        refreshInterval: 10,
        keepPreviousData: true,
    }); */

    //if (error) return <p>Erro na requisição...</p>;
    if (!data) return <p>Carregando...</p>;

    return (
        <div>
            {/* {isValidating ? <h3>Revalidando...</h3> : <h3>...</h3>} */}
            <div className="flex flex-col justify-center align-middle">
                {data &&
                    data.map((item) => (
                        <div
                            key={item.id}
                            className={`bg-white p-5 m-5 border-black border-2 rounded-md shadow-md`}
                        >
                            <div>
                                <p>ID: {item.id}</p>
                                <p>Nome: {item.name}</p>
                                <p>Email: {item.email}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
