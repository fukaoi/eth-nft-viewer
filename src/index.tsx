import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Pages from './components/pages';


ReactDOM.render(<Pages />, document.getElementById('root'));

serviceWorker.unregister();
