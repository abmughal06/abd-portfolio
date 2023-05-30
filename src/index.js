import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <section className="bg-background text-text font-mono p-1">
      <App />
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);