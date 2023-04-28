import Link from "next/link";
import Footer from "../../components/Footer";
import Title, { PageTitle } from "../../components/Title";

export default function FAQPage({faqs}){
    return(
        <>
            <PageTitle>FAQ</PageTitle>
            <div className="containerFAQ flex flex-col w-full items-center my-10 ">
                <Title text='morgan fique em silencio'></Title>
                {
                    faqs?.map((FAQ:any,index:number) => (
                        <ul className="flex lg:flex-row flex-col w-full items-center p-5 gap-4" key={index}>
                            <li className="flex flex-col w-full items-center">
                                <h3 className="text-2xl font-bold">{FAQ.question}</h3>
                            </li>
                            <li className="flex flex-col overflow-auto w-full items-center gap-4 p-4 text-justify">
                                <p>{FAQ.answer}</p>
                            </li>
                        </ul>
                    ))
                }
                <Link href='/dashboard'>Voltar pra Home</Link>
            </div>
            <Footer></Footer>
        </>
    )
}