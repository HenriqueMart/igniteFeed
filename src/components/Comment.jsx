import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react';
import style from './Comment.module.css';

export function Comment(){
    return(
        <div className={style.comment}>
            <img src="https://avatars.githubusercontent.com/u/77696258?v=4"/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Maio ás 13h" dateTime="2022-05-11 13:00:32">Cerca de 1h Atrás</time> 
                        </div>
                        <button
                        title="Deletar Comentário">
                        <TrashIcon size={24}
                        />
                        </button>
                    </header>
                    <p>Muito Bom devon, Parabéns</p>
                </div>
                <footer>
                   <button>
                        <ThumbsUpIcon/>
                        Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}