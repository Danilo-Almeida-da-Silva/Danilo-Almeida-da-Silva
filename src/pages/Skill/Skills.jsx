import React from "react";
import s from '../Skill/Skills.module.scss'
import icon_python from '../../assets/logopython.png'
import htmlicon from '../../assets/HTML5.png'
import reactjs from '../../assets/Reactjs.png'
import css from '../../assets/CSS3Logo.jfif'
import js from '../../assets/javaScript.jfif'
import sqlbd from '../../assets/SQL.png'

export default function Skills() {
return (
    <main>
        <section className={s.skills_section}>
            <section className={s.tituloskill}>
                <h2>Minhas Skills</h2>
            </section>
            <section className={s.iconskill}>
                <ul className={s.listaskill}>
                    <li className={s.lipython}>
                        <img src={icon_python} alt="logo tipo da linguagem de programação Python" />
                        <p>Python</p>
                    </li>
                    <li>
                        <img src={htmlicon} alt="" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src={reactjs} alt="" />
                        Reactjs
                    </li>
                    <li>
                        <img src={js} alt="" />
                        <p>javaScript</p>
                    </li>
                    <li>
                        <img src={css} alt="" />
                        <p>CSS</p>
                    </li>
                    
                </ul>
            </section>
        </section>
    </main>
    );
}
