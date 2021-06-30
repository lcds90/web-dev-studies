import styles from '@styles/LearnPage.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { ComponentNodeHistory } from '@components/Node'
import { ComponentEnterviewQuestions } from '@components/Node/EnterviewQuestions'


type Topic = {
  name: string;
  anchor: string;
};

export default function PageNode() {
  const router = useRouter();
  const [toggleDiv, setToggleDiv] = useState('');
  const generateTopic = () => {
    switch (toggleDiv) {
      default:
        return <ComponentNodeHistory/>;
    }
  };

  const topics: Topic[] = [{ name: 'Home', anchor: 'home' }];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span onClick={() => router.push('/')}>Seção de aprendizado</span>
        <span>Node JS</span>
      </header>
      <section className={styles.main}>
        <aside className={styles.asideBar}>
            {topics.map((topic) => {
              return (
                <div key={topic.name}>
                  <button onClick={() => setToggleDiv(topic.anchor)}>
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
