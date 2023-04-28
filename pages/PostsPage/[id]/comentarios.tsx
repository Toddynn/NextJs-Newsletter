import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonRedirect } from "../../../src/components/Buttons";

export default function Comentarios() {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full my-10">
                <h1>comentários do post com id: {router.query.id}</h1>
            <br />
                <ul className="flex gap-4">
                    <li>
                        <ButtonRedirect href='/dashboard' text='Voltar para Home'></ButtonRedirect>
                    </li>
                    <li>
                        <ButtonRedirect href={`/PostsPage/${router.query.id}`} text='Ir para o post'></ButtonRedirect>
                    </li>
                </ul>
            </div>
        </>
    );
}