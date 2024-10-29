import style from './PageOne.module.css'
import { Link } from 'react-router-dom'

export function PageOne() {
    return(
        <>
            <div className={style.pageBody}>
                <div className={style.content}>
                    <div className={style.imageProfile}>
                        <img src="https://avatars.githubusercontent.com/u/170759421?v=4&size=64" alt="Imagem de perfil github" />
                    </div>
                    <h1>@Cezar Rull</h1>
                    <div className={style.listContent}>
                        <ul>
                            <li>
                                <a href="https://instagram.com/cezar_rull" target='_blanck'>Instagram</a>
                            </li>
                            <li>
                                <a href="https://tiktok.com/@e_o_rola" target='_blanck'>TikTok</a>
                            </li>
                            <li>
                                <a href="https://github.com/Cezarrull" target='_blanck'>GitHub</a>
                            </li>
                            <li>
                                <Link to="/Projetos" >Projetos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}