import style from './PageOne.module.css'
import { Link } from 'react-router-dom'
import { LinkSimple, InstagramLogo, TiktokLogo, ChalkboardSimple } from '@phosphor-icons/react';

export function PageOne() {
    return(
        <>
            <div className={style.pageBody}>
                <div className={style.content}>
                    <div className={style.imageProfile}>
                        <img src="https://avatars.githubusercontent.com/u/170759421?v=4&size=64" alt="Imagem de perfil github" />
                    </div>
                    <h1><LinkSimple size={20} />Links</h1>
                    <div className={style.listContent}>
                        <ul>
                            <li>
                                <a href="https://instagram.com/cezar_rull" target='_blanck'><InstagramLogo size={20} /> Instagram</a>
                            </li>
                            <li>
                                <a href="https://tiktok.com/@e_o_rull" target='_blanck'><TiktokLogo size={20} /> TikTok</a>
                            </li>
                            
                            <li>
                                <Link to="/Projetos" ><ChalkboardSimple size={20} />Projetos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}