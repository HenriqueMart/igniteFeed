import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react';
import style from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((status) => {return status + 1});
    }

    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/77696258?v=4"/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Maio ás 13h" dateTime="2022-05-11 13:00:32">Cerca de 1h Atrás</time> 
                        </div>
                        <button
                        onClick={handleDeleteComment}
                        title="Deletar Comentário">
                        <TrashIcon size={24}
                        />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                   <button
                    onClick={handleLikeComment}
                   >
                        <ThumbsUpIcon/>
                        Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}