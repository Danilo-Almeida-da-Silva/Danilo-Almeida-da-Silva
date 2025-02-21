import React from 'react';
import s from '../Contato/Contato.module.scss';

export default function Contato() {
    return (
        <article className={s.contato}>
            <section className={s.cabecalho}>
                <h1>Danilo Almeida da Silva</h1>
                <p>Desenvolvedor Full Stack | Análise e Desenvolvimento de Sistemas</p>
            </section>
            
            <section className={s.sobreMim}>
                <h2>Sobre Mim</h2>
                <p>
                    Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento web.
                    Conhecimento em React, JavaScript, Python, e desenvolvimento de APIs.
                </p>
            </section>
            
            <section className={s.habilidades}>
                <h2>Habilidades</h2>
                <ul>
                    <li>React, JavaScript, HTML, SCSS</li>
                    <li>Python</li>
                    <li>Banco de Dados: MySQL</li>
                </ul>
            </section>
            
            <section className={s.contatoInfo}>
                <h2>Contato</h2>
                <section className={s.links}>
                    <a href="mailto:danilo.laet52@gmail.com" className={s.email}>Email</a>
                    <a href="https://github.com/Danilo-Almeida-da-Silva" target="_blank" className={s.github}>GitHub</a>
                    <a href="https://www.linkedin.com/in/danilo-almeida-91a7a6201/" target="_blank" className={s.linkedin}>LinkedIn</a>
                    <a href="https://wa.me/(11)94850-0699" target="_blank" className={s.whatsapp}>WhatsApp</a>
                    <a href="https://www.instagram.com/danilo_a.silva52/" target="_blank" className={s.instagram}>Instagram</a>
                </section>
            </section>
        </article>
    );
}
