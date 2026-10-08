import type { JSCoreGuide } from '../../shared/docs';
import styles from './card.module.css';

import { type ComponentPropsWithRef } from 'react';

type CardProps = {
  data: JSCoreGuide;
} & ComponentPropsWithRef<'article'>;

export const Card = ({ data }: CardProps) => {
  const commentDefine = data.howToDefine.split('//');

  return (
    <article className={styles.card}>
      <header className={styles['card-header']}>
        <div className={styles['card-title']}>
          <h3>{data.name}</h3>
        </div>
        <div className={styles['card-category']}>
          <p># {data.categoryName}</p>
        </div>
      </header>
      <div className={styles['card-content']}>
        <div className={styles['card-description']}>
          <p>{data.description}</p>
          <p>{data.accessData}</p>
        </div>
        <div className={styles['card-code']}>
          <pre>{data.codeExample}</pre>
        </div>
      </div>
      <footer className={styles['card-footer']}>
        <p>
          {commentDefine[0]} <span>// {commentDefine[1]}</span>
        </p>
      </footer>
    </article>
  );
};
