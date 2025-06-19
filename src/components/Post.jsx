import style from "./Post.module.css";
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx"

import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react";


export function Post({author, publishedAt, content}){

    
    //Estado = Variáveis que eu quero que o componente monitore 
    const[comments, setComments] = useState([{id: 1, content: 'Post Legal!'}]);

    const[newComments, setNewComments] = useState('');

    const isNewCommentEmpty = newComments.length === 0;

    const publishedDateformatted = format(publishedAt, " d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });


    function handleNewCommentCharge(event){
        event.target.setCustomValidity('');
        setNewComments(event.target.value);
    }

    function handleCreateNewComment(event){
        event.preventDefault(); // Tirando o redirecionamento do HTML

        const newComment = {
            id: Date.now(),
            content: newComments,
        }

        //Imutabilidade
        setComments([...comments, newComment]);
        setNewComments('');

    }


    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse Campo é Obrigatório!');
    }

    function deleteComment(commentToDeleteId){
        //imutabilidade -> Variável não sofreram alterações, mas um novo valor é alocado
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment.id !== commentToDeleteId
        })

        setComments(commentsWithoutDeletedOne);
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
                        return <p key={itens.content}>{itens.content}</p>
                    }else if (itens.type === 'link'){
                        return <p key={itens.content}><a href="#">{itens.content}</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button
                    type="submit"
                    disabled={isNewCommentEmpty}
                    >
                    Publicar
                    </button>
                </footer>
            </form>
            {comments.map(itens => {
                return (
                <Comment 
                    key={itens.id}
                    content={itens.content}
                    onDeleteComment={() => deleteComment(itens.id)}
                    
                />)
            })}
            

            <div className={style.comentList}>
                
            </div>
        </article>
        
    )
}