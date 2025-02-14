import React from "react";
import s from '../Skill/Skills.module.scss'
import icon_python from '../../assets/logopython.png'
import htmlicon from '../../assets/HTML5.png'
import reactjs from '../../assets/Reactjs.png'
import sass from '../../assets/Sassicon.png'
import css from '../../assets/CSS3Logo.jfif'
import js from '../../assets/javaScript.jfif'

export default function Skills() {
return (
    <main>
        <section className={s.skills_section}>
            <section className={s.tituloskill}>
                <h2>Minhas Skills</h2>
            </section>
            <section className={s.iconskill}>
                <ul>
                    <li>
                        <img src={icon_python} alt="logo tipo da linguagem de programação Python" />
                        <p>Python</p>
                    </li>
                    <li>
                        <img src={htmlicon} alt="" />
                    </li>
                    <li>
                        <img src={reactjs} alt="" />
                    </li>
                    <li>
                        <a href={sass}></a>
                    </li>
                    <li>
                        <img src={css} alt="" />
                    </li>
                    <li>
                        <img src={js} alt="" />
                    </li>
                    
                </ul>
            </section>
        </section>
    </main>
    );
}
