import style from "./Post.module.css";
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx"

export function Post(props){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src="https://avatars.githubusercontent.com/u/77696258?v=4"/>
                    <div className={style.authorInfo}>
                        <strong>José Henrique</strong>
                        <span>Web Developer</span>
                    </div>    
                 </div>
                <time title="11 de Maio ás 13h" dateTime="2022-05-11 13:00:32">Publicado há 1h</time>          
            </header>
            
            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>{' '}
                <a>#novoprojeto</a>{' '}
                <a>#nlw</a>{' '}
                <a> #rocketseat</a>
            </div>


            <form className={style.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixei um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <Comment/>

            <div className={style.comentList}>
                
            </div>
        </article>
        
    )
}