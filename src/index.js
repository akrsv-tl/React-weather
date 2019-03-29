import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

ReactDOM.render(<App />, app);

serviceWorker.unregister();
