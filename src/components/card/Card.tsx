import type { JSCoreGuide } from '../../shared/docs';
import styles from './card.module.css';

import { type ComponentPropsWithRef } from 'react';

type CardProps = {
  data: JSCoreGuide;
} & ComponentPropsWithRef<'article'>;

export const Card = ({ data }: CardProps) => {
  return (
    <article className={styles.card}>
        <header className={styles['card-header']}>
            <div className={styles['card-title']}>
                <h3>{data.name}</h3>
            </div>
            <div className="">
                <p>{data.categoryName}</p>
            </div>
        </header>
        <div className="">
            <div className="">
            <p>{data.description}</p>
            </div>
            <div className="">
                <pre>{data.codeExample}</pre>
            </div>
        </div>
        <footer>
            <div className="">
                {data.howToDefine}
            </div>
        </footer>
    </article>
  );
};
