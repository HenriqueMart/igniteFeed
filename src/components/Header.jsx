import styles from './Header.module.css';

import igniteLogo from '../assets/ignite.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt='LogoTipo do Ignite'></img>
            <h1>Ignite Feed</h1>
        </header>
    )
}