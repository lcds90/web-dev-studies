import { useRouter } from 'next/router';
import styles from '@styles/Home.module.css';

type Topic = {
  name: string;
};

export default function Home() {
  const router = useRouter();
  const topics: Topic[] = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Javascript' },
    { name: 'Node' },
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span>Web Dev Studies</span>
        <span>Seção de aprendizado sobre desenvolvimento Web</span>
      </header>
      <section className={styles.main}>
        <article>
          <div>
            <ul>
              <li>Categoria de estudos</li>
              {topics.map((topic) => {
                return (
                  <li key={topic.name}>
                    <button
                      onClick={() =>
                        router.push(`/${topic.name.toLowerCase()}`)
                      }
                    >
                      {topic.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p>
              A aplicação foi desenvolvida com intuito de aprimorar o
              conhecimento sobre tecnologias utilizadas no desenvolvimento web.{' '}
              <br />
              Tomando com base a documentação:
              <a
                target='_blank'
                className={styles.mdn}
                href='https://developer.mozilla.org/pt-BR/docs'
                rel='noreferrer'
              >
                MDN Web Docs
              </a>
            </p>
            <p>
              A meta de aprender ao menos 1 funcionalidade por dia e descrever
              sobre ela, e alguns exemplos de demonstração dos conteudo
              aprendido.
            </p>
          </div>
        </article>
      </section>
      <footer className={styles.footer}>
        Bons estudos e sempre acredite em você!
      </footer>
    </main>
  );
}
