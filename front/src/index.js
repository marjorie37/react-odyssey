import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

import registerServiceWorker from './registerServiceWorker';

const myTheme = createMuiTheme(theme)

ReactDOM.render(<MuiThemeProvider theme={myTheme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
