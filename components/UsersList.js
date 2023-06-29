import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";

export default function UserList() {
    const { data, error, isLoading } = useFetch("http://localhost:3333/users");

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro na requisição...</p>;

    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`} className="underline">
                        {user.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
