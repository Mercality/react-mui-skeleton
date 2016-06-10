import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './Routes.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Routes />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('reactContainer')
);
