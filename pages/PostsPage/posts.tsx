import { ButtonRedirect } from "../../src/components/Buttons";
import dados from '../../posts.json';

export default function Posts(){

    return(
        <>
            <div className="flex flex-col justify-center items-center w-full my-10 gap-4">
                <h1>POSTS</h1>

                <div className="grid grid-cols-4 gap-8 p-4 w-full">
                    {
                        dados.posts.map((post)=>(
                            <ButtonRedirect href={`/PostsPage/${post.id}`} text={post.title}></ButtonRedirect>
                        ))
                    }
                </div>
            </div>
        </>
    )
}