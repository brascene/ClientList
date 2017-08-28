import React from 'react';
import { StyleSheet, TextInput, View, Text, FlatList, Button } from 'react-native';
import { editProfile } from '../redux/actions/profileActions'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

class ClientProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      color: ''
    }
  }
  saveNewdata(data) {
    console.log("Save this")
    this.props.editProfile(data)
    this.props.navigation.dispatch(resetAction)
  }
  componentDidMount() {
    this.setState({
      name: this.props.navigation.state.params.client.name,
      color: this.props.navigation.state.params.client.color
    })
  }
  render() {
    let currentClient = this.props.navigation.state.params.client
    return (
      <View style={styles.container}>

      <View style={{flexDirection:'column', width: 200}}>
      <Text>Name</Text>
        <TextInput
        onChangeText={(name) => this.setState({name})}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.name}
         />
      </View>

      <View style={{flexDirection:'column', width: 200}}>
      <Text>Color</Text>
        <TextInput
        onChangeText={(color) => this.setState({color})}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.color}
         />
      </View>

      <View>
        <Button
          onPress={() => this.saveNewdata({
            id: currentClient.id,
            name: this.state.name,
            color: this.state.color
          })}
          title="Confirm"
          color="#841584"
          />
      </View>

      </View>
    );
  }
}

export default connect(null, { editProfile })(ClientProfile)

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems:'center'
  },
});
