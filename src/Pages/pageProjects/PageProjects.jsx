import { Link } from 'react-router-dom';
import style from './PageProjects.module.css';
import { CaretLeft } from '@phosphor-icons/react';

export function PageProjects() {
    return(
        <>
            <div className={style.projectBody}>
                <div className={style.projectContent}>
                    <h1>PROJETOS</h1>
                    
                    <ul>
                        <li>
                            <a href="https://allcarinfo.netlify.app/" target='_blanck'>AllCar</a>
                        </li>
                        <li>
                            <a href="">TikTok</a>
                        </li>
                        <li>
                            <a href="">GitHub</a>
                        </li>
                    </ul>

                    <div className={style.button}>
                        <Link to="/" ><CaretLeft size={18.5} className={style.arrow} />Voltar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}