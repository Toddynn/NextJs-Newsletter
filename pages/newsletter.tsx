import Image from "next/image";
import avatar from '../public/images/unnamed.jpg';
import icon from '../public/images/icon.gif';
import { useEffect, useState } from "react";
import { Toast } from "../src/components/Swal";
import axios from "axios";

export default function NewsLetterScreen(){
    const baseURL = '/api/newsletter';
    const [email, setEmail] = useState('');
    const [subscribers, setSubscribers] = useState()

    useEffect(()=>{
        resSubs()
    })

    const resSubs = () => {
        axios.get(baseURL).then((resp) => setSubscribers(JSON.parse(resp.data.subscribers)));
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if(email && email.includes('@')){
            const data = {
                email: email
            }
            
            await axios.post(`${baseURL}`, data)
            .then((res)=>{
                if(res.status === 200) {
                    Toast.fire({
                        icon:'success',
                        title: res.data.message
                    })
                    resSubs()
                }
                else{
                    Toast.fire({
                        icon: 'error',
                        title: res.data.message
                    })
                }
            })
        }else{
            Toast.fire({
                icon: 'error',
                title: 'Please enter a valid email'
            })
        }
    }

    return(
        <>
            <div className="flex justify-center items-center w-full h-[90vh] gap-4 mx-auto p-8">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="">
                        <Image src={avatar} alt='profile pic' height='155' width='155' className='rounded-[100%]'></Image>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center">
                        <h1 className="text-2xl">Quer saber o que eu estou fazendo?</h1>
                        <h1>Junte-se aos <strong>{subscribers} assinantes!</strong></h1>
                        <div className="flex flex-col justify-center w-full gap-3">
                            <NewsLetterTextFieldProps placeholder="Seu Principal E-mail" name='email' value={email} onChange={(e) => setEmail(e.target.value)}></NewsLetterTextFieldProps>
                            <button className="bg-orange-400 w-full rounded-lg h-10 xsm:text-base text-xs active:scale-[98%] active:bg-orange-300 transition-all duration-200">Inscrever-se (Grátis)</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

interface iNewsLetterTextFieldProps {
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: any) => void;
}

function NewsLetterTextFieldProps(props:iNewsLetterTextFieldProps){
    return(
        <label htmlFor="inputEmail" className="w-full flex items-center">
            <span className="absolute ml-1 mt-1"><Image src={icon} alt='iconEmail' width={30}></Image></span>
            <input id='inputEmail' type="email" {...props} className="w-full rounded-lg border border-orange-400 pl-11 pt-1 h-10"/>
        </label>
    )
}