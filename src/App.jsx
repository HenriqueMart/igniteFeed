import './global.css';
import style from './app.module.css';

import {Post} from './components/Post.jsx'
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/sidebar.jsx';

function App() {


  return (
    <>
    <Header />
    <div className={style.wrapper}>
      <Sidebar/>
      <main>
        <Post 
        author="José Henrique" 
        content="Teste"
        />
        <Post 
        author="Gustavo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam natus illum beatae reiciendis aliquam optio recusandae voluptatibus, obcaecati ad eaque veritatis magnam dolorum? Officia perferendis voluptatibus pariatur mollitia non."
        />
      </main>
    </div>
    </>
  )
}

export default App
