import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import { connect } from 'react-redux'
import { ModalStack }  from './redux/reducers/index'

class App extends React.Component {
  render() {
    return (
      <ModalStack navigation={
        addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })
      } />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps)(App)
