import { useRouter } from "next/router";
import nookies from 'nookies'
import { useState } from "react";
import { Toast } from "../src/components/Swal";

export default function Login(){
    const router = useRouter();
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        if(senha && email && email.includes('@')){
            nookies.set(null, 'email', email, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                path: '/'
            })
            nookies.set(null, 'senhaSecreta', senha, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                path: '/'
            })
            router.push('/dashboard')
        }else{
            Toast.fire({
                icon: 'error',
                title:'informe uma senha'
            })
        }
    }

    return(
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <div className="flex flex-col gap-6 border border-purple-400 p-8 mx-auto">
                    <div className="flex justify-center">
                        <h1>Login</h1>
                    </div>
                    <form className="flex flex-col w-full gap-1" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="text-sm">E-mail</label>
                        <input type="email" id='email' className="w-full px-3 h-8" placeholder="emailzinho" onChange={(e) => setEmail(e.target.value)}></input>
                        <label htmlFor="password" className="text-sm">senha</label>
                        <input type="password" id='password' className="w-full px-3 h-8" placeholder="senhazinha" onChange={(e) => setSenha(e.target.value)}></input>

                        <button className='p-2 rounded-lg bg-purple-400'>Acessar</button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}