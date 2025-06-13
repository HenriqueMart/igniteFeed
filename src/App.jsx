import './global.css';
import style from './app.module.css';

import {Post} from './components/Post.jsx'
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/sidebar.jsx';

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/77696258?v=4',
        name: 'José Henrique',
        role: 'Develop front-end'
      },
      content: [{type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: 'jane.design/doctorcare '}
    ],
    publishedAt: new Date('2025-05-03 20:00:00')
    }, 
    {
      id: 2,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/77696258?v=4',
        name: 'Maria das neves',
        role: 'Develop front-end'
      },
      content: [{type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: 'jane.design/doctorcare '}
    ],
    publishedAt: new Date('2025-05-10 20:00:00')
    }

  ]


  return (
    <>
    <Header />
    <div className={style.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return (<Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
        })}
      </main>
    </div>
    </>
  )
}

export default App
