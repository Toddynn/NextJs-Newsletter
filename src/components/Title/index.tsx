import Head from "next/head"

export default function Title(props:any){
    return (
        <div className={`${props.className} title flex justify-center items-center text-2xl`}>
            <h1>{props.text}</h1>
        </div>
    )
}

export function PageTitle({children}:any){
    return(
        <Head>
            <title>{children}</title>
        </Head>
    )
}