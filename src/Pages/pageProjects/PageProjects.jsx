import { Link } from 'react-router-dom';
import style from './PageProjects.module.css';
import { CaretLeft, ChalkboardSimple, GithubLogo } from '@phosphor-icons/react';

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
                            <a href="https://twoone.netlify.app/" target='_blanck'>TWOONE (Versão 1.0)</a>
                        </li>
                        <li>
                            <a href="https://www.rotarypovoador.org.br/" target='_blanck'>RotaryPovoador</a>
                        </li>
                        <li>
                            <a href="https://github.com/Cezarrull" target='_blanck'><GithubLogo size={20} />GitHub</a>
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