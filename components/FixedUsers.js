import { useFetch } from "@/hooks/useFetch";

export default function FixedUsers() {
    const { data, error, isLoading } = useFetch("http://localhost:3333/users", {
        refreshInterval: 10,
        keepPreviousData: true,
    });

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro na requisição...</p>;

    return (
        <div>
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
