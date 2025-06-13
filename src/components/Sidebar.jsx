import {PencilIcon} from '@phosphor-icons/react'

import style from  './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img 
                className={style.cover}
                src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            
            <div className={style.profile}>
                <Avatar 
                    hasBorder
                    className={style.avatar} 
                    src="https://avatars.githubusercontent.com/u/77696258?v=4"/>
                <strong>José Henrique</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                   <a href="#">
                    <PencilIcon size='20px'/>
                    Editar seu perfil
                    </a> 
            </footer>        
        </aside>
    )
}