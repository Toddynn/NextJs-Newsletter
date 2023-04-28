import Link from "next/link";

export function ButtonNav(props:any){
    return(
        <Link href={props.href} className={`${props.className} p-2 flex items-center`} prefetch={props.prefetch ?? false}>
            <button className="">{props.text}</button>
        </Link>
    )
}

export function ButtonRedirect(props:any){
    return(
        <Link href={props.href} className={`${props.className} p-2 flex justify-center items-center bg-purple-400 rounded-lg hover:bg-purple-400/80 hover:-translate-y-1 transition-all duration-150`} prefetch={props.prefetch ?? false}>
            <button className="">{props.text}</button>
        </Link>
    )
}