import { useRouter } from 'next/router';
import { ButtonRedirect } from '../../../src/components/Buttons';
import dados from '../../../posts.json'
import axios from 'axios';
import {dadosURL} from '../../../src/Services/Api'
import Link from 'next/link';

export async function getStaticPaths(){
    /* const paths = dados.posts.map((postAtual)=>{
        return { params: { id: `${postAtual.id}` } }
    }) */

    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps(context:any){
    const id = context.params.id;

    const {data:post} = await axios.get(`${dadosURL}/${id}`)
    console.log(post)
    
    return {
        props: {
            id: post.id,
            title: post.title,
            date: post.date,
            content: post.content,
            video: post.video
        },
        revalidate: 60,
    }
}

export default function Post(props:any){

    return (
        <>
            <div className='flex flex-col justify-center items-center w-full my-10'>
                <h1>Postinhos</h1>
                <div className='flex flex-col justify-center mx-28 p-8 text-justify border border-purple-400'>
                    <div key={props.title} className='flex flex-col gap-4 justify-center items-center w-full my-10'>
                        <h1>{props.title}</h1>
                        <article>
                            {props.content}
                        </article>
                        <Link href={props.video} className='animate-pulse'>{props.video}</Link>
                        <span className='flex w-full justify-end'>{props.date}</span>
                        <ButtonRedirect href={`${props.id}/comentarios`} text='Ir para os Comentários'></ButtonRedirect>
                    </div>
                </div>
            </div>
        </>
    )
}