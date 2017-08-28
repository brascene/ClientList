import React from 'react';
import { AppRegistry } from 'react-native'
import { Provider} from 'react-redux'

import store from './redux/store'
import App from './App'

class MainApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ClientList', () => MainApp);
