import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navbar from '../src/components/Navbar'
import { PageTitle } from '../src/components/Title'
import '../src/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <PageTitle>Meu App</PageTitle>
            {
                router.pathname !== "/" && 
                    <Navbar></Navbar>
            }
            <Component {...pageProps} />
        </>
    )
}