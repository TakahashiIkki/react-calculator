import React from 'react';
import ReactDOM from 'react-dom/client';
import { Top } from './components/pages/Top';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>,
);
