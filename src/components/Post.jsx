import style from "./Post.module.css";
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx"

import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react";


export function Post({author, publishedAt, content}){

    
    //Estado = Variáveis que eu quero que o componente monitore 
    const[comments, setComments] = useState(['Post muito bancana']);

    const[newComments, setNewComments] = useState('');

    const publishedDateformatted = format(publishedAt, " d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });


    function handleNewCommentCharge(){
        setNewComments(event.target.value);
    }

    function handleCreateNewComment(){
        event.preventDefault(); // Tirando o redirecionamento do HTML

        //Imutabilidade
        setComments([...comments, newComments]);
        setNewComments('');

    }
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>    
                 </div>
                <time title={publishedDateformatted} dateTime={publishedAt.toISOString()}>
                     {publishedDateRelativeToNow}
                </time>          
            </header>
            
            <div className={style.content}>
                {content.map(itens => {
                    if(itens.type === 'paragraph'){
                        return <p>{itens.content}</p>
                    }else if (itens.type === 'link'){
                        return <p><a href="#">{itens.content}</a></p>
                    }
                })}
            </div>


            <form  onSubmit={handleCreateNewComment} className={style.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment" 
                    value={newComments}
                    placeholder="Deixei um comentário"
                    onChange={handleNewCommentCharge}
                />
                <footer>
                    <button
                    type="submit">Publicar</button>
                </footer>
            </form>
            {comments.map(itens => {
                return <Comment content={itens}/>
            })}
            

            <div className={style.comentList}>
                
            </div>
        </article>
        
    )
}