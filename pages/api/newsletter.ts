import { NextApiRequest, NextApiResponse } from "next";
import {createClient} from '@supabase/supabase-js'
import sendGridMail from '@sendgrid/mail';

const supaBaseURL = 'https://xrirfyumycwurlgxbtmp.supabase.co';
const supaBaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyaXJmeXVteWN3dXJsZ3hidG1wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjY3ODcyNCwiZXhwIjoxOTk4MjU0NzI0fQ.oPS0dO4SXag0A42wOQKg4j5Bpj-iB7pCH2XkzchHaOo';
const sendGridKEY = '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';
const dbClient = createClient(supaBaseURL, supaBaseKEY);

const httpStatus = {
    Success: 200,
    Created: 201,
    NotFound: 204,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    InternalServerError: 500,
}

const controllerByMethod = {
    async POST(req:NextApiRequest, res:NextApiResponse){
        const email = req.body.email;

        if(email && email.includes('@')){
            const {error} = await dbClient.from('newsletterUsers').insert({email: email, optin: true});
        
            if( error ){
                res
                .status(httpStatus.BadRequest)
                .json({ message: 'Something went wrong'})
                return;
            }

            try{
                sendGridMail.setApiKey(sendGridKEY);

                await sendGridMail.send({
                    to: email,
                    from: 'viniciusgabriez07@gmail.com',
                    subject: 'Olá! Obrigado por inscrever-se em minha newsletter.',
                    html: 'Esse é apenas um teste para meu projeto em NEXT.JS com SupraBase e SendGrid. Abraço!'
                });

                res
                .status(httpStatus.Success)
                .json({message:'Signature confirmed, please check your email! ;)'});
            } catch (err) {
                res
                .status(httpStatus.InternalServerError)
                .json({ message: 'Ops, we failed to send the email to the server, try again.'});
                return;
            }
            
        }else{
            res
            .status(httpStatus.BadRequest)
            .json({ message: 'Please enter a valid email. For example: test@example.com'});
            return;
        }
        
    },
    async GET(req:NextApiRequest, res:NextApiResponse){
        const {data, error} = await dbClient.from('newsletterUsers').select('*');
        
        res
        .status(httpStatus.Success)
        .json({subscribers:data.length, users:data});
    }
}

export default function handler(req:NextApiRequest, res:NextApiResponse){
    const controller = controllerByMethod[req.method];
    
    if(controller){
        controller(req, res);
        return;
    }else{
        res.status(httpStatus.NotFound).json({message: 'No controller found' });
    }
}