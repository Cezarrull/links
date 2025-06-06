import { Link } from 'react-router-dom';
import style from './PageProjects.module.css';
import { CaretLeft, ChalkboardSimple } from '@phosphor-icons/react';

export function PageProjects() {
    return(
        <>
            <div className={style.projectBody}>
                <div className={style.projectContent}>
                    <h1><ChalkboardSimple size={28} />PROJETOS</h1>
                    
                    <ul>
                        <li>
                            <a href="https://allcarinfo.netlify.app/" target='_blanck'>AllCar</a>
                        </li>
                        <li>
                            <a href="https://brainqi.netlify.app/" target='_blanck'>BrainQI (Em desenvolvimento)</a>
                        </li>
                    </ul>

                    <div className={style.button}>
                        <Link to="/" ><CaretLeft size={18} className={style.arrow} />Voltar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}