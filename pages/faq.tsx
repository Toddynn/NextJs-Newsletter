import axios from "axios"
import { FAQ_URL } from "../src/Services/Api"
import FAQPage from "../src/screens/Faq"

export default FAQPage;

export async function getStaticProps(){
    try{
        const res = await axios.get(FAQ_URL)
        return {
            props: {
                faqs: res.data
            }
        }
    } catch {
        return {
            props:{}
        }
    }
}