import React from "react";
import s from '../Projetos/Projetos.module.scss'
import projeto1 from '../../assets/projetonoite-react-vnw-dh6n-vercel-app.jpg'
import projeto2 from '../../assets/projeto-outubro-rosa-vercel-app.jpg'


export default function Projetos(){
    const projetosprontos =[
        {
            nome: 'Doação de livro',
            imagem: projeto1,
            url: 'https://projetonoite-react-vnw-bgp3.vercel.app/'
        },
        {
            nome: 'Outubro rosa 2',
            imagem: projeto2,
            url: 'https://projeto-outubro-rosa.vercel.app/'

        },
    ];
    return(
        <main>
            <section className={s.secaoprojetos}>
                    <h1 className={s.tituloprojetos}>Meus Projetos</h1>
                <section className={s.visuaprojetos}>
                    {projetosprontos.map((projeto, index) => (
                        <article key={index} className={s.cardprojeto}>
                            <img 
                                className={s.imagemprojeto} 
                                src={projeto.imagem} 
                                alt={projeto.nome} 
                            />
                            <h2 className={s.nomeprojeto}>{projeto.nome}</h2>
                            <button onClick={() => window.open(projeto.url, "_blank")} 
                            className={s.botaoprojeto}>Ver Projeto</button>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}