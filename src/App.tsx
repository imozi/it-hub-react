import './assets/styles.css';
import { Card } from './components';

import { jsCoreGuideData } from './shared/docs';

export const App = () => {
  return (
    <div className="">
      <h1>Hello from React!</h1>
      <Card data={jsCoreGuideData[0]} />
    </div>
  );
};
