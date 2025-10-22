import { createInertiaApp } from '@inertiajs/react';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { InertiaProgress } from '@inertiajs/progress';

import axios from 'axios';

import '../css/index.css';

document.addEventListener('DOMContentLoaded', () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

  InertiaProgress.init({ showSpinner: true });

  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
      return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
      const root = createRoot(el);
      root.render(createElement(App, props));
    },
  });
});
