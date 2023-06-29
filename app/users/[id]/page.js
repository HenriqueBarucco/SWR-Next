"use client";

import { useFetch } from "@/hooks/useFetch";

export default function UserDetails({ params }) {
    const { id } = params;
    const { data, error, isLoading } = useFetch(
        `http://localhost:3333/users/${id}`
    );

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro na requisição...</p>;

    return (
        <ul>
            <li>ID: {data?.id}</li>
            <li>Nome: {data?.name}</li>
            <li>Email: {data?.email}</li>
        </ul>
    );
}
