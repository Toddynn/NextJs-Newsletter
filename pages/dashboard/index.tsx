import Footer from "../../src/components/Footer";
import Title from "../../src/components/Title";
import nookies from 'nookies'

export async function getServerSideProps(context:any){
    const senhaSecreta = '123456';
    const cookies = nookies.get(context);
    
    const senha = cookies.senhaSecreta;

    if(senha !== senhaSecreta){
        console.log('naoAutorizado')
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    console.log("autorizado")
    return {
        props:{},
    }
}

export default function Dashboard() {
    return(
        <>
            <div className="containerDashboard flex flex-col items-center mt-10 gap-4 h-screen">
                <Title text='WTF IS A'></Title>
                <img src="/images/kilometer.jpg" alt="wtf is a kilometer" />
            </div>
            <Footer></Footer>
        </>
    )
}