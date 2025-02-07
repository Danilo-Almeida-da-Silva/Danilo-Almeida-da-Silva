import s from '../Sobre/Sobre.module.scss'

export default function Sobre() {
    return (
        <main>
            <section className={s.sobre}>
                <article className={s.titulosobre}>
                    <h2>Sobre Mim</h2>
                </article>
                
            <article className={s.Textosobre}>
                <p>Olá! Meu nome é Danilo Almeida da Silva e sou um entusiasta da
                tecnologia e do desenvolvimento de software. Atualmente, estou
                cursando Análise e Desenvolvimento de Sistemas na FMU e Também estou cursando Fullstack na Vai na Web, onde venho
                adquirindo conhecimento em Python, estrutura de dados, banco de dados
                SQL e desenvolvimento web.
                
                </p>

                <p>
                Embora ainda não tenha experiência profissional na área, estou sempre
                em busca de aprimorar minhas habilidades através de projetos práticos,
                estudos e desafios de programação. Meu objetivo é atuar como
                desenvolvedor júnior ou estagiário em TI, aplicando e expandindo meus
                conhecimentos no mundo real.
                </p>

                <p>
                Estou pronto para encarar novos desafios e aprender cada vez mais! 🚀
                </p>
            </article>
            </section>
        </main>
    );
}
