import axios from "axios";
import FAQPage from "../src/screens/Faq";

export default FAQPage;

export async function getStaticProps(){
    try{
        const res = await axios.get(process.env.FAQ_URL)
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