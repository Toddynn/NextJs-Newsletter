import { useRouter } from "next/router";
import nookies from 'nookies';
import { ButtonNav } from "../Buttons";

export default function Navbar(props:any){
    const router = useRouter();

    return(
        <>
            <div className="w-full relative top-0 bg-slate-800 h-20 p-4 flex gap-4 text-white items-center justify-between">
                <div className="flex gap-2">
                    <div className="botaoNav">
                        <ButtonNav href='/dashboard' text='Home'></ButtonNav>
                    </div>
                    <div className="botaoNav">
                        <ButtonNav href='/profile' text='Perfil'></ButtonNav>
                    </div>
                    <div className="botaoNav">
                        <ButtonNav href='/PostsPage/posts' text='Posts'></ButtonNav>
                    </div>
                    <div className="botaoNav">
                        <ButtonNav href='/newsletter' text='newsLetter'></ButtonNav>
                    </div>
                    <div className="botaoNav">
                        <ButtonNav href='/faq' text='FAQ'></ButtonNav>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => { 
                        nookies.destroy(null, 'senhaSecreta')
                        router.push('/')
                    }}> sair</button>
                </div>
            </div>
        </>
    )
}