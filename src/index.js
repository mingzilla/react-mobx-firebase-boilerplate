import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './component/app';
import {store} from './store/store';

render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./component/app', () => {
    const NextApp = require('./component/app').default;

    render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        document.getElementById('root')
    );
  });
}
