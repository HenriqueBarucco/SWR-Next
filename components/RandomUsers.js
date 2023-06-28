import useSWR from "swr";
import Image from "next/image";

const fetcher = async () => {
    const response = await fetch("https://randomuser.me/api/?results=6");
    const data = await response.json();
    return data;
};

export default function RandomUsers() {
    const { data, error, isLoading } = useSWR("users", fetcher, {
        refreshInterval: 10,
    });

    if (error) return <p>Erro na requisição...</p>;
    if (isLoading && !data) return <p>Carregando...</p>;

    return (
        <div>
            <div className="container">
                {data &&
                    data.results.map((item) => (
                        <div
                            key={item.cell}
                            className={`user-card  ${item.gender}`}
                        >
                            <div>
                                <Image
                                    width={100}
                                    height={100}
                                    src={item.picture.large}
                                    alt="user-avatar"
                                    className="img"
                                />
                                <h3>{`${item.name.first}  ${item.name.last}`}</h3>
                            </div>
                            <div className="details">
                                <p>Country: {item.location.country}</p>
                                <p>State: {item.location.state}</p>
                                <p>Email: {item.email}</p>
                                <p>Phone: {item.phone}</p>
                                <p>Age: {item.dob.age}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
