import { useState } from 'react';
import { Card } from '../../components';
import { jsCoreGuideData } from '../../shared/docs';
import type { GuideCategory, GuideCategoryName } from '../../shared/types';
import styles from './card-list.module.css';

type Statistic = {
  value: GuideCategory;
  label: GuideCategoryName;
  count: number;
};

const statistic: Record<GuideCategory, Statistic> = {
  primitives: {
    value: 'primitives',
    label: 'Примитивные типы',
    count: 0,
  },
  'complex-types': {
    value: 'complex-types',
    label: 'Сложные типы данных',
    count: 0,
  },
  logic: {
    value: 'logic',
    label: 'Управляющие конструкции и логика',
    count: 0,
  },
  'react-essential': {
    value: 'react-essential',
    label: 'Критично для React',
    count: 0,
  },
};

jsCoreGuideData.forEach((item) => {
  if (item.category === 'primitives') {
    statistic.primitives.count += 1;
  }

  if (item.category === 'complex-types') {
    statistic['complex-types'].count += 1;
  }

  if (item.category === 'logic') {
    statistic.logic.count += 1;
  }

  if (item.category === 'react-essential') {
    statistic['react-essential'].count += 1;
  }
});

export const CardList = () => {
  const [selectedCategory, setCategory] = useState('');

  const onClickCategory = (category: GuideCategory) => {
    setCategory(category);
  };

  return (
    <section className={styles['card-list']}>
      <header className={styles['card-header']}>
        <h2>js core</h2>
        {selectedCategory}
        <div className={styles['card-header-row']}>
          <button
            className={styles['card-header-item']}
            onClick={() => onClickCategory(statistic.primitives.value)}
          >
            <p>{statistic.primitives.label}</p>
            <span>({statistic.primitives.count})</span>
          </button>
          <button
            className={styles['card-header-item']}
            onClick={() => onClickCategory(statistic['complex-types'].value)}
          >
            <p>{statistic['complex-types'].label}</p>
            <span>({statistic['complex-types'].count})</span>
          </button>
          <button
            className={styles['card-header-item']}
            onClick={() => onClickCategory(statistic.logic.value)}
          >
            <p>{statistic.logic.label}</p>
            <span>({statistic.logic.count})</span>
          </button>
          <button
            className={styles['card-header-item']}
            onClick={() => onClickCategory(statistic['react-essential'].value)}
          >
            <p>{statistic['react-essential'].label}</p>
            <span>({statistic['react-essential'].count})</span>
          </button>
        </div>
      </header>
      <div className={styles['card-content']}>
        {jsCoreGuideData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
