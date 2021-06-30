import styles from '@styles/LearnPage.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { ComponentJavascriptHistory } from '@components/Javascript'
import { ComponentArray } from '@components/Javascript/array';


type Topic = {
  name: string;
};

export default function PageJavascript() {
  const router = useRouter();
  const [toggleDiv, setToggleDiv] = useState('');
  const generateTopic = () => {
    switch (toggleDiv) {
      case 'Array':
        return <ComponentArray />;

      default:
        return <ComponentJavascriptHistory/>;
    }
  };

  const topics: Topic[] = [{ name: 'Home' }, { name: 'Array' }];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span onClick={() => router.push('/')}>Seção de aprendizado</span>
        <span>Javascript</span>
      </header>
      <section className={styles.main}>
        <aside className={styles.asideBar}>
            {topics.map((topic) => {
              return (
                <div key={topic.name}>
                  <button onClick={() => setToggleDiv(topic.name)}>
                    {topic.name}
                  </button>
                </div>
              );
            })}
        </aside>
        <article>{generateTopic()}</article>
      </section>
      <footer className={styles.footer}>
          Feito por Leonardo Santos
      </footer>
    </main>
  );
}
