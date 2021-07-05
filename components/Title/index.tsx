import Image from 'next/image';
import style from '@styles/Title.module.css';
type Topic = {
  name: string;
  img: any;
  link: string;
};

export function Title({ name, img, link }: Topic) {
  return (
    <section className={style.title}>
      <article>{name}</article>
      <article>
        <a href={link} target='_blank' rel='noreferrer'>
          <Image
            width={400}
            height='100%'
            src={img}
            alt={`Imagem representativa de ${name}`}
          />
          <span>Documentanção: {name}</span>
        </a>
      </article>
    </section>
  );
}
