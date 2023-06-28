import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href={"/random"}>Requisição com dados aleatórios</Link>
            <br />
            <Link href={"/same"}>Requisição com dados fixo</Link>
        </>
    );
}
